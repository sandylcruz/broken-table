#!/bin/bash
set -e

echo "About to perform RSpec tests"

cd ./backend

POSTGRES_PASSWORD=postgres POSTGRES_USER=postgres RAILS_ENV=test bundle exec rspec

echo "RSpec was a success"