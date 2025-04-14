Steps to run:
1. Build the docker image:
In the terminal, run:

docker build -t receipt-api .

2. Run the docker container

docker run -p 3000:3000 receipt-api

This maps the container's port 3000 to your local machine, so you can access the app at http://localhost:3000
