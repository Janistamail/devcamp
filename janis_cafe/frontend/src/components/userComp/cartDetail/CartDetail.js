import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  updateCart,
  deleteOrderInCart,
  setTotal,
} from "../cartDetail/cartSlice";
import { createBodyRequestAPI, setFalseReadyToPayment } from "./paymentSlice";
const LosslessJSON = require("lossless-json");

const CartDetail = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let allCartSlice = useSelector((state) => state.cart);
  let orderInCart = useSelector((state) => state.cart.orderInCart);
  let id_account = useSelector((state) => state.authen.id_account);
  let total = useSelector((state) => state.cart.total);

  let bodyRequestAPI = useSelector((state) => state.payment.bodyRequestAPI);
  let readyToPay = useSelector((state) => state.payment.readyToPayment);
  const [click, setClick] = useState(false);

  console.log("orderInCart", orderInCart);

  const onClickDelete = async (e, values) => {
    e.preventDefault();
    // console.log("valuesdelete", values);
    dispatch(deleteOrderInCart(values));
    let result = await axios.delete("/users/deleteOrder", {
      headers: { productName: values },
    });
  };

  const onClickEdit = async (e, values) => {
    e.preventDefault();
    // console.log("values", values);

    // let result = await axios.put("/users/editUserCart");
    navigate("/editUserCart", { state: values });
  };

  const calTotal = () => {
    const total = orderInCart.reduce(
      (previousValue, currentValue) => previousValue + currentValue.total,
      0
    );
    dispatch(setTotal(total));
    return total;
  };
  const onClickPayNow = async () => {
    dispatch(createBodyRequestAPI(allCartSlice));
    setClick(true);
  };

  const handlePay = async (body) => {
    setClick(false);
    // console.log("test----");

    const response = await axios.post("/payment/v3/payments/request", body);
    console.log("response", response);

    const result = LosslessJSON.parse(response.data);
    // console.log("responseREQUESTAPI", result.info.transactionId.value);
    // console.log("responseREQUESTAPI-2", result.info.paymentUrl.web);

    const result2 = await axios.post("/payment/setTransactionId", {
      transactionId: result.info.transactionId.value,
      amount: bodyRequestAPI.amount,
    });
    // console.log("111", result.info);
    // console.log("222", result2);

    //เปิดหน้าใหม่
    // window.open(`${result.info.paymentUrl.web}`, "_blank").focus();
    // window.open(result.info.paymentUrl.web);

    // navigate(`${result.info.paymentUrl.web}`);
    window.location.replace(result.info.paymentUrl.web);
    // window.location = result.info.paymentUrl.web;
  };

  useEffect(() => {
    if (Object.keys(bodyRequestAPI).length > 0 && click && readyToPay) {
      handlePay(bodyRequestAPI);
      dispatch(setFalseReadyToPayment());

      localStorage.setItem("finalOrder", JSON.stringify(orderInCart));
      localStorage.setItem("id_account", id_account);
      localStorage.setItem("total", total);
    }
  }, [readyToPay]);

  return (
    <div className="box">
      <div id="cards">
        {orderInCart &&
          orderInCart.map((x) => (
            <div className="BoxA">
              <button
                onClick={(e) => onClickEdit(e, x)}
                style={{
                  background: "green",
                  // marginTop: "400px",
                  //   marginLeft: "50%",
                  color: "white",
                  border: "1px solid white",
                  padding: "10px 30px",
                  borderRadius: "10px",
                }}
              >
                edit
              </button>
              <p>{x.productName}</p>
              <p> {x.drinkType}</p>
              <p>amount {x.quantity}</p>
              <p>total {x.total} </p>

              <button
                onClick={(e) => onClickDelete(e, x.id_cart)}
                style={{
                  background: "green",
                  color: "white",
                  border: "1px solid white",
                  padding: "10px 30px",
                  borderRadius: "10px",
                }}
              >
                delete
              </button>
            </div>
          ))}
        <p style={{ color: "white" }}>
          Total : {calTotal()}
          BAHT
        </p>
        <button
          onClick={() => {
            onClickPayNow();
            // dispatch(orderNowOrAgain("orderAgain"));
          }}
          style={{
            background: "green",
            color: "white",
            border: "1px solid white",
            padding: "10px 30px",
            borderRadius: "10px",
            height: "50px",
          }}
        >
          PAY NOW
        </button>
      </div>
    </div>
  );
};

export default CartDetail;
