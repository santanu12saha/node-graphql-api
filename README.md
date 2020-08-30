# node-graphql-api

The repository help us to understand the advance level of node graphql api with express (express-graphql) implementation with query caching and batching with mongo and postgress database. (query, mutation, dataloader library)  

Build a Graphl API which will accept following request data like field, variables, directives, aliases, fragment(interface/union), mutations.

The story of a GraphQL Request:

- [x] Read input from an interface,
- [x] Parse into AST (Abstract Syntax Tree).
- [x] Resolver functions for nodes (return scalar/ object value).
- [x] Resolver functions for children nodes.
- [x] Ask data services.
- [x] Merge data returned from services.
- [x] Send Response.

Following are the request which the api accepts: 

- [x] Query Type
-------------------------------------------------------------------------------

query MyContests ($apikey: String!) {
  me (key: $apikey){
    id
    email
    firstName
    lastName
    fullName
    createdAt
    contests {
      id
      code
      description
      status
      createdAt
      names {
        label
        createdBy {
          fullName
        }
        totalVotes {
          up
          down
        }
      }
    }
    contestsCount
    namesCount
    votesCount
  }
}

-----------------------------------------------------------------------------------

query MyActivities ($apikey: String!) {
  me (key: $apikey){
    id
    email
    activities {
      ... on Contest {
        header: title
      }
      ... on Name {
        header: label
      }
    }
  }
}

---------------------------------------------------------------------------------------

Query - Variable to map apikey variable input:

{
  "apikey": "0344"
}

- [x] Mutations Type

mutation AddNewContest($input: ContestInput!) {
  AddContest(input: $input) {
    id
    code
    title
    description
    status
  }
}

Query - Variable to map ContestInput object input:

{
  "input": {
    "apiKey": "0000",
    "title": "Course about React",
    "description": "An advance course about react"
  }
}

---------------------------------------------------------------------------------------

mutation ProposeName($input: NameInput!) {
  AddName(input: $input) {
    id
    label
    description
    totalVotes {
      up
      down
    }
  }
}

Query - Variable to map NameInput object input:

{
  "input": {
    "apiKey": "4242",
    "contestId": "1",
    "label": "Programming Deep Dive",
    "description": "An deep dive into Programming"
  }
}