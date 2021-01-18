import React, { useState, useEffect } from "react";
import { Card, CardWrapper } from "../styles/Subscriptions";
import { Link } from "react-router-dom";

export function Subscriptions() {
  const [subscriptions, setSubscriptions] = useState([]);

  useEffect(() => {
    fetch("https://sheetdb.io/api/v1/wo7lxtef4quqc")
      .then((res) => res.json())
      .then((body) => setSubscriptions(body));
  }, []);

  return (
    <div>
      <h1>Subscriptions</h1>
      <CardWrapper>
        {subscriptions.map((subscription) => {
          return (
            <Card key={subscription.id}>
              <h2>Name: {subscription.name}</h2>
              <p>Price: ${subscription.price_per_month}</p>
              <p>Billing period: {subscription.billing_period}</p>
              <Link to={`/subscriptions/${subscription.id}`}>Show</Link>
            </Card>
          );
        })}
      </CardWrapper>
    </div>
  );
}
