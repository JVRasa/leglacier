import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";
import Header from "../../../components/Header";

function EditReview() {
  const [review, setReview] = useState("");

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    id &&
      axios
        .get(`/api/reviews/${id}`)
        .then((res) => setReview(res.data))
        .catch((err) => {
          console.error(err.response.data);
        });
  }, [id]);

  const handleAddReview = (e) => {
    e.preventDefault();
    axios
      .patch(`/api/reviews/${id}`, {
        message: review.message,
        user_id: parseInt(review.userId, 10),
        parlour_id: parseInt(review.parlourId, 10),
      })
      .then(router.push(`/parlours/${review.parlourId}`))
      .catch((err) => {
        console.error(err.response.data);
      });
  };

  const color = "pink";

  return (
    <div className="min-h-screen bg-[#FF99C8] p-4">
      <Header color={color} />
      <Link href={`/parlours/${id}`}>
        <p className="mt-[70px]">← retour au glacier</p>
      </Link>
      {review && (
        <section className="mt-10">
          <h1 className="text-3xl font-Mochiy text-light-blue text-center">
            {review.shopname}
          </h1>
          <section className="bg-[#ffffff] p-4 mt-10 rounded-xl">
            <section className="flex gap-4 items-center mb-4">
              <div className="w-12 h-12 bg-grey rounded-full">image</div>
              <div>{review.user.username}</div>
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
                onChange={(e) =>
                  setReview({ ...review, message: e.target.value })
                }
                value={review.message}
              >
                {" "}
              </textarea>
              <button
                type="submit"
                className="bg-green px-4 py-1 text-center mt-4 rounded-xl"
              >
                EDITER
              </button>
            </form>
          </section>
        </section>
      )}
    </div>
  );
}

export default EditReview;
