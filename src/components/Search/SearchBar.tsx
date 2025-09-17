import { labels } from "../../static/labels";
import { fetchWeatherApi } from "openmeteo";

const params = {
  latitude: 52.52,
  longitude: 13.41,
  current: ["temperature_2m", "precipitation", "wind_speed_10m"],
};

export default function SearchBar({
  setAddress,
}: {
  setAddress: (e: string) => void;
}) {
  async function grabWeatherData() {
    const url = "https://api.open-meteo.com/v1/forecast";
    const responses = await fetchWeatherApi(url, params);

    const response = responses[0];

    // const latitude = response.latitude();
    // const longitude = response.longitude();
    // const elevation = response.elevation();
    const utcOffsetSeconds = response.utcOffsetSeconds();

    const hourly = response.hourly()!;
    const current = response.current()!;

    const weatherData = {
      current: {
        time: new Date((Number(current.time()) + utcOffsetSeconds) * 1000),
        temperature_2m: current.variables(0)!.value(),
        precipitation: current.variables(1)!.value(),
        wind_speed_10m: current.variables(2)!.value(),
      },
      hourly: {
        time: [
          ...Array(
            (Number(hourly.timeEnd()) - Number(hourly.time())) /
              hourly.interval()
          ),
        ].map(
          (_, i) =>
            new Date(
              (Number(hourly.time()) +
                i * hourly.interval() +
                utcOffsetSeconds) *
                1000
            )
        ),
        temperature_2m: hourly.variables(0)!.valuesArray(),
      },
    };

    return weatherData;
  }

  return (
    <input
      type="search"
      onChange={(e) => setAddress(e.target.value)}
      placeholder={labels.home.searchBarPlaceholder}
    />
  );
}
