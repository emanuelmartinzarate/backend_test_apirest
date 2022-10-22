const CategoryFactoryDAO = require('../models/factory/categoryFactoryDAO')

module.exports = class CategoryService{
    constructor(){
        this.categoryDAO = CategoryFactoryDAO.get('mongo')
    }

    create = async (category) => {
        return await this.categoryDAO.create(category)
    }

    read = async (id) => {
        return await this.categoryDAO.read(id)
    }

    update = async (category) => {
        return await this.categoryDAO.update(category)
    }

    delete = async (category) => {
        return await this.categoryDAO.delete(category)
    }

    list = async () => {
        return await this.categoryDAO.list()
    }
}