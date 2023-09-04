# QA Assessment

For the QA assessment you will perform some basic manual and automated testing tests on basic swag store website.

## Manual testing

Please prepare test cases for the following tasks:

- Logging in to the store.
- Ordering the items descending order.
- Adding the most expensive and least expensive items to your cart.

Elaborate on these tests cases as much as you think would be needed.

Submit: A link to the test cases in a Google Sheet or Google Docs file. Please share the document with victoria@openvantage.co.za

## Automated testing

Create automated tests for the three test cases you developed in the previous section. You can use any automated testing framework of your choice. Please add any additional detail that you think I would need to access and execute the tests.

The demo application is configured for Cypress, but you can use any alternative testing framework.

To complete this task, please do the following:

- clone the repo
- create the automated tasks
- create a PR with your test to the original repository

Submit: Create a PR to this application

# Running the application

## Requirements

At a minimum, you will require the following applications:

- Git (https://git-scm.com/)
- Node (https://nodejs.org/en)
- VS Code (https://code.visualstudio.com/) or any alternative IDE

## Install

Requires Node v16+

```
$ node -v
v16.17.0
$ npm install
```

You will most probably get a number of warnings, you can ignore them.

## Run

To start the application if you are using Node v16 use `npm start` command. If you are using Node v17+ use `npm run start-18` command (because of this [SSL error](https://stackoverflow.com/questions/69692842/error-message-error0308010cdigital-envelope-routinesunsupported)).

In both cases, it should print

```
Compiled successfully!

You can now view taste-the-sauce in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://10.0.0.188:3000

Note that the development build is not optimized.
To create a production build, use npm run build.
```

Open the browser and point at `localhost:3000`, you should see the login page.

# Questions
If you have any questions, please feel free to reach out to me (victoria@openvantage.co.za). 



The original web application was forked from [saucelabs/sample-app-web](https://github.com/saucelabs/sample-app-web) repo.
