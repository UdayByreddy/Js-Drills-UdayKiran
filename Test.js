 const {getAllEmails,getHobbiesByAge,getStudentInAustraila,getPersonDataById,getAllIndivalAges,getIndivalFirstHobbyOfPerson,getNameAndEmailByAge,getCityAndCountryByID} = require("./Solutions");


 // Function that accesses and returns the email addresses of all individuals
  console.log(getAllEmails()); 
      // corner case
     //  1) edge case should if id should not have any email then we get no email address we can get mail id not provide 




// Function that retrieves and prints the hobbies of individuals with a specific age
  console.log(getHobbiesByAge(34)); // gets all hobbies of person by their age
// corner case
// 1) if age not found in data then we get age of person is not found

 console.log(getHobbiesByAge(100)); // we get age of person is not found

 // 2)  give a negative age then  we get Not vaild age 

 console.log(getHobbiesByAge(-1));

 // 3) did not age then we get the Age is required

 console.log(getHobbiesByAge());


 // Function that extracts and displays the names of individuals who are students (`isStudent: true`) and live in Australia.

 console.log(getStudentInAustraila()); // gets the studnets list in Austraila
 //corner case
 // 1) No studnet list then we get No student in Austrila

 console.log(getStudentInAustraila());

 // Function that accesses and logs the name and city of the individual at the index position  in the dataset.

 console.log(getPersonDataById(3)); // gets data of paticular person by id

 //edge case
 // 1) if id greater than length data then
 console.log(getPersonDataById(11));

 // 2) if id inside length data but not found then 

 console.log(getPersonDataById(2));

 // 3) Did not provide the id

 console.log(getPersonDataById());

 // Loop to access and print the ages of all individuals in the dataset.

 console.log(getAllIndivalAges());

 //edge case
 // 1) if person object did not have 



 //  Function to retrieve and display the first hobby of each individual in the dataset.

 console.log(getIndivalFirstHobbyOfPerson(2));

 // Function that accesses and prints the names and email addresses of individuals aged 25.

 console.log(getNameAndEmailByAge(25));

 // Loop to access and log the city and country of each individual in the dataset.

 console.log(getCityAndCountryByID(1));



