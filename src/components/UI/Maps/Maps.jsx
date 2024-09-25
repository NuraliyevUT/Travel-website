import React from "react";
import "./maps.scss";

const Maps = () => {
  return (
    <div id="maps" className="maps">
      <div className="maps__wrapper">
        <iframe
        className="maps__map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2997.7937710101733!2d69.17489197496117!3d41.29159260193342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae890041224fcd%3A0x479fbc666d50cee0!2sUchtepa%20tumani%2025%20dom!5e0!3m2!1sru!2s!4v1720980480251!5m2!1sru!2s"
          width="100%"
          height="450"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          frameBorder=''
        ></iframe>

      
      </div>
    </div>
  );
};

export default Maps;
