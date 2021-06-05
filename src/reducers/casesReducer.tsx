import { GET_CASES, GET_VACCINES } from "../actions/types";
import { IAction, Dispatch, ICountry } from '../interfaces'

const INITIAL_STATE = { cases: [], vaccines: [] };

const casesReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case GET_CASES:
      return { ...state, cases: action.payload };
    case GET_VACCINES:
      return { ...state, vaccines: action.payload };
    default:
      return state;
  }
};

export type RootState = ReturnType<typeof casesReducer>

export default casesReducer
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
