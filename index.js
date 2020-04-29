// Code your solution here
function findMatching(drivers, name) {
    let matches = drivers.filter(driver => {
        return driver.toLowerCase() === name.toLowerCase();
    });
    return matches;
}

function fuzzyMatch(drivers, partialName) {
    let matches = drivers.filter(driver => {
        return driver.startsWith(partialName)
    });
    return matches;
}

function matchName(drivers, providedName) {
    let matches = drivers.filter(driver => {
        return driver.name === providedName
    })
    return matches;
}