import { createContext, useContext, useState } from "react";

const AssignmentsContext = createContext();

export const useAssignments = () => {
  const context = useContext(AssignmentsContext);
  if (!context) {
    throw new Error("useAssignments must be used within AssignmentsProvider");
  }
  return context;
};

export const AssignmentsProvider = ({ children }) => {
  // TODO: Optimize initial load from localStorage
  // Currently loads from localStorage on every render
  // Assignment: Use useEffect to load assignments from localStorage only once
  const [assignments, setAssignments] = useState(() => {
    const stored = localStorage.getItem("assignments");
    if (stored) {
      return JSON.parse(stored);
    }
    return [];
  });

  const addAssignment = (title, due, grade) => {
    const newAssignment = {
      id: Date.now(),
      title,
      due,
      grade: grade ? Number(grade) : null,
      done: false,
    };

    const updatedAssignments = [...assignments, newAssignment];
    setAssignments(updatedAssignments);
    localStorage.setItem("assignments", JSON.stringify(updatedAssignments));
  };

  const toggleDone = (id) => {
    const updatedAssignments = assignments.map((a) =>
      a.id === id ? { ...a, done: !a.done } : a
    );
    setAssignments(updatedAssignments);
    localStorage.setItem("assignments", JSON.stringify(updatedAssignments));
  };

  const editGrade = (id, newGrade) => {
    const gradeVal = Number(newGrade);
    if (!isNaN(gradeVal) && gradeVal >= 0 && gradeVal <= 100) {
      const updatedAssignments = assignments.map((a) =>
        a.id === id ? { ...a, grade: gradeVal } : a
      );
      setAssignments(updatedAssignments);
      localStorage.setItem("assignments", JSON.stringify(updatedAssignments));
      return true;
    }
    return false;
  };

  const deleteAssignment = (id) => {
    // TODO: Implement delete functionality
    // Assignment: Remove the assignment with the given id from the list
    // Hint: Look at how other functions update assignments and localStorage
    console.log("deleteAssignment not implemented yet", id);
  };

  const getStats = () => {
    const total = assignments.length;
    const completed = assignments.filter((a) => a.done).length;
    const graded = assignments.filter((a) => a.grade !== null);
    const average =
      graded.length > 0
        ? (graded.reduce((sum, a) => sum + a.grade, 0) / graded.length).toFixed(
            1
          )
        : "N/A";

    return { total, completed, average };
  };

  const value = {
    assignments,
    addAssignment,
    toggleDone,
    editGrade,
    deleteAssignment,
    getStats,
  };

  return (
    <AssignmentsContext.Provider value={value}>
      {children}
    </AssignmentsContext.Provider>
  );
};
