
const studentJSON = {
    "фамилия": "Иванов",
    "имя": "Иван",
    "marks": [
        { "subject": "Математика", "mark": 5 },
        { "subject": "Физика", "mark": 4 },
        { "subject": "Информатика", "mark": 5 },
        { "subject": "Математика", "mark": 3 }
    ]
};

function printStudentInfo(student) {
    console.log("Фамилия: " + student.фамилия);
    console.log("Имя: " + student.имя);
    console.log("Оценки:");
    for (const mark of student.marks) {
        console.log("  " + mark.subject + ": " + mark.mark);
    }
}

printStudentInfo(studentJSON);



class Mark {
    constructor(subject, mark) {
        this.subject = subject;
        this.mark = mark;
    }
}

class Student {
    constructor(фамилия, имя, marks = []) {
        this.фамилия = фамилия;
        this.имя = имя;
        this.marks = marks;
    }


    getAverage() { //ср оценка
        if (this.marks.length === 0) {
            return 0;
        }
        let sum = 0;
        for (const mark of this.marks) {
            sum += mark.mark;
        }
        return sum / this.marks.length;
    }


    getMarksBySubject(subject) { //возвр
        const subjectMarks = [];
        for (const mark of this.marks) {
            if (mark.subject === subject) {
                subjectMarks.push(mark.mark);
            }
        }
        return subjectMarks;
    }


    addMark(subject, mark) {
        this.marks.push(new Mark(subject, mark));
    }

    removeMarksBySubject(subject) {
        this.marks = this.marks.filter(mark => mark.subject !== subject);
    }
}
