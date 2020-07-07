# Wheat union

A Code challenged proposed by [Grape Alliance](https://grapealliance.com/). Powered by
[Create React App](https://create-react-app.dev/docs/getting-started/) and made pretty thanks to
[Material-ui](https://material-ui.com/)

## Running the application

To get started:

```shell
npm install
npm run start:api
npm run start
```

## Project decisions

I decided to focus on providing you with a sample of my skills as a React developer as such, I have
opted to completely mock the server of this application. I've focused a lot on providing an "almost"
production ready feel to the application, including both a mobile friendly and a Desktop design.

The above decision also means the application can only be enjoyed in development mode since there is
no infrastructure to supply the production build API calls.

One the application requirements was the ability to filter through users. This is very conductive
to a "table with filters" design which I particularly don't like. I opted to shift this concept and
use a more modern approach of using a minimalist preview of user data, and an omnisearch
functionality to filter through users. The implementation of this is rather naive, but serves as a
proof of concept of how to achieve the desired functionality with a more pleasent UX and
significantly less code.

For reference, the total amount of time spent on this project was around 14-16h.

### What would the next steps be

Al tough the application features some test cases, these are clearly insufficient. Most critically
the form section of the document needs to have several test cases written simulating different
combinations of user input to make sure all of them are accepted or rejected accordingly.

The application flow is also less than ideal, there is no "back" button for mobile users, and the
transition between completing the form and returning to a user profile is too violent for a good
user experience.

Adding a simple node.js server instead of json server would allow us to be actually able to bundle
this application in a docker image and deploy it somewhere.

There is no fallback for missed API calls. If the API is down the user will simply not see anything.
An error boundary should be designed and included in the application to show this kind of information
to the user

## Technical Decisions

### React

React is in my opinion the strongest UI framework as it stands. It is also the most suited for small
Proofs of Concepts since it is very fast to prototype with React and the framework has a very small
amount of boilerplate. It is also the easiest framework to refactor your code from one component
into many, from a component to a hook, etc...

React is also the most popular UI framework right now, which makes it very easy to find companion
libraries to all our needs without having to reinvent the wheel every step of the way

### Create React App

Create React App provides out of the box a development environment with hot-reloading and a build
pipeline that concludes with a static bundle that can be served from any application. CRA is the
most suitable way to design a React application in pretty much any scenario except if you are
writing your server side code in NodeJS, in which case you probably want to share code between
your webapp and your server (For example, the code used to validate user form data).

### Typescript

I choose to use Typescript over vanilla Javascript since it allows me to skip a lot of the "dumb"
unit tests that are required to feel confident your code will even compile. This accelerates my
development time significantly. Furthermore, `React` and it's ecosystem seem to have adopted
Typescript quite well, and most libraries have types available. The only notable exception is the
`MuiPhoneNumber` component for which I had to go find Props in some forsaken github project.

### JSON-Server

Instead of using the `jsonplaceholder` api directly I've configured a json server that serves the
same data. This takes care of all the necessary infrastructure to get, add, and update users.

### Material-ui

I chose material design to carry the wheight of how my application looks and feels. This is the
component framework I'm most familiar with and has a superb API and very strong theming capacity.
Other alternatives would be `antd`, which features significantly more components out of the box but
lacks the same powerful theming options, or `fluentd` which from a technical point of view is very
similar to material.

The biggest downside of material in my opinion is how google-ish our application ends up looking.
This is specially true for the Form portion of our document. However, it is possible for us to
redesign how our app looks by heavily modifying the theme without changing any of our application
code.

### Axios and useAxios

`Axios` is the most used REST client for the web. `useAxios` is a wrapper for `axios` that allows for
a better integration with react hooks. I'd like to not that for more complex projects I'd prefer to
use a more modern solution such as `useSWR` to take care of fetching and persisting API calls.

### Formik and Yup

`Formik` and `Yup` are used in combination to provide form management and validation. They are both
extremely light weight and with a very small learning curve. A companion library, `formik-material-ui`
was used to provide us with `Formik` binding to material components. Some of the components I designed.
specially the `LocationField` component don't have these binding available, and to make this one work
I had to use the low-level `Formik` APIs directly.

### Leaflet an OpenStreetMaps

The provided user data includes GPS coordinates and an address location. These 2 are almost redundant
so I wanted to make sure they were always in Sync. For this reason I decided to use a Map to show
both the user location in the world, as well as a picker. This was implemented using `leaflet` and
`openStreeMaps`. Leaflet is Open source, the OpenStreeMaps API however has a very limited rating
which is not suited for production environments.

## Code sturcture

There are two main kinds of React Components in this application. `components` are components that
are unaware of the application state. They are designed to be reusable, easily unit testable, and to
be as much as possible unaware of business logic. `views` bring together multiple components and
add business Logic, Api calls, etc.. to bring the application to life. In a `Redux` application,
`views` would be the stage where you interact with your store, but given the simplicity of this app
there is no such layer here.


## What else to look for?

The git history has been curated to make sure you can follow my development progress. Most of my
commits deliver some sort of working state of my application. Feel free to check them out:

```sh
git log --oneline
```
