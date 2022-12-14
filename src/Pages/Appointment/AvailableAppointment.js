import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import AppointmentService from "./AppointmentService";
import BookingModal from "./BookingModal";

const AvailableAppointment = ({ date }) => {
  const [services, setServices] = useState([]);
  const [treatment,setTreatment] = useState(null);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  
  return (
    <div className="mt-10">
      <div>
        <h2 className="text-lg lg:text-xl text-secondary">
          Available Apppointment on {format(date, "PP")}
        </h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-20 mt-20 mb-40 px-6 lg:px-10">
        {services.map((service) => (
          <AppointmentService
            key={service._id}
            service={service}
            setTreatment={setTreatment}
          ></AppointmentService>
        ))}
      </div>
      {treatment && <BookingModal treatment={treatment} date={date}></BookingModal>}
    </div>
  );
};

export default AvailableAppointment;
