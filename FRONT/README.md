First Proyect with React TypeScript

0. install plugin VsCode "ES7/React/Redux"
1. npx create-react-app front --template typescript
2. npm i react-router-dom
3. npm i --save-dev @types/react-router-dom
4. npm i axios
5. npm i bootswatch
6. import in index.tsx: import { BrowserRouter, Route, Switch} from 'react-router-dom';
7. Create one folder "components" and within two folders "Navbar","Videos"
8. In Videos create two files "VideoList" and "VideoForm", and type rafce and tab and within the div write anything.
9. In folder root, create file .env, and write PORT=4000
10. In VideoList.tsx import axios: import axios from 'axios';



Run the Proyect
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.







### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

