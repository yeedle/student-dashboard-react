import { memo } from "react";

const AssignmentRow = memo(({ assignment, onToggleDone, onEditGrade, onDelete }) => {
  console.log("AssignmentRow rendered");

  const handleEditGrade = () => {
    const newGrade = prompt("Enter new grade:");
    if (newGrade !== null) {
      const success = onEditGrade(assignment.id, newGrade);
      if (!success) {
        alert("Invalid grade.");
      }
    }
  };

  const handleToggleDone = () => {
    onToggleDone(assignment.id);
  };

  const handleDelete = () => {
    onDelete(assignment.id);
  };

  const handleIncrementGrade = () => {
    const currentGrade = assignment.grade || 0;
    onEditGrade(assignment.id, currentGrade + 1);
  };

  const handleDecrementGrade = () => {
    const currentGrade = assignment.grade || 0;
    if (currentGrade > 0) {
      onEditGrade(assignment.id, currentGrade - 1);
    }
  };

  return (
    <tr className={`assignment-row ${assignment.done ? "done" : ""}`}>
      <td>{assignment.title}</td>
      <td>{assignment.due}</td>
      <td className="grade-cell">
        <button className="grade-btn decrement" onClick={handleDecrementGrade}>
          −
        </button>
        <span className="grade-value">{assignment.grade ?? "—"}</span>
        <button className="grade-btn increment" onClick={handleIncrementGrade}>
          +
        </button>
      </td>
      <td>{assignment.done ? "Done" : "Not Done"}</td>
      <td className="actions">
        <button onClick={handleToggleDone}>
          {assignment.done ? "Undo" : "Mark Done"}
        </button>
        <button onClick={handleEditGrade}>Edit Grade</button>
        <button onClick={handleDelete}>Delete</button>
      </td>
    </tr>
  );
}, (prevProps, nextProps) => {
  // TODO: Fix memoization - currently only checking grade changes
  // Assignment: Make memoization work properly for all assignment properties
  return (
    prevProps.assignment.grade === nextProps.assignment.grade
  );
});

AssignmentRow.displayName = "AssignmentRow";

export default AssignmentRow;
