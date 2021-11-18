import mpg_data from "./data/mpg_data.js";

/*
mpg_data is imported for you but that is for testing purposes only. All of the functions should use
a car_data param that is supplied as the first parameter.

As you write these functions notice how they could possibly be chained together to solve more complicated
queries.
 */

/**
 * @param {array} car_data - an instance of mpg_data that should be used for filtering.
 * @param minHorsepower {number}
 * @param minTorque {number}
 *
 * @return {array} An array of car objects with horsepower >= minHorsePower and torque >= minTorque
 * sorted by horsepower in descending order.
 *
 */
export function searchHighPower(car_data, minHorsepower, minTorque) {
    let _filtered = car_data.filter(car => car.horsepower >= minHorsepower).filter(car => car.torque >= minTorque);
    let _sorted = _filtered.sort((a, b) => b.horsepower - a.horsepower);
    return _sorted;
}


/**
 * @param {array} car_data
 * @param minCity
 * @param minHighway
 *
 *
 * @return {array} An array of car objects with highway_mpg >= minHighway and city_mpg >= minCity
 * sorted by highway_mpg in descending order
 *
 */
export function searchMpg(car_data, minCity, minHighway) {
    let _filtered = car_data.filter(car => car.highway_mpg >= minHighway).filter(car => car.city_mpg >= minCity);
    let _sorted = _filtered.sort((a, b) => b.highway_mpg - a.highway_mpg);
    return _sorted;
}


/**
 * Find all cars where 'id' contains the search term below.
 * Sort the results so that if the term appears earlier in the string
 * it will appear earlier in the list. Make sure searching and sorting ignores case.
 * @param car_data
 * @param searchTerm A string to that is used for searching
 * @returns {[]} array of cars
 */
export function searchName(car_data, searchTerm) {
    // use .toLowerCase to make the search parameter and string both negative
    let _array = [];
    for (let k = 0; k < 60; k++) {
        for (let i = 0; i < car_data.length; i++) {
            if (car_data[i].id.toLowerCase().search(searchTerm.toLowerCase()) == k) {
                _array.push(car_data[i]);
            }
        }
    }
    return _array;
}


/**
 * Find all cars made in the years asked for.
 * Sort the results by year in descending order.
 *
 * @param car_data
 * @param {number[]} years - array of years to be included in the results e.g. [2010, 2012]
 * @returns {[]} an array of car objects
 */
export function searchByYear(car_data, years) {
    let _hold = [];
    years = years.sort(function(a, b){return b-a});
    for (let i = 0; i < years.length; i++) {
        let _filtered = car_data.filter(car => car.year == years[i]);
        _hold.push(..._filtered);
    }
    //let _sorted = _hold.sort((a, b) => b.year - a.year);
    return _sorted;
}
