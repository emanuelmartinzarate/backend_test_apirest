const Category = require('../entities/category')
const errorHandler = require('../../../helpers/dbErrorHandler')


module.exports = class MongoCategoryDAO {

    create = async (categoryDto) => {
        try {
            const category = new Category(categoryDto)
            await category.save()
            return category
        } catch (e) {
            console.log('Error to create Category', e)
        }
    }

    read = async (id) => {
        try{
            const category = await Category.findById(id)
            return category
        } catch (e){
            console.log('Error to get Category', e)
        }
    }

    update = async (category) => {
        try {
            await category.save()
            return category
        } catch (error) {
            console.log('Error to update Category', e)
        }
    }

    delete = async (category) => {
        try {
            await category.remove()
            return category
        } catch (e) {
            console.log('Error to delete Category', e)
        }
    }

    list = async () => {
        try {
            const data = await Category.find()
            return data
        } catch (error) {
            console.log('Error to list Categories')            
        }
    }
}