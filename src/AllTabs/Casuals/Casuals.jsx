import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Casuals = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const products = [
    {
      id: 1,
      brand: "HUSH PUPPIES",
      name: "Hush Puppies CYRUS Casual Loafer For Men",
      price: 11999,
      image: "path_to_image1",
    },
    {
      id: 2,
      brand: "HUSH PUPPIES",
      name: "Hush Puppies CYRUS Casual Loafer For Men",
      price: 11999,
      image: "path_to_image2",
    },
    {
      id: 3,
      brand: "BATA",
      name: "Bata TOKYO Casual Loafer For Men",
      price: 3299,
      image: "path_to_image3",
    },
    {
      id: 4,
      brand: "NORTH STAR",
      name: "North Star PARK 86 Casual Lace-Up Sneaker For Men",
      price: 5999,
      image: "path_to_image4",
    },
  ];

  return (
    <div className="px-4 py-8">
      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.id} className="p-4">
            <div className="border rounded-lg shadow-md">
              <img src={product.image} alt={product.name} className="w-full h-40 object-cover" />
              <div className="mt-4 p-2">
                <div className="text-sm text-gray-500">{product.brand}</div>
                <div className="font-bold text-lg">{product.name}</div>
                <div className="mt-2 text-xl font-semibold">Tk {product.price}.00</div>
                <button className="mt-4 bg-black text-white px-4 py-2 rounded">SHOP NOW</button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Casuals;
