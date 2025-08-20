import { useAssignments } from '../context/AssignmentsContext';

const Stats = () => {
  // TODO: Get statistics from context
  // Assignment: Use the useAssignments hook to get the getStats function
  // Then call getStats() to get total, completed, and average values
  
  const total = 0; // TODO: Get actual total
  const completed = 0; // TODO: Get actual completed count
  const average = "N/A"; // TODO: Get actual average

  return (
    <section className="stats">
      <p>Total Assignments: <span>{total}</span></p>
      <p>Completed: <span>{completed}</span></p>
      <p>Average Grade: <span>{average}</span></p>
    </section>
  );
};

export default Stats;