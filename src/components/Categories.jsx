import { Link } from "react-router-dom";

const Categories = () => {
  const categories = [
   
    {
      title: 'Platos',
      href: '/food',
      img: 'https://elcomercio.pe/resizer/7DoftreL2HI-Hs4FKnYSd8LgPYQ=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/4FJNQPHRKJDR5DH3K3K3DJLQ5U.png'
    },
    {
      title: 'Bebidas',
      href: '/bebidas',
      img: 'https://cdn.bolivia.com/gastronomia/2011/08/19/margarita-3005-0.jpg'
    },
  ];
    

  return (
    <section className="py-8" id="recetas">
      <div className="container px-2 mx-auto flex flex-col gap-6">
        <h2 className="text-teal-500 font-extrabold text-4xl text-center transition-colors hover:text-amber-200">Prueba nuestras Recetas</h2>
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(256px,_1fr))] place-items-center place-content-center gap-6">
          {categories.map((element, index) => {
            const { title, href, img } = element;
            return (
              <Link
                key={index}
                to={href}
                className="rounded-2xl overflow-hidden w-full"
              >
                <img
                  src={img}
                  alt={title}
                  width={512}
                  height={512}
                  className="w-full h-64 object-cover"
                />
                <div className="bg-sky-900 p-4">
                  <h3 className="text-2xl font-bold text-center">{title}</h3>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;