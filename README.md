# Subscriptions App

## User stories

### What it is?

- Subscription tracker
- Track your subscriptions that you have (netflix, apple music etc)
- As a user i can add subscriptions to the service and these can then viewed over the course of the subscription being valid
- CRUD

### Extra features 

- Use active job in rails to send an email (sendgrid) or text message (twillio) to notify that the subscription is about to be billed or expire

## Data that we need

- ERD, models
- Subscriptions: id, name (netflix, disney plus), price_per_month, billing_date

## Client side routes

- Home route for displaying subscriptions "/subscriptions"
- Individual subscription route "/subscriptions/:id"
- Create subscription page "/subscriptions/new"

## Wireframes 

## Architecture diagram