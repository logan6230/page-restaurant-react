import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function Home() {
  const settings = {
    dots: true,
    inifinite: true,
    speed: 2000,
    slideToShow: 6,
    slideToScroll: 1,
    autoplaySpeed: 5000,
    autoplay: true,
  };
  return (
    <>
      <div className="w-3/4 pt-30 m-auto bg-violet-200">
        <div className="mt-3">
          <Slider {...settings}>
            {data.map((d) => (
              <div key={d.name}>
                <h1 className="text-3xl font-bold pb-3">
                  Restaurante del grupo 3
                </h1>
                <div className="bg-white h-[300px] text-black rounded-x1 flex justify-center items-center">
                  <div>
                    <img
                      src={d.img}
                      alt=""
                      className="h-64 w-64 rounded-lg m-auto "
                    />
                  </div>
                </div>
                <div className="flex flex-col item-center justify-center gap-3 p-5">
                  <p className="text-xl font-semibold">{d.name}</p>
                  <p className="text-justify">{d.review}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

const data = [
  {
    name: `Gastronomía China`,
    img: `../src/assets/img/comida-china.jpg`,
    review: `Deléitate con la diversidad de sabores de la gastronomía china, desde el picante Sichuan hasta los delicados Dim Sum, cada plato cuenta una historia milenaria.`,
  },
  {
    name: `Gastronomía Arabe`,
    img: `../src/assets/img/comida-arabe.jpg`,
    review: `Explora los intensos sabores de la gastronomía árabe, donde las especias se mezclan con la frescura de hierbas como el cilantro y el perejil, ofreciendo una experiencia culinaria única.`,
  },
  {
    name: `Gastronomía Rusa`,
    img: `../src/assets/img/comida-rusa.jpg`,
    review: `Sumérgete en la diversa cocina rusa, desde los reconfortantes platos caseros hasta los lujosos manjares como el Caviar, cada bocado refleja la historia y la geografía del país.`,
  },
  {
    name: `Gastronomía Brasileña`,
    img: `../src/assets/img/comida-brasilera.jpg`,
    review: `Vive la pasión por la buena comida en la gastronomía brasileña, donde la mezcla de influencias indígenas, africanas y europeas crea una experiencia culinaria vibrante y llena de sabores únicos.`,
  },
];
