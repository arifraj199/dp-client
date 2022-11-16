import React from "react";

const ToolHelp = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 px-2 lg:px-6 gap-4 h-80 lg:h-32">
      <div
        style={{
          backgroundImage: "linear-gradient(#1AD8B2,#0FCFEC)",
        }}
        className='text-white flex justify-center gap-4 items-center text-left rounded-2xl'
      >
        <div>
          <img width="60" src="https://i.ibb.co/0ZrjcbJ/clock.png" alt="" />
        </div>
        <div className="w-2/3">
          <h2 className="text-lg">Opening Hours</h2>
          <p className="text-sm">Lorem ipsum dolor sit amet. Lorem ipsum dolor sit.</p>
        </div>
      </div>

      <div
        style={{
          
        }}
        className='text-white flex bg-accent justify-center gap-4 items-center text-left rounded-2xl'
      >
        <div>
          <img width="40" src="https://i.ibb.co/CPsntgp/marker.png" alt="" />
        </div>
        <div className="w-2/3">
          <h2 className="text-lg">Visit Our Location</h2>
          <p className="text-sm">Monipur Bazar,Gazipur Sadar</p>
        </div>
      </div> 

      <div
        style={{
          backgroundImage: "linear-gradient(#1AD8B2,#0FCFEC)",
        }}
        className='text-white flex justify-center gap-4 items-center text-left rounded-2xl'
      >
        <div>
          <img width="40" src="https://i.ibb.co/tMYPFFP/phone.png" alt="" />
        </div>
        <div className="w-2/3">
          <h2 className="text-lg">Contact Us Now</h2>
          <p className="text-sm">016-37014306</p>
        </div>
      </div>
    </div>
  );
};

export default ToolHelp;
