import Header from "../components/Header";
import { signIn } from "next-auth/react";
import { CurrentUserContext } from "../context/currentUserContext";
import { useContext } from "react";
import Link from "next/link";

function Home() {
  const color = "green";

  const { currentUserProfile } = useContext(CurrentUserContext);

  return (
    <div className="min-h-screen bg-green p-4">
      <Header color={color} />
      <div className="h-[calc(100vh-120px)] mt-[70px] flex flex-col justify-between">
        <section className="flex flex-col items-center text-center gap-4 mt-28 md:mt-14">
          <img
            src="/image/iconHome.jpg"
            alt="homepage ice cream"
            className="w-60 h-60 rounded-full "
          />
          <h1 className="text-3xl font-Mochiy">
            Bienvenue
            <br />
            sur Le Glacier
          </h1>
          <p className="text-xl">Pour les amateurs de bonnes glaces</p>
        </section>
        <section className="flex flex-col gap-2">
          {currentUserProfile ? (
            <Link href="/parlours">
              <a className="bg-dark-blue py-2 text-center rounded-xl font-black md:w-[20%] md:m-auto hover:text-slate-100  md:hover:scale-125 ease-in-out duration-200">
                COMMENCER
              </a>
            </Link>
          ) : (
            <button
              type="button"
              className="bg-dark-blue py-2 rounded-xl font-black md:w-[20%] md:m-auto hover:text-slate-100  md:hover:scale-125 ease-in-out duration-200"
              onClick={() => signIn()}
            >
              SE CONNECTER
            </button>
          )}

          {!currentUserProfile && (
            <button
              type="button"
              className="hover:text-pink ease-in-out duration-200"
              onClick={() => signIn()}
            >
              S&rsquo;inscrire
            </button>
          )}
        </section>
      </div>
    </div>
  );
}

export default Home;
