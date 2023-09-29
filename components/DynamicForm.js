// components/FormDemo.js
//import { useEffect } from 'react';
import Head from "next/head";

const FormDemo = () => {
  // useEffect(() => {
  //   // Create a script element for the external script
  //   const script = document.createElement('script');
  //   script.src = 'https://www.tfaforms.com/publish/4988154';
  //   script.setAttribute('data-qp-target-id', 'fa-form');
  //   script.defer = true;

  //   // Append the script to the document's body to load it
  //   document.body.appendChild(script);

  //   // Cleanup: remove the script when the component unmounts
  //   return () => {
  //     document.body.removeChild(script);
  //   };
  // }, []);

  return (
    <div>
      <Head>
        <script src="https://www.tfaforms.com/publish/4988154" data-qp-target-id="fa-form" defer></script>
      </Head>
      <div id="fa-form"></div>
      
      {/* Add any other content or components related to your form */}
    </div>
  );
};

export default FormDemo;
