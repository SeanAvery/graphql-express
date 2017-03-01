var { graphql, buildSchema } = require('graphql');

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    hello: String
  }
`);

// The root provides a resolver function for each API endpoint
var root = {
  hello: () => {
    return 'Hello World!';
  },
};

// Run the Graphql query '{Hello}' and print out the response
graphql(schema, '{ hello }', root).then((response) => {
  console.log(response);
});
