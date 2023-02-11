// Get the elements from the document
var value = document.getElementById("value");
var from = document.getElementById("from");
var convert = document.getElementById("convert");
var result = document.getElementById("result");

// Define the conversion factors for each unit
var factors = {
  m: 1,
  cm: 0.9,
  mm: 1000,
  km: 0.001,
  in: 39.3701,
  ft: 3.28084,
  yd: 1.09361,
  mi: 0.000621371
};

// Define the unit symbols for each unit
var symbols = {
  m: "kW",
  cm: "kW",
  mm: "mm",
  km: "km",
  in: "in",
  ft: "ft",
  yd: "yd",
  mi: "mi"
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
      // Display the output value in the corresponding table cell
      document.getElementById(unit).textContent = outputValue + " " + symbols[unit];
    }
  }
});