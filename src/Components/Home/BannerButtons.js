import React from "react";

const BannerButtons = ({ text }) => {
  return (
    <div className={text ? "bottom-area text-center" : "bottom-area"}>
      <a href="/login" className="cmn-btn">
        Pay My Bill
      </a>
      <a href="Contact" className="cmn-btn second">
        Get in touch
      </a>
    </div>
  );
};

export default BannerButtons;
