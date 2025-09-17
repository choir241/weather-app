import checkboxIcon from "../../assets/images/icon-checkmark.svg";

export default function MetricUnitDropdownButton({
  toggleUnitValue,
  toggleUnitCategory,
  setToggleUnitCategory,
  metricValue,
  imperialValue,
  unitLabel,
}: {
  toggleUnitValue: string;
  toggleUnitCategory: string;
  setToggleUnitCategory: (e: string) => void;
  metricValue: string;
  imperialValue: string;
  unitLabel: string;
}) {
  return (
    <button
      className={
        (toggleUnitValue === "Switch to Metric" &&
          toggleUnitCategory !== imperialValue) ||
        toggleUnitCategory === metricValue
          ? "activeUnitBtn"
          : ""
      }
      onClick={() => {
        setToggleUnitCategory(metricValue);
      }}
    >
      {unitLabel}
      {(toggleUnitValue === "Switch to Imperial" &&
        toggleUnitCategory !== imperialValue) ||
      toggleUnitCategory === metricValue ? (
        <img src={checkboxIcon} />
      ) : (
        ""
      )}
    </button>
  );
}
