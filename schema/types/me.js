const {
    GraphQLObjectType, 
    GraphQLID, 
    GraphQLNonNull, 
    GraphQLString
} = require('graphql');

const { fromSnakeCase } = require('../../lib/util');

module.exports = new GraphQLObjectType({
    name: 'MeType',

    fields: {
        id: { type: GraphQLID },
        email: { type: new GraphQLNonNull(GraphQLString)},
        firstName: fromSnakeCase(GraphQLString),
        lastName: fromSnakeCase(GraphQLString),
        createdAt: fromSnakeCase(GraphQLString)
    }
})