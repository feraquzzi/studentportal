
function checkName() {
     
    const studentId = document.getElementById('demo');

   const studentValue = studentId.value;

   //const studId = Math.ceil(studentValue);
   const studId = studentValue.toLowerCase();
    
    
    // finding the object 
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
          document.getElementById('error').innerHTML = 'Incorrect student identification number';
          setTimeout(function(){
               document.getElementById('error').innerHTML = '';
          }, 3000);
          
          document.getElementById('demo').value = ' ';
   }

     
   // printing object on the console
    console.log(object.name);

   // Clear input field
    document.getElementById('demo').value = ' ';

}

