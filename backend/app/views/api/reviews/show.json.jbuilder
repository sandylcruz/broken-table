# frozen_string_literal: true

json.partial! 'api/reviews/review', review: @review
json.average_rating @review.restaurant.average_rating
