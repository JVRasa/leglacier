import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Header from "../../components/Header";
import ParlourCard from "../../components/ParlourCard";

function Parlour() {
  const [parlourList, setParlourList] = useState([]);

  const router = useRouter();

  useEffect(() => {
    axios
      .get("/api/parlours")
      .then((res) => setParlourList(res.data))
      .catch(console.error);
  }, []);

  console.log(parlourList);

  const color = "light-blue";

  return (
    <div className="min-h-screen bg-light-blue p-4">
      {" "}
      <Header color={color} />
      <div className="md:w-[70%] md:m-auto">
        <div className="bg-purple p-4 rounded-xl text-[#F5F5F5] text-xl  mt-28 mb-12">
          Rechercher un parfum
        </div>
        <section className="flex flex-col gap-4">
          {parlourList.map((parlour) => (
            <button
              type="button"
              key={parlour.id}
              onClick={() => router.push(`/parlours/${parlour.id}`)}
            >
              <ParlourCard parlour={parlour} key={parlour.id} id={parlour.id} />
            </button>
          ))}
        </section>
      </div>
    </div>
  );
}

export default Parlour;
