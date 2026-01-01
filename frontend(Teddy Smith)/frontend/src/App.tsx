import { ChangeEvent, SyntheticEvent, useState } from "react";
import "./App.css";
import CardList from "./Componenets/CardList/CardList";
import Search from "./Componenets/Search/Search";
import { CompanySearch } from "./company";
import { searchCompanies } from "./api";

function App() {
  const [search, setSearch] = useState<string>("");
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
  const [serverError, setServerError] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    console.log(e);
  };

  const onClick = async (e: SyntheticEvent) => {
    console.log(search);
    const result = await searchCompanies(search);
    if (typeof result === "string") {
      setServerError(result);
      console.log(serverError);
    } else if (Array.isArray(result.data)) {
      setSearchResult(result.data);
    }
    console.log(searchResult);
  };

  return (
    <div className="App">
      <Search onClick={onClick} search={search} handleChange={handleChange} />
      <CardList />
    </div>
  );
}

export default App;
