import React from "react";
import banner1 from "../../assets/banner4.png";
import banner2 from "../../assets/banner3.png";
import banner3 from "../../assets/banner2.jpg";
import { Carousel, Typography, Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { Cursor, useTypewriter } from "react-simple-typewriter";

const Banner = () => {
  const [text] = useTypewriter({
    words: ['Welcome to Our Agency','A smile is a welcomed','Sight that invites people in.'],
    loop:0
  })
  return (
    <div className="relative dark:bg-black p-2 border-[5px] border-green-800 dark:rounded-none dark:-mt-1 dark:border-black rounded-2xl">
      <Carousel className="rounded-xl">
        {/* Slide 1 */}
        <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] w-full">
          <img
            src={banner2}
            alt="image 1"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/50">
            <div className=" px-4 md:px-10">
            <Typography className=" my-2 font-bold text-[#73AC27] w-64  text-center bg-[#3A3D41]/50 py-2 ">
                  <span><span>{text}</span><Cursor></Cursor></span>
                </Typography>
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
              >
                
                Immigration &
                Visa Solutions <br /> The
                Easy Way

              </Typography>
              
              <Typography
                variant="lead"
                color="white"
                className="mb-8 opacity-80 text-sm sm:text-base md:text-lg"
              >
              There are many variations of passages of available but the majority <br /> have suffered
              alteration in some form, by injected hum randomised words which <br /> don't slightly
              but the majority have suffered
              </Typography>
              <div className="flex justify-center gap-4">
                <Link className="btn " to='register' size="lg" color="white">
                  Explore
                </Link>
                <Button size="lg" color="white" variant="text">
                  Gallery
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] w-full">
          <img
            src={banner1}
            alt="image 2"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/50">
            <div className="text-left px-4 md:px-10">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
              >
                Nature's Serenity
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-8 opacity-80 text-sm sm:text-base md:text-lg"
              >
                Feel the tranquility of pristine landscapes and immerse yourself
                in the wonders of the natural world.
              </Typography>
              <div className="flex gap-4">
                <Button size="lg" color="white">
                  Explore
                </Button>
                <Button size="lg" color="white" variant="text">
                  Gallery
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] w-full">
          <img
            src={banner3}
            alt="image 3"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/50">
            <div className="text-right px-4 md:px-10">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
              >
                Adventure Awaits
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-8 opacity-80 text-sm sm:text-base md:text-lg"
              >
                Embark on thrilling adventures in breathtaking destinations
                across the globe.
              </Typography>
              <div className="flex justify-end gap-4">
                <Button size="lg" color="white">
                  Explore
                </Button>
                <Button size="lg" color="white" variant="text">
                  Gallery
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
      
    </div>
  );
};

export default Banner;


