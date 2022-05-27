# Some-feature-app

A feature as a federated module to be imported by the app-core

# Docker

build:
`sudo docker build --file=docker/Dockerfile --tag=some-feature-app:1.0.0 .`

run:
`sudo docker run -d --name some-feature-app -e PORT=3001 -p 3001:3001 some-feature-app:1.0.0`