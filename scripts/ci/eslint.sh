#!/bin/bash
set -e

echo "About to perform eslint run"

cd ./frontend

yarn eslint

echo "ESLint was a success"