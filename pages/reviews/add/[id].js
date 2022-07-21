import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Header from "../../../components/Header";

function AddReview() {
  const color = "pink";

  const [message, setMessage] = useState("");
  const [parlorDetails, setParlorDetails] = useState("");

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    id &&
      axios
        .get(`/api/parlours/${id}`)
        .then((res) => setParlorDetails(res.data))
        .catch((err) => {
          console.error(err.response.data);
        });
  }, [id]);

  const handleAddReview = (e) => {
    e.preventDefault();
    axios
      .post("/api/reviews", {
        message,
        userId: 2,
        parlourId: parseInt(id, 10),
      })
      .then(router.push(`/parlours/${id}`))
      .catch((err) => {
        console.error(err.response.data);
      });
  };

  return (
    <div className="min-h-screen bg-[#FF99C8] p-4">
      <Header color={color} />
      <Link href={`/parlour/${id}`}>
        <p className="mt-[70px]">← retour au glacier</p>
      </Link>
      <section className="mt-10">
        <h1 className="text-3xl font-Mochiy text-light-blue text-center">
          {parlorDetails.shopname}
        </h1>
        <section className="bg-[#ffffff] p-4 mt-10 rounded-xl">
          <section className="flex gap-4 items-center mb-4">
            <div className="w-12 h-12 bg-grey rounded-full">image</div>
            <div>user.username</div>
          </section>
          <form
            onSubmit={handleAddReview}
            className="flex flex-col items-center"
          >
            <textarea
              name="review"
              placeholder="Laissez votre avis ici"
              rows="8"
              className="w-full h-auto"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            >
              {" "}
            </textarea>
            <button
              type="submit"
              className="bg-green px-4 py-1 text-center mt-4 rounded-xl"
            >
              AJOUTER
            </button>
          </form>
        </section>
      </section>
    </div>
  );
}

export default AddReview;
