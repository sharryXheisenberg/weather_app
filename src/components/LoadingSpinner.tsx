import { Cloud } from "lucide-react";

export const LoadingSpinner = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <Cloud className="w-16 h-16 text-primary animate-bounce" />
      <p className="mt-4 text-lg text-muted-foreground">Loading weather data...</p>
    </div>
  );
};
