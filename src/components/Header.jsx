import { useAssignments } from "../context/AssignmentsContext";

const Header = () => {
  // TODO: Implement the logic to get the percentage of completed assignments
  // Assignment: Add the logic to get the percentage of completed assignments
  // Hint: Look at how other functions get stats, and useEffect to update the document title when neccessary
  document.title = `VP Dashboard - 0% Completed`;

  return (
    <>
      <img src="/vp-logo.png" alt="Dashboard Logo" className="logo" />
      <h1>📘 Student Assignment Dashboard</h1>
      <h2>Manage Your Assignments</h2>
      <p>Keep track of your assignments, due dates, and grades.</p>
    </>
  );
};

export default Header;
