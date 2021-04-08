# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).


# Brightbridge Council Challenge - Front End Development

Brightbridge Council are a new EarthSense customer who have purchased a fleet of Zephyrs (air quality sensors). Your task is to create a React application that allows the council to monitor each of their Zephyrs along with their latest pollution measurements.

### Things to Note

In the utils.ts file, you will find:

1. An array of Brightbridge's Zephyrs, including various pieces of metadata as well as the latest pollution measurements they have taken.
2. A colourscale for the pollution measurements ranging from 1 to 10.

### Things to Do

1. Display the name, type, battery charge, NO₂, and PM₂.₅ measurements for each Zephyr in a list.
2. Order the list so that standard Zephyr types are displayed before enhanced Zephyr types.
3. Some of the Zephyrs listed are no longer owned by Brightbridge Council - remove these from the list.
4. Use the colourscale to display a colour associated with each Zephyr. You should base this color on the highest value between the NO₂ and PM₂.₅ measurements.
5. Add a filter that allows the council to show either: all Zephyrs, standard Zephyrs alone, or enhanced Zephyrs alone.
6. Do pay attention to styles and how you can present the information in a clean, engaging way for the council.

Please provide a copy of your code in a publicly accessible location (e.g. Github, Bitbucket etc) when you're done and send it over to us for review.
