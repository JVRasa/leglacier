import base from "../../../middlewares/common";
import { findAllParlours } from "../../../models/parlour";

async function handleGetParlours(req, res) {
  res.send(await findAllParlours());
}

export default base().get(handleGetParlours);
