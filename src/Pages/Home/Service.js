import React from "react";

const Service = () => {
  return (
    <div className="mt-60 lg:mt-20">
        <div>
            <h2 className="text-primary font-semibold">Our Services</h2>
            <h1 className="text-3xl">Services We Provided</h1>
        </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 mt-10 px-2 lg:px-6 gap-4">
        <div className="flex flex-col items-center shadow-lg p-6 rounded-2xl">
          <div >
            <img className="" src="https://i.ibb.co/WtqDRDL/fluoride.png" alt="" />
          </div>
          <div>
            <h2 className="text-xl font-semibold">Fluoride Treatment</h2>
            <p className="text-sm w-5/6 mx-auto">
              Lorem Ipsum is simply dummy printing and typesetting indust Ipsum
              has been the
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center shadow-lg p-6 rounded-2xl">
          <div >
            <img className="" src="https://i.ibb.co/Htc9SpL/cavity.png" alt="" />
          </div>
          <div>
            <h2 className="text-xl font-semibold">Cavity Filling</h2>
            <p className="text-sm w-5/6 mx-auto">
              Lorem Ipsum is simply dummy printing and typesetting indust Ipsum
              has been the
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center shadow-lg p-6 rounded-2xl">
          <div >
            <img className="" src="https://i.ibb.co/fXhVJX0/whitening.png" alt="" />
          </div>
          <div>
            <h2 className="text-xl font-semibold">Teeth Whitening</h2>
            <p className="text-sm w-5/6 mx-auto">
              Lorem Ipsum is simply dummy printing and typesetting indust Ipsum
              has been the
            </p>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Service;
