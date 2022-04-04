
// const { categories } = require("../db.js");
exports.Product = {
    category: (parent, args, context) => {
        const { categories } = context;
        // console.log("context", categories);

        const { catogoryId } = parent;
        return categories.find(category => category.id === catogoryId);
    },

    reviews: (parent, args, context) => {
        const { reviews } = context;
        const { id } = parent;
        return reviews.filter(review => review.productId === id);
    }
}