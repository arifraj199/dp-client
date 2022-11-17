import React from "react";
import Button from "../Shared/Button/Button";

const BannerAppointment = () => {
  return (
    <div
      className="mt-40"
      style={{
        backgroundImage: 'url("https://i.ibb.co/7K3y5S5/appointment.png")',
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: "65vh",
      }}
    >
      <div class="hero ">
        <div class="hero-content flex-col lg:flex-row lg:w-4/5">
          <div className="lg:mt-[-97px]">
            <img
              src="https://i.ibb.co/HBV1jCz/imageedit-0-3376330400.png"
              alt="doctor"
              class="max-w-lg rounded-lg shadow-2xl hidden lg:block"
            />
          </div>
          <div className="text-white text-sm text-left mt-10 lg:mt-0  w-full lg:w-2/5">
            <h1 class="text-md font-bold text-primary mb-2">Appointment</h1>
            <h2 className="text-4xl lg:text-2xl">Make an Appointment Today</h2>
            <p class="pb-6 pt-4 text-sm">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </p>
            <Button>Get Started</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerAppointment;
