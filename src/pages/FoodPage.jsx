import { Link, useLoaderData } from "react-router-dom";

const FoodPage = () => {
  const data = useLoaderData();
  console.log(data);


  return (
    <section className="py-20">
      <div className="container px-2 mx-auto flex flex-col gap-8 ">
        <h1 className="text-teal-500 font-extrabold text-3xl text-center transition-colors hover:text-amber-200">Categories</h1>
        <div className="py-4 m-2 grid grid-cols-[repeat(auto-fit,_minmax(512px,_1fr))] gap-6">
          {data.categories !== undefined && data.categories.map(element => {
            const { idCategory, strCategory, strCategoryDescription, strCategoryThumb } = element;
            return (
              <div
                key={idCategory}
                className="max-w-5xl p-4 mx-auto rounded-2xl bg-sky-900 shadow-2xl  grid md:grid-cols-2 gap-6"
              >
                <Link
                  to={`/receta/${strCategory}`}
                >
                <img
                  src={strCategoryThumb}
                  alt={strCategory}
                  width={256}
                  height={256}
                  className="w-full h-64 object-cover rounded-2xl"
                />
                </Link>

                <div className="flex flex-col gap-4">
                  <h3 className="text-2xl font-bold text-black">{strCategory}</h3>
                  
                  <h4 className="text-base font-semibold">Description</h4>
                  <p>{strCategoryDescription}</p>
                  
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FoodPage;

