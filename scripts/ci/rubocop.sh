#!/bin/bash
set -e

echo "About to perform rubocop run"

cd ./backend

rubocop

echo "Rubocop was a success"