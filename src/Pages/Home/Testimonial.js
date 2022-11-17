import React from "react";

const Testimonial = () => {
  return (
    <div className="mt-20">
      <div className="flex justify-between px-4 lg:px-12">
        <div className="text-left">
          <h2 className="text-primary">Testimonial</h2>
          <h1 className="text-xl lg:text-3xl">What Our Patients Says</h1>
        </div>
        <div className="w-20 lg:w-32">
          <img
            className="w-full"
            src="https://i.ibb.co/YTs2s5S/quote.png"
            alt=""
          />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 text-left gap-5 px-6 lg:px-24 mt-12">
        <div className="shadow-lg p-8 rounded-2xl">
          <p>
            It is a long established fact that by the readable content of a lot
            layout. The point of using Lorem a more-or-less normal distribu to
            using Content here, content
          </p>
          <div className="flex gap-4 items-center mt-4">
            <div class="avatar">
              <div class="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src="https://placeimg.com/192/192/people" alt="reviews" />
              </div>
            </div>
            <div>
              <h2 className="text-lg font-semibold">Arif Hossain</h2>
              <p className="text-sm font-normal">Dhaka</p>
            </div>
          </div>
        </div>
        <div className="shadow-lg p-8 rounded-2xl">
          <p>
            It is a long established fact that by the readable content of a lot
            layout. The point of using Lorem a more-or-less normal distribu to
            using Content here, content
          </p>
          <div className="flex gap-4 items-center mt-4">
            <div class="avatar">
              <div class="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src="https://placeimg.com/192/192/people" alt="reviews"/>
              </div>
            </div>
            <div>
              <h2 className="text-lg font-semibold">Arif Hossain</h2>
              <p className="text-sm font-normal">Dhaka</p>
            </div>
          </div>
        </div>
        <div className="shadow-lg p-8 rounded-2xl">
          <p>
            It is a long established fact that by the readable content of a lot
            layout. The point of using Lorem a more-or-less normal distribu to
            using Content here, content
          </p>
          <div className="flex gap-4 items-center mt-4">
            <div class="avatar">
              <div class="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src="https://placeimg.com/192/192/people" alt="reviews"/>
              </div>
            </div>
            <div>
              <h2 className="text-lg font-semibold">Arif Hossain</h2>
              <p className="text-sm font-normal">Dhaka</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
