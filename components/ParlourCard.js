function ParlourCard({ parlour }) {
  return (
    <div className="bg-yellow py-4 px-8 rounded-xl flex justify-between gap-4 cursor-pointer md:hover:scale-105 ease-in-out duration-200 ">
      <section className="w-[25%] flex items-center">
        <div className="w-16 h-16 rounded-full">
          <img
            src={parlour.picture}
            alt={parlour.shopname}
            className="rounded-full"
          />
        </div>
      </section>
      <section className="w-[75%]">
        <h1 className="font-bold">{parlour.shopname}</h1>
        <p>{parlour.address}</p>
        <p>{parlour.zip}</p>
        <p>{parlour.city}</p>
      </section>
    </div>
  );
}

export default ParlourCard;
