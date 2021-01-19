import React, { useState, useEffect } from "react";
import {
  OuterCard,
  InnerCard,
  CardWrapper,
  CardLink,
} from "../styles/Subscriptions";

export function Subscriptions() {
  const [subscriptions, setSubscriptions] = useState([]);

  function fetchSubscriptions() {
    // http://localhost:3000/subscriptions
    fetch(`${process.env.REACT_APP_BACKEND_URL}/subscriptions`)
      .then((res) => res.json())
      .then((body) => setSubscriptions(body));
  }

  useEffect(() => {
    fetchSubscriptions();
  }, []);

  async function onDeleteLinkClick(e, subscription) {
    try {
      e.preventDefault();
      if (window.confirm("Would you like to delete?")) {
        await fetch(
          `${process.env.REACT_APP_BACKEND_URL}/subscriptions/${subscription.id}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        fetchSubscriptions();
      }
    } catch (err) {
      console.log(err.message);
    }
  }

  return (
    <div>
      <h1>Subscriptions</h1>
      <CardWrapper>
        {subscriptions.map((subscription) => {
          return (
            <OuterCard key={subscription.id}>
              <InnerCard>
                <h2>Name: {subscription.name}</h2>
                <p>Price: ${subscription.price_per_month}</p>
                <p>Billing period: {subscription.billing_period}</p>
                <CardLink to={`/subscriptions/${subscription.id}`}>
                  Show
                </CardLink>
                <CardLink
                  onClick={(e) => onDeleteLinkClick(e, subscription)}
                  to={`/subscriptions/${subscription.id}`}
                >
                  Delete
                </CardLink>
                <CardLink to={`/subscriptions/${subscription.id}/edit`}>
                  Edit
                </CardLink>
              </InnerCard>
            </OuterCard>
          );
        })}
      </CardWrapper>
    </div>
  );
}
