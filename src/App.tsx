import Footer from "./components/Footer";
import Header from "./components/Header";
import { labels } from "./static/labels";
import SearchBar from "./components/Search/SearchBar";
import { useState } from "react";

export default function App() {
  const [address, setAddress] = useState("");

  console.log(address);

  return (
    <>
      <Header />

      {labels.home.headingOne}

      <SearchBar setAddress={setAddress} />
      <Footer />
    </>
  );
}
