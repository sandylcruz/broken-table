# frozen_string_literal: true

module Api
  # Reviews Controller class
  class ReviewsController < ApplicationController
    skip_before_action :verify_authenticity_token

    def create
      @review = Review.new(review_params)
      @review.author = current_user

      if @review.save
        render :show
      else
        render json: @review.errors.full_messages, status: :unprocessable_entity
      end
    end

    private

    def review_params
      params.require(:review).permit(:restaurant_id, :user_id, :rating, :body)
    end
  end
end
