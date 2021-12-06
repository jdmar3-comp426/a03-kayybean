import mpg_data from "./data/mpg_data.js";
import { getStatistics } from "./medium_1.js";

/*
This section can be done by using the array prototype functions.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
see under the methods section
*/


/**
 * This object contains data that has to do with every car in the `mpg_data` object.
 *
 *
 * @param {allCarStats.avgMpg} Average miles per gallon on the highway and in the city. keys `city` and `highway`
 *
 * @param {allCarStats.allYearStats} The result of calling `getStatistics` from medium_1.js on
 * the years the cars were made.
 *
 * @param {allCarStats.ratioHybrids} ratio of cars that are hybrids
 */
export const allCarStats = {
  avgMpg: {
    city_mpg: getStatistics(mpg_data.keys("city_mpg")).mean,
    highway_mpg: getStatistics(mpg_data.keys("highway_mpg")).mean
  },
  allYearStats: getStatistics(mpg_data.keys("year")),
  ratioHybrids: (mpg_data.filter(car => car.hybrid == true).keys("hybrid").length / mpg_data.length),
};


/**
 * HINT: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
 *
 * @param {moreStats.makerHybrids} Array of objects where keys are the `make` of the car and
 * a list of `hybrids` available (their `id` string). Don't show car makes with 0 hybrids. Sort by the number of hybrids
 * in descending order.
 *
 *[{
 *     "make": "Buick",
 *     "hybrids": [
 *       "2012 Buick Lacrosse Convenience Group",
 *       "2012 Buick Lacrosse Leather Group",
 *       "2012 Buick Lacrosse Premium I Group",
 *       "2012 Buick Lacrosse"
 *     ]
 *   },
 *{
 *     "make": "BMW",
 *     "hybrids": [
 *       "2011 BMW ActiveHybrid 750i Sedan",
 *       "2011 BMW ActiveHybrid 750Li Sedan"
 *     ]
 *}]
 *
 *
 *
 *
 * @param {moreStats.avgMpgByYearAndHybrid} Object where keys are years and each year
 * an object with keys for `hybrid` and `notHybrid`. The hybrid and notHybrid
 * should be an object with keys for `highway` and `city` average mpg.
 *
 * Only years in the data should be keys.
 *
 * {
 *     2020: {
 *         hybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         },
 *         notHybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         }
 *     },
 *     2021: {
 *         hybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         },
 *         notHybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         }
 *     },
 *
 * }
 */
export const moreStats = {
  makerHybrids: mpg_data.reduce((acc, obj) => {
    if (acc.findIndex(item => item.make == obj.make) == -1) {  //make does not exist on array
      let hybrids = mpg_data.filter(car => car.make == obj.make).filter(car => car.hybrid == true).map(car => car.id);
      //gives cars of make and hybrid id array
    }
    // use acc.push to add obj.make 
    acc.push({ make: obj.make, hybrids: hybrids });
    return acc;
  }),
  avgMpgByYearAndHybrid: mpg_data.reduce((acc, obj) => {
    // see if the year already exists in the accumulator
    if (acc.findIndex(item => item.year == obj.year) == -1) {  //year does not exist on accumulator
      //calc the hybrid city and highway mpg
      let hyb_city = getStatistics(mpg_data.filter(car => car.year == obj.year).filter(car => car.hybrid == true).map(car => car.city_mpg)).mean;
      let hyb_highway = getStatistics(mpg_data.filter(car => car.year == obj.year).filter(car => car.hybrid == true).map(car => car.highway_mpg)).mean;

      //calc the non hybrid city and highway mpg
      let reg_city = getStatistics(mpg_data.filter(car => car.year == obj.year).filter(car => car.hybrid == false).map(car => car.city_mpg)).mean;
      let reg_highway = getStatistics(mpg_data.filter(car => car.year == obj.year).filter(car => car.hybrid == false).map(car => car.highway_mpg)).mean;

      acc[obj.year] = {
        hybrid:
        {
          city: hyb_city,
          highway: hyb_highway
        },
        notHybrid:
        {
          city: reg_city,
          highway: reg_highway
        }
      };
    }
  })

};
