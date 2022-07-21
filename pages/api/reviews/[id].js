import base from "../../../middlewares/common";
import {
  getOneReview,
  deleteOneReview,
  patchOneReview,
} from "../../../models/review";

async function handleGetOneReview(req, res) {
  const review = await getOneReview(req.query.id);
  return res.status(201).send(review);
}

async function handleDeleteOneReview(req, res) {
  await deleteOneReview(req.query.id);
  return res.status(204).send();
}

async function handlePatchReview(req, res) {
  const reviewToPatch = await patchOneReview(req.query.id, req.body);
  return res.status(201).send(reviewToPatch);
}

export default base()
  .get(handleGetOneReview)
  .delete(handleDeleteOneReview)
  .patch(handlePatchReview);
