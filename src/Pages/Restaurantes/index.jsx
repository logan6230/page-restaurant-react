export default function Restaurantes() {
  const products = [
    {
      id: 1,
      name: "Restaurante Sheng Yang",
      href: "#",
      imageSrc: "../src/assets/img/restaurante-chino.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "$35",
      descripction:
        "Descubre una explosión de sabores orientales en nuestro restaurante chino, donde cada plato es una obra maestra de la gastronomía asiática, desde dim sum hasta deliciosos platos wok.",
    },
    {
      id: 2,
      name: "Restaurante chino",
      href: "#",
      imageSrc: "../src/assets/img/restaurante-arabe.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "$35",
      descripction:
        "Sumérgete en la rica cultura culinaria de Rusia con platos tradicionales como el borsch, el estofado de carne y los famosos blinis, en un ambiente acogedor y auténtico.",
    },
    {
      id: 3,
      name: "Restaurante Obi–Irtysh",
      href: "#",
      imageSrc: "../src/assets/img/restaurante-ruso.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "$35",
      descripction:
        "Embárcate en un viaje sensorial a través de los aromas y especias de la cocina árabe, donde los kebabs, el falafel y los dulces baklava te transportarán a las calles de Oriente Medio.",
    },
    {
      id: 4,
      name: "Restaurante chino",
      href: "#",
      imageSrc: "../src/assets/img/restaurante-brasil.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "$35",
      descripction:
        "Siente la pasión y el sabor de Brasil en cada bocado de nuestra cocina, desde la suculenta picanha hasta los exóticos platos de feijoada y moqueca, en un ambiente vibrante y festivo.",
    },
    // More products...
  ];
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Restaurantes del mundo
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-lg text-gray-700 font-bold">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500 text-justify">
                    {product.descripction}
                  </p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  {/* {product.descripction} */}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
