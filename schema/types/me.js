const {
    GraphQLObjectType, 
    GraphQLID, 
    GraphQLNonNull, 
    GraphQLString,
    GraphQLList
} = require('graphql');

const ContestType = require('./contest');
const pgdb = require('../../database/pgdb');

module.exports = new GraphQLObjectType({
    name: 'MeType',

    fields: {
        id: { type: GraphQLID },
        email: { type: new GraphQLNonNull(GraphQLString)},
        firstName: { type: GraphQLString },
        lastName: { type: GraphQLString },
        fullName: { 
            type: GraphQLString,
            resolve: obj => `${obj.firstName} ${obj.lastName}`
        },
        createdAt: { type: GraphQLString },
        contests: {
            type: new GraphQLList(ContestType),
            resolve: (obj, args, { pgPool }) => {
                return pgdb(pgPool).getContests(obj);
            }
        }
    }
})