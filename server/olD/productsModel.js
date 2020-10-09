

const products = db.define('products', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: Sequelize.STRING,
    description: Sequelize.TEXT,
    price: Sequelize.INTEGER
})

async function getAll() {
    await products.sync();
    let data = await products.findAll();
    console.log('GETTING ALL (OK)')
    return data
}

async function getById(id) {
    await products.sync();
    let data = await products.findAll({where: {id: id }});
    console.log('GETTING BY ID (OK)')
    return data
}

async function create(name, description, price) {
    await products.sync();
    await products.create({
        name: name,
        description: description,
        price: price
    });
    console.log('ADDED (OK)')
}

module.exports = { getAll, create};
