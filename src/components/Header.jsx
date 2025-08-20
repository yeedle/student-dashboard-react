import { useAssignments } from "../context/AssignmentsContext";

const Header = () => {
  const { assignments } = useAssignments();
  const totalAssignments = assignments.length;
  const completedAssignments = assignments.filter(
    (assignment) => assignment.done
  ).length;
  const percentageCompleted = Math.round((completedAssignments / totalAssignments) * 100);

  document.title = `VP Dashboard - ${percentageCompleted}% Completed`;

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
