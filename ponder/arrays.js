const steps = ["one", "two", "three"];
const grades = ["A", "B", "A", "C"];

function listTemplate(step) {
  return `<li>${step}</li>`;
}

function gradeConversion(grade) {
    grade = grade.toUpperCase();
    let gpa = 0.0;
    if (grade === "A") {
        gpa = 4.0;
    }
    else if (grade === "B") {
        gpa = 3.0;
    }
    else if (grade === "C") {
        gpa = 2.0;
    }
    return gpa;
}

const gpaPoints = grades.map(gradeConversion);
const stepsHtml = steps.map(listTemplate);

document.querySelector("#myList").innerHTML = stepsHtml.join("");
console.log(gpaPoints);

function sum(total, current) {
    return total + current;
}

const gpaTotal = gpaPoints.reduce(sum);
console.log(gpaTotal);