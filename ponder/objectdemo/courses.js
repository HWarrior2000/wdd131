// courses.js
const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    credits: 3,
    sections: [
        { sectionNum: 1, roomNum: 'STC 353', enrolled: 26, days: 'TTh', instructor: 'Bro T'},
        { sectionNum: 2, roomNum: 'STC 347', enrolled: 28, days: 'TTh', instructor: 'Sis A'}
    ],

    enrollStudent: function(sectionNum) {
        console.log(sectionNum);
        console.log(this.sections);
    }
  };

  const currentField = "courseCode";
  console.log(aCourse.sections[0]); 

  const section1 = aCourse.sections.find(section => section.sectionNum === 1);
  console.log(section1);

  function setCourseInfo (course) {
    const courseName = document.querySelector("#courseName");
    const courseCode = document.querySelector("#courseCode");
    
    courseCode.textContent = course.code;
    courseName.textContent = course.name;
  }

  function sectionTemplate(section) {
    return `<tr>
                <td>${section.sectionNum}<td>
                <td>${section.roomNum}<td>
                <td>${section.enrolled}<td>
                <td>${section.days}<td>
                <td>${section.instructor}<td>
            </tr>`
  }

  function renderSections(sections) {
    const sectionList = document.querySelector("#sections");
    sectionList.innerHTML = "";
    const html = sections.map(sectionTemplate);
  }

  document.querySelector("#enrollStudent").addEventListener("click", function() {
    aCourse.enrollStudent(1);
  })