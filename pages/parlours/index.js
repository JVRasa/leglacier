import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Header from "../../components/Header";
import ParlourCard from "../../components/ParlourCard";

function Parlour() {
  const [searchValue, setSearchValue] = useState("");

  const router = useRouter();

  const { data: parlourList = [] } = useQuery(
    ["parlours", { search: searchValue }],
    () => {
      return axios
        .get(`/api/parlours?search=${searchValue}`)
        .then((response) => response.data)
        .catch(console.error);
    }
  );

  const color = "light-blue";

  return (
    <div className="min-h-screen bg-light-blue p-4">
      {" "}
      <Header color={color} />
      <div className="md:w-[70%] md:m-auto">
        <div className="bg-purple p-4 rounded-xl text-[#F5F5F5] text-xl  mt-28 mb-12">
          <input
            type="text"
            placeholder="Rechercher un parfum"
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)}
            className="bg-purple text-grey w-full"
          />
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
