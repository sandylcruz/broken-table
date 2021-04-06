# frozen_string_literal: true

# This is the static application controller
class StaticPagesController < ApplicationController
  def root
    render :root
  end
end
