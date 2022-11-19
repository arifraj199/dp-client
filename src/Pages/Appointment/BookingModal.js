import React from "react";
import { format } from "date-fns";

const BookingModal = ({ treatment, date }) => {
  const { name, slots } = treatment;

  const handleModal = (event) => {
    event.preventdefault();
    const slot = event.target.slot.value;
    console.log(slot);
  };
  return (
    <div className="text-left">
      <input type="checkbox" id="booking-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <label
            for="booking-modal"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 class="font-bold text-lg">
            Treatment For : <span className="text-secondary">{name}</span>
          </h3>
          <form
            onSubmit={handleModal}
            className="grid grid-cols-1 gap-3 justify-items-center mt-3"
          >
            <input
              type="text"
              placeholder="Type here"
              class="input input-bordered w-full max-w-xs"
              value={format(date, "PP")}
            />
            <select name="slot" class="select select-bordered w-full max-w-xs">
              {slots.map((slot) => (
                <option value={slot}>{slot}</option>
              ))}
            </select>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              class="input input-bordered w-full max-w-xs"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              class="input input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              name="address"
              placeholder="Your Address"
              class="input input-bordered w-full max-w-xs"
            />
            <input
              type="number"
              name="number"
              placeholder="Your Phone Number"
              class="input input-bordered w-full max-w-xs"
            />
            <input
              type="submit"
              value="Submit"
              className="btn btn-secondary text-white w-full max-w-xs"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
