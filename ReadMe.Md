# Weather App Deployment 
Welcome to the Weather App! This is a simple web application that allows users to check the weather conditions for a particular location. The app is built using HTML, CSS, and JavaScript, and it uses the OpenWeather API to fetch weather data.

# Features
The Weather App includes the following features:

- Search for weather conditions in a specific location
- View current temperature, weather conditions, and other relevant data
- View hourly and daily weather forecasts
- Switch between Fahrenheit and Celsius temperature units

# Getting Started
To get started with the Weather App, follow these steps:

. Clone the repository: git clone https://github.com/nishanng/weather-app-pipeline.git

. Navigate to the project directory: cd weather-app

. Open index.html in your web browser

That's it! You should now be able to use the Weather App to check the weather conditions in any location.

Deployment Pipeline
If you want to create a deployment pipeline for the Weather App using Docker and Jenkins, follow these steps:

- Install Docker on your system
- Build a Docker image of the Weather App: docker  build -t weather-app .
- Run the Docker container: docker run -p 80:80 -d weather-app
- Install Jenkins on your system
- Create a new Jenkins job and configure it to pull the code from the repository and build a Docker image
- Configure the Jenkins job to push the Docker image to a registry (e.g., Docker Hub)
- Deploy the Docker image to a Kubernetes cluster (optional)

By following these steps, you can create a fully automated deployment pipeline for the Weather App that utilizes Docker, Jenkins, and Kubernetes (if desired).

You could find the application here: 
                                        https://nishanng.github.io/weather-app-pipeline/

