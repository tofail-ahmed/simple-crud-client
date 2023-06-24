import React from 'react';

const Button = ({ text }) => {
      return (
            <div>
                  <Button className="btn btn-outline border-b-4"
                  >{text}</Button>
            </div>
      );
};

export default Button;