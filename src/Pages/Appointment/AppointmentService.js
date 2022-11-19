import React from "react";
import Button from "../Shared/Button/Button";

const AppointmentService = ({ service }) => {
  let availableSpace = service.slots.length;
  console.log(availableSpace);
  return (
    <div className="shadow-lg p-8 rounded-2xl">
      <h2 className="text-secondary text-xl font-semibold">{service.name}</h2>
      <p className="my-1">{service.slots[0]}</p>
      <p className="mb-1">{availableSpace} Space Available</p>
      <Button>Book Appointment</Button>
    </div>
  );
};

export default AppointmentService;
