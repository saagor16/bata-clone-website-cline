
import art from '../../../assets/Banner/volunteer.png'

const Gallery = () => {
    return (
      <div>
        <section className="py-6">
          <div className="container justify-center p-4 mx-auto">
            <div className="grid gap-4 grid-cols-2 md:grid-cols-4 ">
              <img
                className="object-cover w-full dark:bg-gray-500 lg:w-[300px] lg:h-[197px] md:w-[170px] md:h-[90px] sm:w-[120px] sm:h-[70px] duration-200 hover:scale-105"
                src={art}
                alt="Gallery Image 1"
              />
              <img
                className="object-cover w-full dark:bg-gray-500 lg:w-[300px] lg:h-[197px] md:w-[170px] md:h-[90px] sm:w-[120px] sm:h-[70px] duration-200 hover:scale-105"
                src={art}
                alt="Gallery Image 2"
              />
              <img
                className="object-cover w-full dark:bg-gray-500 lg:w-[300px] lg:h-[197px] md:w-[170px] md:h-[90px] sm:w-[120px] sm:h-[70px]  duration-200 hover:scale-105"
                src={art}
                alt="Gallery Image 3"
              />
              <img
                className="object-cover w-full dark:bg-gray-500 lg:w-[300px] lg:h-[197px] md:w-[170px] md:h-[90px] sm:w-[120px] sm:h-[70px] duration-200 hover:scale-105"
                src={art}
                alt="Gallery Image 4"
              />
            </div>
          </div>
        </section>
      </div>
    );
  };
  
  export default Gallery;
  