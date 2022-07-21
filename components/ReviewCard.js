import { PencilAltIcon, TrashIcon } from "@heroicons/react/solid";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";

function ReviewCard({ review, reviewId }) {
  const router = useRouter();

  const deleteReview = (id) => {
    axios.delete(`/api/reviews/${id}`).catch((err) => {
      console.error(err.response.data);
    });
    router.reload(window.location.pathname);
  };

  return (
    <div className="bg-light-blue p-4 rounded-xl mb-4">
      <section className="flex gap-4 items-center">
        <div className="w-12 h-12 bg-grey rounded-full">image</div>
        <div>{review.user.username}</div>
      </section>
      <section className="mt-2">
        <p>{review.message}</p>
        <div className="flex gap-2 mt-6">
          <Link href={`/reviews/edit/${reviewId}`}>
            <PencilAltIcon className="h-6 w-6" />
          </Link>
          <TrashIcon
            className="h-6 w-6"
            onClick={() => deleteReview(reviewId)}
          />
        </div>
      </section>
    </div>
  );
}

export default ReviewCard;
