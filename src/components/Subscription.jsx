import React, { useState, useEffect } from "react";
import { Card } from "../styles/Subscriptions";
import { Link } from "react-router-dom";

export function Subscription(props) {
  const [subscription, setSubscription] = useState(null);
  const id = props.match.params.id;

  useEffect(() => {
    // localhost:3000/subscriptions/10
    fetch(`${process.env.REACT_APP_BACKEND_URL}/subscriptions/${id}`)
      .then((res) => res.json())
      .then((subscription) => {
        setSubscription(subscription);
      });
  }, [id]);

  return (
    subscription && (
      <>
        <Card>
          <h2>Name: {subscription.name}</h2>
          <p>Price: {subscription.price_per_month}</p>
          <p>Billing period: {subscription.billing_period}</p>
        </Card>
        <Link to="/" onClick={props.history.goBack}>
          Back
        </Link>
      </>
    )
  );
}
