"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Schools
class School {
    name;
    students = [];
    teachers = [];
    addStudents(stdObj) {
        this.students.push(stdObj);
    }
    addTeachers(teachObj) {
        this.teachers.push(teachObj);
    }
    constructor(n) {
        this.name = n;
    }
}
const school1 = new School("Nafees Grammar School");
const school2 = new School("Saad Grammar School");
//Students
class Students {
    name;
    age;
    rollNo;
    constructor(n, a, r) {
        this.name = n;
        this.age = a;
        this.rollNo = r;
    }
}
const student1 = new Students("Khalid", 13, 24);
const student2 = new Students("Maria", 17, 14);
const student3 = new Students("Zahid", 9, 2);
const student4 = new Students("Rahib", 10, 22);
const student5 = new Students("Sajid", 12, 12);
const student6 = new Students("Tehseen", 14, 13);
const student7 = new Students("Sonia", 9, 12);
//Admission of Students in new Schools
school1.addStudents(student1);
school2.addStudents(student2);
school1.addStudents(student3);
school2.addStudents(student4);
school1.addStudents(student6);
school2.addStudents(student5);
school2.addStudents(student7);
//Teachers
class Teachers extends Students {
    qualification = "";
    experiance = "";
    addInfo(qualification, experiance) {
        this.qualification = qualification;
        this.experiance = experiance;
    }
}
const t1 = new Teachers("Saqib", 34, 22);
const t2 = new Teachers("Shahid", 27, 12);
const t3 = new Teachers("Bashir", 28, 32);
const t4 = new Teachers("Qasim", 29, 2);
t1.addInfo("Graduate", "1year");
t4.addInfo("B.COM", "2year");
t3.addInfo("Graduate", "5year");
t2.addInfo("Master", "5month");
//Teachers Hired in Schools
school2.addTeachers(t4);
school1.addTeachers(t1);
school2.addTeachers(t3);
school1.addTeachers(t2);
console.log(school1);
console.log(school2);
