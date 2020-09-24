import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <small>
        <a
          href="https://github.com/kayleighmonaghan/Weather-App"
          rel="noopener noreferrer"
          target="_blank"
        >
          Open-source code{" "}
        </a>
        by 👩‍💻{" "}
        <a
          href="https://www.linkedin.com/in/kayleigh-monaghan/"
          rel="noopener noreferrer"
          target="_blank"
        >
          Kayleigh Monaghan
        </a>
      </small>
    </div>
  );
}
