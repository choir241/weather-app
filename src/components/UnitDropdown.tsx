import { labels } from "../static/labels";
import { useState } from "react";
import ImperialUnitDropdownButton from "../components/ImperialUnitDropdownButton";
import MetricUnitDropdownButton from "./MetricUnitDropdownButton";
import ToggleUnitButton from "./ToggleUnitButton";
import UnitDropdownButton from "./UnitDropdownButton";

export default function UnitDropdown() {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [toggleUnitValue, setToggleUnitValue] = useState(
    labels.header.unitsDropdown.unitToggleImperial,
  );
  const [toggleTemperature, setToggleTemperature] = useState("celsius");
  const [toggleWindSpeed, setToggleWindSpeed] = useState("km/h");
  const [togglePrecipitation, setTogglePrecipitation] = useState("millimeters");

  function toggleUnit() {
    if (toggleUnitValue === "Switch to Imperial") {
      setToggleUnitValue(labels.header.unitsDropdown.unitToggleMetric);
      setToggleTemperature("fahrenheit");
      setToggleWindSpeed("mph");
      setTogglePrecipitation("inches");
    } else {
      setToggleUnitValue(labels.header.unitsDropdown.unitToggleImperial);
      setToggleTemperature("celsius");
      setToggleWindSpeed("km/h");
      setTogglePrecipitation("millimeters");
    }
  }

  return (
    <div className="unitDropdownContainer">
      <UnitDropdownButton
        setIsDropdownVisible={setIsDropdownVisible}
        isDropdownVisible={isDropdownVisible}
      />

      {isDropdownVisible ? (
        <div className="unitDropdown">
          <ToggleUnitButton
            toggleUnit={toggleUnit}
            toggleUnitValue={toggleUnitValue}
          />

          <h4>{labels.header.unitsDropdown.temperatureHeading}</h4>

          <ImperialUnitDropdownButton
            toggleUnitValue={toggleUnitValue}
            setToggleUnitCategory={setToggleTemperature}
            toggleUnitCategory={toggleTemperature}
            metricValue={"fahrenheit"}
            imperialValue={"celsius"}
            unitLabel={labels.header.unitsDropdown.celsius}
          />

          <MetricUnitDropdownButton
            toggleUnitValue={toggleUnitValue}
            setToggleUnitCategory={setToggleTemperature}
            toggleUnitCategory={toggleTemperature}
            metricValue={"fahrenheit"}
            imperialValue={"celsius"}
            unitLabel={labels.header.unitsDropdown.fahrenheit}
          />
          <hr />
          <h4>{labels.header.unitsDropdown.windSpeedHeading}</h4>
          <ImperialUnitDropdownButton
            toggleUnitValue={toggleUnitValue}
            setToggleUnitCategory={setToggleWindSpeed}
            toggleUnitCategory={toggleWindSpeed}
            metricValue={"mph"}
            imperialValue={"km/h"}
            unitLabel={labels.header.unitsDropdown.km}
          />

          <MetricUnitDropdownButton
            toggleUnitValue={toggleUnitValue}
            setToggleUnitCategory={setToggleWindSpeed}
            toggleUnitCategory={toggleWindSpeed}
            metricValue={"mph"}
            imperialValue={"km/h"}
            unitLabel={labels.header.unitsDropdown.mph}
          />

          <hr />
          <h4>{labels.header.unitsDropdown.precipitationHeading}</h4>

          <ImperialUnitDropdownButton
            toggleUnitValue={toggleUnitValue}
            setToggleUnitCategory={setTogglePrecipitation}
            toggleUnitCategory={togglePrecipitation}
            metricValue={"inches"}
            imperialValue={"millimeters"}
            unitLabel={labels.header.unitsDropdown.millimeters}
          />

          <MetricUnitDropdownButton
            toggleUnitValue={toggleUnitValue}
            setToggleUnitCategory={setTogglePrecipitation}
            toggleUnitCategory={togglePrecipitation}
            metricValue={"inches"}
            imperialValue={"millimeters"}
            unitLabel={labels.header.unitsDropdown.inches}
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
