import base from "../../../middlewares/common";
import { getOneParlour } from "../../../models/parlour";

async function handleGetOneParlour(req, res) {
  const parlour = await getOneParlour(req.query.id);
  return res.status(201).send(parlour);
}

export default base().get(handleGetOneParlour);
