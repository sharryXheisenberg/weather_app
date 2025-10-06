# **Weather App**

A modern React-based weather application that provides current weather conditions and a 5-day forecast for any city worldwide. Built with Vite, Tailwind CSS, and powered by OpenWeatherMap API, this app offers a clean and intuitive user interface for checking weather information.

## **Live preview**
- Check out here live preview of weather app - [Weather app](https://weather-app-tan-beta-96.vercel.app/)
## **Features**
- **Real-time Weather Data**: Get current weather conditions including temperature, humidity, wind speed, visibility, and pressure
- **5-Day Forecast**: View detailed weather predictions for the next 5 days
- **City Search**: Search for weather information in any city worldwide
- **Responsive Design**: Fully responsive interface that works seamlessly on all devices
- **Clean UI**: Modern and intuitive user interface with weather icons and visual indicators
- **Feels Like Temperature**: Display apparent temperature for better weather understanding
- **Vite**: Ultra-fast development and build tooling
- **React**: Latest version for building modern UI components
- **Tailwind CSS**: Utility-first CSS framework for building custom designs
- **OpenWeatherMap API**: Free weather API for fetching accurate weather data

## **Functionalities**
1. **Search**: Search for any city to get weather information
2. **Current Weather**: Display current temperature, weather conditions, and feels-like temperature
3. **Weather Details**: View humidity, wind speed, visibility, and atmospheric pressure
4. **5-Day Forecast**: Get daily weather predictions with temperature ranges and conditions
5. **Weather Icons**: Visual representation of weather conditions with appropriate icons

## **Installation**

### **Prerequisites**
- Node.js (v14 or higher)
- npm or yarn package manager
- OpenWeatherMap API key (get it free from [OpenWeatherMap](https://openweathermap.org/api))

### **Step 1: Clone the repository**
```bash
git clone <your-repository-url>
cd weather_app 
```
### **step 2: Install dependencies**
``` bash
npm install
```

### **step 3: Configure API Key**
- Sign up at OpenWeatherMap to get your free API key
- Add your API key - 
``` bash
VITE_WEATHER_API_KEY=your_api_key_here
```

### **step 4: Run the application**
```bash
npm run dev
```
- Open the app in your browser at http://localhost:8080

### Scripts and Development
- Start the development server:

``` bash
npm run dev
```
#### ****Build for Production****
- Create an optimized production build:
``` bash
npm run build
```

### ****Preview Production Build****
- Preview the production build locally
``` bash
npm run preview
```

### ****Lint the Code****
``` bash
Lint the Code
```

### **Packages Used**
- **react** - Core React library for building user interfaces
- **react-dom** - DOM bindings for React
- **vite** -  Fast build tool and development server
- **tailwindcss** - Utility-first CSS framework
- **react-icons** - Icon library for React applications

### **Project Structure**
``` bash 
weather_app/
│
├── node_modules/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── WeatherCard.jsx
│   │   ├── SearchBar.jsx
│   │   ├── ForecastCard.jsx
│   │   └── WeatherDetails.jsx
│   ├── services/
│   │   └── weatherApi.js
│   ├── utils/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .env
├── .gitignore
├── .eslintrc.js
├── bun.lockb
├── components.json
├── eslint.config.js
├── index.html
├── LICENSE
├── package-lock.json
├── package.json
├── postcss.config.js
├── README.md
├── README.copy.md
├── tailwind.config.ts
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

### **License**
- This project is licensed under the MIT License.





