import checkboxIcon from "../assets/images/icon-checkmark.svg";

export default function ImperialUnitDropdownButton({
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
        (toggleUnitValue === "Switch to Imperial" &&
          toggleUnitCategory !== metricValue) ||
        toggleUnitCategory === imperialValue
          ? "activeUnitBtn"
          : ""
      }
      onClick={() => {
        setToggleUnitCategory(imperialValue);
      }}
    >
      {unitLabel}
      {(toggleUnitValue === "Switch to Imperial" &&
        toggleUnitCategory !== metricValue) ||
      toggleUnitCategory === imperialValue ? (
        <img src={checkboxIcon} />
      ) : (
        ""
      )}
    </button>
  );
}
