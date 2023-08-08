const workers = [
    {"name":"John","salary":500},
    {"name":"Mike","salary":1300},
    {"name":"Linda","salary":1500}];

function getWorthyWorkers(workersArr) {

    let WorthyWorkers = [];

    for (let i=0; i<workersArr.length; i++) {

        if (workersArr[i].salary > 1000) {

            WorthyWorkers.push(workersArr[i].name);
        }
    }

    return WorthyWorkers;
}

console.log(getWorthyWorkers(workers));