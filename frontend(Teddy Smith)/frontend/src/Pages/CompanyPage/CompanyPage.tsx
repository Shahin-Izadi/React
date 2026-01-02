import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CompanyProfile } from "../../company";
import { getCompanyProfile } from "../../api";
import { readSync } from "fs";

interface Props {}

const CompanyPage = (props: Props) => {
  let { ticker } = useParams();
  const [company, setCompany] = useState<CompanyProfile>();

  useEffect(() => {
    const getProfileInit = async () => {
      const result = await getCompanyProfile(ticker!);
      setCompany(result?.data[0]);
    };
    getProfileInit();
  }, []);
  //console.log({ company });
  return (
    <>
      {company ? (
        <div>{company.companyName}</div>
      ) : (
        <div>Comapny Name Not Found</div>
      )}
    </>
  );
};

export default CompanyPage;
