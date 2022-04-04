const { ApolloServer, gql } = require("apollo-server");

// Scalar types => String, Boolean, Int, Float, ID
// if we just use Scalar type then it could be a String or null , so null does not give Error {hello : () => null}
// if we use Scalar type then we have to use nullable

const typeDefs = gql`
    type Query {
        # String is the type of the return value is called scalar type
        hello: String!
        numberOfAnimals : Int!
        price : Float!
        isCool: Boolean!
        # hello: [String]
        # hello: [String]!
        hii: [String!]!

    }
`;
const resolvers = {
    Query: {
        hello: () => null,
        numberOfAnimals: () => 55,
        price: () => 5.5,
        isCool: () => true,
        hii: () => ["Hello", "World"]

    }
}
const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});