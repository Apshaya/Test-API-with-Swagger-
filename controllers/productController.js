let products = [
    { id: 1, name: 'grapne_a' },
    { id: 2, name: 'grapne_b' },
];

const getProducts = (req, res) => {
    res.json(products);
};

const createProduct = (req, res) => {
    const { name } = req.body;
    const newProduct = { id: products.length + 1, name };
    products.push(newProduct);
    res.status(201).json(newProduct);
};

const updateProduct = (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    const product = products.find((p) => p.id === parseInt(id));
    if (product) {
        product.name = name;
        res.json(product);
    } else {
        res.status(404).json({ error: 'Product not found' });
    }
};

const deleteProduct = (req, res) => {
    const { id } = req.params;
    products = products.filter((p) => p.id !== parseInt(id));
    res.status(204).send();
};

module.exports = { getProducts, createProduct, updateProduct, deleteProduct };
