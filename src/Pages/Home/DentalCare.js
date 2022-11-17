import React from "react";

const DentalCare = () => {
  return (
    <div>
      <div className="hero min-h-screen lg:w-4/5 lg:mx-auto mt-20">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://i.ibb.co/RG8H3TG/treatment.png"
            alt="dentalCare"
            className="lg:w-1/3 rounded-lg shadow-2xl"
          />
          <div className="text-left lg:w-1/2 lg:ml-12 mt-8">
            <h1 className="text-4xl font-bold">
              Exceptional Dental Care, on Your Terms
            </h1>
            <p className="py-6">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </p>
            <button
              style={{
                backgroundImage: "linear-gradient(#1AD8B2,#0FCFEC)",
              }}
              className="btn btn-primary text-white"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DentalCare;
