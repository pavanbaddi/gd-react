# Godaddy React Application for Listing Repositories

## Requirements
1. Min Node Js version V16.15.0
2. Check if /bin/bash: node is installed, On windows use bash terminal to install, run and test project.

## Installation
- unzip the file
- go inside the directory, open terminal
- run command `npm install` to install libraries
- use command `npm start` to run the project
- use command to run tests `npm test`


## Description
Apart from the libraries which come with react js I have additionally added `react-router-dom` for navigation across different pages.

And for test cases, I have used `@testing-library` which comes 
with react js.

## Test cases

Provided 2 testcases to verify data is getting populated. All testcases are in `App.test.js` file.

1 TestCase: Renders Home screen and checks if repositories are listed

2.TestCase: Renders Details screen and checks if data is loaded.

## Project Structure
- public
- src
    - Components
        -   RepoCard.js
    - Contexts
        - RepoContext.js
    - Lib
        - Api.js
        - Routesjs
    - Pages
        - Details.js
        - Home.js
    - Styles
        - Style.module.css
    - App.test.js => This has all the test cases
    - index.js

- .env: Contain environment variables