import React, { useEffect } from 'react';

function CalculatorComponent() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://scripts.convertcalculator.com/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="calculator" data-calc-id="tByfjktuDRJTvBpqD" data-type="framed"></div>
  );
}

export default CalculatorComponent;