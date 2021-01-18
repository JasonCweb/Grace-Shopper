const Product = require('../db/models/product')
const router = require('express').Router()

module.exports = router

router.param('productId', (req, res, next, id) => {
  Product.findById(id)
    .then(product => {
      if (!product) {
        const err = Error('Product not found');
        err.status = 404;
        throw err;
      }
      req.product = product;
      next();
      return null;
    })
    .catch(next);
});

router.get('/', (req, res, next) => {
  Product.findAll()
    .then(products => {
      res.status(200).json(products)
    })
    .catch(next)
})

router.get('/:productId', (req, res, next) => {
  res.status(200).json(req.product)
})

router.get('/search/:product', (req, res, next) => {
  Product.findOne({
    where: {
      title: req.params.product
    }
  })
    .then(product => {
      res.status(200).json(product)})
    .catch(next);
})

router.post('/', (req, res, next) => {
  console.log(req.body)
  Product.create(req.body)
  .then(createdProduct => {
    res.status(201).json(createdProduct)
  })
  .catch(next)
})

router.put('/:productId', (req, res, next) => {
  req.product.update(req.body)
  .then(affectedArr => {
    if (!affectedArr[0]) res.sendStatus(204);
    else res.sendStatus(200);
  })
  .catch(next)
})

router.delete('/:productId', (req, res, next) => {
  req.product.destroy()
  .then(() => {
    res.sendStatus(204);
  })
  .catch(next);
})
