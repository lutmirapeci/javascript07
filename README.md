# BrainsterChallenges_LutmiraPeciFE3

## Challenge-14

### Overview: Objects in JavaScript

```
Create a simple weather dashboard application to display weather data from the database (array of objects). The application will allow the users to search for cities, display current weather conditions, a 5-day forecast and store recent searches in the local storage. Complete this challenge using JavaScript objects and classes. Refer to the screenshots and the demo video for the visual layout of the application.
```

# Exercise 01

```
Create a function to get from the database the weather reports and implement a search functionality to display the current weather data for the searched city.
1. Use the JavaScript object weatherData which has the following information: city, temperature, humidity, windSpeed.
2. Create a function fetchWeather to display weather data based on the search input
3. Create a function displayCurrentWeather to display in the DOM the current weather details.
```

# Exercise 02

```
Create a function to get the latest 5-day forecast for the city that the user searched. There is no data for 5-day forecasts for a given city, so in this case you can simulate a 5-day forecast by getting the temperature for a given city from the current database, and just add 1 more in a loop. For example, if the current temperature in Berlin is 14°C, you can simulate a 5-day forecast by showing 15°C, 16°C, 17°C, 18°C, 19°C for each upcoming day.
1. Create a function fetchForecast to display a 5 day weather forecast data based on the search input.
2. Create a function displayForecast to display in the DOM the current weather forecast.
```

# Exercise 03

```
Save recent searches in the local storage and show them in the DOM under the weather forecast.
1. Create a separate custom function saveRecentSearch to save searches in local storage.
2. Create a separate custom function displayRecentSearches to get the data from local storage and display them correctly in the DOM.
```

# Exercise 04(BONUS)

```
Make the recent searches list items clickable so that it allows the users to re-run a search by clicking on a city name from this recent searches list.
```

## STEPS

- **Step1**: I initialised the Exercises folders for _Challenge14_

- **Step2**: Connected the Solutions folder with gitlab

  - _git init_
  - _git remote add origin https://git.brainster.co/Lutmira.Peci-3/brainsterchallenges_lutmirapecife3_
  - _git pull_

- **Step3**: _git checkout Challenge-14-JS_

- **Step4**: _git add ._

- **Step5**: _git commit -m "commit message"_

- **Step6**: _git push_

- **Step7**: For every solution added:

  - _git add <file where a change is made or . for all the changes>_
  - _git commit -m "commit message"_
  - _git push_
