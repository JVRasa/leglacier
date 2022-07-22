import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Header from "../../components/Header";
import ReviewCard from "../../components/ReviewCard";

import { CurrentUserContext } from "../../context/currentUserContext";

function ParlourDetail() {
  const [parlorDetails, setParlorDetails] = useState("");

  const { currentUserProfile } = useContext(CurrentUserContext);

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
  }, []);

  const color = "yellow";

  return (
    <div className="min-h-screen bg-yellow p-4">
      <Header color={color} />
      <Link href="/parlours">
        <p className="mt-[70px] cursor-pointer">
          ← retour à la liste des glaciers
        </p>
      </Link>
      {parlorDetails && (
        <section className="flex flex-col gap-4 mx-5 mt-8 md:w-3/6 md:m-auto">
          <div className="bg-grey w-full h-[24vh] md:h-[36vh] rounded-xl">
            <img
              src={parlorDetails.picture}
              alt={parlorDetails.shopname}
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          <h1 className="text-[#4E98BE] font-black text-center text-2xl font-Mochiy">
            {parlorDetails.shopname}
          </h1>
          <section>
            <p>{parlorDetails.address}</p>
            <p>
              {parlorDetails.zip}
              &nbsp;
              {parlorDetails.city}
            </p>
            <p>Horaires d&rsquo;ouverture : {parlorDetails.hours}</p>
          </section>
          <h1 className="text-purple font-black text-center text-2xl">
            Parfums disponibles
          </h1>
          {
            <section className="grid grid-cols-2">
              {parlorDetails.menu.map((flavor) => (
                <div key={flavor.flavours.flavourname}>
                  {flavor.flavours.flavourname}
                </div>
              ))}
            </section>
          }
          <h1 className="text-pink font-black text-center text-2xl">
            Avis des clients
          </h1>
          <section className="bg-[#ffffff] p-4 rounded-xl mb-4 flex flex-col">
            {currentUserProfile &&
            currentUserProfile.username ===
              parlorDetails.reviews[0].user.username ? (
              <p>Vous avez déjà ajouter votre avis, merci 🍨</p>
            ) : (
              <>
                <p>
                  N&rsquo;hésitez pas à laisser un avis si vous avez déjà mangé
                  ici 🍨
                </p>

                <div className="bg-green px-2 text-center m-auto mt-4 rounded-xl">
                  <Link href={`/reviews/add/${id}`}>AJOUTER MON AVIS</Link>
                </div>
              </>
            )}
          </section>
          <section>
            {parlorDetails.reviews.map((review) => (
              <ReviewCard
                key={review.id}
                review={review}
                reviewId={review.id}
                parlorDetails={parlorDetails.reviews[0]}
              />
            ))}
          </section>
        </section>
      )}
    </div>
  );
}

export default ParlourDetail;
