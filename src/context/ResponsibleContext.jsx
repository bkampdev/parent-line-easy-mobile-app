import React, { createContext, useState } from "react";

export const ResponsibleContext = createContext();

export const ResponsibleProvider = ({ children }) => {
  const [responsibleData, setResponsibleData] = useState({});

  const setSelectStudent = (studentName) => {
    setResponsibleData((prevData) => ({
      ...prevData,
      selectedStudent: studentName,
    }));
  };

  return (
    <ResponsibleContext.Provider
      value={{ responsibleData, setSelectStudent, setResponsibleData }}
    >
      {children}
    </ResponsibleContext.Provider>
  );
};
