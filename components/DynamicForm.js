import React, { useEffect } from 'react';

const DynamicForm = () => {
  useEffect(() => {
    // Load the external script dynamically
    const script = document.createElement('script');
    script.src = 'https://www.tfaforms.com/publish/4988154';
    script.defer = true;
    
    // Define a callback to execute when the script is loaded
    script.onload = () => {
      // You can use the external script to generate content inside the "fa-form" div
      // For example:
      const formContainer = document.getElementById('fa-form');
      if (formContainer) {
        // Add the content or initialize the form here
        // Example: formContainer.innerHTML = 'This is the form content';
      }
    };
    
    document.head.appendChild(script);
  }, []);

  return <div id="fa-form"></div>;
};

export default DynamicForm;
