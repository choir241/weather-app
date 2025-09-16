export default function ToggleUnitButton({
  toggleUnitValue,
  toggleUnit,
}: {
  toggleUnitValue: string;
  toggleUnit: () => void;
}) {
  return (
    <button
      className="unitToggleButton"
      aria-label="unit toggle button"
      onClick={() => toggleUnit()}
    >
      {toggleUnitValue}
    </button>
  );
}
