SELECT *
FROM reservation_requests
JOIN restaurants ON restaurants.id = reservation_requests.restaurant_id
WHERE restaurants.id = potential_restaurant_id 
AND reservation_requests.reservation_party_size + potential_party_size <= restaurants.available_table_size
AND restaurants.available_tables 


/*
Account for 
- Given time slot, what is the availability
- Complements can only submit across same restaurant (done)
- select restaurant by restaurant id
- check restaurants availability for that date at that time for that party size
- restaurant has capacity of size 40
- if 


- upper scope: query to make sure to not go over capacity,
- lower scope: make sure there's at least 2 groups
*/