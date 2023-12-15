
const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice(0, 2);
};

const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const driversArray = ["Antonia", "Nuru", 'AMari', 'Mo'];

const result = returnFirstTwoDrivers(driversArray);
console.log(result);


function createFareMultiplier(multiplier){
    return function (fare){
        return fare * multiplier
    }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, selectingFunction){
    return selectingFunction(drivers);
}

    const FirstTwoDrivers = selectDifferentDrivers(driversArray,returnFirstTwoDrivers) 


