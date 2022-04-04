const { gql } = require("apollo-server")
exports.typeDefs = gql`
type Query {
    # String is the type of the return value is called scalar type
    # hello: [String]
    # hello: [String]!
    hello: [String!]!
    products(filter : ProductFilterInput): [Product!]!
    product (id: ID!): Product
    categories: [Category!]!
    catogory (id: ID!): Category
}

type Mutation {
    addCategory(input : AddCategoryInput!): Category!
}
type Product {
    id: ID!
    name: String!
    description: String!
    quantity: Int!
    price: Float!
    onSale: Boolean!
    image: String!
    category : Category
    reviews: [Review!]!
}

type Category {
    id: ID!
    name : String!
    products(filter : ProductFilterInput): [Product!]!
}

type Review {
    id: ID!
    date: String!
    title: String!
    comment : String!
    rating: Int!
}

input ProductFilterInput {
    onSale : Boolean
    avgRating : Int
}

input AddCategoryInput {
    name : String!
}
`;