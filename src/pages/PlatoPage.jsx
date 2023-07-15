import { useLoaderData } from "react-router-dom";

const PlatoPage = () => {
    const data = useLoaderData();
    console.log(data);



    return (
        <section className="py-20">
            <div className="container px-2 mx-auto flex flex-col gap-8 ">
                <h1 className="text-teal-500 font-extrabold text-3xl text-center transition-colors hover:text-amber-200">Receta</h1>
                <div className="py-4 m-2 grid grid-cols-[repeat(auto-fit,_minmax(384px,_1fr))]  gap-6">
                    {data.meals !== undefined && data.meals.map(element => {
                        const { idMeal, strMeal, strInstructions, strMealThumb, strYoutube, strArea,
                            strIngredient1,
                            strIngredient2,
                            strIngredient3,
                            strIngredient4,
                            strIngredient5,
                            strIngredient6,
                            strIngredient7,
                            strIngredient8,
                            strIngredient9,
                            strIngredient10,
                            strIngredient11,
                            strIngredient12,
                            strIngredient13,
                            strIngredient14,
                            strIngredient15,
                            strIngredient16,
                            strIngredient17,
                            strIngredient18,
                            strIngredient19,
                            strIngredient20,
                            strMeasure1,
                            strMeasure2,
                            strMeasure3,
                            strMeasure4,
                            strMeasure5,
                            strMeasure6,
                            strMeasure7,
                            strMeasure8,
                            strMeasure9,
                            strMeasure10,
                            strMeasure11,
                            strMeasure12,
                            strMeasure13,
                            strMeasure14,
                            strMeasure15,
                            strMeasure16,
                            strMeasure17,
                            strMeasure18,
                            strMeasure19,
                            strMeasure20,
                        } = element;

                        return (

                            <div
                                key={idMeal}
                                className="max-w-5xl p-4 mx-auto rounded-2xl bg-sky-900 shadow-2xl  grid md:grid-cols-2 gap-6"
                            >
                                <div className="flex flex-col gap-4">
                                    <h3 className="text-2xl font-bold text-black">{strMeal}</h3>
                                    <img
                                        src={strMealThumb}
                                        alt={strMeal}
                                        width={256}
                                        height={256}
                                        className="w-full h-auto object-cover rounded-2xl "
                                    />


                                    <div className="flex flex-col gap-4">

                                        <h4 className="text-base font-semibold py-4">Ingredientes</h4>
                                        <div className="flex gap-8 ">
                                            <ul>
                                                <li>{strIngredient1}</li>
                                                <li>{strIngredient2}</li>
                                                <li>{strIngredient3}</li>
                                                <li>{strIngredient4}</li>
                                                <li>{strIngredient5}</li>
                                                <li>{strIngredient6}</li>
                                                <li>{strIngredient7}</li>
                                                <li>{strIngredient8}</li>
                                                <li>{strIngredient9}</li>
                                                <li>{strIngredient10}</li>
                                                <li>{strIngredient11}</li>
                                                <li>{strIngredient12}</li>
                                                <li>{strIngredient13}</li>
                                                <li>{strIngredient14}</li>
                                                <li>{strIngredient15}</li>
                                                <li>{strIngredient16}</li>
                                                <li>{strIngredient17}</li>
                                                <li>{strIngredient18}</li>
                                                <li>{strIngredient19}</li>
                                                <li>{strIngredient20}</li>
                                            </ul>
                                            <ul className="text-yellow-300">
                                                <li>{strMeasure1}</li>
                                                <li>{strMeasure2}</li>
                                                <li>{strMeasure3}</li>
                                                <li>{strMeasure4}</li>
                                                <li>{strMeasure5}</li>
                                                <li>{strMeasure6}</li>
                                                <li>{strMeasure7}</li>
                                                <li>{strMeasure8}</li>
                                                <li>{strMeasure9}</li>
                                                <li>{strMeasure10}</li>
                                                <li>{strMeasure11}</li>
                                                <li>{strMeasure12}</li>
                                                <li>{strMeasure13}</li>
                                                <li>{strMeasure14}</li>
                                                <li>{strMeasure15}</li>
                                                <li>{strMeasure16}</li>
                                                <li>{strMeasure17}</li>
                                                <li>{strMeasure18}</li>
                                                <li>{strMeasure19}</li>
                                                <li>{strMeasure20}</li>
                                            </ul>
                                        </div>
                                        

                                    </div>
                                </div>


                                <div className="flex flex-col gap-4 py-8">
                                    <h4 className="text-base font-semibold">Instructions</h4>
                                        <p>{strInstructions}</p>
                                    <a href={strYoutube} target="_blank" rel="noopener noreferrer" 
                                    className="flex items-center text-orange-300 text-lg" > Ver el Video de la receta</a>
                                    <div className="flex gap-8">
                                    <h4 className="text-base font-semibold">Pais de Origen:</h4>
                                    <p>  {strArea}</p>

                                    </div>

                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default PlatoPage;