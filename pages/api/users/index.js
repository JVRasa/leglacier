import base from "../../../middlewares/common";
import { createUser, findAllUsers } from "../../../models/user";

async function handlePostUser(req, res) {
  const { username, email, password, picture } = req.body;
  return res.status(201).send(
    await createUser({
      username,
      email,
      password,
      picture,
    })
  );
}

async function handleGetUsers(req, res) {
  res.send(await findAllUsers());
}

export default base().post(handlePostUser).get(handleGetUsers);
