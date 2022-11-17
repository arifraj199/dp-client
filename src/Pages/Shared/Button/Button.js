import React from 'react';

const Button = ({children}) => {
    return (
        <div>
            <button
              style={{
                backgroundImage: "linear-gradient(#1AD8B2,#0FCFEC)",
              }}
              className="btn btn-primary text-white"
            >
              {children}
            </button>
        </div>
    );
};

export default Button;