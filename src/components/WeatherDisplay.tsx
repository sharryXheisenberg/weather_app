import { Cloud, Droplets, Wind, Eye, Gauge } from "lucide-react";
import { Card } from "@/components/ui/card";

interface WeatherData {
  name: string;
  sys: { country: string };
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
    pressure: number;
  };
  weather: Array<{
    main: string;
    description: string;
    icon: string;
  }>;
  wind: { speed: number };
  visibility: number;
}

interface WeatherDisplayProps {
  data: WeatherData;
}

export const WeatherDisplay = ({ data }: WeatherDisplayProps) => {
  const getWeatherIcon = (iconCode: string) => {
    return `https://openweathermap.org/img/wn/${iconCode}@4x.png`;
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6 animate-in fade-in duration-500">
      {/* Main Weather Card */}
      <Card className="p-8 bg-weather-card shadow-lg">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <img
              src={getWeatherIcon(data.weather[0].icon)}
              alt={data.weather[0].description}
              className="w-32 h-32"
            />
            <div>
              <h2 className="text-4xl font-bold">
                {data.name}, {data.sys.country}
              </h2>
              <p className="text-xl text-muted-foreground capitalize">
                {data.weather[0].description}
              </p>
            </div>
          </div>
          <div className="text-center md:text-right">
            <div className="text-6xl font-bold">
              {Math.round(data.main.temp)}°C
            </div>
            <p className="text-muted-foreground">
              Feels like {Math.round(data.main.feels_like)}°C
            </p>
          </div>
        </div>
      </Card>

      {/* Weather Details Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="p-6 bg-weather-card">
          <div className="flex items-center gap-3">
            <Droplets className="w-8 h-8 text-primary" />
            <div>
              <p className="text-sm text-muted-foreground">Humidity</p>
              <p className="text-2xl font-semibold">{data.main.humidity}%</p>
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-weather-card">
          <div className="flex items-center gap-3">
            <Wind className="w-8 h-8 text-primary" />
            <div>
              <p className="text-sm text-muted-foreground">Wind Speed</p>
              <p className="text-2xl font-semibold">{data.wind.speed} m/s</p>
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-weather-card">
          <div className="flex items-center gap-3">
            <Eye className="w-8 h-8 text-primary" />
            <div>
              <p className="text-sm text-muted-foreground">Visibility</p>
              <p className="text-2xl font-semibold">
                {(data.visibility / 1000).toFixed(1)} km
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-weather-card">
          <div className="flex items-center gap-3">
            <Gauge className="w-8 h-8 text-primary" />
            <div>
              <p className="text-sm text-muted-foreground">Pressure</p>
              <p className="text-2xl font-semibold">{data.main.pressure} hPa</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};
