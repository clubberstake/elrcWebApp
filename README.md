# elrcWebApp

## Prerequisites

### Git

<<<<<<< HEAD
document.write("Hello World");
=======
- A good place to learn about setting up git is [here][git-github]
- Git [home][git-home] (download, documentation)

### Node.js and Tools

- Get [Node.js][node-download].
- Install the tool dependencies (`npm install`)


## Workings of the application

- The application filesystem layout structure is based on the [angular-seed] project.
- There is no dynamic backend (no application server) for this application. Instead we fake the
  an application server by fetching static json files.
- Read the Development section at the end to familiarize yourself with running and developing
  an angular application.


The following docs describe how you can test and develop further this application.


### Installing dependencies

The application relies upon various node.js tools, such as Bower, Karma and Protractor.  You can
install these by running:

```
npm install
```

This will also run bower, which will download the angular files needed for the current step of the
tutorial.

Most of the scripts described below will run this automatically but it doesn't do any harm to run
it whenever you like.

### Running the app during development

- Run `npm start`
- navigate your browser to `http://localhost:8000/index.html` to see the app running in your browser.

### Running unit tests

We recommend using [Jasmine][jasmine] and [Karma][karma] for your unit tests/specs, but you are free
to use whatever works for you.

- Start Karma with `npm test`
  - A browser will start and connect to the Karma server. Chrome is the default browser, others can
  be captured by loading the same url as the one in Chrome or by changing the `test/karma.conf.js`
  file.
- Karma will sit and watch your application and test JavaScript files. To run or re-run tests just
  change any of your these files.

## Application Directory Layout

    app/                --> all of the files to be used in production
      css/              --> css files       
      js/               --> javascript files
        app.js          --> the main application module
        controllers.js  --> application controllers
        directives.js   --> application directives
        filters.js      --> custom angular filters
        services.js     --> custom angular services
        animations.js   --> hooks for running JQuery animations with ngAnimate
      bower_components  --> 3rd party js libraries, including angular and jquery
    test/               --> test source files and libraries
      karma.conf.js        --> config file for running unit tests with Karma
      unit/             --> unit level specs/tests
	  
[git-home]: http://git-scm.com
[jasmine]: https://jasmine.github.io/
[karma]: http://karma-runner.github.io
>>>>>>> 379537956a2405326461eefde09b18b935c18c5b
