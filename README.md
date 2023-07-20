# Transport routes ui
Frontend repo:
https://github.com/OlehParyshkura/transport-routes-ui


Technologies:

- Node.js (Serverless AWS)
- Vue.js (Nuxt)
- MySQL or NoSQL database
- REST API and CRUD functionality

Task:

A transport company needs a route control system and review of personal transport. It is necessary to implement a web interface, as well as a REST API, which allows viewing the list of available routes, as well as the list of company machines. The user must be able to create, delete, edit the route and the transport list, as well as assign free transport to an available route.

***The route should have approximately the following fields:***

- Id of the route
- The city of the start of the route
- The city of the end of the route
- Distance between cities in kilometers
- Departure date
- Completion date
- Required type of transport ('cargo', 'passenger', etc.)
- Expected revenue in dollars
- Id of the transport carrying cargo on this route
- Status (pending/in progress/completed)

***The vehicle should have approximately the following fields:***

- Transport ID
- License plate
- Status (available/busy)
- Model
- Purchase date
- Mileage
- Type of transport (cargo/passenger, etc.)

Requirements:

- Publishing the code in a public repository (Github/Gitlab)
- The database should contain initial data
- The tables should be included in the migrations
- It is allowed to use third-party services/libraries/components
- Application hosting on any cloud service.
