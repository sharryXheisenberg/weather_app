import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { SearchBar } from "@/components/SearchBar";
import { WeatherDisplay } from "@/components/WeatherDisplay";
import { ForecastCard } from "@/components/ForecastCard";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import { fetchCurrentWeather, fetchForecast } from "@/lib/weatherApi";
import { useToast } from "@/hooks/use-toast";
import { CloudRain } from "lucide-react";

const STORAGE_KEY = "lastSearchedCity";

const Index = () => {
  const [searchCity, setSearchCity] = useState<string>("");
  const { toast } = useToast();

  useEffect(() => {
    const lastCity = localStorage.getItem(STORAGE_KEY);
    if (lastCity) {
      setSearchCity(lastCity);
    }
  }, []);

  // Fetch current weather
  const {
    data: weatherData,
    isLoading: isWeatherLoading,
    error: weatherError,
  } = useQuery({
    queryKey: ["weather", searchCity],
    queryFn: () => fetchCurrentWeather(searchCity),
    enabled: !!searchCity,
    retry: false,
  });

  // Fetch forecast
  const {
    data: forecastData,
    isLoading: isForecastLoading,
  } = useQuery({
    queryKey: ["forecast", searchCity],
    queryFn: () => fetchForecast(searchCity),
    enabled: !!searchCity && !!weatherData,
    retry: false,
  });

  // Handle search
  const handleSearch = (city: string) => {
    setSearchCity(city);
    localStorage.setItem(STORAGE_KEY, city);
  };

  // Show error toast
  useEffect(() => {
    if (weatherError) {
      toast({
        title: "Error",
        description: weatherError instanceof Error 
          ? weatherError.message 
          : "An error occurred while fetching weather data.",
        variant: "destructive",
      });
    }
  }, [weatherError, toast]);

  const isLoading = isWeatherLoading || isForecastLoading;

  return (
    <div className="min-h-screen bg-sky-gradient">
      <div className="container py-8 px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-2">
            <CloudRain className="w-12 h-12 text-primary" />
            <h1 className="text-5xl font-bold text-foreground">Weather App</h1>
          </div>
          <p className="text-lg text-foreground/80">
            Get current weather and 5-day forecast for any city
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-12">
          <SearchBar onSearch={handleSearch} isLoading={isLoading} />
        </div>

        {/* Loading State */}
        {isLoading && <LoadingSpinner />}

        {/* Weather Display */}
        {!isLoading && weatherData && (
          <div className="space-y-8">
            <WeatherDisplay data={weatherData} />
            {forecastData && <ForecastCard forecast={forecastData} />}
          </div>
        )}

        {/* Empty State */}
        {!isLoading && !weatherData && !weatherError && (
          <div className="text-center py-12">
            <CloudRain className="w-24 h-24 mx-auto text-primary/50 mb-4" />
            <p className="text-xl text-foreground/60">
              Search for a city to see the weather
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
