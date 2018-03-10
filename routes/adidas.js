const express = require('express');
const router = express.Router();

const queries2 = require('../queries2')

router.get("/", (request, response, next) => {
  queries2.list().then(adidas => {
    response.json({adidas});
  }).catch(next);
});
router.get("/:id", (request, response, next) => {
  queries2.read(request.params.id).then(adidas => {
    adidas
      ? response.json({adidas})
      : response.status(404).json({message: 'Not found'})
  }).catch(next);
});
router.post("/", (request, response, next) => {
  queries2.create(request.body).then(adidas => {
    response.status(201).json({adidas});
  }).catch(next);
});
router.delete("/:id", (request, response, next) => {
  queries2.delete(request.params.id).then(() => {
    response.status(204).json({deleted: true});
  }).catch(next);
});
router.put("/:id", (request, response, next) => {
  queries2.update(request.params.id, request.body).then(adidas => {
    response.json({adidas});
  }).catch(next);
});

module.exports = router;
