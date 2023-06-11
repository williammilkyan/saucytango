import React, { useState } from "react";

function FoodOrderForm() {
  const [name, setName] = useState("");
  const [phone, setPhone ]= useState("");
  const [address, setAddress] = useState("");
  const [order, setOrder] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Order Successful! Your order was ${order}. Please show your confirmation number for pickup`);
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input id="name" value={name} type="text" name="name"
      onChange={(e) => setName(e.target.value)}/>

      <label htmlFor="phone">Phone:</label>
      <input id="phone" value={phone} type="text" name="phone"
      onChange={(e) => setPhone(e.target.value)}/>

      <label htmlFor="address">Address:</label>
      <input id="address" value={address} type="text" name="address"
      onChange={(e) => setAddress(e.target.value)}/>

      <label htmlFor="order">Order:</label>
      <input id="order" value={order} type="text" name="order"
      onChange={(e) => setOrder(e.target.value)}/>

      <button type="submit">Submit Order</button>
    </form>
    )
}

export default FoodOrderForm;