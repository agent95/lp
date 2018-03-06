# Microservices Architecture Sketch

This is a sketch to illustrate a Microservices Architecture of an eCommerce Web Application.

## This approach has the following advantages:
- Better testability
- Easier to isolate bugs
- Easier to maintain and deploy
- Easier to change the technology stack

## Layers
### User Interface Layer:
Web App and Mobile App

### Service Layer : 
A service publishes an event when its data changes, other services consume the event and update their data.

Each service has a set of responsibilities:

 - **Account Service** : Managing user accounts
 - **Inventory Service** : Verify inventory
 - **Shipping Service** : Shipping complete orders
 
### Database Layer: 
Each service has its own database to ensure loose coupling.
