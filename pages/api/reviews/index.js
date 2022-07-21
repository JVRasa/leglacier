import base from "../../../middlewares/common";
import { createReview } from "../../../models/review";

async function handlePostReview(req, res) {
  const { message, userId, parlourId } = req.body;
  return res.status(201).send(
    await createReview({
      message,
      userId,
      parlourId,
    })
  );
}

export default base().post(handlePostReview);
