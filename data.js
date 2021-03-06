function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}


module.exports = function placeHolder() {
    let data = {};
    let count = 100;
    let randomDateValueA = randomDate(new Date(2012, 0, 1), new Date());
    let randomDateValueB = randomDate(new Date(2012, 0, 1), new Date());
    let randomDateValueC = randomDate(new Date(2012, 0, 1), new Date());

    for (let i=0; i<count; i++){
        let record = {
            id: null,
            firstName: null,
            lastName: null,
            history: [],
            tags:[],
        }
        record.id = getRandomInt(9999999999).toString();
        record.firstName = `firstName${i}`;
        record.lastName = `lastName${i}`;
        for (let j=0; j<getRandomInt(10); j++){
            let history = {
                id: null,
                beginning: null,
                end: null,
                duration: null,
                numberOfMeasurements: null,
                successfulMeasurements: null,
            }
            history.id = j;
            history.beginning = `${randomDateValueA.getDay()}
            .${randomDateValueA.getMonth()}
            .${randomDateValueA.getFullYear()}
            (${randomDateValueA.getHours()}:${randomDateValueA.getMinutes()})`;
            history.end = `${randomDateValueA.getDay()}
            .${randomDateValueA.getMonth()}
            .${randomDateValueA.getFullYear()}
            (${randomDateValueB.getHours()}:${randomDateValueB.getMinutes()})`;
            history.duration = `(${randomDateValueC.getHours()}:${randomDateValueC.getMinutes()}) Hours`;
            history.numberOfMeasurements = getRandomInt(100);
            history.successfulMeasurements = getRandomInt(100);
            record.history[j] = history;
        }
        record.tags.push(record.id);
        record.tags.push(record.firstName);
        record.tags.push(record.lastName);
        data[i] = record;
    }

    return data;
}