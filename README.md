# What is it?
A little project to mock a web api

# why has been built?
In a day I have needed to mock a web api to test a frontend application.
To solve this this projects has been created.

# How to use?

## Create the mock
You can create a mock using json, javascript or typescript files.
Create a archive using how example the `/examples` files.

### Argument structure
The argument structure of this project is:<br>
```
yarn start <file-to-mock> <mock-key>
```
The `mock-key` is the mock key of exported object.
In archive `/examples/typescript-example.ts` the module is exported as default.
So in this case you will execute the command with `default` word in the `<mock-key>` place.
Example: <br>
```
yarn start examples/typescript-example.ts default
```

#### Javascript mocks
To use the mocks with javascript file export it using `module.exports` statement.
See a example in `/examples/javascript-example.js`.
In this case execute in command line into the root project repository this command:<br>
```
yarn start examples/javascript-example.js
```

#### Typescript mocks
To use the mocks with typescript file export it using `export` statement.
See a example in `/examples/typescript-example.ts`.
In this case execute in command line into the root project repository this command:<br>
```
yarn start examples/typescript-example.ts default
```

#### JSON mocks
To use mocks with JSON file only create the JSON file how the example in `/examples/json-example.json`.
In this case execute in command line into the root project repository this command:<br>
```
yarn start examples/json-example.json
```