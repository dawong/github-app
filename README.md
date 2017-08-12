# Shipt Coding Challenge

The challenge involved creating a service that uses GitHub's API to get user information and display it on a webpage.

## Tech Stack
For this task, I chose to use angularjs to develop this service. I chose this framework because it has the features I need to build this service, specifically an $http service and dynamic features that work well for single page applications.

In order to get the code "production ready", I used a combination of npm, yeoman, grunt, and bower tools. [Npm][npm] being the package manager, [Yeoman][yeoman] a scaffolding tool, [Grunt][grunt] the task runner, and [Bower][bower] for front end packages. I have dealt with some of these tools in the past and this seems to be the norm for creating production builds nowadays.

I have had experience using these tools in the past, but only running them. I have never had to configure or install the tools before, so a lot of my time was spent trying to figure that out. I put more emphasis on the frontend design and functionality since that is where most of my experience is in.

## Code
I used a scaffolding tool to start up this app, so most of the codebase is boilerplate. The main files that were written/edited by me were:

* ../app/index.html
* ../app/scripts/controllers/main.js
* ../app/scripts/services/userService.js
* ../app/styles/main.css
* ../app/views/main.html
* ../test/spec/controllers/main.js (incomplete)

My experience with unit tests is very limited. I have only had to run them, and never had much experience writing them. Therefore, I was unable to learn how to configure and write unit tests in time. The "incomplete" file above is just a template for the behavior that I would have tested for if I had more time.

## Setup
To set up the dependencies:

```
npm install
```


Start up the application:
```
grunt serve
```
The page can be accessed at: localhost:9000


To run unit tests:
```
grunt test
```


To get production build ready:
```
grunt build
```
This step should create a "dist" folder where all the code is minified and ready for production. You only need to include this folder for production builds.


## Demo
You can find a live demo here: https://dawong.github.io/shipt/

[npm]: https://www.npmjs.com/
[yeoman]: http://yeoman.io/
[grunt]: https://gruntjs.com/
[bower]: http://bower.io/
