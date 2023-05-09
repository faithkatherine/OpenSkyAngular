function filterJson() {
    var fs = require('fs');
    // Read the JSON file into a variable
    var data = fs.readFileSync('./output.json', 'utf8');
    // Parse the JSON data into an array of objects
    var airports = JSON.parse(data);
    // Filter out airports that are not large_airports
    var largeAirports = airports.filter(function (airport) { return airport.type === 'large_airport'; });
    // Write the filtered data back to the file
    fs.writeFileSync('./large_airports.json', JSON.stringify(largeAirports));
}
filterJson();
