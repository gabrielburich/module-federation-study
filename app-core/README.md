# App-core

Application core that will import the federated modules

# Docker

build:
`sudo docker build --file=docker/Dockerfile --tag=app-core:1.0.0 .`

run:
`sudo docker run -d --name app-core -e PORT=3000 -p 3000:3000 app-core:1.0.0`

