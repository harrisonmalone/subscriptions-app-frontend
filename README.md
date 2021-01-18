# Subscriptions App

## User stories

### What it is?

1. subscription tracker
2. track your subscriptions that you have (netflix, apple music etc)
3. as a user i can add subscriptions to the service and these can then viewed over the course of the subscription being valid
4. CRUD

### Extra features 

1. use active job in rails to send an email (sendgrid) or text message (twillio) to notify that the subscription is about to be billed or expire

## Data that we need

- ERD, models
- Subscriptions: id, name (netflix, disney plus), price_per_month, billing_date

## Client side routes

1. home route for displaying subscriptions "/subscriptions"
2. individual subscription route "/subscriptions/:id"
3. create subscription page "/subscriptions/new"

## Wireframes 

## Architecture diagram