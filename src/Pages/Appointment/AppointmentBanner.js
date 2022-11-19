import { format } from "date-fns";
import React from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const AppointmentBanner = ({ date, setDate }) => {
  return (
    <div>
      <div
        style={{
          backgroundImage: "url('https://i.ibb.co/cY1L3H8/bg.png')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "100vh",
        }}
      >
        <div className="hero min-h-screen ">
          <div className="hero-content flex-col lg:flex-row-reverse gap-12 lg:gap-40">
            <div className="">
              <img
                src="https://i.ibb.co/GR6j9Zr/chair.png"
                alt="chair"
                className="lg:max-w-sm rounded-lg shadow-2xl"
              />
            </div>
            <div className="lg:w-1/2 text-left shadow-xl p-4 rounded-xl">
              <DayPicker
                mode="single"
                selected={date}
                onSelect={setDate}
              ></DayPicker>
              <p className="text-red-500">
                You Have Selected:{" "}
                <span className="font-bold">{format(date, "PP")}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
