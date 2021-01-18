import React, { useState } from "react";
import {
  SubscriptionForm,
  SubscriptionLabel,
  SubscriptionInput,
  SubscriptionInputSubmit,
  SubscriptionSelect,
} from "../styles/NewSubscription";

export function NewSubscription({ history }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [billingPeriod, setBillingPeriod] = useState("weekly");

  async function onFormSubmit(e) {
    try {
      e.preventDefault();
      await fetch(process.env.REACT_APP_BACKEND_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: [
            {
              id: "INCREMENT",
              name: name,
              price_per_month: price,
              billing_period: billingPeriod,
            },
          ],
        }),
      });
      // redirect_to
      history.push("/subscriptions");
    } catch (err) {
      console.log(err.message);
    }
  }

  return (
    <SubscriptionForm onSubmit={onFormSubmit}>
      <SubscriptionLabel htmlFor="name">Name</SubscriptionLabel>
      <SubscriptionInput
        type="text"
        name="name"
        id="name"
        placeholder="Netflix"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <SubscriptionLabel htmlFor="price">Price</SubscriptionLabel>
      <SubscriptionInput
        type="text"
        name="price"
        id="price"
        placeholder="20"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <SubscriptionLabel htmlFor="billing-period">
        Billing Period
      </SubscriptionLabel>
      <SubscriptionSelect
        name="billing-period"
        id="billing-period"
        value={billingPeriod}
        onChange={(e) => setBillingPeriod(e.target.value)}
      >
        <option value="weekly">Weekly</option>
        <option value="monthly">Monthly</option>
        <option value="yearly">Yearly</option>
      </SubscriptionSelect>
      <SubscriptionInputSubmit id="submit" type="submit" value="Submit" />
    </SubscriptionForm>
  );
}
