import React, { createContext, useState } from "react";

export const SelectedStudentContext = createContext();

export const SelectedStudentProvider = ({ children }) => {
  const [selectedStudent, setSelectedStudent] = useState("");

  return (
    <SelectedStudentContext.Provider
      value={{ selectedStudent, setSelectedStudent }}
    >
      {children}
    </SelectedStudentContext.Provider>
  );
};
