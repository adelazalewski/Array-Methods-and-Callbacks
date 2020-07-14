import { fifaData } from './fifa.js';
console.log(fifaData);

console.log('its working');
// console.log(fifaData[0].Year);
// console.log(fifaData[750]["Home Team Name"]);

// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */

const homeTeam = fifaData.filter((name) => {
return name.Year === 2014 && name.Stage === "Final";
});
console.log(homeTeam);
console.log(homeTeam[0]["Home Team Name"]);
const awayTeam = fifaData.filter((name) => {
    return name.Year === 2014 && name.Stage === "Final";
});
console.log(awayTeam);
console.log(awayTeam[0]["Away Team Name"]);
console.log(homeTeam[0]["Home Team Goals"]);
console.log(awayTeam[0]["Away Team Goals"]);
console.log(homeTeam[0]["Win conditions"]);


/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data) {
 
let finals = data.filter(item =>item.Stage === "Final");
return finals;  
};
console.log(getFinals(fifaData));

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(callback) {
    let year = callback.map(item => item.Year);
    return year;
}
console.log(getYears(getFinals(fifaData)));

/* Task 5: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(callback) {

const winNames = callback.map((item) => {
    if(item["Home Team Goals"] > item["Away Team Goals"]){
        return item["Home Team Name"];
    }else if(item["Away Team Goals"] > item["Home Team Goals"]){
        return item["Away Team Name"];
    }else if(item["Away Team Goals"] === item["Home Team Goals"] && item["Win conditions"].split(' ')[0] === item["Home Team Name"]){
        return item["Home Team Name"];
    }else if(item["Away Team Goals"] === item["Home Team Goals"] && item["Win conditions"].split(' ')[0] === item["Away Team Name"]){
        console.log(winName);
        return item["Away Team Name"];
    }
    
});
return winNames;
}

//console.log(getFinals(fifaData)[9]["Win conditions"].split(" ")[0]);
console.log(getWinners(getFinals(fifaData)));

/* Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(callbackYears, callbackGetWinners) {
    const winnerNames = callbackGetWinners.map((country, index)=>{
        return `In ${callbackYears[index]}, ${country} won the world cup`;

    })
    return winnerNames;
};

console.log(getWinnersByYear(getYears(getFinals(fifaData)), getWinners(getFinals(fifaData))));

/* Task 7: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {
let homeTeamAvgGoals = data.reduce((acc, currentValue)=>acc + currentValue["Home Team Goals"], 0);
console.log(homeTeamAvgGoals/851);
let awayTeamAvgGoals = data.reduce((acc, currentValue)=>acc + currentValue["Away Team Goals"], 0);
console.log(awayTeamAvgGoals/851);

};

getAverageGoals(fifaData);

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

};

getCountryWins();


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
