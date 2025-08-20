import { useAssignments } from '../context/AssignmentsContext';
import AssignmentRow from './AssignmentRow';

const AssignmentTable = () => {
  const { assignments, toggleDone, editGrade, deleteAssignment } = useAssignments();

  return (
    <section>
      <h2>Your Assignments</h2>
      <table id="assignment-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Due</th>
            <th>Grade</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody id="assignment-list">
          {assignments.map(assignment => (
            <AssignmentRow 
              key={assignment.id} 
              assignment={assignment}
              onToggleDone={toggleDone}
              onEditGrade={editGrade}
              onDelete={deleteAssignment}
            />
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default AssignmentTable;