import { useEffect } from "react";

const FormDemo = () => {
  useEffect(() => {
    // Function to check if the element with data-qp-target-id exists
    const checkElement = () => {
      const element = document.getElementById("fa-form");
      if (element && element.hasAttribute("data-qp-target-id")) {
        // Create the script element when the element is found
        const script = document.createElement("script");
        script.src = "https://www.tfaforms.com/publish/4988154";
        script.setAttribute("data-qp-target-id", "fa-form");
        script.defer = true;

        // Append the script to the document's body to load it
        document.body.appendChild(script);
      } else {
        // Check again after a short delay
        setTimeout(checkElement, 100);
      }
    };

    // Start checking for the element
    checkElement();

    // Cleanup: remove the script when the component unmounts
    return () => {
      const scriptElement = document.querySelector(
        'script[src="https://www.tfaforms.com/publish/4988154"]'
      );
      if (scriptElement) {
        document.body.removeChild(scriptElement);
      }
    };
  }, []);

  return (
    <div>
      <div id="fa-form"></div>
      <iframe
        src="https://tfaforms.com/4988154"
        height="700"
        width="100%"
        frameborder="0"
      ></iframe>
      {/* Add any other content or components related to your form */}
    </div>
  );
};

export default FormDemo;
