// array of objects to be queried
const array = [
    {
      id: 1,
      image: "https://i.postimg.cc/fWHQQbrT/omolola-adio.jpg",
      name: 'Shubham',
      age: 16
    },

    {
      id: 2,
      image: "https://i.postimg.cc/prHsdCrN/morufat-lamidi.jpg",
      name: 'Parth',
      age: 18
    },

    {
      id: 3,
      image: "https://i.postimg.cc/fT7W5Jff/oluwapelumi-obatola.jpg",
      name: 'Pratik',
      age: 21
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
   } else {
        document.getElementById('error').innerHTML = 'This ID is not valid or Your ID is incorrect';
   }
  
  // printing object on the console
    console.log(object.name);

}