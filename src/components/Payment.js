import React from "react";
import "../css/payment.css";
import Footer from "./Footer";
const Payment = () => {
  return (
    <>
      <div>
        <div
          style={{
            padding: "20px",
            backgroundColor: "skyblue",
            textAlign: "center",
          }}
        >
          <h3>
            Scan Q
            <span style={{ borderBottom: "4px solid red" }}>R To Pay Pl</span>
            ate Fee..
          </h3>
        </div>
        <div className="qr-code-container">
          <img src="https://github.com/amanguptaofficial/HSRPWebsite/assets/50301680/b55c2c7c-3e88-448f-8431-ecd3fb4c4d32" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Payment;
