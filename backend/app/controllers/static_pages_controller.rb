# frozen_string_literal: true

# This is the static application controller
class StaticPagesController < ApplicationController
  def root
    puts "***************"
    puts current_user
    render :root
  end
end
