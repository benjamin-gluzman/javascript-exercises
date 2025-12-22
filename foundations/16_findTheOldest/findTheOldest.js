const findTheOldest = function(people) {
    return people.reduce((oldest, curr) => {
        let currentYear = new Date().getFullYear();

        let oldestAge = calculateAge(oldest, currentYear);
        let currAge = calculateAge(curr, currentYear);

        if(oldestAge >= currAge) return oldest;
        else return curr;
    }, people[0])
};

function calculateAge(person, currentYear) {
    if(!('yearOfDeath' in person)) return currentYear - person.yearOfBirth;
    else return person.yearOfDeath - person.yearOfBirth;
}

// Do not edit below this line
module.exports = findTheOldest;
