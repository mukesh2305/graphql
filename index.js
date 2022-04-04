const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./schema");
const { Product } = require("./resolver/Product.js");
const { products, categories, reviews } = require("./db.js");
const { Category } = require("./resolver/Category.js");
const { Query } = require("./resolver/Query.js");
const { Mutation } = require("./resolver/Mutation.js");
// Scalar types => String, Boolean, Int, Float, ID
// if we just use Scalar type then it could be a String or null , so null does not give Error {hello : () => null}
// if we use Scalar type then we have to use nullable


const server = new ApolloServer({
    typeDefs,
    resolvers: {
        Query,
        Category,
        Product,
        Mutation
    },
    context: {
        products,
        categories,
        reviews
    }
});

server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});