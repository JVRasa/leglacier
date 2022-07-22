import Header from "../components/Header";
import { signIn } from "next-auth/react";
import { CurrentUserContext } from "../context/currentUserContext";
import { useContext } from "react";

function Home() {
  const color = "green";

  const { currentUserProfile } = useContext(CurrentUserContext);

  if (!currentUserProfile)
    return (
      <div className="min-h-screen bg-green p-4">
        <Header color={color} />
        <div className="h-[calc(100vh-120px)] mt-[70px] flex flex-col justify-between">
          <section className="flex flex-col items-center text-center gap-4 mt-28 md:mt-14">
            <p>
              Merci de bien vouloir vous connecter afin d'accéder à votre profil
            </p>
            <button
              type="button"
              className="bg-dark-blue py-2 px-8 rounded-xl font-black md:w-[20%] md:m-auto hover:text-slate-100  md:hover:scale-125 ease-in-out duration-200"
              onClick={() => signIn()}
            >
              SE CONNECTER
            </button>
          </section>
        </div>
      </div>
    );

  return (
    <div className="min-h-screen bg-green p-4">
      <Header color={color} />
      <div className="h-[calc(100vh-120px)] mt-[70px] flex flex-col justify-between">
        <section className="flex flex-col items-center text-center gap-4 mt-28 md:mt-14">
          <img
            src={currentUserProfile.picture}
            alt={currentUserProfile.username}
            className="w-60 h-60 rounded-full "
          />
          <h1 className="text-3xl font-Mochiy">
            Bienvenue
            <br />
            {currentUserProfile.username}
          </h1>
        </section>
      </div>
    </div>
  );
}

export default Home;
