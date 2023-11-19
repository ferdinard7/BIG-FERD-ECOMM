import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import { PaystackButton } from 'react-paystack';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { clearCart } from "../redux/cartRedux";
import { Link } from "react-router-dom";
import  { userRequest } from "../requestMethod";
import Footer from "../components/Footer";
import  Badge  from "@mui/material/Badge"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const KEY = "pk_test_f9fd3ddf5826d25939a3774ce57402d95fc696ad";

const SummaryTitle = styled.h1`
font-weight:  200;
`
const SummaryItem = styled.div`
margin: 30px 0px;
display: flex;
justify-content: space-between;

`
const SummaryItemText = styled.span``
const SummaryItemPrice = styled.span``


// const Button = styled.button`
// width:100%;
// padding: 10px;
// background-color: black;
// color: white;
// cursor: pointer;
// `
function Cart() {
  const history = useHistory();
  const dispatch = useDispatch();
  
  const quantity = useSelector(state=> state.cart.quantity );

  const user = useSelector((state) => state.user.currentUser);

  const email = user.email;

  const cart = useSelector(state=> state.cart);
  const [payButton, setPayButton] = useState(null);
  // const [isLoading, setIsLoading] = useState(false);
  

  const config = {
    reference: (new Date()).getTime(),
    email: `${email}`,
    amount: `${cart.total * 100 }`,
    publicKey: KEY,
  };

  useEffect(() => {
    const initiatePayment = async () => {
      try {
        // setIsLoading(true);

        // const res = await axios.post("http://localhost:3001/api/checkout/payment",
        const res = await userRequest.post("/checkout/payment", {
          key: KEY,
          amount: `${cart.total * 100}`,
          email: `${email}`,
          metadata: {
            orderId: "123456",
          },
        });

        console.log(res.data);

      } catch (error) {
        console.error(error);
        // Handle the error
      }
    };

    payButton && cart.total>= 0 && initiatePayment();
    
  }, [payButton, history, cart, email]);

  const onSuccess = (reference) => {
    const success = reference.status;
    if (success === "success") {
      console.log("success");
       dispatch(clearCart());
      history.push("/successful");
    } else {
      history.push("/failure")
    }
  };

  const onClose = () => {
    console.log('Payment closed');
    // history.push("/failure");
  };


    return (
      <div className="cart-container">
      <Navbar />
      <Announcement />
      <div className="cart-wrapper">
        <h1 className="cart-title">YOUR BAG</h1>
        <div className="cart-top">
          <button className="cart-top-button">
           <Link to="/cart">CART
           <Badge badgeContent={quantity} color="primary">
           <ShoppingCartOutlinedIcon color="action" />
         </Badge>
          </Link>
          </button>
          <div className="top-texts">
            <div className="top-text">
              Shopping Bag(2)
            </div>
            <div className="top-text">
              Your Wishlist(0)
            </div>
          </div>
          <button className="cart-top-button" style={{ border: "none", backgroundColor: "black", color: "white" }}>
            <Link  to="/">CONTINUE SHOPPING</Link>
          </button>
        </div>
        <div className="cart-bottom">
          <div className="cart-info">
            {cart.products.map((product, index) => (
              <div className="cart-product" key={index}>
                <div className="cart-product-detail">
                  <img src={product.img} alt="" />
                  <div className="cart-details">
                    <span className="cart-product-name"> <b>Product: </b>{product.title}</span>
                    <span className="cart-product-id"> <b>ID: </b> {product._id.slice(0,10)}</span>
                    <div className="cart-product-color" style={{ backgroundColor: `${product.color}` }}></div>
                    <span className="cart-product-size"> <b>Size: </b> {product.size}</span>
                  </div>
                </div>
                <div className="cart-price-detail">
                  <div className="cart-product-amount-container">
                    <AddIcon />
                    <span className="cart-product-amount">
                      {product.quantity}
                    </span>
                    <RemoveIcon />
                  </div>
                  <span className="cart-product-price"> $ {product.price * product.quantity}</span>
                </div>
              </div>
            ))}
            </div>
          <hr />
          <div className="summary">
            <SummaryTitle>
              ORDER SUMMARY
            </SummaryTitle>
            <SummaryItem>
              <SummaryItemText>SubTotal</SummaryItemText>
              <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.70</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem style={{ fontWeight: "500", fontSize: "24px" }}>
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
            </SummaryItem>
            <PaystackButton className="button" onClick={() => setPayButton(true)}
      text="CHECK OUT NOW"
      onSuccess={onSuccess}
      onClose={onClose}
      {...config}
    />
          </div>
        </div>
      </div>
     <Footer />
    </div>
    
    )
}

export default Cart;