# Setting up

mkdir and cd
for package.json
```
npm init 
```
```
npm install
npm install express
```
to extract json content from incoming requests
```
npm install body-parser 
```
to automatically update server
```
npm install --sav-dev nodemon 
```
can be used as middleware to automatically connects schema and resolvers 
```
npm install express-graphql 
```
needed to define schemas and convert them to json
```
npm install graphql 
```
create app.js file
import dependencies
```
const express = required('express');
const bodyParser = require('body-parser);
const graphqlHttp = require('express-graphql);
const { buildSchema }= require('graphql') 
```
```
const app = express();
```
```
app.use(bodyParser.json()); needed to parse incoming json bodies
```
```
app.listen(3000); port to listen to
```
enter package.json and add start:nodemon.js to your scripts
this will cause the server to automatically update without needing to reset. works on npm start.

# Graphql Format
allows testing of your api
```
app.use('/graphql', graphqlHttp({
```
points at a graphql schema. ` to write multi-line strings. define root commands of query and mutation.
  ```
  schema: buildSchema{`
    type RootQuery {

    }
    type RootMutation {
      
    }
    
    schema {
      query:
      mutation:
    }
  `},
  ```
points at resolver functions
  ```
  rootValue: {}
}))  
```
# Types


# Resolvers

# Hooking up to a Database