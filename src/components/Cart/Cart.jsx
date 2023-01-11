import React from "react";

const Cart = (props) => {
  const totalPrice = props.data.reduce(
    (total, product) => total + product.price,
    0
  );
  const shipping = Math.ceil(totalPrice * 0.1);
  const subtotal = totalPrice + shipping;
  const tax = Math.ceil(subtotal * 0.2);
  const finalAmount = subtotal + tax;
  return (
    <>
      <p className="order-count">Items on Cart: {props.data.length}</p>
      <table className="cart-cost-table">
        <tbody>
          <tr>
            <td>Product Cost</td>
            <td>:</td>
            <td>${Math.ceil(totalPrice)}</td>
          </tr>
          <tr>
            <td>Shipping Cost</td>
            <td>:</td>
            <td>${shipping} (10%)</td>
          </tr>
          <tr>
            <td>Sub Total</td>
            <td>:</td>
            <td>${subtotal} (Total + Shipping)</td>
          </tr>
          <tr>
            <td>TAX</td>
            <td>:</td>
            <td>${tax} (20%)</td>
          </tr>
          <tr>
            <td>Total</td>
            <td>:</td>
            <td>${finalAmount} (Subtotal + Tax)</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Cart;
