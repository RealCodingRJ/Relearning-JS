const set = new Set([25, 12, 34]);

const setMap= new Map([
    [1, "Ryan"],
    [2, "Kyle"],
    [3, "Luke"]
]);

setMap.forEach(e => {
    console.log(e);
})

console.log(set.union(setMap))