import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faInstagram, faTiktok, faTwitter} from "@fortawesome/free-brands-svg-icons";
import {faPhone} from "@fortawesome/free-solid-svg-icons";

const Contacts = () => {
  return (
    <div className="px-3 mt-4 text-white">
      <h2>Сonnection</h2>
      <div className="d-flex justify-content-between">
        <div className="w-50 border border-2 m-1 p-2">
          <p>Phone numbers for cooperation</p>
          <div className="d-flex">
            <FontAwesomeIcon icon={faPhone}/>
            <p className="ms-2 mb-0">+996 502 75 15 85</p>
          </div>
        </div>
        <div className="w-50 border border-2 m-1 p-2">
          <p>You can contact us on these social networks</p>
          <FontAwesomeIcon icon={faFacebook} className="m-1"/>
          <FontAwesomeIcon icon={faInstagram} className="m-1"/>
          <FontAwesomeIcon icon={faTiktok} className="m-1"/>
          <FontAwesomeIcon icon={faTwitter} className="m-1"/>
        </div>
      </div>
    </div>
  );
};

export default Contacts;