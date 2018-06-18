# nuxt2-ssr-on-firebase
Example for hosting a Nuxt.js 2.0 SSR app on Google Firebase Functions.


# Explain! Explain!

I try to give you as much information as possible, but it takes ages to describe every detail.
Let's keep it this way: If you have a question, create an 
[issue](https://github.com/webcore-it/nuxt2-ssr-on-firebase/issues) or ask 
me on [Twitter](https://twitter.com/WebCoreIT). I'll try to answer you and update this readme.


## Basics

The repo contains 3 parts, each with it's own package.json for 3 different tasks:

- root
- src
- functions


### root

Responsible for the Firebase configuration, the CI/CD config (in this case GitLab), 
the management of the other package.json files and all npm commands for development.

- `firebase.json` contains the hosting config and paths to the functions.
- `.firebaserc` contains the names of your Firebase projects.
- `.gitlab-ci.yml` contains the CI/CD config for GitLab.
- `npm-lint.js` runs the command `npm lint` in the folders `src` and `functions`.
- `npm-install.js` runs the command `npm i` in the folders `src` and `functions`.
- `npm-generate-functions-package-json.js` is used to set all needed packages in the `functions/package.json`.


### src

Contains the Nuxt.js app.


### functions

Contains the functions which will be deployed on Firebase Functions. This contains at least one 
function: The `ssrapp` function which is the "Nuxt server".

When there are other backend tasks, there will be more exported functions. In this example there
is `getRedVsBlue`. Both functions are inside `functions/index.js` but could/should be moved to 
separated files.

 
## Local development

1. set your local node version to 6.14.0 (use [n](https://www.npmjs.com/package/n) or [nvm](https://github.com/creationix/nvm))
1. copy the file `src/.env-template` to `src/.env` and set your Firebase variables.
1. set your Firebase project names in `.firebaserc`

My goal is to have the frontend and backend running locally while development. The frontend is 
stated by Nuxt and the backend is started by the `firebase-tools`.  


### Start Nuxt locally

To start the Nuxt app, execute in the root folder:
```$bash
npm run dev
```

It will run this command in the `src` folder: `DEBUG=nuxt:* BUILD_DIR=.nuxt nuxt`
- `DEBUG=nuxt:*` enables more debug output 
- `BUILD_DIR=.nuxt` tells Nuxt to use the folder `src/.nuxt` when running locally

The app is running on `localhost:3000`. But all requests to the backend (in this 
example the call to `http://localhost:5000/api/getRedVsBlue` from the `init` action 
in file `src/store/redVsBlue.js`) will not be handled yet - let's start the Firebase 
Functions!


### Start Firebase Functions locally

To start the Firebase Functions, execute in the root folder:
```$bash
npm run serve
```

This will build the Nuxt app into the folder `functions/.nuxt` and start the Firebase services
`hosting` and `functions`. Now your backend is running on `localhost:5000` and has 
also hot-reloading for changes inside the `functions` folder.


### What URL now?

Just use `localhost:3000`. In the created `.env` file is a setting for the path to the backend. 
For the local development it is `API_BASE_URL=http://localhost:5000/api`. 


## Test SSR app local

Execute in the root folder:
```$bash
npm run serve:build
```

This will build the Nuxt app, copy it to the right places and start Firebase hosting and 
functions on your local machine. Now you should be able to open `localhost:5000` and see
the SSR app.


## Deployment

In this project I tried to have a real world example. There are 3 environments: 
`develop`, `staging` and `production`. Since all the hosting is done by Firebase, only 
the different projects need to be setup on https://console.firebase.google.com/ and 
the project names set in `.firebaserc`. 

The deployment is done by GitLabs CI/CD, so those 3 environments need to be setup in `.gitlab-ci.yml`.

The deployment process is very simple:
- checkout the project
- set the needed env variables
- npm install
- npm run build
- npm run deploy


### Set the needed env variables

By using an CI/CD runner, the env variables needed for the `build` and `deploy` process
can be set in the CI tool. Set all variables from the `src/.env` file for each 
environment as well as `FIREBASE_DEPLOY_KEY` for the deployment (it's the same for all environments).

The env variables used while building the app are copied to the generated Nuxt app. This means there
is no need to provide the Firebase Functions with that variables - they already set.


### npm run build

This task instructs Nuxt to build it's app into the folder `functions/.nuxt`. When done, the content 
of the folder `./functions/.nuxt/dist/` is copied to `./public/assets`. Finally all static assets 
(`./src/static/`) are copied plain in the folder `./public`.   
  
  
### npm run deploy

Deploys the build environment to the corresponding Firebase project.


### Hints
I don't know why, but the first attempt to deploy from GitLab to Firebase on every project 
has failed so far. Just run the job again and it will work for all following deployments. 


## Pain points

My biggest issue is the management of the `./functions/package.json` file. Most of the packages 
from `./src/package.json` are also needed in functions, and I don't want to keep 2 files up to date.
So I copy them.

And I don't know why Firebase Functions is not able to resolve `vue`, `vuex`, `lodash`, ... from 
`./functions/node_modules/nuxt-edge/package.json` - I had not the time to investigate this.

`npm-generate-functions-package-json.js` handles those issue right now, but I'm not happy with that
solution.
