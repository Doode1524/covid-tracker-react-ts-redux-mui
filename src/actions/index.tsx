import axios from "axios";
import { GET_CASES, GET_VACCINES } from "./types";

export const getCases = () => async (dispatch) => {
  const response = await axios.get("https://covid-api.mmediagroup.fr/v1/cases");
  let countries = Object.entries(response.data).map((country) => ({
    [country[0]]: country[1].All,
  }));
  dispatch({ type: GET_CASES, payload: countries });
};

export const getVaccines = () => async (dispatch) => {
  const response = await axios.get("https://covid-api.mmediagroup.fr/v1/vaccines");
  let countries = Object.entries(response.data).map((country) => ({
    [country[0]]: country[1].All,
  }));
  dispatch({ type: GET_VACCINES, payload: countries });
};

// const getCases = () => {
//     fetch("https://covid-api.mmediagroup.fr/v1/cases")
//       .then((res) => res.json())
//       .then((data) => {
//         let countries = Object.entries(data).map((country) => ({
//           [country[0]]: country[1].All,
//         }));
//         setCases(countries);
//       });
//   };
