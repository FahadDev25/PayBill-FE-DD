import React, { useState, useEffect } from "react";
export const GetLoader = ({ time, data }) => {
  const [t, sett] = useState(true);
  useEffect(() => {
    if (time != 0) {
      setTimeout(() => {
        sett(false);
      }, time);
      return;
    } else {
      if (time == 0 && data != false && data) {
        sett(false);
      }
    }
  }, [time, data]);
  if (t) {
    return <div className="preloader" id="preloader" />;
  }
};
