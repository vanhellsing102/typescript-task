{

interface Student{
    name: string;
    age: number;
    grades: number[];
}
const student1: Student = {
    name: "murad",
    age: 21,
    grades: [90, 95, 80, 85, 87, 93]
}
const calculateAverageGrade = (studentInfo: Student) =>{
    if("grades" in studentInfo){
        const totalMark = studentInfo.grades.reduce((acc, number) => acc + number, 0);
        return totalMark / studentInfo.grades.length;
    }
}
const result = calculateAverageGrade(student1);
console.log(result)

}