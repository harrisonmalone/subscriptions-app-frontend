import React, { useState, useEffect } from "react";
import { CardLink } from '../styles/Subscriptions'

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
        <div>
          <h2>Name: {subscription.name}</h2>
          <p>Price: ${subscription.price_per_month}</p>
          <p>Billing period: {subscription.billing_period}</p>
        </div>
        <CardLink to="/" onClick={props.history.goBack}>
          Back
        </CardLink>
      </>
    )
  );
}
