import { Link, useLoaderData } from "react-router-dom";

const CocktailsPage = () => {
  const data = useLoaderData();
  console.log(data);



  return (
    <section className="py-20">
      <div className="container px-2 mx-auto flex flex-col gap-6">
        <h1 className="text-teal-500 font-extrabold text-3xl text-center transition-colors hover:text-amber-200">Cocktails</h1>
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(256px,_1fr))]  gap-6">
          {data.drinks !== undefined && data.drinks.map(element => {
            const { strDrink, id, strDrinkThumb, idDrink } = element;
            return (
              <div
                key={id}
                className="rounded-2xl overflow-hidden flex flex-col grid grid-cols-[repeat(auto-fit,_minmax(256px,_1fr))]  "
              >
                <Link
                  to={`/coctel/${idDrink}`}
                >

                  <img
                    src={strDrinkThumb}
                    alt={strDrink}
                    width={256}
                    height={256}
                    className="w-full  object-cover"
                  />
                </Link>

                <div className=" p-4 bg-sky-900 flex flex-col gap-2">
                  <h3 className="text-2xl font-bold">{strDrink}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CocktailsPage;

