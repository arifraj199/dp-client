import React from "react";

const Footer = () => {
  return (
    <div style={{
        backgroundImage: 'url("https://i.ibb.co/qppTtVM/footer.png")',
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: "35vh",
    }} className="">
      <div className="block lg:flex justify-between px-10 lg:px-24 text-left">
        <div className="mb-20 lg:mb-0">
          <h2 className="capitalize text-[#939393] font-semibold">Services</h2>
          <ul className="text-sm">
            <li>
              <p>Emergency Checkup</p>
            </li>
            <li>
              <p>Monthly Checkup</p>
            </li>
            <li>
              <p>Weekly Checkup</p>
            </li>
            <li>
              <p>Deep Checkup</p>
            </li>
          </ul>
        </div>
        <div className="mb-20 lg:mb-0">
          <h2 className="capitalize text-[#939393] font-semibold">
            ORAL HEALTH
          </h2>
          <ul className="text-sm">
            <li>
              <p>Fluoride Treatment</p>
            </li>
            <li>
              <p>Cavity Filling</p>
            </li>
            <li>
              <p>Teath Whitening</p>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="capitalize text-[#939393] font-semibold">
            OUR ADDRESS
          </h2>
          <ul className="text-sm">
            <li>
              <p>New York - 101010 Hudson</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="my-20">
        <p className="text-xs font-semibold mb-20">Copyright 2022. All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
