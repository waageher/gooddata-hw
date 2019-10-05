# gooddata-js-interview
Frontend Interview

## GoodData Homework

### Introduction

My task was to enhance the application using the [GoodData.UI](https://sdk.gooddata.com/gooddata-ui/).

### Prerequisites

To successfully run the application, you are required to:

* Have `node.js` and `yarn` installed in your development environment.
  * If you do not have these tools installed, you can get them from https://nodejs.org/ and https://yarnpkg.com/ respectively.

### Initialization

1. Run `git clone https://github.com/waageher/gooddata-hw.git`.
2. Run `cd gooddata-hw`.
3. Run `yarn install`.
4. Run `HTTPS=true yarn start` (Linux, macOS), `set HTTPS=true&&npm start` (Windows cmd) or `($env:HTTPS = "true") -and (npm start)` (Wiindows PowerShell).
5. Visit https://localhost:3000/account.html, and log in using your GoodData account credentials.
   - If you do not have a GoodData account yet, [create one](https://gooddata-examples.herokuapp.com/registration).
6. Visit https://localhost:3000/

### Troubleshooting

###### Cloning the repo fails
* If cloning fails, download the repo from https://github.com/waageher/gooddata-hw.

###### Server https://developer.na.gooddata.com/ seems to be down.
* If you decided to look at this homework during the weekend, it is possible GoodData platform may be down for several hours due to maintenance (typically on Saturdays). If https://developer.na.gooddata.com/ is down, try again in an hour or two.

###### Charts do not get loaded.
* Most likely, you are not logged in correctly. Check the Network tab in Google Chrome DevTools. If you see `HTTP 401 ERROR`, visit https://localhost:3000/account.html and log in properly.

---

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
