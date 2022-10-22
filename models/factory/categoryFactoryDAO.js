const MongoCategoryDAO = require ('../mongo.model/dao/categoryDAO')

module.exports = class CategoryFactoryDAO{
    static get(type){
        switch(type.toLowerCase()) {
            case 'mongo': return new MongoCategoryDAO('ecommerce', 'categories')

            default: return new MongoCategoryDAO()
        }
    }
}