
<p align="center"><img src="https://user-images.githubusercontent.com/60662264/119245719-247e1880-bb30-11eb-8bbf-3ee43f2469ca.png" /></p>

<p align="center">BrokenTable is a restaurant reservation application inspired by <a href="resy.com">Resy</a> and <a href="https://opentable.com">OpenTable</a> that is built on React/Redux, Ruby on Rails, and a PostgreSQL database.</p>

## Features and Implementation

### Create and Login Users

![login](https://user-images.githubusercontent.com/60662264/119245734-4a0b2200-bb30-11eb-9261-0a29f9754ec2.gif)
BrokenTable features back and front end user authentication using Rails, Active Record, and React-Router higher order components. Users are able to create an account as well as log into their account. Only logged in users are able to create restaurants, make reservations, and leave reviews. The users' database was seeded using Faker Ruby.

### Create and Search Restaurants

![search](https://user-images.githubusercontent.com/60662264/119245737-4ecfd600-bb30-11eb-9f0c-432bee87a49e.gif)
Google Maps’, TomTom’s, and Resy’s APIs were used to facilitate geolocation based searching to display restaurant map location. Resy's API was used to scrape restaurant details, but only provided the coordinates for a given restaurant. TomTom's API was used to get restaurant addresses. Google Maps' API was used for dragging and dropping the map to search restaurants. Rails is connected to AWS S3 for media storage and organization while maintaining content security with AWS IAM.

### Make Reservations

![new_reservation](https://user-images.githubusercontent.com/60662264/119245741-52635d00-bb30-11eb-9512-7e5d22e267b2.gif)
Scheduling / booking CRUD is managed by Active Record and PostgreSQL through transactional operations. A custom SQL query was utilized to avoid double bookings of restaurants for a given time slot and party size.

### Leave Ratings and Reviews

![write_review](https://user-images.githubusercontent.com/60662264/119245745-55f6e400-bb30-11eb-9e48-8d1de23223fc.gif)
Guests are able to leave reviews consisting of a star rating as well as a text description. The ratings/reviews were seeded using Faker Ruby.

### Favorite Restaurants

![fav](https://user-images.githubusercontent.com/60662264/119245750-5a230180-bb30-11eb-81bf-60119ddb42b8.gif)
![favorites_show](https://user-images.githubusercontent.com/60662264/119245752-5c855b80-bb30-11eb-9af2-034387aae02e.gif)
Logged in users are able to favorite / unfavorite restaurants. In the user's profile, they are able to see a list of their favorite restaurants.

## Future Direction for Project

Given more time, the following would be implemented:

### Expanded Search Ability

Users would be able to search restaurants by name and food type. Reservations would be available for restaurants in more cities.

### Receive Points for Booking and Usage of Site

Users can earn points by booking reservations. Points earned on reservations are accumulated and can be redeemed for rewards.

### Alerts

When a request is successful or not, there will be confirmation.

## Development

If you want to run Guard Livereload, go to the backend folder. In terminal, run "guard"
