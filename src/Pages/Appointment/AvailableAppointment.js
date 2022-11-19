import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import AppointmentService from "./AppointmentService";

const AvailableAppointment = ({ date }) => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  console.log(services);
  return (
    <div className="mt-10">
      <div>
        <h2 className="text-lg lg:text-xl text-secondary">
          Available Apppointment on {format(date, "PP")}
        </h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-20 mt-20 mb-40 px-6 lg:px-10">
        {services.map((service) => (
          <AppointmentService service={service}></AppointmentService>
        ))}
      </div>
    </div>
  );
};

export default AvailableAppointment;
