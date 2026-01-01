import axios from "axios";
import { CompanySearch } from "./company";

interface SearchResponse {
  data: CompanySearch;
}
export const searchCompanies = async (query: string) => {
  try {
    const data = await axios.get<SearchResponse>(
      // prettier-ignore
      `https://financialmodelingprep.com/stable/search-symbol?query=AAPL&apikey=${process.env.REACT_APP_API_KEY}`
      //`https://financialmodelingprep.com/stable/search-name?query=AA&apikey=`
    );
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("The error message : ", error.message);
      return error.message;
    } else {
      console.log(" Unexpected error : ", error);
      return "An unexpected error has occured";
    }
  }
};
