const Article = () => {
    return (

        <>
            <div className=" container py-5 px-2 mx-auto flex flex-col gap-6">
                <div className="flex flex-col grid grid-cols-[repeat(auto-fit,_minmax(256px,_1fr))] ">
                <a href="#recetas" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="https://www.alimentacionbalanceada.com/wp-content/uploads/2018/07/alimentacionbalanceada-dieta-balanceada-250x250.png" alt="" />
                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Alimentacion sana</h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Una dieta balanceada es el pilar de la salud. Incorporar los nutrientes que necesita el cuerpo correctamente, garantizará tu bienestar a corto y largo plazo.</p>
                        </div>
                    </a>
                    
                    
                     <a href="#recetas" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">LO QUE NO TE DEBE FALTAR</h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Para obtener una dieta balanceada, se debe incorporar las cantidades adecuadas de todos los nutrientes esenciales, para cubrir las necesidades vitales y mantener tu salud. Los nutrientes que no te deben faltar son los siguientes:</p>
                        </div>
                        <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="https://www.alimentacionbalanceada.com/wp-content/uploads/2018/07/alimentacionbalanceada-dieta-balanceada-b.png" alt="" />
                    </a>
                </div>
            </div>
            <section className=" bg-sky-950">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
                    <div className="flex flex-col justify-center">
                        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Desnutrición crónica infantil en el Perú: un problema persistente</h1>
                        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">La desnutrición crónica infantil en el Perú es un problema grave. Según estándares internacionales, casi el 30% de niños menores de cinco años sufre de este mal.</p>
                        <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                            <a href="#recetas" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                                Alimentate
                                <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </a>
                            <a 
                            href="https://repositorio.up.edu.pe/handle/11354/349" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                            >
                                Learn more
                            </a>
                        </div>
                    </div>
                    <div>
                        <iframe className="mx-auto w-full lg:max-w-xl h-64 rounded-lg sm:h-96 shadow-xl" src="https://www.youtube.com/embed/V2QRM37OZOQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
            </section>

        </>
    );
}

export default Article;