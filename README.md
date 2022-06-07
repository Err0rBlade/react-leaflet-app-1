## Application overview

⚠ **Primary Aim is to find out major patterns of criminal activities which will help the anti-criminal agencies to take actions beforehand. ⚠

## Proposed System
User can interact with the system for the following:
- Safe travel
The system can be used by any user who wants to travel safely. The user’s current location is monitored using the phone GPS. The user will then enter the destination. With the help of the Leaflet javascript Routing Machine API, the shortest route will be visible to the user. By dragging the route given over the map, the user can maneuver the route, avoiding any crime clusters on the map, according to the safety requirements. The UI will provide all functionalities related to directions of the route selected, safety value of the streets, enroute destinations etc.
- Feedback
After the safe completion of the journey, the user will be prompted to fill out a feedback form where additional information required to the system is taken which will help in improving the output. This information is fed back into the database, which will improve the further iterations of the clustering function.
Information taken would be regarding- 
The safety of the route,
Any suspicious activity that may have occurred,
Presence of any CCTV cameras over the route,
Condition of street lights and
Overall experience with the system such as UI design and usability.


## The Routing Mechanism

- Leaflet, a javascript based API is used for map functions on the page. The leaflet ‘Routing machine’ provides all routing requirements for the project. 

## UI - Features

- Login page with success/error messages
- Register page with success/error messages
- ROUTING Layout showing primary and alternate directions
- DRAGGABLE Route.
- Option to add waypoints
- Different Tiles to choose from 
- Protected Profile page route that needs authentication to access
- Persistence achieved using Sessions, with session ID stored on Cookie
- Logout deletes session in database and cookie from browser
- Fully responsive across Desktop, Tablet and Mobile

## My Research Paper

```
 https://sersc.org/journals/index.php/IJFGCN/article/view/17786
```

## Prerequisites

- Node.js
- NPM
- React
- MongoDB Atlas MongoURI


## Quick Start

Clone the repository

```
 https://github.com/Err0rBlade/react-leaflet-app-1.git
```

Install packages for Node backend

```
 cd ReactLeafletApp
 npm install
```

Install packages for React client

```
 cd ReactLeafletApp/client
 npm install
```

Start Dev Server ( both React server and Nodejs server )

```
 npm run dev
```

## Image Gallery

**Homepage**

<img src="https://i.ibb.co/y5zvSWK/ss1.png"/>

**Login**

<img src="https://i.ibb.co/f92RHbP/ss3.png"/>

**Register**

<img src="https://i.ibb.co/0qyvv0Q/ss2.png"/>

**Map Page**

<img src="https://i.ibb.co/yPXNRPp/ss4.png"/>
