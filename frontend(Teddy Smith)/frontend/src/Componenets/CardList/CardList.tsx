import React from "react";
import Card from "../Card/Card";

interface Props {}

const CastList = (props: Props) => {
  return (
    <div>
      <Card companyName="Apple" ticker="APPL" price="100" />
      <Card companyName="Microsoft" ticker="MCS" price="200" />
      <Card companyName="Dominos" ticker="DOOM" price="300" />
    </div>
  );
};

export default CastList;
