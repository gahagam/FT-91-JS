//1

class Student {
    constructor(name, surname, averageGrade) {
        this.name = name;
        this.surname = surname;
        this.averageGrade = averageGrade;
    }
}

function shellSort(students) {
    if (!Array.isArray(students)) {
        return []; 
    }

    const n = students.length;
    let gap = Math.floor(n / 2);

    while (gap > 0) {
        for (let i = gap; i < n; i++) {
            const temp = students[i];
            let j = i;

            while (j >= gap && students[j - gap].averageGrade < temp.averageGrade) {
                students[j] = students[j - gap];
                j -= gap;
            }
            students[j] = temp;
        }
        gap = Math.floor(gap / 2);
    }
    return students;
}

const students = [
    new Student("Анна", 4.5),
    new Student("Олег", 4.8),
    new Student("Иван", 2.9),
    new Student("Виктория", 3.6),
];

const sortedStudents = shellSort(students);
sortedStudents.forEach(student => console.log(`${student.name} : ${student.averageGrade}`));



//2

function binarySearch(students, targetName, targetSurname) {
    if (!Array.isArray(students)) {
        return -1;
    }

    const sortedStudents = [...students].sort((a, b) => {
        const fullNameA = (a.surname || "") + " " + (a.name || "").toLowerCase(); 
        const fullNameB = (b.surname || "") + " " + (b.name || "").toLowerCase(); 
        return fullNameA.localeCompare(fullNameB);
    });

    let left = 0;
    let right = sortedStudents.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const currentStudentName = (sortedStudents[mid].surname || "") + " " + (sortedStudents[mid].name || "").toLowerCase(); 
        const targetFullName = (targetSurname || "") + " " + (targetName || "").toLowerCase();

        if (currentStudentName === targetFullName) {
            return students.findIndex(student => { 
                const originalStudentName = (student.surname || "") + " " + (student.name || "").toLowerCase();
                return originalStudentName === targetFullName;
            });
        } else if (currentStudentName < targetFullName) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}

const studentsForSearch = [
    new Student("Иван", "Иванов", 3.5),
    new Student("София", "Вольская", 4.9),
    new Student("Анна", "Романова", 2.5),
    new Student("Мария", "Иванова", 3.3),
];

const x1 = binarySearch(studentsForSearch, "Мария", "Иванова");
console.log(x1); 

const x2 = binarySearch(studentsForSearch, "Иван", "Иванов");
console.log(x2); 