const CategoryService = require('../services/categoryService')
const CategoryDTO = require('../models/mongo.model/dto/categoryDTO')

module.exports = class CategoryController{
    constructor(){
        this.categoryService = new CategoryService() 
    }
    create = async (req, res) => {
        const category = CategoryDTO.create(req.body)
        const data = await this.categoryService.create(category)
        return res.json(data)
    }

    categoryById = async (req, res, next, id) => {
        const category = await this.categoryService.read(id)
        req.category = category
        next()
    }

    read = (req,res) => {
        return res.json(req.category)
    }
    
    update = async (req, res) => {
        const category = req.category
        if(category){
            category.name = req.body.name
            const data = await this.categoryService.update(category)
            res.json(data)
        }else{
            res.json({error: 'Category not found'})
        }
    }

    remove = async (req, res) => {
        const category = req.category
        if(category){
            await this.categoryService.delete(category)
            res.json({msg: 'Category deleted'})
        }else{
            res.json({error: 'Category not found'})
        }
    }

    list = async (req, res) => {
        const data = await this.categoryService.list()
        res.json(data)
    }
}