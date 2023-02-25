# Jobify

#### Track Your Job Search

Project in Action - [Jobify](https://www.jobify.live/)

#### Support

Find the App Useful? [You can always buy me a coffee](https://www.buymeacoffee.com/johnsmilga)

#### Run The App Locally

```sh
npm run install-dependencies
```

- rename .env.temp to .env
- setup values for - MONGO_URL, JWT_SECRET, JWT_LIFETIME

```sh
npm start
```

- visit url http://localhost:3000/

#### Setup React App

-create 'client' folder
-open terminal
-cd client
-npx create-react-app .
-npm start
-set editor/browser side by side
-copy/paste assets from complete project

#### Spring Cleaning

- in src remove
-App.cs
-App.test.js
-logo.svg
-reportWebVitals.js
-setupTests.js
-fix App.js and index.js

#### Title and Favicon
-change title in public/index.html
-replace favicon.ico in public
-resource (favicons) [https://favicon.io/]


#### Normalize.css and Global Styles
- CSS in JS
-saves times on the setup
-less lines of css
-speeds up the development 
-normalize.css
-small CSS file that provides cross-browser consistency in the default styling of HTML elements.
-(normalize) [https://necolas.github.io/normalize.css/]
-npm install normalize.css
-import 'normalize.css' in index.js
-SET BEFORE 'index.css'
-if any questions about normalize or specific styles
-Coding Addict (Default Starter) [https://youtu.be//UDdyGNlQK5w]
-Repo (Default Starter) [https://github.com/john-smilga/default-starter]

#### Landing Page

-zoom level 175%
-markdown preview extensions
-get something on the screen
-react router and styled components right after
-create pages directory in the source
-for now Landing.js
-create component (snippets extensions)
-setup basic return

```js
<h4>Landing Page <h4>
```

-import logo.svg and main.svg
-import Landing in App.js and render

#### Styled Components
-CSS in JS
-Styled Components
-have logic and styles in components
-no name collsions
-apply javascript logic
-Styled Components Docs
-Styled Components Course

```js
<h4>npm install --save styled-components<h4>

<h4>import styled from 'styled-components'
const El = styled.el'
//styles go here<h4>

-no name collisons, since unique class
-vscode-styled-components extension
-colors and bugs
-style entire react component 

<h4>const Wrapper =styled.el''

const Component = () => {
    return (
        <Wrapper>
        <h1> Component<h1>
        </Wrapper>I'm baby vHS tacos affogato live-edge freegan. Gentrify sustainable asymmetrical, franzen bruh man braid pitchfork. Activated charcoal meh gastropub, master cleanse squid microdosing man bun sriracha synth ethical neutra flexitarian flannel
    )
}

only responsible for styling
-wrappers folder in assets

#### Logo and Images
-logo built in Figma
-Cool images

#### Logo
-create components folder in source
-create Logo.js
-move import and image logic
-export as default
-utilize index.js

React Router
Version 6
React Router Docs
npm install history@5 react-router-dom@6
import four components
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
Connect to browser's URL with BrowserRouter
Routes instead of Switch
<BrowserRouter>
    <Routes>
      <Route path="/" element={<div>Dashboard</div>} />
      <Route path="/register" element={<div>Register</div>} />
      <Route path="/landing" element={<Landing />} />
      <Route path="*" element={<div>Error</div>}>
    </Routes>
</BrowserRouter>
<nav>
  <Link to='/'>Dashboard</Link>
  <Link to='/register'>Register</Link>
  <Link to='/landing'>Home</Link>
</nav>
go to Landing.js
import { Link } from 'react-router-dom';

return (
  <Link to='/register' className='btn btn-hero'>
    Login / Register
  </Link>
);

####React Router
-Version 6
-React Router Docs
npm install history@5 react-router-dom@6
import four components
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
Connect to browser's URL with BrowserRouter
Routes instead of Switch
<BrowserRouter>
    <Routes>
      <Route path="/" element={<div>Dashboard</div>} />
      <Route path="/register" element={<div>Register</div>} />
      <Route path="/landing" element={<Landing />} />
      <Route path="*" element={<div>Error</div>}>
    </Routes>
</BrowserRouter>
<nav>
  <Link to='/'>Dashboard</Link>
  <Link to='/register'>Register</Link>
  <Link to='/landing'>Home</Link>
</nav>
go to Landing.js
import { Link } from 'react-router-dom';

return (
  <Link to='/register' className='btn btn-hero'>
    Login / Register
  </Link>
);


####Setup Pages
-create Error, Register, Dashboard pages
-basic return
-create index.js
-import all the pages
-export one by one
-basically the same, as in components
-import App.js
-add to element={}
-remove temp navbar

