// const { products, categories } = require("../db.js");
exports.Query = {
    hello: () => ["Hello", "World"],
    products: (parent, args, context) => {
        const { filter } = args
        const { products, reviews } = context;
        let filterProducts = products;
        if (filter) {
            const { onSale, avgRating } = filter;
            if (onSale) {
                filterProducts = products.filter(product => product.onSale)
                // return filterProducts;
            }
            if ([1, 2, 3, 4, 5].includes(avgRating)) {
                filterProducts = filterProducts.filter(product => {
                    let sumRating = 0;
                    let numberOfReviews = 0;
                    reviews.forEach(review => {
                        if (review.productId === product.id) {
                            sumRating += review.rating;
                            numberOfReviews++;
                        }
                    })
                    const avgProductRating = sumRating / numberOfReviews;
                    console.log(avgProductRating);
                    return avgProductRating >= avgRating;
                })
            }
        }
        return filterProducts
    },

    product: (parent, args, context) => {
        // return products.find(product => product.id === args.id);
        const { products } = context
        const { id } = args;
        return products.find(product => product.id === id);
        i
    },

    categories: (parent, args, context) => {
        const { categories } = context;
        return categories
    },
    catogory: (parent, args, context) => {
        const { categories } = context;
        return categories.find(category => category.id === args.id);
    }
};