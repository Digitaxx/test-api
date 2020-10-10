const {product, article} = require('../models')

//POST
exports.create = async (req, res) => {
    try {
        await article.sync();
        let item = await article.create({
            product_id: req.body.product_id,
            name: req.body.name,
            content: req.body.content
        });
        res.json(item);
    } catch (e) {
        console.log(e)
        res.sendStatus(500);
    }
}

//GET
exports.getAll = async (req, res) => {
    try {
            res.send(await article.findAll({
                include: [
                    {
                        model: product, as: 'product',
                        required: true
                    }
                ],
                order: [!!req.query.sort]
            }));
    } catch (e) {
        console.error(e)
        res.sendStatus(500);
    }
}

exports.getById = async (req, res) => {
    try {
        await article.sync();
            res.send(await article.findAll({
                where: {id: req.params.id},
                include: [
                    {
                        model: product, as: 'product',
                        required: true
                    }
                ],
                order: [!!req.query.sort]
            }));
    } catch (e) {
        console.error(e)
        res.sendStatus(500);
    }
}

//PUT
exports.updateById = async (req, res) => {
    try {
        await article.update(
            {
                product_id: req.body.product_id,
                name: req.body.name,
                content: req.body.content
            },
            {
                where: {id: req.params.id}
            }
        )
        res.sendStatus(200);
    } catch (e) {
        console.error(e)
        res.sendStatus(500);
    }
}
//DELETE

exports.deleteById = async (req, res) => {
    try {
        await article.destroy({
            where: {
                id: req.params.id
            }
        });
        res.sendStatus(200);
    } catch (e) {
        res.sendStatus(500);
    }
}
