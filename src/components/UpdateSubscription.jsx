import React, { useState, useEffect } from "react";
import { Form } from "../styles/Form";
import { useParams, useHistory } from "react-router-dom";

export function UpdateSubscription() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [billingPeriod, setBillingPeriod] = useState("weekly");
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    // localhost:3000/subscriptions/10
    fetch(`${process.env.REACT_APP_BACKEND_URL}/subscriptions/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((subscription) => {
        setName(subscription.name);
        setPrice(subscription.price_per_month);
        setBillingPeriod(subscription.billing_period);
      });
  }, [id]);

  async function onFormSubmit(e) {
    try {
      e.preventDefault();
      await fetch(`${process.env.REACT_APP_BACKEND_URL}/subscriptions/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          subscription: {
            name: name,
            price_per_month: price,
            billing_period: billingPeriod,
          },
        }),
      });
      // redirect_to
      history.push("/subscriptions");
    } catch (err) {
      console.log(err.message);
    }
  }

  return (
    billingPeriod && (
      <>
        <h1>Edit Subscription</h1>
        <Form onSubmit={onFormSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Netflix"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input
              type="text"
              name="price"
              id="price"
              placeholder="20"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="billing-period">Billing Period</label>
            <select
              name="billing-period"
              id="billing-period"
              value={billingPeriod}
              onChange={(e) => setBillingPeriod(e.target.value)}
            >
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
              <option value="yearly">Yearly</option>
            </select>
          </div>
          <input id="submit" type="submit" value="Submit" />
        </Form>
      </>
    )
  );
}
