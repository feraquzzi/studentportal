// array of objects to be queried
const array = [
  {
    id: 1,
    image: "https://i.postimg.cc/fWHQQbrT/omolola-adio.jpg",
    name: 'Shubham',
    weeklyAttendance: 2,
    softSkillAttendance: 2,
    test: 10,
    softSkillProject: 12,
    finalProject: 32,
    allScores: 56

  },

  {
    id: 2,
    image: "https://i.postimg.cc/fWHQQbrT/omolola-adio.jpg",
    name: 'Shubham',
    weeklyAttendance: 2,
    softSkillAttendance: 2,
    test: 10,
    softSkillProject: 12,
    finalProject: 32,
    allScores: 56
  },

  {
    id: 3,
    image: "https://i.postimg.cc/fT7W5Jff/oluwapelumi-obatola.jpg",
    name: 'Shubham',
    weeklyAttendance: 2,
    softSkillAttendance: 2,
    test: 10,
    softSkillProject: 12,
    finalProject: 32,
    allScores: 56
  }
]
  
  
  
function checkName() {
    const studentId = document.getElementById('demo');
  
   const studentValue = studentId.value;
   const studId = Math.ceil(studentValue);
    
    
    // finding the object whose id is '3'

    
   const object = array.find(obj => obj.id === studId);

   if (object) {
        //document.getElementById('container').innerHTML = object.name;
        document.getElementById('photo').src = object.image;
        document.getElementById('weeklyAttendance').innerHTML = object.weeklyAttendance;
        document.getElementById('softSkillAttendance').innerHTML = object.softSkillAttendance;
        document.getElementById('test').innerHTML = object.test;
        document.getElementById('softSkillProject').innerHTML = object.softSkillProject;
        document.getElementById('finalProject').innerHTML = object.finalProject;
        document.getElementById('totalScore').innerHTML = object.allScores;
   } else {
        document.getElementById('error').innerHTML = 'This ID is not valid or Your ID is incorrect';
   }
  
  // printing object on the console
    console.log(object.name);

}