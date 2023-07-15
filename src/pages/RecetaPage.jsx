import { Link, useLoaderData } from "react-router-dom";

const RecetaPage = () => {
  const data = useLoaderData();
  console.log(data);

  return (
    <section className="py-20">
      <div className="container px-2 mx-auto flex flex-col gap-8 ">
        <h1 className="text-teal-500 font-extrabold text-3xl text-center transition-colors hover:text-amber-200">Elija su Receta</h1>
        <div className="py-4 m-2 grid grid-cols-[repeat(auto-fit,_minmax(384px,_1fr))]  gap-6">
          {data.meals !== undefined && data.meals.map(element => {
            const { idMeal, strMeal, strMealThumb, } = element;
            return (
              <div
                key={idMeal}
                className="max-w-5xl p-4 mx-auto rounded-2xl bg-sky-900 shadow-2xl  grid md:grid-cols-2 gap-6"
              >
                <Link
                  to={`/plato/${idMeal}`}
                >
                <img
                  src={strMealThumb}
                  alt={strMeal}
                  width={256}
                  height={256}
                  className="w-full h-64 object-cover rounded-2xl"
                />
                </Link>

                  <h3 className="text-2xl font-bold text-black">{strMeal}</h3>
               
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RecetaPage;