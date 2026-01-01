import React, { JSX } from "react";
import Card from "../Card/Card";
import { CompanySearch } from "../../company";
import card from "../Card/Card";
import { v4 as uuidv4 } from "uuid";

interface Props {
  searchResult: CompanySearch[];
}

const CastList: React.FC<Props> = ({ searchResult }: Props): JSX.Element => {
  return (
    <>
      {searchResult.length > 0 ? (
        searchResult.map((result) => {
          return (
            <Card id={result.symbol} key={uuidv4()} searchResult={result} />
          );
        })
      ) : (
        <h1>No Result</h1>
      )}
    </>
  );
};

export default CastList;
