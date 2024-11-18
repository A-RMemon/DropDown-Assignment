var countryselect = document.getElementById('country');
var stateSelect = document.getElementById('state');
var CitySelect = document.getElementById('City');
var DistrictsSelect = document.getElementById('Districts');
var countryname = document.getElementById('countryname');
var statename = document.getElementById('statename');
var cityname = document.getElementById('cityname');
var Districts = document.getElementById('Districts');

var countryList =[
    {
      "country": "USA",
      "states": [
        {
          "statenames": "California",
          "cities": [
            {
              "cityname": "Los Angeles",
              "districts": [
                {"districtname": "Downtown", "zipcode": "90001"},
                {"districtname": "Hollywood", "zipcode": "90028"},
                {"districtname": "Venice Beach", "zipcode": "90291"},
                {"districtname": "Beverly Hills", "zipcode": "90210"}
              ]
            },
            {
              "cityname": "San Francisco",
              "districts": [
                {"districtname": "Mission District", "zipcode": "94110"},
                {"districtname": "Financial District", "zipcode": "94111"},
                {"districtname": "Soma", "zipcode": "94103"},
                {"districtname": "Chinatown", "zipcode": "94108"}
              ]
            },
            {
              "cityname": "San Diego",
              "districts": [
                {"districtname": "Gaslamp Quarter", "zipcode": "92101"},
                {"districtname": "La Jolla", "zipcode": "92037"},
                {"districtname": "Ocean Beach", "zipcode": "92107"},
                {"districtname": "Old Town", "zipcode": "92110"}
              ]
            },
            {
              "cityname": "Sacramento",
              "districts": [
                {"districtname": "Downtown", "zipcode": "95814"},
                {"districtname": "Midtown", "zipcode": "95816"},
                {"districtname": "Natomas", "zipcode": "95834"},
                {"districtname": "East Sacramento", "zipcode": "95819"}
              ]
            }
          ]
        },
        {
          "statenames": "Texas",
          "cities": [
            {
              "cityname": "Houston",
              "districts": [
                {"districtname": "Downtown", "zipcode": "77002"},
                {"districtname": "Midtown", "zipcode": "77004"},
                {"districtname": "Montrose", "zipcode": "77006"},
                {"districtname": "West University", "zipcode": "77005"}
              ]
            },
            {
              "cityname": "Dallas",
              "districts": [
                {"districtname": "Uptown", "zipcode": "75201"},
                {"districtname": "Deep Ellum", "zipcode": "75226"},
                {"districtname": "Oak Lawn", "zipcode": "75219"},
                {"districtname": "Lakewood", "zipcode": "75214"}
              ]
            },
            {
              "cityname": "Austin",
              "districts": [
                {"districtname": "Downtown", "zipcode": "73301"},
                {"districtname": "South Congress", "zipcode": "78704"},
                {"districtname": "East Austin", "zipcode": "78702"},
                {"districtname": "North Loop", "zipcode": "78751"}
              ]
            },
            {
              "cityname": "San Antonio",
              "districts": [
                {"districtname": "Downtown", "zipcode": "78205"},
                {"districtname": "Alamo Heights", "zipcode": "78209"},
                {"districtname": "Stone Oak", "zipcode": "78258"},
                {"districtname": "Medical Center", "zipcode": "78229"}
              ]
            }
          ]
        },
        {
          "statenames": "Florida",
          "cities": [
            {
              "cityname": "Miami",
              "districts": [
                {"districtname": "Downtown", "zipcode": "33130"},
                {"districtname": "Wynwood", "zipcode": "33127"},
                {"districtname": "Coral Gables", "zipcode": "33134"},
                {"districtname": "South Beach", "zipcode": "33139"}
              ]
            },
            {
              "cityname": "Orlando",
              "districts": [
                {"districtname": "Lake Buena Vista", "zipcode": "32830"},
                {"districtname": "Winter Park", "zipcode": "32789"},
                {"districtname": "Downtown", "zipcode": "32801"},
                {"districtname": "Altamonte Springs", "zipcode": "32701"}
              ]
            },
            {
              "cityname": "Tampa",
              "districts": [
                {"districtname": "Downtown", "zipcode": "33602"},
                {"districtname": "Hyde Park", "zipcode": "33606"},
                {"districtname": "Ybor City", "zipcode": "33605"},
                {"districtname": "Seminole Heights", "zipcode": "33604"}
              ]
            },
            {
              "cityname": "Jacksonville",
              "districts": [
                {"districtname": "Downtown", "zipcode": "32202"},
                {"districtname": "Riverside", "zipcode": "32204"},
                {"districtname": "San Marco", "zipcode": "32207"},
                {"districtname": "Southside", "zipcode": "32256"}
              ]
            }
          ]
        },
        {
          "statenames": "New York",
          "cities": [
            {
              "cityname": "New York City",
              "districts": [
                {"districtname": "Manhattan", "zipcode": "10001"},
                {"districtname": "Brooklyn", "zipcode": "11201"},
                {"districtname": "Queens", "zipcode": "11368"},
                {"districtname": "Bronx", "zipcode": "10453"}
              ]
            },
            {
              "cityname": "Buffalo",
              "districts": [
                {"districtname": "Allentown", "zipcode": "14201"},
                {"districtname": "North Buffalo", "zipcode": "14216"},
                {"districtname": "Elmwood Village", "zipcode": "14222"},
                {"districtname": "West Side", "zipcode": "14213"}
              ]
            },
            {
              "cityname": "Rochester",
              "districts": [
                {"districtname": "Downtown", "zipcode": "14604"},
                {"districtname": "Corn Hill", "zipcode": "14605"},
                {"districtname": "Park Avenue", "zipcode": "14607"},
                {"districtname": "South Wedge", "zipcode": "14620"}
              ]
            },
            {
              "cityname": "Syracuse",
              "districts": [
                {"districtname": "Downtown", "zipcode": "13202"},
                {"districtname": "Westcott", "zipcode": "13210"},
                {"districtname": "Strathmore", "zipcode": "13207"},
                {"districtname": "Tipp Hill", "zipcode": "13204"}
              ]
            }
          ]
        }
      ]
    },
    {
      "country": "Pakistan",
      "states": [
        {
          "statenames": "Punjab",
          "cities": [
            {
              "cityname": "Lahore",
              "districts": [
                {"districtname": "Gulberg", "zipcode": "54000"},
                {"districtname": "Model Town", "zipcode": "54700"},
                {"districtname": "Johar Town", "zipcode": "54800"},
                {"districtname": "DHA", "zipcode": "54010"}
              ]
            },
            {
              "cityname": "Rawalpindi",
              "districts": [
                {"districtname": "Saddar", "zipcode": "46000"},
                {"districtname": "Murree Road", "zipcode": "47100"},
                {"districtname": "Ayub National Park", "zipcode": "47200"},
                {"districtname": "Chaklala", "zipcode": "46010"}
              ]
            },
            {
              "cityname": "Multan",
              "districts": [
                {"districtname": "Lodhran Road", "zipcode": "60000"},
                {"districtname": "Cantt", "zipcode": "60010"},
                {"districtname": "City Center", "zipcode": "60020"},
                {"districtname": "Shah Rukh Colony", "zipcode": "60030"}
              ]
            },
            {
              "cityname": "Faisalabad",
              "districts": [
                {"districtname": "Gulistan Colony", "zipcode": "38000"},
                {"districtname": "Clock Tower", "zipcode": "38010"},
                {"districtname": "Jaranwala", "zipcode": "38020"},
                {"districtname": "East Faisalabad", "zipcode": "38030"}
              ]
            }
          ]
        },
        {
          "statenames": "Sindh",
          "cities": [
            {
              "cityname": "Karachi",
              "districts": [
                {"districtname": "Karachi Saddar", "zipcode": "74400"},
                {"districtname": "Korangi", "zipcode": "74900"},
                {"districtname": "Clifton", "zipcode": "75600"},
                {"districtname": "Gulshan-e-Iqbal", "zipcode": "75300"}
              ]
            },
            {
              "cityname": "Hyderabad",
              "districts": [
                {"districtname": "Qasimabad", "zipcode": "71000"},
                {"districtname": "Latifabad", "zipcode": "71010"},
                {"districtname": "City Center", "zipcode": "71020"},
                {"districtname": "Sambara", "zipcode": "71030"}
              ]
            },
            {
              "cityname": "Sukkur",
              "districts": [
                {"districtname": "City Center", "zipcode": "65200"},
                {"districtname": "New Sukkur", "zipcode": "65210"},
                {"districtname": "Gulshan-e-Iqbal", "zipcode": "65220"},
                {"districtname": "Sukkur Barrage", "zipcode": "65230"}
              ]
            },
            {
              "cityname": "Larkana",
              "districts": [
                {"districtname": "City Center", "zipcode": "77100"},
                {"districtname": "Shahdadkot", "zipcode": "77110"},
                {"districtname": "Rato Dero", "zipcode": "77120"},
                {"districtname": "Larkana Cantt", "zipcode": "77130"}
              ]
            }
          ]
        }
      ]
    },
    {
      "country": "Canada",
      "states": [
        {
          "statenames": "Ontario",
          "cities": [
            {
              "cityname": "Toronto",
              "districts": [
                {"districtname": "Downtown", "zipcode": "M5A 1A1"},
                {"districtname": "Yorkville", "zipcode": "M5R 1C2"},
                {"districtname": "Scarborough", "zipcode": "M1S 4A5"},
                {"districtname": "Etobicoke", "zipcode": "M9W 5L3"}
              ]
            },
            {
              "cityname": "Ottawa",
              "districts": [
                {"districtname": "ByWard Market", "zipcode": "K1N 7B9"},
                {"districtname": "Kanata", "zipcode": "K2K 2Y2"},
                {"districtname": "Centretown", "zipcode": "K1R 7A1"},
                {"districtname": "Orleans", "zipcode": "K1C 1B4"}
              ]
            },
            {
              "cityname": "Mississauga",
              "districts": [
                {"districtname": "Square One", "zipcode": "L5B 2N6"},
                {"districtname": "Port Credit", "zipcode": "L5H 2J9"},
                {"districtname": "Cooksville", "zipcode": "L5B 2N8"},
                {"districtname": "Erindale", "zipcode": "L5C 1X4"}
              ]
            },
            {
              "cityname": "Brampton",
              "districts": [
                {"districtname": "Downtown", "zipcode": "L6Y 1M7"},
                {"districtname": "Woodland", "zipcode": "L6X 2W2"},
                {"districtname": "Heart Lake", "zipcode": "L6Z 2X3"},
                {"districtname": "Chinguacousy", "zipcode": "L6R 2V4"}
              ]
            }
          ]
        },
        {
          "statenames": "British Columbia",
          "cities": [
            {
              "cityname": "Vancouver",
              "districts": [
                {"districtname": "Downtown", "zipcode": "V6B 1A1"},
                {"districtname": "Kitsilano", "zipcode": "V6K 1Y4"},
                {"districtname": "Yaletown", "zipcode": "V6Z 2C3"},
                {"districtname": "West End", "zipcode": "V6E 3X7"}
              ]
            },
            {
              "cityname": "Victoria",
              "districts": [
                {"districtname": "Downtown", "zipcode": "V8W 1P6"},
                {"districtname": "Oak Bay", "zipcode": "V8S 4W4"},
                {"districtname": "Saanich", "zipcode": "V8Z 6S1"},
                {"districtname": "Esquimalt", "zipcode": "V9A 3H9"}
              ]
            },
            {
              "cityname": "Surrey",
              "districts": [
                {"districtname": "Whalley", "zipcode": "V3T 1V2"},
                {"districtname": "Fleetwood", "zipcode": "V3S 0B1"},
                {"districtname": "Newton", "zipcode": "V3X 2Y3"},
                {"districtname": "Guildford", "zipcode": "V3R 1V5"}
              ]
            },
            {
              "cityname": "Burnaby",
              "districts": [
                {"districtname": "Metrotown", "zipcode": "V5H 2Y6"},
                {"districtname": "Brentwood", "zipcode": "V5B 0A3"},
                {"districtname": "North Burnaby", "zipcode": "V5A 4V5"},
                {"districtname": "South Burnaby", "zipcode": "V5G 3Z9"}
              ]
            }
          ]
        }
      ]
    },
    {
      "country": "United Kingdom",
      "states": [
        {
          "statenames": "England",
          "cities": [
            {
              "cityname": "London",
              "districts": [
                {"districtname": "Westminster", "zipcode": "SW1A 1AA"},
                {"districtname": "Kensington", "zipcode": "W8 5SA"},
                {"districtname": "Camden", "zipcode": "NW1 1UE"},
                {"districtname": "Islington", "zipcode": "N1 1AA"}
              ]
            },
            {
              "cityname": "Manchester",
              "districts": [
                {"districtname": "Northern Quarter", "zipcode": "M4 5BF"},
                {"districtname": "Deansgate", "zipcode": "M3 2LR"},
                {"districtname": "Ancoats", "zipcode": "M4 5BU"},
                {"districtname": "Salford", "zipcode": "M7 1JJ"}
              ]
            },
            {
              "cityname": "Birmingham",
              "districts": [
                {"districtname": "City Centre", "zipcode": "B1 1AA"},
                {"districtname": "Edgbaston", "zipcode": "B15 3AA"},
                {"districtname": "Moseley", "zipcode": "B13 8AA"},
                {"districtname": "Kings Norton", "zipcode": "B38 8AA"}
              ]
            },
            {
              "cityname": "Liverpool",
              "districts": [
                {"districtname": "City Centre", "zipcode": "L1 8JQ"},
                {"districtname": "Wavertree", "zipcode": "L15 3DA"},
                {"districtname": "Anfield", "zipcode": "L4 0TH"},
                {"districtname": "Bootle", "zipcode": "L20 2HE"}
              ]
            }
          ]
        },
        {
          "statenames": "Scotland",
          "cities": [
            {
              "cityname": "Edinburgh",
              "districts": [
                {"districtname": "Old Town", "zipcode": "EH1 1AA"},
                {"districtname": "New Town", "zipcode": "EH2 4QS"},
                {"districtname": "Leith", "zipcode": "EH6 5AB"},
                {"districtname": "Stockbridge", "zipcode": "EH4 1BQ"}
              ]
            },
            {
              "cityname": "Glasgow",
              "districts": [
                {"districtname": "City Centre", "zipcode": "G1 1XQ"},
                {"districtname": "West End", "zipcode": "G12 8AA"},
                {"districtname": "South Side", "zipcode": "G41 1AA"},
                {"districtname": "East End", "zipcode": "G31 2DA"}
              ]
            },
            {
              "cityname": "Aberdeen",
              "districts": [
                {"districtname": "City Centre", "zipcode": "AB10 1BJ"},
                {"districtname": "West End", "zipcode": "AB15 4DT"},
                {"districtname": "Old Aberdeen", "zipcode": "AB24 1SJ"},
                {"districtname": "Bucksburn", "zipcode": "AB21 9RT"}
              ]
            },
            {
              "cityname": "Dundee",
              "districts": [
                {"districtname": "City Centre", "zipcode": "DD1 1XG"},
                {"districtname": "West End", "zipcode": "DD2 1AA"},
                {"districtname": "Broughty Ferry", "zipcode": "DD5 1BZ"},
                {"districtname": "Lochee", "zipcode": "DD2 4JS"}
              ]
            }
          ]
        }
      ]
    },
    {
      "country": "Australia",
      "states": [
        {
          "statenames": "New South Wales",
          "cities": [
            {
              "cityname": "Sydney",
              "districts": [
                {"districtname": "Central Business District", "zipcode": "2000"},
                {"districtname": "Bondi", "zipcode": "2026"},
                {"districtname": "Manly", "zipcode": "2095"},
                {"districtname": "Surry Hills", "zipcode": "2010"}
              ]
            },
            {
              "cityname": "Newcastle",
              "districts": [
                {"districtname": "City Centre", "zipcode": "2300"},
                {"districtname": "Kotara", "zipcode": "2289"},
                {"districtname": "Wallsend", "zipcode": "2287"},
                {"districtname": "Warners Bay", "zipcode": "2282"}
              ]
            },
            {
              "cityname": "Wollongong",
              "districts": [
                {"districtname": "City Centre", "zipcode": "2500"},
                {"districtname": "Mount Ousley", "zipcode": "2519"},
                {"districtname": "Figtree", "zipcode": "2525"},
                {"districtname": "Fairy Meadow", "zipcode": "2519"}
              ]
            },
            {
              "cityname": "Coffs Harbour",
              "districts": [
                {"districtname": "City Centre", "zipcode": "2450"},
                {"districtname": "Sawtell", "zipcode": "2452"},
                {"districtname": "Toormina", "zipcode": "2452"},
                {"districtname": "North Boambee Valley", "zipcode": "2450"}
              ]
            }
          ]
        },
        {
          "statenames": "Queensland",
          "cities": [
            {
              "cityname": "Brisbane",
              "districts": [
                {"districtname": "City Centre", "zipcode": "4000"},
                {"districtname": "South Brisbane", "zipcode": "4101"},
                {"districtname": "West End", "zipcode": "4101"},
                {"districtname": "New Farm", "zipcode": "4005"}
              ]
            },
            {
              "cityname": "Gold Coast",
              "districts": [
                {"districtname": "Surfers Paradise", "zipcode": "4217"},
                {"districtname": "Broadbeach", "zipcode": "4218"},
                {"districtname": "Burleigh Heads", "zipcode": "4220"},
                {"districtname": "Southport", "zipcode": "4215"}
              ]
            },
            {
              "cityname": "Cairns",
              "districts": [
                {"districtname": "City Centre", "zipcode": "4870"},
                {"districtname": "Edge Hill", "zipcode": "4870"},
                {"districtname": "Manunda", "zipcode": "4870"},
                {"districtname": "Portsmith", "zipcode": "4870"}
              ]
            },
            {
              "cityname": "Townsville",
              "districts": [
                {"districtname": "City Centre", "zipcode": "4810"},
                {"districtname": "Aitkenvale", "zipcode": "4814"},
                {"districtname": "Annandale", "zipcode": "4814"},
                {"districtname": "Douglas", "zipcode": "4814"}
              ]
            }
          ]
        }
      ]
    }
  ]
  
  
  
  
  CitySelect.addEventListener('change',()=>{
    DistrictsSelect.innerHTML = `<option disabled selected>Select Districts</option>`
    var districts =  countryList[countryselect.value].states[stateSelect.value].cities[CitySelect.value].districts;
    for(let index in districts){
        // console.log(districts[index]);
        let ans = districts[index].districtname +' '+districts[index].zipcode
        DistrictsSelect.innerHTML += `<option value = ${index}> ${ans} </option>`

    }

  })
stateSelect.addEventListener('change', () => {
    CitySelect.innerHTML = ` <option disabled selected>Select City</option>`
    var city = countryList[countryselect.value].states[stateSelect.value].cities;
    for(let index in city){
        // console.log(city[index])
        CitySelect.innerHTML += `<option value = ${index}> ${city[index].cityname} </option>`
    }
})
countryselect.addEventListener('change', () => {
    // console.log()
    stateSelect.innerHTML = ` <option disabled selected>Select State</option>`
    var state = countryList[countryselect.value].states;
    for (let index in state) {
        // console.log(state[index])
        stateSelect.innerHTML += `<option value = ${index}> ${state[index].statenames} </option>`

    }
})

function FetchCountryList() {
    for (var i in countryList) {
        var countries = countryList[i].country
        countryselect.innerHTML += `<option value = ${i}> ${countries} </option>`

    }
}
FetchCountryList()