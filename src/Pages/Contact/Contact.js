import React from "react";
import Button from "../Shared/Button/Button";

const Contact = () => {
  return (
    <div
      className="mt-32 items-center"
      style={{
        backgroundImage: 'url("https://i.ibb.co/7K3y5S5/appointment.png")',
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: "65vh",
      }}
    >
      <div className="pt-8">
        <h2 className="text-primary font-semibold">Contact Us</h2>
        <h1 className="text-2xl text-white">Stay Connected With Us</h1>
        <div className="flex flex-col justify-center items-center gap-4 my-4">
          <input
            type="email"
            placeholder="email address"
            class="input input-sm w-full max-w-xs"
          />
          <input
            type="password"
            placeholder="password"
            class="input input-sm w-full max-w-xs"
          />
          <textarea
            class="textarea h-24 w-80"
            placeholder="your message"
          ></textarea>
        </div>
        <Button>Submit</Button>
      </div>
    </div>
  );
};

export default Contact;
