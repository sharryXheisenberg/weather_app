import { Card } from "@/components/ui/card";

interface ForecastItem {
  dt: number;
  main: {
    temp: number;
    temp_min: number;
    temp_max: number;
  };
  weather: Array<{
    main: string;
    description: string;
    icon: string;
  }>;
}

interface ForecastCardProps {
  forecast: ForecastItem[];
}

export const ForecastCard = ({ forecast }: ForecastCardProps) => {
  const getWeatherIcon = (iconCode: string) => {
    return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  };

  // Group forecast by day and get one entry per day
  const dailyForecast = forecast.reduce((acc: ForecastItem[], item) => {
    const date = new Date(item.dt * 1000).toLocaleDateString();
    if (!acc.find((f) => new Date(f.dt * 1000).toLocaleDateString() === date)) {
      acc.push(item);
    }
    return acc;
  }, []).slice(0, 5);

  return (
    <div className="w-full max-w-4xl mx-auto animate-in fade-in duration-700">
      <h3 className="text-2xl font-bold mb-4">5-Day Forecast</h3>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {dailyForecast.map((item) => {
          const date = new Date(item.dt * 1000);
          const dayName = date.toLocaleDateString("en-US", { weekday: "short" });
          
          return (
            <Card
              key={item.dt}
              className="p-4 bg-weather-card text-center hover:shadow-lg transition-shadow"
            >
              <p className="font-semibold text-lg mb-2">{dayName}</p>
              <img
                src={getWeatherIcon(item.weather[0].icon)}
                alt={item.weather[0].description}
                className="w-16 h-16 mx-auto"
              />
              <p className="text-sm text-muted-foreground capitalize mb-2">
                {item.weather[0].description}
              </p>
              <div className="flex justify-center gap-2 text-sm">
                <span className="font-semibold">
                  {Math.round(item.main.temp_max)}°
                </span>
                <span className="text-muted-foreground">
                  {Math.round(item.main.temp_min)}°
                </span>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
