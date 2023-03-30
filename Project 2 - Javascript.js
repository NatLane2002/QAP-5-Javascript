/*
Description: This is the Javascript portion of QAP 5

Author: Nathaniel Lane
Date: March 28th, 2023
*/

// Get current year
const currentYear = new Date().getFullYear();

// Read the json file from disk
fetch('Data.json')
  .then(response => response.json())
  .then(data => {
    // Output something about the data in each instance of the vehicle
    let ctr = 1
    data.forEach(vehicle => {
        let ageOfVehicle = currentYear - vehicle.year
        console.log("")
        console.log(`Vehicle ${ctr}`)
        console.log(`The vehicle is a ${vehicle.year} ${vehicle.make} ${vehicle.model}`);
        console.log(`The vehicle is ${ageOfVehicle === 1 ? "1 year" : (ageOfVehicle) + " years"} old!`)
        ctr ++
    });
  })
  .catch(error => {
    // Handle any errors that occur while fetching the file
    console.error(error);
  });