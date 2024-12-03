import React from 'react';
import banner1 from "../../assets/banner4.png"
import banner2 from "../../assets/banner3.png"
import banner3 from "../../assets/banner2.jpg"
import banner4 from "../../assets/banner1.avif"
const Banner = () => {
    return (
        <div>
           <div className="carousel md:h-[90vh] w-full rounded-2xl border-2 border-green-800 ">
                <div id="slide1" className="carousel-item relative w-full">
                  <img
                    src={banner1}
                    className="w-full p-2 rounded-2xl mx-auto" />
                  <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                  </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                  <img
                    src={banner2}
                    className="w-full p-2 rounded-2xl mx-auto" />
                  <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                  </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                  <img
                    src={banner3}
                    className="w-full p-2 rounded-2xl mx-auto" />
                  <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                  </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                  <img
                    src={banner4}
                    className="w-full p-2 rounded-2xl mx-auto" />
                  <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                  </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;