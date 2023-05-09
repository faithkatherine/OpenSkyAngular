function filterJson(){
  const fs = require('fs');

  // Read the JSON file into a variable
  const data = fs.readFileSync('./output.json', 'utf8');

  // Parse the JSON data into an array of objects
  const airports = JSON.parse(data);

  // Filter out airports that are not large_airports
  const largeAirports = airports.filter((airport: { type: string; }) => airport.type === 'large_airport');

  // Write the filtered data back to the file
  fs.writeFileSync('./large_airports.json', JSON.stringify(largeAirports));
}

filterJson();
