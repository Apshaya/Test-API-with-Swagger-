require('dotenv').config();
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const fs = require('fs');
const yaml = require('js-yaml');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware for json 
app.use(express.json());

// Load Swagger YAML
const swaggerDocument = yaml.load(fs.readFileSync('./docs/swagger.yaml', 'utf8'));

// Swagger Middleware
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Routes
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
    console.log(`Swagger docs available at http://localhost:${PORT}/api-docs`);
});
