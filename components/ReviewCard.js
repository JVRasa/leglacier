import { PencilAltIcon, TrashIcon } from "@heroicons/react/solid";
import axios from "axios";
import Link from "next/link";
import { useContext } from "react";
import { useRouter } from "next/router";

import { CurrentUserContext } from "../context/currentUserContext";

function ReviewCard({ review, reviewId, parlorDetails }) {
  const router = useRouter();

  const { currentUserProfile } = useContext(CurrentUserContext);

  const deleteReview = (id) => {
    axios.delete(`/api/reviews/${id}`).catch((err) => {
      console.error(err.response.data);
    });
    router.reload(window.location.pathname);
  };

  return (
    <div className="bg-light-blue p-4 rounded-xl mb-4">
      <section className="flex gap-4 items-center">
        <div className="w-12 h-12 bg-grey rounded-full">
          <img
            src={review.user.picture}
            alt={review.user.username}
            className="w-full h-full object-fit rounded-full"
          />
        </div>
        <div>{review.user.username}</div>
      </section>
      <section className="mt-2">
        <p>{review.message}</p>
        <div className="flex gap-2 mt-6">
          {currentUserProfile &&
            currentUserProfile.username === parlorDetails.user.username && (
              <>
                <Link href={`/reviews/edit/${reviewId}`}>
                  <PencilAltIcon className="h-6 w-6 cursor-pointer" />
                </Link>
                <TrashIcon
                  className="h-6 w-6 cursor-pointer"
                  onClick={() => deleteReview(reviewId)}
                />
              </>
            )}
        </div>
      </section>
    </div>
  );
}

export default ReviewCard;
