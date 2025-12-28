import React, { JSX } from "react";
import Card from "../Card/Card";

interface Props {}

const CastList: React.FC<Props> = (props: Props): JSX.Element => {
  return (
    <div>
      <Card companyName="Apple" ticker="APPL" price="100" />
      <Card companyName="Microsoft" ticker="MCS" price="200" />
      <Card companyName="Dominos" ticker="DOOM" price="00" />
    </div>
  );
};

export default CastList;
