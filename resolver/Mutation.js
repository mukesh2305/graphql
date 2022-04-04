const { v4: uuid } = require('uuid');
exports.Mutation = {
    addCategory: (parent, args, context) => {
        const { input: { name } } = args;
        const { category } = context;
        const newCategory = {
            id: uuid(),
            name
        }
        category.push(newCategory);
        return newCategory;
    }
}