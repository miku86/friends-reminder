# Friends Reminder

## Problem

I'm an introverted guy and have a lot of hobbies. I love to be alone and do my things. Therefore I often forget to keep in contact with friends and acquantainces. Months later the person comes to my mind and it feels odd to reach out now, months later.

## Solution

I would like to have an app that gives my an overview when I had contact to a person the last time.

1. I make a list of all the people I want to stay in contact with and when I had contacted them the last time.
2. The app shows a sorted list with the last time I had contact to the person.

## Deep Dive

- The sorted list is the core feature.
- I could add a notification, e.g. "You didn't reach out to Alice in the last 30 days.".
- I could add a custom notification time, e.g. default 30 days, grandma 7 days.
- I could add a questionnaire, e.g. "Whom did you contact today?"
- Because reaching out to friends is mostly done on smartphones, this should be a mobile-first app.

---

## Start the app: `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## Test the app: `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Build the app: `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!
