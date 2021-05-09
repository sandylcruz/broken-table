# frozen_string_literal: true

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

callie = User.create!(username: 'calpal', password: 'password', email: 'calpal@gmail.com')
squeaky = User.create!(username: 'squeakfreak', password: 'password', email: 'squeaks@gmail.com')
stinky = User.create!(username: 'flapjack', password: 'password', email: 'flapjack@gmail.com')

nopa = Restaurant.create!(name: 'Nopa', description: 'A San Francisco Gathering Place',
                          location: '560 Divisadero St, SF, CA, 94117',
                          latitude: 37.774890, longitude: -122.437630,
                          submitter: callie)
lardoise = Restaurant.create!(name: "L'Ardoise", description: 'French bistro in San Francisco',
                              location: '151 Noe St, SF, CA 94114',
                              latitude: 37.766560, longitude: -122.433150,
                              submitter: squeaky)
zuni = Restaurant.create!(name: 'Zuni Cafe', description: 'Zuni Cafe opened in San Francisco on Febuarary 15, 1979',
                          location: '1658 Market St, SF, CA 94102',
                          latitude: 37.773610, longitude: -122.421430,
                          submitter: stinky)

Review.create!(author: callie, restaurant: nopa, rating: 5,
               body: "Cupcake ipsum dolor sit. Amet chocolate lemon drops
              topping dragée icing. Dessert bear claw halvah. Biscuit
              jelly beans fruitcake halvah gummi bears carrot cake
              gummies sweet croissant. Chupa chups sugar plum sesame
              snaps brownie marshmallow soufflé. Gummi bears gummies
              liquorice sweet topping. Chocolate bar pie chocolate.
              Caramels jujubes gingerbread jelly gummies jelly candy canes chocolate
              bar. Jelly-o brownie liquorice dragée cotton candy tiramisu
              jelly-o. Pie candy canes soufflé.

              Dragée icing sesame snaps icing cupcake wafer oat cake
              fruitcake. Pastry soufflé oat cake. Jelly beans dragée
              caramels candy canes. Dessert jujubes pudding bonbon
              halvah gummi bears jelly-o marzipan pie. Danish soufflé
              macaroon caramels lollipop. Tiramisu bonbon topping marzipan.
              Apple pie bonbon jujubes wafer lemon drops caramels jujubes.
              Dessert ice cream jujubes muffin.")
Review.create!(author: squeaky, restaurant: nopa, rating: 5,
               body: 'Port-salut jarlsberg the big cheese. Goat emmental who
               moved my cheese edam the big cheese cheese slices stilton
               stinking bishop. Stinking bishop manchego airedale brie
               taleggio port-salut gouda stilton. Cheese strings
               bocconcini emmental camembert de normandie dolcelatte
               stilton pecorino cheese slices. Who moved my cheese
               mozzarella queso.

              Swiss mascarpone cheesy feet. Parmesan cheese and biscuits
              when the cheese comes out everybody is happy paneer
              fromage cheese slices squirty cheese cheddar.
              Fromage frais brie cheese and biscuits melted cheese
              cheesecake stinking bishop pecorino st. agur blue cheese.
              Cheese strings queso who moved my cheese parmesan ricotta when
              the cheese comes out everybody is happy.')

Review.create!(author: stinky, restaurant: nopa, rating: 4,
               body: 'Gouda st. agur blue cheese roquefort. Roquefort
              fromage cheese slices st. agur blue cheese pepper jack
              rubber cheese brie squirty cheese. The big cheese
              fromage the big cheese feta fondue cheese on toast
              cheese dolcelatte. Fromage frais.')

Review.create!(author: squeaky, restaurant: lardoise, rating: 5, body: 'Very good')
Review.create!(author: stinky, restaurant: zuni, rating: 5, body: 'Excellent')
