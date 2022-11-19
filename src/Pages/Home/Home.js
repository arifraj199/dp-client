import React from "react";
import Contact from "../Contact/Contact";
import BannerAppointment from "./BannerAppointment";
import DentalCare from "./DentalCare";
import Service from "./Service";
import Testimonial from "./Testimonial";
import ToolHelp from "./ToolHelp";

const Home = () => {
  return (
    <div className="mb-24">
        <div
      style={{
        backgroundImage: "url('https://i.ibb.co/cY1L3H8/bg.png')",
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: "120vh",
      }}
    >
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row-reverse gap-12 lg:gap-40">
          <div className="">
            <img
              src="https://i.ibb.co/GR6j9Zr/chair.png" alt="chair"
              className="lg:max-w-sm rounded-lg shadow-2xl"
            />
          </div>
          <div className="lg:w-1/2 text-left">
            <h1 className="text-3xl lg:text-5xl font-bold">
              Your New Smile Starts <br /> Here
            </h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button
              style={{
                backgroundImage: "linear-gradient(#1AD8B2,#0FCFEC)",
              }}
              className="btn btn-primary text-white "
            >
              Get Started
            </button>
          </div>
        </div>
        
      </div>
      <ToolHelp></ToolHelp>
    </div>
    <Service></Service>
    <DentalCare></DentalCare>
    <BannerAppointment></BannerAppointment>
    <Testimonial></Testimonial>
    <Contact></Contact>
  
    </div>
  );
};

export default Home;
