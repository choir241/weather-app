import gearIcon from "../assets/images/icon-units.svg";
import { labels } from "../static/labels";
import dropdownIcon from "../assets/images/icon-dropdown.svg";

export default function UnitDropdownButton({
  setIsDropdownVisible,
  isDropdownVisible,
}: {
  setIsDropdownVisible: (e: boolean) => void;
  isDropdownVisible: boolean;
}) {
  return (
    <button
      onClick={() => setIsDropdownVisible(!isDropdownVisible)}
      className="unitButton"
    >
      <img src={gearIcon} />
      {labels.header.unitsDropdown.heading}
      <img src={dropdownIcon} />
    </button>
  );
}
