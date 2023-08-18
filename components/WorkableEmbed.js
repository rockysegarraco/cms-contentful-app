import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

const WorkableEmbed = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.workable.com/assets/embed.js";
    script.type = "text/javascript";
    script.async = true; // Load asynchronously
    script.onload = () => {
      // Now that the script is loaded, you can use the whr object
      whr(document).ready(function () {
        whr_embed(525988, {
          detail: "titles",
          base: "jobs",
          zoom: "country",
          grouping: "departments",
        });
      });
    };
    document.head.appendChild(script);
    document.getElementById("whr_embed_hook").appendChild(script);
  }, []);

  return (
    <div>
      <Helmet>
        <script
          src="https://www.workable.com/assets/embed.js"
          type="text/javascript"
        />
      </Helmet>
      <div id="whr_embed_hook"></div>
    </div>
  );
};

export default WorkableEmbed;
