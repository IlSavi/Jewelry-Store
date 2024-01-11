const uuid = require('uuid')
const path = require('path');
const {Jewelry, JewelryInfo} = require('../models/models');
const ApiError = require('../error/ApiError');

class JewelryController {
    async create(req,res, next) {
        try {
            let {name, price,  materialId, typeId, info} = req.body
        const {img} = req.files
        let fileName = uuid.v4() + ".jpg"
        img.mv(path.resolve(__dirname, '..', 'static', fileName))
        const jewelry = await Jewelry.create({name, price, materialId, typeId, img: fileName});


        if(info) {
            info = JSON.parse(info)
            info.forEach(i =>
                    JewelryInfo.create({
                        title: i.title,
                        description: i.description,
                        jewelryId: jewelry.id
                    })
                )
        }
        
        return res.json(jewelry)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req,res) {
        let {materialId, typeId, limit, page} = req.query
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit
        let jewelries;
        if(!materialId && !typeId) {
            jewelries = await Jewelry.findAndCountAll({limit, offset})
        }
        if(materialId && !typeId) {
            jewelries = await Jewelry.findAndCountAll({where:{materialId}, limit, offset})
        }
        if(!materialId && typeId) {
            jewelries = await Jewelry.findAndCountAll({where:{typeId}, limit, offset})
        }
        if(materialId && typeId) {
            jewelries = await Jewelry.findAndCountAll({where:{materialId,typeId}, limit, offset})
        }
        return res.json(jewelries)
    }

    async getOne(req,res) {
        const {id} = req.params
        const jewelry = await Jewelry.findOne(
            {  
                where:{id},
                include: [{model: JewelryInfo, as: 'info'}]
            },
        )
        return res.json(jewelry)
    }
}

module.exports = new JewelryController()