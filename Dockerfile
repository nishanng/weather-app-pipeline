# This is the dockerfile for the weather app 
# Dockerfile

FROM nginx:latest

COPY . /usr/share/nginx/html

EXPOSE 80
