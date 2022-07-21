import base from "../../../middlewares/common";
import { getOneUser } from "../../../models/user";

async function handleGetOneUser(req, res) {
  const user = await getOneUser(req.query.id);
  return res.status(201).send(user);
}

export default base().get(handleGetOneUser);
