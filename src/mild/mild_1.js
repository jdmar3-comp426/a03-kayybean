/**
 *
 * @param {number} a
 * @param {number} b
 * @returns {string} 'a + b = (a + b)'
 *
 * example: sumToString(3, 4)
 * returns: '3 + 4 = 7'
 * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
 */
export function sumToString(a, b) {
    let _sum = a + b;
    return a + " + " + b + " = " + _sum;
}


/**
 *
 * @param {number} startNumber
 * @param {number} endNumber
 * @returns {number[]}
 *
 * example: getIncreasingArray(3, 7)
 * returns: [ 3, 4, 5, 6, 7 ]
 *
 */
export function getIncreasingArray(startNumber, endNumber) {
    let _array = [];
    for (let i = 0; startNumber + i <= endNumber; i++) {
        _array.push(startNumber + i);
    }
    return _array;
}

/**
 *
 * @param {number[]} numbers
 * @return {{min: number, max: number}}
 * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
 * and https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
 */
export function maxAndMin(numbers) {
    let _min = Number.MAX_VALUE;
    let _max = Number.MIN_VALUE;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < _min) {
            _min = numbers[i];
        }
        if (numbers[i] > _max) {
            _max = numbers[i];
        }
    }
    return {
        max: _max,
        min: _min
    };
}

/**
 *
 * @param array - An array of any primitive type
 * @returns {object} Object where the keys are the values that were passed in
 * and the value was the number of times it occurred.
 *
 * example: countArray([3, 6, 3, 2, 2, 3, 'some', 'hello', 'some', [1, 2]])
 * returns: {'2': 2, '3': 3, '6': 1, some: 2, hello: 1, '1,2': 1}
 *
 */
export function countArray(array) {
    if (array.length == 0) {
        return {};
    }
    let _counted = array.reduce(function (_all, _thing) {
        if (_thing in _all) {
            _all[_thing]++;
        }
        else {
            _all[_thing] = 1;
        }
        return _all;
    }, {})
    return _counted;
}
