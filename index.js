// Code your solution in this file!
// const Arrdrivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const returnFirstTwoDrivers = (drivers) => {
    
    return [drivers[0],drivers[1]];
}

const returnLastTwoDrivers = (drivers) => {
    return [drivers[2],drivers[3]];
}

// returnFirstTwoDrivers(Arrdrivers);
// returnLastTwoDrivers(Arrdrivers);

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
// console.log(returnFirstTwoDrivers(drivers));
// console.log(returnLastTwoDrivers(drivers));
// console.log(selectingDrivers)
const createFareMultiplier = (integer)=>{
    return function(fare){
        return fare * integer;
    }
}

const fareDoubler= (fareVar)=>{
    return createFareMultiplier(2)(fareVar)
}

const fareTripler= (fareVar)=>{
    return createFareMultiplier(3)(fareVar);
}

function selectDifferentDrivers(drivers, callback){
    return callback(drivers);
}