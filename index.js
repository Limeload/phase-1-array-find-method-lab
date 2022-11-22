// code your solution here
function superbowlWin(record) {
    const winFinder = record.find(object => object.result === "W")
    return winFinder ? winFinder.year : undefined
}