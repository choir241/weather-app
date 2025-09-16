import logo from "../assets/images/logo.svg";
import UnitDropdown from "./UnitDropdown";

export default function Header() {
  return (
    <header>
      <img src={logo} />

      <UnitDropdown />
    </header>
  );
}
