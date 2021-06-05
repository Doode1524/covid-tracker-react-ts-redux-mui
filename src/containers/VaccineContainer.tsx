import React, { useState, useEffect } from "react";
import VaccineList from "../components/VaccineList";
import { connect, useDispatch, useSelector } from "react-redux";
import { getCases, getVaccines } from "../actions";
import { RootState } from "../reducers/casesReducer";

const Vaccines = () => {

  const vaccines = useSelector((state: RootState) => state.vaccines)
  const cases = useSelector((state: RootState) => state.cases)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatchGetCases();
    dispatchGetVaccines();
  }, []);

  const dispatchGetCases = () => {
    dispatch(getCases());
  };

  const dispatchGetVaccines = () => {
    dispatch(getVaccines());
  };

  if (cases.length === 0) {
    return <div>Loading</div>;
  }

  return (
    <div>
      <VaccineList cases={cases} vaccines={vaccines} />
    </div>
  );
};

// const mapStateToProps = (state: RootState) => {
//   return {
//     cases: state.cases,
//     vaccines: state.vaccines,
//   };
// };

export default Vaccines
