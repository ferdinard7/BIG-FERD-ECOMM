import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";



const KEY = "pk_test_f9fd3ddf5826d25939a3774ce57402d95fc696ad";

function Pay() {
  const [payButton, setPayButton] = useState(null);
  const history = useHistory();

  const [isLoading, setIsLoading] = useState(false);
const [error, setError] = useState(null);



  useEffect(() => {
    const initiatePayment = async () => {
      try {
        setIsLoading(true);
        const res = await axios.post("http://localhost:3001/api/checkout/payment", {
          key: KEY,
          amount: `${7000 * 100}`,
          email: "ferd@gmail.com",
          metadata: {
            orderId: "123456",
          },
        });

        console.log(res.data);
        // setPaymentData(res.data);
  window.location.href=res.data.data.authorization_url

      } catch (error) {
        console.error(error);
        // Handle the error
        setError("An error occurred during payment. Please try again.");
      } finally {
        setIsLoading(true);
      }
    };

    payButton && initiatePayment();
  }, [payButton, history]);



  return (
<div className="pay-container">
    <button
      onClick={() => setPayButton(true)}
      className="pay-button"
      disabled={isLoading}
    >
      {isLoading ? "Processing..." : "Pay Now"}
    </button>

    {error && <div className="error-message">{error}</div>}
  </div>
    
    
  );
}

export default Pay;



// import React from "react";
// import { usePaystackPayment } from 'react-paystack'


// const KEY = "pk_test_f9fd3ddf5826d25939a3774ce57402d95fc696ad";

// function Payment() {

//     const config = {
//         reference: new Date().getTime().toString(),
//         email: 'user@example.com',
//         amount: 100000, // Amount in kobo
//         publicKey: KEY,
//       };

//       const initializePayment = usePaystackPayment(config);

//       const handlePayment = () => {
//         initializePayment();
//       };
    
//       return (
//         <div>
//           <button onClick={handlePayment}>Pay with Paystack</button>
//         </div>
//       );
// }


// export default Payment;