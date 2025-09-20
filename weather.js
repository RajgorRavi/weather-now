

const API_KEY = "f6ae7d1685e9a4b92e0a159b455f9ac7";
const DEFAULT_CITY = "Berlin"; 
let currentUnits = "metric"; 
let currentCity = DEFAULT_CITY;

let searchDelayTimer;
let selectedCityIndex = -1;

const popularCities = [
  { name: "London", country: "GB" },     
  { name: "New York", country: "US" },   
  { name: "Tokyo", country: "JP" },     
  { name: "Paris", country: "FR" },      
  { name: "Berlin", country: "DE" },     
  { name: "Sydney", country: "AU" },     
  { name: "Dubai", country: "AE" },      
  { name: "Singapore", country: "SG" },  
  { name: "Mumbai", country: "IN" },     
  { name: "São Paulo", country: "BR" },  
  { name: "Moscow", country: "RU" },     
  { name: "Cairo", country: "EG" },      
  { name: "Bangkok", country: "TH" },
  { name: "Rome", country: "IT" },
  { name: "Madrid", country: "ES" },
  { name: "Amsterdam", country: "NL" },
  { name: "Vienna", country: "AT" },
  { name: "Stockholm", country: "SE" },
  { name: "Oslo", country: "NO" },
  { name: "Copenhagen", country: "DK" },
  { name: "Helsinki", country: "FI" },
  { name: "Warsaw", country: "PL" },
  { name: "Prague", country: "CZ" },
  { name: "Budapest", country: "HU" },
  { name: "Zurich", country: "CH" },
  { name: "Brussels", country: "BE" },
  { name: "Lisbon", country: "PT" },
  { name: "Athens", country: "GR" },
  { name: "Istanbul", country: "TR" },
  { name: "Tel Aviv", country: "IL" },
  { name: "Lagos", country: "NG" },
  { name: "Nairobi", country: "KE" },
  { name: "Cape Town", country: "ZA" },
  { name: "Casablanca", country: "MA" },
  { name: "Tunis", country: "TN" },
  { name: "Algiers", country: "DZ" },
  { name: "Riyadh", country: "SA" },
  { name: "Kuwait City", country: "KW" },
  { name: "Doha", country: "QA" },
  { name: "Abu Dhabi", country: "AE" },
  { name: "Muscat", country: "OM" },
  { name: "Tehran", country: "IR" },
  { name: "Baghdad", country: "IQ" },
  { name: "Kabul", country: "AF" },
  { name: "Karachi", country: "PK" },
  { name: "Delhi", country: "IN" },
  { name: "Bangalore", country: "IN" },
  { name: "Chennai", country: "IN" },
  { name: "Kolkata", country: "IN" },
  { name: "Dhaka", country: "BD" },
  { name: "Colombo", country: "LK" },
  { name: "Kathmandu", country: "NP" },
  { name: "Beijing", country: "CN" },
  { name: "Shanghai", country: "CN" },
  { name: "Hong Kong", country: "HK" },
  { name: "Seoul", country: "KR" },
  { name: "Osaka", country: "JP" },
  { name: "Manila", country: "PH" },
  { name: "Jakarta", country: "ID" },
  { name: "Kuala Lumpur", country: "MY" },
  { name: "Ho Chi Minh City", country: "VN" },
  { name: "Hanoi", country: "VN" },
  { name: "Phnom Penh", country: "KH" },
  { name: "Yangon", country: "MM" },
  { name: "Vientiane", country: "LA" },
  { name: "Ulaanbaatar", country: "MN" },
  { name: "Almaty", country: "KZ" },
  { name: "Tashkent", country: "UZ" },
  { name: "Bishkek", country: "KG" },
  { name: "Dushanbe", country: "TJ" },
  { name: "Ashgabat", country: "TM" },
  { name: "Baku", country: "AZ" },
  { name: "Yerevan", country: "AM" },
  { name: "Tbilisi", country: "GE" },
  { name: "Montreal", country: "CA" },
  { name: "Toronto", country: "CA" },
  { name: "Vancouver", country: "CA" },
  { name: "Los Angeles", country: "US" },
  { name: "Chicago", country: "US" },
  { name: "Houston", country: "US" },
  { name: "Phoenix", country: "US" },
  { name: "Philadelphia", country: "US" },
  { name: "San Antonio", country: "US" },
  { name: "San Diego", country: "US" },
  { name: "Dallas", country: "US" },
  { name: "San Jose", country: "US" },
  { name: "Austin", country: "US" },
  { name: "Jacksonville", country: "US" },
  { name: "Fort Worth", country: "US" },
  { name: "Columbus", country: "US" },
  { name: "Charlotte", country: "US" },
  { name: "San Francisco", country: "US" },
  { name: "Indianapolis", country: "US" },
  { name: "Seattle", country: "US" },
  { name: "Denver", country: "US" },
  { name: "Washington", country: "US" },
  { name: "Boston", country: "US" },
  { name: "El Paso", country: "US" },
  { name: "Nashville", country: "US" },
  { name: "Detroit", country: "US" },
  { name: "Oklahoma City", country: "US" },
  { name: "Portland", country: "US" },
  { name: "Las Vegas", country: "US" },
  { name: "Memphis", country: "US" },
  { name: "Louisville", country: "US" },
  { name: "Baltimore", country: "US" },
  { name: "Milwaukee", country: "US" },
  { name: "Albuquerque", country: "US" },
  { name: "Tucson", country: "US" },
  { name: "Fresno", country: "US" },
  { name: "Sacramento", country: "US" },
  { name: "Mesa", country: "US" },
  { name: "Kansas City", country: "US" },
  { name: "Atlanta", country: "US" },
  { name: "Miami", country: "US" },
  { name: "Colorado Springs", country: "US" },
  { name: "Raleigh", country: "US" },
  { name: "Omaha", country: "US" },
  { name: "Long Beach", country: "US" },
  { name: "Virginia Beach", country: "US" },
  { name: "Oakland", country: "US" },
  { name: "Minneapolis", country: "US" },
  { name: "Tulsa", country: "US" },
  { name: "Tampa", country: "US" },
  { name: "Arlington", country: "US" },
  { name: "New Orleans", country: "US" },
  { name: "Wichita", country: "US" },
  { name: "Cleveland", country: "US" },
  { name: "Bakersfield", country: "US" },
  { name: "Aurora", country: "US" },
  { name: "Anaheim", country: "US" },
  { name: "Honolulu", country: "US" },
  { name: "Santa Ana", country: "US" },
  { name: "Corpus Christi", country: "US" },
  { name: "Riverside", country: "US" },
  { name: "Lexington", country: "US" },
  { name: "Stockton", country: "US" },
  { name: "Henderson", country: "US" },
  { name: "Saint Paul", country: "US" },
  { name: "St. Louis", country: "US" },
  { name: "Cincinnati", country: "US" },
  { name: "Pittsburgh", country: "US" },
  { name: "Greensboro", country: "US" },
  { name: "Anchorage", country: "US" },
  { name: "Plano", country: "US" },
  { name: "Lincoln", country: "US" },
  { name: "Orlando", country: "US" },
  { name: "Irvine", country: "US" },
  { name: "Newark", country: "US" },
  { name: "Durham", country: "US" },
  { name: "Chula Vista", country: "US" },
  { name: "Toledo", country: "US" },
  { name: "Fort Wayne", country: "US" },
  { name: "St. Petersburg", country: "US" },
  { name: "Laredo", country: "US" },
  { name: "Jersey City", country: "US" },
  { name: "Chandler", country: "US" },
  { name: "Madison", country: "US" },
  { name: "Lubbock", country: "US" },
  { name: "Norfolk", country: "US" },
  { name: "Baton Rouge", country: "US" },
  { name: "Burnaby", country: "CA" },
  { name: "Richmond", country: "CA" },
  { name: "Markham", country: "CA" },
  { name: "Vaughan", country: "CA" },
  { name: "Gatineau", country: "CA" },
  { name: "Saskatoon", country: "CA" },
  { name: "Longueuil", country: "CA" },
  { name: "Kitchener", country: "CA" },
  { name: "Windsor", country: "CA" },
  { name: "Regina", country: "CA" },
  { name: "Richmond Hill", country: "CA" },
  { name: "Oakville", country: "CA" },
  { name: "Burlington", country: "CA" },
  { name: "Oshawa", country: "CA" },
  { name: "Sherbrooke", country: "CA" },
  { name: "Saguenay", country: "CA" },
  { name: "Lévis", country: "CA" },
  { name: "Kelowna", country: "CA" },
  { name: "Barrie", country: "CA" },
  { name: "Coquitlam", country: "CA" },
  { name: "Thunder Bay", country: "CA" },
  { name: "Mexico City", country: "MX" },
  { name: "Guadalajara", country: "MX" },
  { name: "Monterrey", country: "MX" },
  { name: "Puebla", country: "MX" },
  { name: "Tijuana", country: "MX" },
  { name: "León", country: "MX" },
  { name: "Juárez", country: "MX" },
  { name: "Zapopan", country: "MX" },
  { name: "Nezahualcóyotl", country: "MX" },
  { name: "Chihuahua", country: "MX" },
  { name: "Naucalpan", country: "MX" },
  { name: "Mérida", country: "MX" },
  { name: "Álvaro Obregón", country: "MX" },
  { name: "San Luis Potosí", country: "MX" },
  { name: "Tlalnepantla", country: "MX" },
  { name: "Aguascalientes", country: "MX" },
  { name: "Morelia", country: "MX" },
  { name: "Saltillo", country: "MX" },
  { name: "Hermosillo", country: "MX" },
  { name: "Mexicali", country: "MX" },
  { name: "Guatemala City", country: "GT" },
  { name: "Belize City", country: "BZ" },
  { name: "San Salvador", country: "SV" },
  { name: "Tegucigalpa", country: "HN" },
  { name: "Managua", country: "NI" },
  { name: "San José", country: "CR" },
  { name: "Panama City", country: "PA" },
  { name: "Havana", country: "CU" },
  { name: "Santo Domingo", country: "DO" },
  { name: "Port-au-Prince", country: "HT" },
  { name: "Kingston", country: "JM" },
  { name: "San Juan", country: "PR" },
  { name: "Caracas", country: "VE" },
  { name: "Bogotá", country: "CO" },
  { name: "Quito", country: "EC" },
  { name: "Lima", country: "PE" },
  { name: "La Paz", country: "BO" },
  { name: "Asunción", country: "PY" },
  { name: "Montevideo", country: "UY" },
  { name: "Buenos Aires", country: "AR" },
  { name: "Santiago", country: "CL" },
  { name: "Rio de Janeiro", country: "BR" },
  { name: "Brasília", country: "BR" },
  { name: "Salvador", country: "BR" },
  { name: "Fortaleza", country: "BR" },
  { name: "Belo Horizonte", country: "BR" },
  { name: "Manaus", country: "BR" },
  { name: "Curitiba", country: "BR" },
  { name: "Recife", country: "BR" },
  { name: "Belém", country: "BR" },
  { name: "Porto Alegre", country: "BR" },
  { name: "Goiânia", country: "BR" },
  { name: "Guarulhos", country: "BR" },
  { name: "Campinas", country: "BR" },
  { name: "São Luís", country: "BR" },
  { name: "São Gonçalo", country: "BR" },
  { name: "Maceió", country: "BR" },
  { name: "Duque de Caxias", country: "BR" },
  { name: "Natal", country: "BR" },
  { name: "Osasco", country: "BR" },
  { name: "Teresina", country: "BR" },
  { name: "Campo Grande", country: "BR" },
  { name: "Santo André", country: "BR" },
  { name: "João Pessoa", country: "BR" },
  { name: "Jaboatão dos Guararapes", country: "BR" },
  { name: "Contagem", country: "BR" },
  { name: "São Bernardo do Campo", country: "BR" },
  { name: "Uberlândia", country: "BR" },
  { name: "Sorocaba", country: "BR" },
  { name: "Aracaju", country: "BR" },
  { name: "Feira de Santana", country: "BR" },
  { name: "Cuiabá", country: "BR" },
  { name: "Joinville", country: "BR" },
  { name: "Juiz de Fora", country: "BR" },
  { name: "Londrina", country: "BR" },
  { name: "Aparecida de Goiânia", country: "BR" },
  { name: "Ananindeua", country: "BR" },
  { name: "Porto Velho", country: "BR" },
  { name: "Serra", country: "BR" },
  { name: "Niterói", country: "BR" },
  { name: "Caxias do Sul", country: "BR" },
  { name: "Macapá", country: "BR" },
  { name: "Mauá", country: "BR" },
  { name: "São João de Meriti", country: "BR" },
  { name: "Florianópolis", country: "BR" },
  { name: "Vila Velha", country: "BR" },
  { name: "Santos", country: "BR" },
  { name: "Carapicuíba", country: "BR" },
  { name: "Olinda", country: "BR" },
  { name: "Ribeirão Preto", country: "BR" },
  { name: "Cariacica", country: "BR" },
  { name: "Diadema", country: "BR" },
  { name: "Jundiaí", country: "BR" },
  { name: "Piracicaba", country: "BR" },
  { name: "Campina Grande", country: "BR" },
  { name: "Caruaru", country: "BR" },
  { name: "Betim", country: "BR" },
  { name: "Paulista", country: "BR" },
  { name: "Montes Claros", country: "BR" },
  { name: "Bauru", country: "BR" },
  { name: "Canoas", country: "BR" },
  { name: "Pelotas", country: "BR" },
  { name: "Anápolis", country: "BR" },
  { name: "Maracanaú", country: "BR" },
  { name: "Caucaia", country: "BR" },
  { name: "Vitória", country: "BR" },
  { name: "Itaquaquecetuba", country: "BR" },
  { name: "Franca", country: "BR" },
  { name: "Blumenau", country: "BR" },
  { name: "Ponta Grossa", country: "BR" },
  { name: "Limeira", country: "BR" },
  { name: "Suzano", country: "BR" },
  { name: "Petrópolis", country: "BR" },
  { name: "Uberaba", country: "BR" },
  { name: "Governador Valadares", country: "BR" },
  { name: "Taubaté", country: "BR" },
  { name: "Praia", country: "CV" },
  { name: "Bissau", country: "GW" },
  { name: "Conakry", country: "GN" },
  { name: "Freetown", country: "SL" },
  { name: "Monrovia", country: "LR" },
  { name: "Yamoussoukro", country: "CI" },
  { name: "Accra", country: "GH" },
  { name: "Lomé", country: "TG" },
  { name: "Porto-Novo", country: "BJ" },
  { name: "Niamey", country: "NE" },
  { name: "Ouagadougou", country: "BF" },
  { name: "Bamako", country: "ML" },
  { name: "Nouakchott", country: "MR" },
  { name: "Dakar", country: "SN" },
  { name: "Banjul", country: "GM" },
  { name: "Abuja", country: "NG" },
  { name: "N'Djamena", country: "TD" },
  { name: "Bangui", country: "CF" },
  { name: "Yaoundé", country: "CM" },
  { name: "Malabo", country: "GQ" },
  { name: "São Tomé", country: "ST" },
  { name: "Libreville", country: "GA" },
  { name: "Brazzaville", country: "CG" },
  { name: "Kinshasa", country: "CD" },
  { name: "Luanda", country: "AO" },
  { name: "Windhoek", country: "NA" },
  { name: "Gaborone", country: "BW" },
  { name: "Pretoria", country: "ZA" },
  { name: "Maseru", country: "LS" },
  { name: "Mbabane", country: "SZ" },
  { name: "Maputo", country: "MZ" },
  { name: "Antananarivo", country: "MG" },
  { name: "Port Louis", country: "MU" },
  { name: "Victoria", country: "SC" }
];

function formatDate(dt, options = { weekday: 'long', month: 'short', day: 'numeric', year: 'numeric' }) {
  return new Date(dt * 1000).toLocaleDateString('en-US', options);
}

function formatHour(dt) {
  return new Date(dt * 1000).toLocaleTimeString('en-US', { hour: 'numeric', hour12: true });
}

async function fetchWeather(city) {
  console.log('🌤️ Fetching weather for:', city);
  const errorMessageEl = document.getElementById('error-message');
  errorMessageEl.classList.add('hidden');
  try {
    const currentUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${currentUnits}&appid=${API_KEY}`;
    console.log('🌐 Current weather URL:', currentUrl);
    const currentRes = await fetch(currentUrl);
    if (!currentRes.ok) throw new Error('🏙️ City not found');
    const currentData = await currentRes.json();
    console.log('✅ Current weather data:', currentData);

    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${currentUnits}&appid=${API_KEY}`;
    console.log('📅 Forecast URL:', forecastUrl);
    const forecastRes = await fetch(forecastUrl);
    if (!forecastRes.ok) throw new Error('📊 Forecast not found');
    const forecastData = await forecastRes.json();
    console.log('🎉 Forecast data:', forecastData);

    updateUI(currentData, forecastData);
  } catch (err) {
    console.error('Error fetching weather:', err);
    errorMessageEl.textContent = err.message || 'Error fetching weather data';
    errorMessageEl.classList.remove('hidden');
  }
}

function updateUI(current, forecast) {
  console.log('🌤️ Updating UI with units:', currentUnits);
  
  const currentEmoji = getWeatherEmoji(current.weather[0].main);
  document.getElementById('location').textContent = `${currentEmoji} ${current.name}, ${current.sys.country}`;
  document.getElementById('date').textContent = formatDate(current.dt);
  
  const tempSymbol = currentUnits === 'metric' ? '°C' : '°F';
  document.getElementById('temperature').textContent = `${Math.round(current.main.temp)}${tempSymbol}`;
  
  const mainIconEl = document.getElementById('main-icon');
  mainIconEl.src = `https://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`;
  mainIconEl.alt = current.weather[0].description;
  

  document.getElementById('feels-like').textContent = `🌡️ ${Math.round(current.main.feels_like)}°`;
  document.getElementById('humidity').textContent = `💧 ${current.main.humidity}%`;
  
  const windSpeed = Math.round(current.wind.speed);
    const windUnit = currentUnits === 'metric' ? 'km/h' : 'mph';
  document.getElementById('wind').textContent = `💨 ${windSpeed} ${windUnit}`;
  
  const precipitation = getPrecipitation(current);
  document.getElementById('precipitation').textContent = `🌧️ ${precipitation} mm`;
  
  renderDailyForecast(forecast);
  renderHourlyForecast(forecast);
  
  console.log('✅ UI updated successfully with weather data');
}

function getPrecipitation(current) {
  return current.rain?.['1h'] || current.snow?.['1h'] || 0;
}

function getWeatherEmoji(weatherCondition) {
  const emojiMap = {
    'Clear': '☀️',
    'Clouds': '☁️',
    'Rain': '🌧️',
    'Drizzle': '🌦️',
    'Thunderstorm': '⛈️',
    'Snow': '❄️',
    'Mist': '🌫️',
    'Fog': '🌫️',
    'Haze': '🌫️',
    'Dust': '🌪️',
    'Sand': '🌪️',
    'Ash': '🌋',
    'Squall': '💨',
    'Tornado': '🌪️'
  };
  return emojiMap[weatherCondition] || '🌤️';
}

function renderDailyForecast(forecast) {
  const dailyForecastEl = document.getElementById('daily-forecast');
  const days = {};
  
  forecast.list.forEach(item => {
    const fullDay = formatDate(item.dt, { weekday: 'long' }); 
    const shortDay = formatDate(item.dt, { weekday: 'short' });
    if (!days[fullDay]) {
      days[fullDay] = {
        items: [],
        shortDay: shortDay
      };
    }
    days[fullDay].items.push(item);
  });
  
  const dayNames = Object.keys(days).slice(0, 7);
  
  while (dayNames.length < 7) {
    const lastDay = new Date();
    lastDay.setDate(lastDay.getDate() + dayNames.length);
    const futureDayName = lastDay.toLocaleDateString('en-US', { weekday: 'long' });
    dayNames.push(futureDayName);
    days[futureDayName] = { items: [], shortDay: lastDay.toLocaleDateString('en-US', { weekday: 'short' }) };
  }
  
  dailyForecastEl.innerHTML = '';
  
  const fullDayNames = dayNames.map((day, index) => {
    return index === 0 ? 'Today' : day;
  });
  updateHourlyDaySelector(fullDayNames);
  
  dayNames.forEach((day, index) => {
    const dayData = days[day];
    const items = dayData.items;
    
    if (items.length > 0) {
      const midday = items[Math.floor(items.length / 2)];
      const temps = items.map(i => i.main.temp);
      const high = Math.round(Math.max(...temps));
      const low = Math.round(Math.min(...temps));
      
      const weatherEmoji = getWeatherEmoji(midday.weather[0].main);
      
      const displayName = index === 0 ? 'Today' : day;
      
      dailyForecastEl.innerHTML += `
        <div class="weather-card bg-gray-800 rounded-2xl p-4 flex flex-col items-center text-center hover:transform hover:scale-105 transition-transform">
          <div class="text-sm font-semibold mb-2 text-gray-400">${displayName}</div>
          <div class="text-3xl mb-2">${weatherEmoji}</div>
          <div class="mb-2">
            <img src="https://openweathermap.org/img/wn/${midday.weather[0].icon}@2x.png" alt="${midday.weather[0].description}" class="weather-icon" />
          </div>
          <div class="text-lg font-semibold">${high}°</div>
          <div class="text-sm text-gray-400">${low}°</div>
          <div class="text-xs text-gray-500 mt-1 capitalize">${midday.weather[0].description}</div>
        </div>
      `;
    } else {
      dailyForecastEl.innerHTML += `
        <div class="weather-card bg-gray-800 rounded-2xl p-4 flex flex-col items-center text-center hover:transform hover:scale-105 transition-transform">
          <div class="text-sm font-semibold mb-2 text-gray-400">${index === 0 ? 'Today' : day}</div>
          <div class="text-3xl mb-2">🌤️</div>
          <div class="mb-2">
            <img src="https://openweathermap.org/img/wn/01d@2x.png" alt="Clear" class="weather-icon" />
          </div>
          <div class="text-lg font-semibold">--°</div>
          <div class="text-sm text-gray-400">--°</div>
          <div class="text-xs text-gray-500 mt-1">No data</div>
        </div>
      `;
    }
  });
}

function updateHourlyDaySelector(dayNames) {
  const hourlyDaySelector = document.getElementById('hourly-day');
  if (hourlyDaySelector) {
    hourlyDaySelector.innerHTML = '';
    dayNames.forEach((day, index) => {
      const option = document.createElement('option');
      option.value = index;
      option.textContent = day;
      hourlyDaySelector.appendChild(option);
    });
  }
}

function renderHourlyForecast(forecast) {
  const hourlyForecastEl = document.getElementById('hourly-forecast');
  const hourlyDaySelector = document.getElementById('hourly-day');
  const selectedDayIndex = parseInt(hourlyDaySelector.value) || 0;
  
  
  const days = {};
  forecast.list.forEach(item => {
    const fullDay = formatDate(item.dt, { weekday: 'long' });
    if (!days[fullDay]) days[fullDay] = [];
    days[fullDay].push(item);
  });
  
  const dayNames = Object.keys(days);
  const selectedDayName = dayNames[selectedDayIndex];
  const hours = days[selectedDayName] || [];
  
  hourlyForecastEl.innerHTML = '';
  
  if (hours.length === 0) {
    hourlyForecastEl.innerHTML = `
      <div class="text-center text-gray-400 py-4">
        <span class="text-2xl">📭</span>
        <div class="mt-2">No hourly data available</div>
      </div>
    `;
    return;
  }
  
  hours.slice(0, 8).forEach(item => { 
    const weatherEmoji = getWeatherEmoji(item.weather[0].main);
    hourlyForecastEl.innerHTML += `
      <div class="hourly-item flex items-center justify-between p-3 rounded-lg hover:bg-gray-700 transition-colors">
        <div class="flex items-center gap-3">
          <span class="text-2xl">${weatherEmoji}</span>
          <img src="https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png" alt="${item.weather[0].description}" class="weather-icon" />
          <div class="flex flex-col">
            <span class="text-sm font-medium">${formatHour(item.dt)}</span>
            <span class="text-xs text-gray-400 capitalize">${item.weather[0].description}</span>
          </div>
        </div>
        <div class="text-right">
          <div class="text-lg font-semibold">${Math.round(item.main.temp)}°</div>
          <div class="text-xs text-gray-400">${Math.round(item.main.feels_like)}° feels</div>
        </div>
      </div>
    `;
  });
  
  if (!hourlyDaySelector.hasAttribute('data-listener-added')) {
    hourlyDaySelector.addEventListener('change', () => {
      renderHourlyForecast(forecast);
    });
    hourlyDaySelector.setAttribute('data-listener-added', 'true');
  }
}

function setupSearch() {
  const searchInputEl = document.getElementById('search-input');
  const searchBtnEl = document.getElementById('search-btn');
  const suggestionsContainer = document.getElementById('suggestions-container');
  
  console.log('🔍 Setting up search - Input:', searchInputEl, 'Button:', searchBtnEl, 'Suggestions:', suggestionsContainer);
  
  if (searchInputEl && searchBtnEl && suggestionsContainer) {
    
    searchInputEl.addEventListener('input', (e) => {
      const query = e.target.value.trim();
      clearTimeout(searchDelayTimer);
      
      if (query.length >= 2) {
        searchDelayTimer = setTimeout(() => {
          showSuggestions(query, suggestionsContainer);
        }, 300);
      } else {
        hideSuggestions(suggestionsContainer);
      }
    });
    
    searchInputEl.addEventListener('keydown', (e) => {
      const suggestions = suggestionsContainer.querySelectorAll('.suggestion-item');
      
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        selectedCityIndex = Math.min(selectedCityIndex + 1, suggestions.length - 1);
        updateSuggestionHighlight(suggestions);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        selectedCityIndex = Math.max(selectedCityIndex - 1, -1);
        updateSuggestionHighlight(suggestions);
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (selectedCityIndex >= 0 && suggestions[selectedCityIndex]) {
          const selectedCity = suggestions[selectedCityIndex].getAttribute('data-city');
          searchInputEl.value = selectedCity;
          currentCity = selectedCity;
          fetchWeather(selectedCity);
          hideSuggestions(suggestionsContainer);
        } else {
          const city = searchInputEl.value.trim();
          if (city) {
            currentCity = city;
            fetchWeather(city);
            hideSuggestions(suggestionsContainer);
          }
        }
        selectedCityIndex = -1;
      } else if (e.key === 'Escape') {
        hideSuggestions(suggestionsContainer);
        selectedCityIndex = -1;
      }
    });
  
    searchBtnEl.addEventListener('click', (e) => {
      e.preventDefault();
      const city = searchInputEl.value.trim();
      console.log('🔍 Search button clicked, city:', city);
      if (city) {
        currentCity = city;
        fetchWeather(city);
        hideSuggestions(suggestionsContainer);
        selectedCityIndex = -1;
      }
    });
    
    document.addEventListener('click', (e) => {
      if (!searchInputEl.contains(e.target) && !suggestionsContainer.contains(e.target) && !searchBtnEl.contains(e.target)) {
        hideSuggestions(suggestionsContainer);
        selectedCityIndex = -1;
      }
    });
    
    searchInputEl.addEventListener('focus', () => {
      if (searchInputEl.value.trim().length >= 2) {
        showSuggestions(searchInputEl.value.trim(), suggestionsContainer);
      }
    });
    
  } else {
    console.error('Search elements not found!');
  }
}

function showSuggestions(query, container) {
  const filteredCities = popularCities.filter(city => 
    city.name.toLowerCase().includes(query.toLowerCase())
  ).slice(0, 8);
  
  if (filteredCities.length > 0) {
    container.innerHTML = filteredCities.map((city, index) => `
      <div class="suggestion-item" data-city="${city.name}" data-index="${index}">
        <svg class="location-icon" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
        </svg>
        <span class="city-name">${city.name}</span>
        <span class="country-name">${getCountryName(city.country)}</span>
      </div>
    `).join('');
    
    container.querySelectorAll('.suggestion-item').forEach(item => {
      item.addEventListener('click', () => {
        const cityName = item.getAttribute('data-city');
        document.getElementById('search-input').value = cityName;
        currentCity = cityName;
        fetchWeather(cityName);
        hideSuggestions(container);
        selectedCityIndex = -1;
      });
      
      item.addEventListener('mouseenter', () => {
        selectedCityIndex = parseInt(item.getAttribute('data-index'));
        updateSuggestionHighlight(container.querySelectorAll('.suggestion-item'));
      });
    });
    
    container.classList.add('show');
  } else {
    container.innerHTML = '<div class="suggestions-empty">No cities found</div>';
    container.classList.add('show');
  }
}

function hideSuggestions(container) {
  container.classList.remove('show');
  setTimeout(() => {
    container.innerHTML = '';
  }, 300);
}

function updateSuggestionHighlight(suggestions) {
  suggestions.forEach((item, index) => {
    if (index === selectedCityIndex) {
      item.classList.add('highlighted');
    } else {
      item.classList.remove('highlighted');
    }
  });
}

function getCountryName(countryCode) {
  const countries = {
    'US': 'United States', 'GB': 'United Kingdom', 'CA': 'Canada', 'AU': 'Australia',
    'DE': 'Germany', 'FR': 'France', 'IT': 'Italy', 'ES': 'Spain', 'NL': 'Netherlands',
    'JP': 'Japan', 'CN': 'China', 'IN': 'India', 'BR': 'Brazil', 'RU': 'Russia',
    'MX': 'Mexico', 'AR': 'Argentina', 'CL': 'Chile', 'PE': 'Peru', 'CO': 'Colombia',
    'VE': 'Venezuela', 'EC': 'Ecuador', 'BO': 'Bolivia', 'PY': 'Paraguay', 'UY': 'Uruguay',
    'ZA': 'South Africa', 'EG': 'Egypt', 'NG': 'Nigeria', 'KE': 'Kenya', 'MA': 'Morocco',
    'TN': 'Tunisia', 'DZ': 'Algeria', 'LY': 'Libya', 'SD': 'Sudan', 'ET': 'Ethiopia',
    'UG': 'Uganda', 'TZ': 'Tanzania', 'ZM': 'Zambia', 'ZW': 'Zimbabwe', 'BW': 'Botswana',
    'NA': 'Namibia', 'AO': 'Angola', 'MZ': 'Mozambique', 'MW': 'Malawi', 'MG': 'Madagascar',
    'MU': 'Mauritius', 'SC': 'Seychelles', 'KM': 'Comoros', 'DJ': 'Djibouti', 'SO': 'Somalia',
    'ER': 'Eritrea', 'SS': 'South Sudan', 'CF': 'Central African Republic', 'TD': 'Chad',
    'CM': 'Cameroon', 'GQ': 'Equatorial Guinea', 'GA': 'Gabon', 'CG': 'Republic of the Congo',
    'CD': 'Democratic Republic of the Congo', 'ST': 'São Tomé and Príncipe', 'CV': 'Cape Verde',
    'GW': 'Guinea-Bissau', 'GN': 'Guinea', 'SL': 'Sierra Leone', 'LR': 'Liberia', 'CI': 'Côte d\'Ivoire',
    'GH': 'Ghana', 'TG': 'Togo', 'BJ': 'Benin', 'NE': 'Niger', 'BF': 'Burkina Faso', 'ML': 'Mali',
    'MR': 'Mauritania', 'SN': 'Senegal', 'GM': 'Gambia', 'GW': 'Guinea-Bissau', 'SL': 'Sierra Leone',
    'AE': 'United Arab Emirates', 'SA': 'Saudi Arabia', 'IR': 'Iran', 'IQ': 'Iraq', 'SY': 'Syria',
    'JO': 'Jordan', 'LB': 'Lebanon', 'IL': 'Israel', 'PS': 'Palestine', 'TR': 'Turkey', 'CY': 'Cyprus',
    'GR': 'Greece', 'BG': 'Bulgaria', 'RO': 'Romania', 'MD': 'Moldova', 'UA': 'Ukraine', 'BY': 'Belarus',
    'LT': 'Lithuania', 'LV': 'Latvia', 'EE': 'Estonia', 'FI': 'Finland', 'SE': 'Sweden', 'NO': 'Norway',
    'DK': 'Denmark', 'IS': 'Iceland', 'IE': 'Ireland', 'PT': 'Portugal', 'AD': 'Andorra', 'MC': 'Monaco',
    'LI': 'Liechtenstein', 'LU': 'Luxembourg', 'BE': 'Belgium', 'CH': 'Switzerland', 'AT': 'Austria',
    'CZ': 'Czech Republic', 'SK': 'Slovakia', 'HU': 'Hungary', 'SI': 'Slovenia', 'HR': 'Croatia',
    'BA': 'Bosnia and Herzegovina', 'RS': 'Serbia', 'ME': 'Montenegro', 'MK': 'North Macedonia',
    'AL': 'Albania', 'XK': 'Kosovo', 'PL': 'Poland', 'KZ': 'Kazakhstan', 'UZ': 'Uzbekistan',
    'TM': 'Turkmenistan', 'KG': 'Kyrgyzstan', 'TJ': 'Tajikistan', 'AF': 'Afghanistan', 'PK': 'Pakistan',
    'BD': 'Bangladesh', 'LK': 'Sri Lanka', 'MV': 'Maldives', 'NP': 'Nepal', 'BT': 'Bhutan',
    'MM': 'Myanmar', 'TH': 'Thailand', 'LA': 'Laos', 'VN': 'Vietnam', 'KH': 'Cambodia', 'MY': 'Malaysia',
    'SG': 'Singapore', 'BN': 'Brunei', 'ID': 'Indonesia', 'TL': 'East Timor', 'PH': 'Philippines',
    'TW': 'Taiwan', 'HK': 'Hong Kong', 'MO': 'Macau', 'KR': 'South Korea', 'KP': 'North Korea',
    'MN': 'Mongolia', 'FJ': 'Fiji', 'PG': 'Papua New Guinea', 'SB': 'Solomon Islands', 'VU': 'Vanuatu',
    'NC': 'New Caledonia', 'PF': 'French Polynesia', 'WS': 'Samoa', 'TO': 'Tonga', 'CK': 'Cook Islands',
    'NU': 'Niue', 'NZ': 'New Zealand', 'GT': 'Guatemala', 'BZ': 'Belize', 'SV': 'El Salvador',
    'HN': 'Honduras', 'NI': 'Nicaragua', 'CR': 'Costa Rica', 'PA': 'Panama', 'CU': 'Cuba', 'JM': 'Jamaica',
    'HT': 'Haiti', 'DO': 'Dominican Republic', 'PR': 'Puerto Rico', 'VG': 'British Virgin Islands',
    'VI': 'U.S. Virgin Islands', 'AI': 'Anguilla', 'MS': 'Montserrat', 'KN': 'Saint Kitts and Nevis',
    'AG': 'Antigua and Barbuda', 'DM': 'Dominica', 'LC': 'Saint Lucia', 'VC': 'Saint Vincent and the Grenadines',
    'BB': 'Barbados', 'GD': 'Grenada', 'TT': 'Trinidad and Tobago', 'SR': 'Suriname', 'GY': 'Guyana',
    'FK': 'Falkland Islands', 'GF': 'French Guiana', 'OM': 'Oman', 'YE': 'Yemen', 'QA': 'Qatar',
    'BH': 'Bahrain', 'KW': 'Kuwait', 'AM': 'Armenia', 'AZ': 'Azerbaijan', 'GE': 'Georgia',
    'LS': 'Lesotho', 'SZ': 'Eswatini', 'RW': 'Rwanda', 'BI': 'Burundi'
  };
  return countries[countryCode] || countryCode;
}

function setupUnitsToggle() {
  const unitsEl = document.getElementById('units');
  
  if (unitsEl) {
    console.log('🌡️ Setting up units toggle');
    
    unitsEl.addEventListener('change', e => {
      const newUnits = e.target.value;
      console.log('🔄 Units changed from', currentUnits, 'to', newUnits);
      
      if (newUnits !== currentUnits) {
        currentUnits = newUnits;
        fetchWeather(currentCity);
      }
    });
  } else {
    console.error('❌ Units element not found!');
  }
}

function initWeatherApp() {
  console.log('🚀 Initializing Weather App...');
  setupSearch();
  setupUnitsToggle();
  fetchWeather(DEFAULT_CITY);
  console.log('✨ Weather App initialized successfully!');
}

document.addEventListener('DOMContentLoaded', initWeatherApp);