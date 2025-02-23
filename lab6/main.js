//1
function findCommonElements(array1, array2) {
    const set1 = new Set(array1);
    const set2 = new Set(array2);
    const commonElements = [...set1].filter((item) => set2.has(item));

    return commonElements;
}

const array1 = [1, 2, 5, 9, 4];
const array2 = [1, 8, 7, 6, 4];
console.log(findCommonElements(array1, array2)); 

//2
function countOccurrences(array) {
    if (!Array.isArray(array)) {
        return new Map();
    }
    const occurrences = new Map();

    for (const element of array) {
        if (occurrences.has(element)) {
            occurrences.set(element, occurrences.get(element) + 1);
        } else {
            occurrences.set(element, 1);
        }
    }
    return occurrences;
}

const array3 = [1, 3, 2, 3, 3, 3, 8];
console.log(countOccurrences(array3));

//3
class Student {
    constructor(name, group) {
        this.name = name;
        this.group = group;
    }
}

function countLargestGroup(students) {
    const counts = new Map();

    for (const student of students) {
        const group = student.group;
        if (counts.has(group)) {
            counts.set(group, counts.get(group) + 1);
        } else {
            counts.set(group, 1);
        }
    }

    let maxCount = 0;
    for (const count of counts.values()) {
        if (count > maxCount) {
            maxCount = count;
        }
    }

    return maxCount;
}

const students = [
    new Student("Иван", "3"),
    new Student("Арина", "4"),
    new Student("Мария", "2"),
    new Student("Олег", "5"),
    new Student("Артем", "5"),
    new Student("Федор", "4"),
];