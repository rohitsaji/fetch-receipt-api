export const calculatePoints = (receipt) => {
    let points = 0;
    points += [...receipt.retailer].filter(ch=>/[a-z0-9]/i.test(ch)).length;

    const total = parseFloat(receipt.total);
    if (Number.isInteger(total)) points += 50;
    if (parseFloat(total) % 0.25 === 0) points += 25;

    const numItems = receipt.items.length;
    points += Math.floor(numItems / 2) * 5;
    for (const item of receipt.items) {
        const desc = item.shortDescription.trim();
        if (desc.length % 3 === 0) {
          const itemPoints = Math.ceil(parseFloat(item.price) * 0.2);
          points += itemPoints;
        }
      }

    const day = new Date(receipt.purchaseDate).getDate();
    if (day % 2 === 1) points += 6;

    const [hourStr, minuteStr] = receipt.purchaseTime.split(":");
    const hour = parseInt(hourStr, 10);
    const minute = parseInt(minuteStr, 10);
    const totalMinutes = hour * 60 + minute;
    if (totalMinutes > 840 && totalMinutes < 960) points += 10;
      
    return points;
}