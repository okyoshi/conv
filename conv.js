// Get the elements from the document
var value = document.getElementById("value");
var from = document.getElementById("from");
var convert = document.getElementById("convert");
var result = document.getElementById("result");

// Define the conversion factors for each unit
var factors = {
  m: 1,
  cm: 0.9,
  mm: 0.10,
  km: 0.1*0.845,
  in: 0.024,
  ft: 0.025,
  yd: 0.023,
  mi: 0.022,
  m4: 0.02115,
  m5: 0.0204,
  m6: 0.0196,
  m7: 0.0187,
  m8: 0.0183,
  d1: 0.6956,
  d2: 0.6956,
  d3: 0.6956,
  d4: 0.6956,
  d5: 0.6956,
};

// Define the unit symbols for each unit
var symbols = {
  m: "kW",
  cm: "kW",
  mm: "l/h",
  km: "kg/h",
  in: "USgph",
  ft: "USgph",
  yd: "USgph",
  mi: "USgph",
  m4: "USgph",
  m5: "USgph",
  m6: "USgph",
  m7: "USgph",
  m8: "USgph"
};

// Add an event listener to the convert button
convert.addEventListener("click", function(e) {
  // Prevent the default form submission
  e.preventDefault();
  // Get the input value and the selected unit
  var inputValue = parseFloat(value.value);
  var inputUnit = from.value;


  // Check if the input is valid
  if (isNaN(inputValue) || inputUnit === "") {
    // Display an error message
    result.innerHTML = "<p>Please enter a valid value and unit.</p>";
  } else {
    // Loop through all the units and calculate the converted values
    for (var unit in factors) {
      // Get the conversion factor for the current unit
      var factor = factors[unit];
      // Convert the input value to the current unit
      var outputValue = inputValue * factor / factors[inputUnit];
      // Round the output value to two decimal places
      outputValue = outputValue.toFixed(2);
      // Convert the input value to the current unit
var outputValue = inputValue * factor / factors[inputUnit];
// Round the output value to two decimal places
outputValue = outputValue.toFixed(2);
// Check if the current unit is in
if (unit === "in" || unit === "ft" || unit === "yd" || unit === "mi" || unit === "m4" || unit === "m5" || unit === "m6" || unit === "m7" || unit === "m8") {
  // Define the fixed numbers and the allowed difference
  var fixedNumbers = [0.35, 0.4, 0.45, 0.5, 0.55, 0.6, 0.65, 0.75, 0.85, 1.0, 1.11, 1.2, 1.25, 1.35, 1.5, 1.65, 1.75, 2.0, 2.25, 2.5, 2.75, 3.0, 3.5, 4.0, 4.5, 5.0, 5.5, 6.0, 7.0, 7.5, 8.0, 8.3, 9, 9.5, 10, 10.5, 11, 12, 13.8, 15.3, 17.5, 19.5, 21.5, 24, 28, 30];
  var allowedDifference = 0.01;
  // Initialize a variable to store the nearest fixed number
  var nearestFixedNumber = null;
  // Loop through the fixed numbers
  for (var i = 0; i < fixedNumbers.length; i++) {
    // Get the current fixed number
    var fixedNumber = fixedNumbers[i];
    // Calculate the absolute difference between the output value and the fixed number
    var absoluteDifference = Math.abs(outputValue - fixedNumber);
    // Check if the absolute difference is less than or equal to the allowed difference
    if (absoluteDifference <= allowedDifference) {
      // Assign the fixed number to the nearest fixed number
      nearestFixedNumber = fixedNumber;
      // Break out of the loop
      break;
    }
  }
  // Check if the nearest fixed number is not null
  if (nearestFixedNumber !== null) {
    // Add the unit symbol to the nearest fixed number
    nearestFixedNumber = nearestFixedNumber + " " + symbols[unit];
    // Display the nearest fixed number in the table cell
    document.getElementById(unit).textContent = nearestFixedNumber;
  } else {
    // Display an empty string or a message in the table cell
    document.getElementById(unit).textContent = "N/A";
  }
} else {
  // Add the unit symbol to the output value
  outputValue = outputValue + " " + symbols[unit];
  // Display the output value in the corresponding table cell
  document.getElementById(unit).textContent = outputValue;
}
    }
  }
});
