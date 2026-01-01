import { ChangeEvent, SyntheticEvent, useState } from "react";
import "./App.css";
import CardList from "./Componenets/CardList/CardList";
import Search from "./Componenets/Search/Search";
import { CompanySearch } from "./company";
import { searchCompanies } from "./api";
import ListPortfolio from "./Componenets/Portfolio/ListPortfolio/ListPortfolio";

function App() {
  const [search, setSearch] = useState<string>("");
  const [portfolioValues, setPortfolioValues] = useState<string[]>([]);
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
  const [serverError, setServerError] = useState<string | null>(null);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    console.log(e);
  };

  const onSearchSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    console.log(search);
    const result = await searchCompanies(search);
    if (typeof result === "string") {
      setServerError(result);
      console.log(serverError);
    } else if (Array.isArray(result.data)) {
      setSearchResult(result.data);
    }
  };

  const onPortfolioCreate = (e: any) => {
    e.preventDefault();
    const exists = portfolioValues.find((value) => value === e.target[0].value);
    if (exists) return;
    const updatedPortfolioValues = [...portfolioValues, e.target[0].value];
    setPortfolioValues(updatedPortfolioValues);
  };

  const onPortfolioDelete = (e: any) => {
    e.preventDefault();
    const remove = portfolioValues.filter((value) => {
      return value !== e.target[0].value;
    });
    setPortfolioValues(remove);
  };
  return (
    <div className="App">
      <Search
        onSearchSubmit={onSearchSubmit}
        search={search}
        handleSearchChange={handleSearchChange}
      />
      {serverError && <h1>{serverError}</h1>}
      <ListPortfolio
        portfolioValues={portfolioValues}
        onPortfolioDelete={onPortfolioDelete}
      />
      <CardList
        searchResult={searchResult}
        onPortfolioCreate={onPortfolioCreate}
      />
    </div>
  );
}

export default App;
