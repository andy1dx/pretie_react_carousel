## Configuration
・node => v16.5.0
・npm => 7.24.1

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run deploy`

Build abd deploy to github pages.
https://andy1dx.github.io/pretie_react_carouse

## Folder Structure
.
├── public
├── src
│   ├── component
│   │   ├── common // Component that can be used in many place
│   │   └── home // component only for home page
│   ├── css // Css folder for global
│   ├── enums
│   │   ├── commonConst.ts // commons enums data
│   │   └── RouterPathEnum.ts // enums for route
│   ├── interface // Interface that will be use in many place
│   │   └── BannersRestClientInterface.ts // Interface to handle Banner API data
│   ├── lib
│   │   └── restClient.ts // API request library
│   ├── pages // pages for each router
│   ├── App.tsx
│   └── App.test.tsx
├── package.json
├── tsconfig.json
└── README.md

## Dependency Use
・axios => 0.25.0
・react-router-dom => 5.2.1
・react-swipeable => 5.2.1