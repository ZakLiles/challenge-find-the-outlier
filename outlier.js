const outlier = arr => {
    let evens = []
    let odds = []
    arr.forEach(elem =>  elem % 2 === 0 ? evens.push(elem) : odds.push(elem));

    return evens.length === 1 ? evens[0] : odds[0]
}

console.log(outlier([2, 4, 0, 100, 4, 11, 2602, 36]))
console.log(outlier([160, 3, 1719, 19, 11, 13, -21]))