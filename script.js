// Cities data structure
const citiesByCountry = [
  "Shanghai",
  "Delhi",
  "Karachi",
  "Beijing",
  "Shenzhen",
  "Guangzhou",
  "Lagos",
  "Istanbul",
  "Manila",
  "Kinshasa",
  "Bangalore",
  "Tokyo",
  "Chengdu",
  "Mumbai",
  "Moscow",
  "Lahore",
  "S\u00e3o Paulo",
  "Tianjin",
  "Jakarta",
  "Wuhan",
  "Dhaka",
  "Hyderabad",
  "Lima",
  "Chennai",
  "Dongguan",
  "Cairo",
  "Seoul",
  "Chongqing",
  "Xi\u2019an",
  "Hangzhou",
  "Mexico City",
  "Luanda",
  "Foshan",
  "Tehran",
  "London",
  "Bangkok",
  "New York City",
  "Ahmedabad",
  "Bogot\u00e1",
  "Surat",
  "Nanjing",
  "Hong Kong",
  "Shenyang",
  "Ho Chi Minh City",
  "Riyadh",
  "Baghdad",
  "Zhengzhou",
  "Rio de Janeiro",
  "Qingdao",
  "Kolkata",
  "Singapore",
  "Suzhou",
  "Changsha",
  "Abidjan",
  "Saint Petersburg",
  "Jinan",
  "Dar es Salaam",
  "Kunming",
  "Alexandria",
  "Harbin",
  "Sydney",
  "Santiago",
  "Ankara",
  "Shijiazhuang",
  "Hefei",
  "Melbourne",
  "Dalian",
  "Johannesburg",
  "Cape Town",
  "Nairobi",
  "Yangon",
  "Kano",
  "Xiamen",
  "Nanning",
  "Changchun",
  "Kabul",
  "Giza",
  "Cavite",
  "Taiyuan",
  "eThekwini",
  "Durban",
  "Bamako",
  "Jaipur",
  "Ekurhuleni",
  "Tshwane",
  "Pretoria",
  "New Taipei City",
  "Guiyang",
  "Wuxi",
  "Pune",
  "Shantou",
  "Ibadan",
  "\u00dcr\u00fcmqi",
  "Los Angeles",
  "Zhongshan",
  "Abuja",
  "Lucknow",
  "Yokohama",
  "Berlin",
  "Ningbo",
  "Fuzhou",
  "Jeddah",
  "Bulacan",
  "Faisalabad",
  "Casablanca",
  "Hanoi",
  "Nanchang",
  "Addis Ababa",
  "Port Harcourt",
  "Laguna",
  "Busan",
  "Rizal",
  "Madrid",
  "Dubai",
  "Chittagong",
  "Kanpur",
  "Cebu",
  "Changzhou",
  "Santo Domingo",
  "Pyongyang",
  "Buenos Aires",
  "Lanzhou",
  "Mashhad",
  "Nantong",
  "Surabaya",
  "Quezon City",
  "Tashkent",
  "Kyiv",
  "\u0130zmir",
  "Incheon",
  "Nagpur",
  "Kumasi",
  "Algiers",
  "Mbuji-Mayi",
  "Xuzhou",
  "Taichung",
  "Bras\u00edlia",
  "Lubumbashi",
  "Toronto",
  "Douala",
  "Kaohsiung",
  "Yaound\u00e9",
  "Osaka",
  "Zibo",
  "Rome",
  "Linyi",
  "Chicago",
  "Gazipur",
  "Guayaquil",
  "Dakar",
  "Baku",
  "Taipei",
  "Damascus",
  "Wenzhou",
  "Brisbane",
  "Tangshan",
  "Sanaa",
  "Bandung",
  "Lusaka",
  "Medell\u00edn",
  "Gujranwala",
  "Ouagadougou",
  "Bekasi",
  "Indore",
  "Medan",
  "Fortaleza",
  "Salvador",
  "Daegu",
  "Omdurman",
  "Mecca",
  "Hohhot",
  "Haikou",
  "Bhopal",
  "Shaoxing",
  "Nagoya",
  "Mogadishu",
  "Patna",
  "Belo Horizonte",
  "Houston",
  "Accra",
  "Rawalpindi",
  "Phnom Penh",
  "Taoyuan",
  "Cali",
  "Luoyang",
  "Zhuhai",
  "Liuzhou",
  "Aleppo",
  "Perth",
  "Lom\u00e9",
  "Agra",
  "Multan",
  "Almaty",
  "Brazzaville",
  "Havana",
  "Baotou",
  "Paris",
  "Handan",
  "Huizhou",
  "Caracas",
  "Manaus",
  "Bursa",
  "Weifang",
  "Metro Clark",
  "Vienna",
  "Minsk",
  "Kuala Lumpur",
  "Sapporo",
  "Khartoum",
  "Khartoum Bahri",
  "Isfahan",
  "Faridabad",
  "Benin City",
  "Baoding",
  "Santa Cruz de la Sierra",
  "Tangerang",
  "Depok",
  "Hamburg",
  "Tainan",
  "Warsaw",
  "Thane",
  "Peshawar",
  "Amman",
  "Tijuana",
  "Datong",
  "Huai'an",
  "Yantai",
  "Jiangmen",
  "Adana",
  "Ganzhou",
  "Davao City",
  "Curitiba",
  "Quito",
  "Montreal",
  "Monrovia",
  "Maracaibo",
  "Kigali",
  "Visakhapatnam",
  "Pimpri-Chinchwad",
  "Bucharest",
  "Semarang",
  "Xiangyang",
  "Belgrade",
  "Budapest",
  "Gaziantep",
  "Kampala",
  "Xining",
  "Zunyi",
  "Palembang",
  "Vadodara",
  "Caloocan",
  "Conakry",
  "Barcelona",
  "Kunshan",
  "Varanasi",
  "Beirut",
  "Phoenix",
  "Ecatepec de Morelos",
  "Ghaziabad",
  "Novosibirsk",
  "Auckland",
  "Ludhiana",
  "Fukuoka",
  "Daqing",
  "Kisangani",
  "Wuhu",
  "Karaj",
  "Le\u00f3n",
  "Philadelphia",
  "Shiraz",
  "Tabriz",
  "Yekaterinburg",
  "Navi Mumbai",
  "Puebla",
  "Putian",
  "Ulaanbaatar",
  "Kawasaki",
  "K\u014dbe",
  "Qinhuangdao",
  "Zhuzhou",
  "Jilin",
  "Munich",
  "Ciudad Ju\u00e1rez",
  "Recife",
  "Harare",
  "Daejeon",
  "Hyderabad",
  "Nashik",
  "Yiwu",
  "Anshan",
  "Gwangju",
  "Quanzhou",
  "Ky\u014dto",
  "Cixi",
  "San Antonio",
  "Nouakchott",
  "Goi\u00e2nia",
  "Makassar",
  "Kharkiv",
  "Pointe-Noire",
  "Tai\u2019an",
  "Medina",
  "Nanyang",
  "Porto Alegre",
  "Quetta",
  "Zhanjiang",
  "Chandigarh",
  "Dammam",
  "Guadalajara",
  "San Diego",
  "Amritsar",
  "Montevideo",
  "Konya",
  "Mossul",
  "Guilin",
  "Prague",
  "Astana",
  "South Tangerang",
  "Milan",
  "Yancheng",
  "Zaozhuang",
  "Taizhou",
  "Shangrao",
  "Basra",
  "Jiangyin",
  "Tegucigalpa",
  "Saitama",
  "Antalya",
  "Antananarivo",
  "Guwahati",
  "C\u00f3rdoba",
  "Adelaide",
  "Mombasa",
  "Meerut",
  "Kazan",
  "Maoming",
  "Calgary",
  "Bel\u00e9m",
  "Heze",
  "Guarulhos",
  "Dallas",
  "Rajkot",
  "Onitsha",
  "Yichang",
  "Barranquilla",
  "Sharjah",
  "Sofia",
  "Xinxiang",
  "Abu Dhabi",
  "Zapopan",
  "Nanchong",
  "Chaozhou",
  "Bukavu",
  "Kalyan-Dombivli",
  "Bareilly",
  "Jieyang",
  "Shubra El Kheima",
  "Huainan",
  "Port-au-Prince",
  "F\u00e8s",
  "Changshu",
  "Mysore",
  "Fushun",
  "Nizhny Novgorod",
  "Mandalay",
  "Taguig",
  "Guatemala City",
  "Vasai-Virar",
  "Suwon",
  "Qom",
  "Hiroshima",
  "Qingyuan",
  "Batam",
  "Kaifeng",
  "Srinagar",
  "Xianyang",
  "Fuyang",
  "Nelson Mandela Bay",
  "Gqeberha",
  "Chelyabinsk",
  "Jiaxing",
  "Anyang",
  "Krasnoyarsk",
  "Doha",
  "Hengyang",
  "Tbilisi",
  "Ahvaz",
  "Schymkent",
  "Tripoli",
  "Samara",
  "Jinjiang",
  "Aurangabad",
  "Kananga",
  "Bandar Lampung",
  "Lilongwe",
  "Dhanbad",
  "Naypyidaw",
  "Yinchuan",
  "Iribarren",
  "Barquisimeto",
  "Kaduna",
  "Rizhao",
  "Ufa",
  "Monterrey",
  "Rostov-on-Don",
  "Campinas",
  "Birmingham",
  "Dazhou",
  "Ulsan",
  "Luzhou",
  "Omsk",
  "Yueyang",
  "Zhenjiang",
  "Bishkek",
  "Prayagraj",
  "Islamabad",
  "Baoji",
  "Mwanza",
  "Maputo",
  "Yibin",
  "Changde",
  "Krasnodar",
  "Sendai",
  "Chifeng",
  "N'Djamena",
  "Yerevan",
  "Diyarbak\u0131r",
  "Tanger",
  "Panama City",
  "Cologne",
  "Huzhou",
  "Suqian",
  "Wanzhou",
  "Bengbu",
  "Yangzhou",
  "Ranchi",
  "Nezahualc\u00f3yotl",
  "Howrah",
  "Lu\u2019an",
  "Ottawa",
  "Yongin",
  "Coimbatore",
  "Managua",
  "Voronezh",
  "Zhangjiagang",
  "Jabalpur",
  "Gwalior",
  "Vijayawada",
  "Sal\u00e9",
  "Changzhi",
  "Pingdingshan",
  "Goyang",
  "Bogor",
  "Jinhua",
  "Mersin",
  "S\u00e3o Lu\u00eds",
  "Zhaoqing",
  "Asmara",
  "Perm",
  "Jodhpur",
  "Matola",
  "Shangqiu",
  "Qiqihar",
  "Changwon",
  "Cartagena",
  "Volgograd",
  "Niamey",
  "Jinzhou",
  "Tshikapa",
  "Liaocheng",
  "Madurai",
  "Xinyang",
  "Yuyao",
  "Rui\u2019an",
  "Edmonton",
  "Odesa",
  "Raipur",
  "Vientiane",
  "Kota",
  "Mexico",
  "Pakistan",
  "Turkey",
  "Nigeria",
  "Taiwan",
  "Canada",
  "Colombia",
  "Saudi Arabia",
  "Germany",
  "Morocco",
  "Iraq",
  "Kazakhstan",
  "Myanmar",
  "Sudan",
  "Ukraine",
  "United Arab Emirates",
  "Venezuela",
  "Cameroon",
  "Ecuador",
  "Ghana",
  "Italy",
  "Kenya",
  "Mozambique",
  "Republic of the Congo",
  "Spain",
  "Syria",
  "Tanzania",
  "United Kingdom",
  "Vietnam",
  "Chongqing",
  "Shanghai",
  "Beijing",
  "Chengdu",
  "Delhi",
  "Karachi",
  "Guangzhou",
  "Shenzhen",
  "Istanbul",
  "Kinshasa",
  "Bengaluru",
  "Tokyo",
  "Tianjin",
  "Mumbai",
  "Moscow",
  "Lahore",
  "Suzhou",
  "Zhengzhou",
  "Wuhan",
  "Xi\u2019an",
];
// First add a container for weather info in the DOMContentLoaded event
document.addEventListener("DOMContentLoaded", function () {
  const mainContainer = document.querySelector(".main-container");

  // Check if results and weather-info divs already exist before creating new ones
  let resultsDiv = document.getElementById("results");
  if (!resultsDiv) {
    resultsDiv = document.createElement("div");
    resultsDiv.id = "results";
    resultsDiv.className = "results-container";
    mainContainer.appendChild(resultsDiv);
  }

  let weatherDiv = document.getElementById("weather-info");
  if (!weatherDiv) {
    weatherDiv = document.createElement("div");
    weatherDiv.id = "weather-info";
    weatherDiv.className = "weather-container";
    mainContainer.appendChild(weatherDiv);
  }
  let forecastDiv1 = document.getElementById("forecast");
  if (!forecastDiv1) {
    forecastDiv1 = document.createElement("div");
    forecastDiv1.id = "forecast";
    forecastDiv1.className = "forecast-container";
    mainContainer.appendChild(forecastDiv1);
  }
});

// Create a flat array of all cities for search
const allCities = Object.values(citiesByCountry).flat();

// Function to search cities
function search_country() {
  const input = document.getElementById("searchbar").value.toLowerCase();
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = ""; // Clear previous results

  if (input.length < 1) {
    return; // Don't show results if input is empty
  }

  // Filter cities that match the input
  const matchedCities = allCities.filter((city) =>
    city.toLowerCase().includes(input)
  );

  // Display results
  if (matchedCities.length > 0) {
    matchedCities.forEach((city) => {
      const cityDiv = document.createElement("div");
      cityDiv.className = "country-item"; // Reusing the existing CSS class
      cityDiv.textContent = city;
      cityDiv.onclick = () => selectCity(city);
      resultsDiv.appendChild(cityDiv);
    });
  } else {
    const noResults = document.createElement("div");
    noResults.className = "no-results";
    noResults.textContent = "No cities found";
    resultsDiv.appendChild(noResults);
  }
}

// Function to handle city selection
function selectCity(city) {
  const searchbar = document.getElementById("searchbar");
  searchbar.value = city;
  document.getElementById("results").innerHTML = ""; // Clear results after selection

  // Find the country for this city
  const country = Object.keys(citiesByCountry).find((country) =>
    citiesByCountry[country].includes(city)
  );

  currentWeather(city);
  forecastWeather(city);
}

function currentWeather(city) {
  // Construct API URL with city name
  var apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=51a0c48cdb1052cd29e097610b93f6ce`;

  // Show loading state
  const weatherDiv = document.getElementById("weather-info");
  weatherDiv.innerHTML = "Loading weather data...";

  fetch(apiURL)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Weather data not found");
      }
      return response.json();
    })
    .then((data) => {
      // Calculate temperatures
      const tempCelsius = (data.main.temp - 273.15).toFixed(1);
      const feelsLikeCelsius = (data.main.feels_like - 273.15).toFixed(1);
      const weatherDescription =
        data.weather[0].description[0].toUpperCase() +
        data.weather[0].description.substring(1);
      const weatherIcon = data.weather[0].icon;
      const minTemp = (data.main.temp_min - 273.15).toFixed(1);
      const maxTemp = (data.main.temp_max - 273.15).toFixed(1);
      // Update weather display
      weatherDiv.innerHTML = `
                  <div class="weather-data">
                        <h3>${city} Weather</h3>
                        <h2>${tempCelsius}°C</h2>
                        <div class="weather-icon-container">
                            <img src="https://openweathermap.org/img/wn/${weatherIcon}@2x.png" alt="Weather icon">
                            <p>${weatherDescription}</p>
                        </div>
                        <p>Feels like: ${feelsLikeCelsius}°C</p>
                        <p>Minimum: ${minTemp}°C</p>
                        <p>Maximum: ${maxTemp}°C</p>
                    </div>
              `;
    })
    .catch((err) => {
      weatherDiv.innerHTML = `<div class="error">Unable to fetch weather data for ${city}</div>`;
      console.error(err);
    });
}

function forecastWeather(city) {
  var apiURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=51a0c48cdb1052cd29e097610b93f6ce`;
  const forecastDiv = document.getElementById("forecast");
  forecastDiv.innerHTML = "Loading forecast..";
  let forecastHTML = `<div id="forecast-row" class="row">`;
  let rowCounter = 1;
  fetch(apiURL)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Weather data not found");
      }
      return response.json();
    })
    .then((data) => {
      for (let i = 0; i < 40; i++) {
        if (i % 8 == 0) {
          const weatherIcon = data.list[i].weather[0].icon;
          console.log(weatherIcon);
          const date_split = data.list[i].dt_txt.split(" ");
          const month = parseInt(
            date_split[0].substring(5, 6) + date_split[0].substring(6, 7)
          );
          const date =
            date_split[0].substring(8, 9) + date_split[0].substring(9, 10);

          const weather = (data.list[i].main.temp - 273.15).toFixed(0);
          var weatherString = weather.toString();
          forecastHTML =
            forecastHTML +
            ` 
          <div id="forecast-${rowCounter}" class="column">
          <p>${checkMonth(month) + " " + date}</p>
          <div class="weather-icon-container">
                            <img src="https://openweathermap.org/img/wn/${weatherIcon}@2x.png" alt="Weather icon">
          </div>
          <p>${weatherString}°C</p>
          </div>
        `;
          rowCounter = rowCounter + 1;
          /*forecastMap.set(checkMonth(month) + " " + date.toString(), {
            weatherString,
          });*/
        }
      }
      forecastHTML = forecastHTML + `</div>`;
      console.log(forecastHTML);
      forecastDiv.innerHTML = forecastHTML;
      console.log(data);
    });
}

function checkMonth(num) {
  var month = "";
  switch (num) {
    case 1:
      month = "January";
      break;
    case 2:
      month = "February";
      break;
    case 3:
      month = "March";
      break;
    case 4:
      month = "April";
      break;
    case 5:
      month = "May";
      break;
    case 6:
      month = "June";
      break;
    case 7:
      month = "July";
      break;
    case 8:
      month = "August";
      break;
    case 9:
      month = "September";
      break;
    case 10:
      month = "October";
      break;
    case 11:
      month = "November";
      break;
    case 12:
      month = "December";
      break;
  }
  return month;
}
