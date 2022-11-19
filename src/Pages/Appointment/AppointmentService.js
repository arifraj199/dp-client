import React from "react";

const AppointmentService = ({ service }) => {
  const { name, slots } = service;
  let availableSpace = slots.length;
  console.log(availableSpace);
  return (
    <div className="shadow-lg p-8 rounded-2xl">
      <h2 className="text-secondary text-xl font-semibold">{name}</h2>
      <p className="my-1">
        {availableSpace > 0 ? (
          <span>{slots[0]}</span>
        ) : (
          <span className="text-red-500">Try Another Date</span>
        )}
      </p>
      <p className="mb-1">
        {availableSpace} {availableSpace > 1 ? "Spaces" : "Space"} Available
      </p>
      <button
        disabled={availableSpace === 0}
        className="btn bg-[linear-gradient(#1AD8B2,#0FCFEC)] text-white border-none"
      >
        Book Appointment
      </button>
    </div>
  );
};

export default AppointmentService;
