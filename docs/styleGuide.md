##GENERAL

* Spaces (not tabs)

* Two spaces (not four)

* Single quotes (not double quotes)

##REACT

[Link: React](https://reactjs.org/)

###Components

* components fall into two categories, Presentational and Container components (a.k.a Dumb and Smart components)

* Container components are the interfaces between the application and its views
  
  * Returns a single view elements from its render function
  
  * Uses connect() to communicate with the Redux Store

* Presentational components act as the application's views

    * May return multimple view elements from its render function
    
    * Not connected to the Redux store

    [Link: Presentational and Container Components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)

###Type Safety

* All components wil include PropType evaluation

* Non-Immutable data types will use Immutable prop types

* Immutable data types will use Immutable prop types

* PropTypes keys will be wrapped in single quotes

##REDUX

[Link: Redux](https://redux.js.org/)

###Store

* The store will be kept as flat of a structure as possible. Avoid deep nesting.

###Immutability 

* All values in the application store will be immutable objects

* All incoming values will be cast as Immutable objects

    [Link: Immutability](https://redux.js.org/docs/faq/ImmutableData.html)
    
###Commenting

* We are using JSDoc for document generation

* All ES6 classes and React component methods will be commented according to JSDoc standards

###Code Quality

* We are using Mocha, Sinon, Chai, and Enzyme for testing

    * All relevant files will have an accompanying test file
     
    * A test file will reside in the same directory as the file it is intended to test

* We are using ESLint with the Google and React Plugin for linting


* All code will be tested and linted before being merged with master. No code displayed either ESLint or unit test errors will be pushed to master.
