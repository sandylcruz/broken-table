# Deploying

This application is currently hosted on Heroku.

Unfortunately, the Heroku "buildpacks" all seem to rely on having the application at the top level, but our application, more appropriately, places the Rails server in `/backend` and the React application in `/frontend`.
This creates a whole bunch of headaches.

## How It Runs

We specifically have to have the `package.json` and `Gemfile` stuff at the top level so the poorly written buildpacks are able to work. The two buildpacks we need are the Node and Ruby ones. Ruby must be last in the ordering of the buildpacks.

The Ruby buildpack expects the root of the application to be a Rails application, but it's not!
To account for this, we hijack the initialization process via a custom `Procfile`.
The `web` entry is what the Ruby buildpack will execute on initialization.
So, what we do is force it to change directories to `/backend` before doing its thing.

## Running Rails Commands

Any command we would _expect_ to be able to run via `heroku run` must specifically be run by using `heroku run bash`, changing directories to `/backend`.
You might also be able to do `heroku run cd backend &&` in place of `heroku run`, but we haven't tried that as of this writing.
