# PTFC (Portland Timbers Football Club)

PTFC is the result from an Epicodus solo project designed to test my ability to create a site using angular 2 with persistent data from Firebas.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

4/7/17

## Prerequisites

You will need the following properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Angular CLI](https://ember-cli.com/)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Planning

  1. Configuration/dependencies
    * Bootstrap: angular-cli.json
    * All other other dependencies are installed by Angular2 and located in angular-cli.json

  2. Project requirements:

    * As a user, I'd like to visit a page to see a LIST of ALL team members
    * As a user, I'd like to CLICK club MEMBER's entry IN THE LIST to visit THEIR PROFILE PAGE, which should include more DETAILS about them.
    * As a user, I'd like the option to VISIT an ABOUT PAGE that explains what the club is, and what they do.
    * As a user, I'd like all data persisted in a DATABASE, so it's always there when I need it.
    * As a user, I'd like to FILTER the LIST of PLAYERS BY their particular ROLE in the group, or some other information/category.
    * As an ADMINISTRATOR, I want to ADD new users to the club. (User authentication is not required).
    * As an ADMINISTRATOR, I want to EDIT user profiles, in case I make a mistake, or need to UPDATE their details.
    * As an ADMINISTRATOR, I need the option to DELETE a user, in case they leave the club or team.



  3. What am I going to need?

    * model for the players and coaches on the portland timbers
    * hook up firebase to store all of the data
    * service to grab the information from the database and inject all the information to the pages that need that info
    * component for displaying all of the timbers players and coaches
    * component for administration to add, update, and delete information from firebase
    * custom pipe for filtering players/coaches by role
    * dynamic routing for each player
    * component for about


  4. How am I going to go about completing this project?

    * create a model
    * get firebase connected
    * create a homepage component
    * create an "admin" component
    * create router
    * link admin on homepage
    * create service to communicate with database
    * inject service to admin
    * create function to add new person to database from admin component
    * create method to grab information from service
    * display information on admin in an ngFor
    * create method for update
    * create method for delete
    * inject service to homepage
    * display all of the players/coaches on homepage
    * dynamically link each player/coach to their own page
    * create a custom pipe to filter by role
    * create an about component

  4. UX/UI
    * Include and modify bootstrap
    * Develop custom style

  5. Polish
    * Refactor minor portion of home.component, member.component
    * Delete unused code
    * Make README awesome

## Technologies Used
  * **HTML**: Hypertext Markup Language, a standardized system for tagging text files to achieve font, color, graphic, and hyperlink effects on World Wide Web pages.
  * **CSS**: The Cascading Style Sheets Specification is a computer language that is used to write formatting instructions.
  * **JavaScipt**: An object-oriented computer programming language commonly used to create interactive effects within web browsers.
  * **Angular2**: Angular2 is a JavaScript framework for creating web applications.
  * **Typescript**: Typescript is a free and open-source programming language developed and maintained by Microsoft. It is a strict superset of JavaScript, and adds optional static typing and class-based object-oriented programming to the language.
  * **npm**: A NodeJS package manager. You can use it to install node programs. Also, if you use it in development, it makes it easier to specify and link dependencies.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
