// const { } = require("./schema");
// const { products } = require("../db.js");

exports.Category = {
    products: (parent, args, context) => {
        const { filter } = args;
        const { products, reviews } = context;
        // console.log(products)
        // console.log(parent);
        const { id } = parent;
        let filterCategoryProducts = products.filter(product => product.catogoryId === id);

        if (filter) {
            const { onSale, avgRating } = filter;
            if (onSale === true) {
                // return filter products when onSale = true
                filterCategoryProducts = filterCategoryProducts.filter(product => product.onSale)
                // console.log(filterCategoryProduct)
                // return CategoryProduct;
            }

            if ([1, 2, 3, 4, 5].includes(avgRating)) {
                // return filter products when avgRating = avgRating
                filterCategoryProducts = filterCategoryProducts.filter(product => {
                    let sumRating = 0;
                    let numberOfReviews = 0;
                    reviews.forEach(review => {
                        if (review.productId === product.id) {
                            sumRating += review.rating;
                            numberOfReviews++;
                        }
                    })
                    const avgProductRating = sumRating / numberOfReviews;
                    return avgProductRating >= avgRating;
                })
                // return filterCategoryProduct;
            }

        }
        return filterCategoryProducts;
    }
}
