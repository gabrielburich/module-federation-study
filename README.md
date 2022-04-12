# Module-federation-study

Micro-frontend with Module Federation. In this case I created a core application and other application that will be a 
federated module (yes the entire application). With this solution it's possible to have external modules as micro-frontends.

**Applications**

- [app-core](https://github.com/gabrielburich/module-federation-study/tree/main/app-core) Main app that will import the federated modules
- [some-feature-app](https://github.com/gabrielburich/module-federation-study/tree/main/some-feature-app) A feature as a federated module

**How to run**

Run `yarn start` in each module

**TODO**:

[ ] - Create a production structure with build and docker images
[ ] - What do when a feature federated module is down