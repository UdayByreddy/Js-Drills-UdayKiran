

const persons = require("./Persons"); // here we are import the data of persons and assign to persons 

//   Function that accesses and returns the email addresses of all individuals
function getAllEmails(){
    const emails={};
     for(let i=0;i<persons.length;i++){
        let emailOfPerson = persons[i].email;
        if(emailOfPerson.length>0){
       
        emails[persons[i].id]={  //creating id object inside that id object we can get name and email of person

        name :persons[i].name,
        email: emailOfPerson
        }
    }
    else{
        emails[persons[i].id]={  // if person did not have mail id then we enter Not Provide the mail id insie the mail id

            name :persons[i].name,
            email:"Not provide the mail id"
       
        }
      }
   }
    //like this we can easy access their email and name with id
 
   return emails;
 }

 // Function that retrieves and prints the hobbies of individuals with a specific age

 function getHobbiesByAge(age){
    if(age===undefined || age === null){
        return "Age is required";
    }
    if(age<=0){
        return "Not a Vaild age";
    }
    const hobbies = {};
    for(let i=0;i<persons.length;i++){
        if(persons[i].age==age){  // matching with persons age with age 
        hobbies[persons[i].name]={
           age : persons[i].age,
           hobby : persons[i].hobbies
        }
        
      }
   }
   // if length hobbies > 0 then get hobbies else then get the message
   return Object.keys(hobbies).length>0?hobbies:"Age of person is not found";
}

// Function that extracts and displays the names of individuals who are students (`isStudent: true`) and live in Australia.

function getStudentInAustraila(){
    const studentsInAustraila = [];
    persons.forEach((person)=>{
        if(person.isStudent && person.country === "Australia"){ // here if isStudent and country is Austraila then we push name of person into array
            studentsInAustraila.push(person.name);
        }
    });
    return studentsInAustraila.length>0?studentsInAustraila:"No student in Austrila"; // if array length >0 then get array else get the message
}

// Function that accesses and logs the name and city of the individual at the index position 3 in the dataset.

function getPersonDataById(id){
    if(id>persons.length || id=== undefined || id === null){
        return "Id not found";
    }
    const personInformation = {};
    for(let i=0;i<persons.length;i++){
        if(persons[i].id === id){    // if id should be matched with personsid then we create a object with their id inside that we are enter name and city
            personInformation[persons[i].id]={
                name: persons[i].name,
                city : persons[i].city
            }
        }

    }
   return Object.keys(personInformation).length>0?personInformation:"Data not found"; // returing that object
}

//Loop to access and print the ages of all individuals in the dataset.

function getAllIndivalAges(){
    const ages = {};

   
   for(let i=0;i<persons.length;i++){
    const ageOfPerson = persons[i].age;

      if(ageOfPerson===undefined||ageOfPerson===null){
        ages[persons[i].id]={   // here we are create an object with id inside that id we specfic their age like id 1:age :40 like that
            age : "Age not provided"
          }

      }
      else{
       
       ages[persons[i].id]={   // here we are create an object with id inside that id we specfic their age like id 1:age :40 like that
          age : ageOfPerson
        }
    }
       
    }
    return ages; // returing the ages object
}

// A function to retrieve and display the first hobby of each individual in the dataset.

function getIndivalFirstHobbyOfPerson(id){
    if(id===undefined|| id===null){
        return "ID is required";
    }
    const firstHobbyOfaPerson ={};
    for(let i=0;i<persons.length;i++){
        if(persons[i].id === id){          // if id should be match with persons id then we can push their first hobby 
        firstHobbyOfaPerson[persons[i].id]={
            hobby:persons[i].hobbies[0]
        }
    }
  }
  return firstHobbyOfaPerson; // returing the firstHobbyOfPerson object 
}

// Function that accesses and prints the names and email addresses of individuals aged 25.

function getNameAndEmailByAge(age){
    if(age===undefined|| age===null){
        return "Age is required";
    }
    nameAndEmailOfPerson = {};
    for(let i=0;i<persons.length;i++){
        if(persons[i].age === age){  // here if age should be match persons age then we can created an object with at persons id inside we can enter name and email
        nameAndEmailOfPerson[persons[i].id]={
            name:persons[i].name,
            email:persons[i].email
        }
    }
    }
    return nameAndEmailOfPerson; // here returing name and email of persons using their age
}

//  Loop to access and log the city and country of each individual in the dataset.

function getCityAndCountryByID(id){
    const  CityAndStateOfaPerson = {};
    for(let i=0;i<persons.length;i++){
        if(persons[i].id==id){                     // here also if person id should be match with id then created a person object with person id inside that we can 
                                                    // enter their city and country
         CityAndStateOfaPerson[persons[i].id]={
                City : persons[i].city,
                Country : persons[i].country
            }
        }
     }
     return CityAndStateOfaPerson;     
}

module.exports = {getAllEmails,getHobbiesByAge,getStudentInAustraila,getPersonDataById,getAllIndivalAges,getIndivalFirstHobbyOfPerson,getNameAndEmailByAge,getCityAndCountryByID};