# gateway_test

## Config
Put global configurations in cypress.config.js for easily read, like BROWSER for browser types

## Test Data Management

### Test Data Prepare
Test data used for component operation put in corresponding json files in fixtures folder grouped by component.
Component config data is loaded once in before hook, and stored in "this" context

### Test Data Clean
Test data need to be clean up after test execution to avoid data polution and affect other tests, so data cleaning is required in after hook. 
Considering that repeated “add service” operations will not affect each other, so do one-time cleaning in after hook by rm docker volume

## Script Reuse
### Page Objects
Page objects put in page_objects folder grouped by component. The individual page_object file export a class which wrap its elements and operations, witch could reuse in page level and get better readability and easy maintainence.
All elements are concentrated in the page object, if the page changes, only one place needs to be modified.

### Commands
Add global operations in commands.js like start docker service, some clean works

## Case Management
Test Cases put in folder e2e grouped by components, and cases are separated by functional tests and negative tests for reduce large amount of tests in one file.

Corresponding page objects imported in test cases to easily build test scenarios.

## Screenshots/Videos/Logs
Enable screenshots in cypress config which could capture screenshots automatically when failure occures
Enable videos in cypress config which could store videos automatically when failure occures
Add console.log task in config which could use `cy.task("log", "msg")`


## Docker
Put docker-compse.yml for app start and stop.

## Report
Integrated mochawesome reporter to generate json and html report，which rovides beautiful, interactive and highly customizable HTML reports that clearly display test results, error details and contextual information.

## Local Run
Some scripts for simple local run:
```bash
1. npm run start:app       #start docker container of app
2. npm run test            #for headless run and generate report
3. npm run cy:open         #for debug
4. npm run stop:app        #stop and rm docker container to avoid port conflict
5. npm run generate:report
6. npm run open:report     #open the generated html report
```

## CI/Github Actions
Integrated Github actions to trigger CI process when push code to branch, jobs includes:
1. Checkout code
2. Set up Docker Buildx and Nodejs
3. Install dependencies 
4. Make shell executable(start.sh)
5. Start app via containers
6. Run Cypress tests with ${{ env.BROWSER }}
7. Open Test Reports
