const express = require('express');
const bodyParser = require('body-parser');
const graphqlHttp = require('express-graphql'); //imports middleware function
const { buildSchema } = require('graphql');

const app = express();

const events = [];

app.use(bodyParser.json());

//required to use graphql
app.use('/graphql',
  graphqlHttp({
  	schema: buildSchema(`
      type Event {
				_id: ID!
				title: String!
				description: String!
				price: Float!
				date: String!
			} 

			input EventInput {
				title: String!
				description: String!
				price: Float!
				date: String!
			}

  		type RootQuery {
    		events: [Event!]!
  		}

  		type RootMutation{
    		createEvent(eventInput: EventInput): Event
  		}
    
  		schema {
    		query: RootQuery
    		mutation: RootMutation
  		}
  	`),
    //resolvers below. need to match with types
    rootValue: {
      events: () => {
        return events;
      },
      createEvent: (args) => {
        const event = {
					_id: Math.random().toString(),
					title: args.eventInput.title,
					description: args.eventInput.description,
					price: +args.eventInput.price,
					date: args.eventInput.date,
				}
				events.push(event);
				return event;
			}
    },
  graphiql: true //UI to test API under /graphql
	})
);

app.listen(3000);