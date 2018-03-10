const express = require('express');
const router = express.Router();

const queries = require('../queries');

router.get("/", (request, response, next) => {
  queries.list().then(nike => {
    response.json({nike});
  }).catch(next);
});
router.get("/:id", (request, response, next) => {
  queries.read(request.params.id).then(nike => {
    nike
      ? response.json({nike})
      : response.status(404).json({message: 'Not found'})
  }).catch(next);
});
router.post("/", (request, response, next) => {
  queries.create(request.body).then(nike => {
    response.status(201).json({nike});
  }).catch(next);
});
router.delete("/:id", (request, response, next) => {
  queries.delete(request.params.id).then(() => {
    response.status(204).json({deleted: true});
  }).catch(next);
});
router.put("/:id", (request, response, next) => {
  queries.update(request.params.id, request.body).then(nike => {
    response.json({nike});
  }).catch(next);
});

module.exports = router;
