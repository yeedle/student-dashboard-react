import { useState } from 'react';
import { useAssignments } from '../context/AssignmentsContext';

const AssignmentForm = () => {
  const { addAssignment } = useAssignments();
  const [title, setTitle] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [grade, setGrade] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addAssignment(title, dueDate, grade);
    setTitle('');
    setDueDate('');
    setGrade('');
  };

  return (
    <form id="assignment-form" onSubmit={handleSubmit}>
      <div className="form-groups">
        <div className="form-group">
          <label htmlFor="title">Assignment Title</label>
          <input
            type="text"
            id="title"
            placeholder="Assignment Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="due-date">Due Date</label>
          <input
            type="date"
            id="due-date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="grade">Grade (optional)</label>
          <input
            type="number"
            id="grade"
            placeholder="Grade (optional)"
            min="0"
            max="100"
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
          />
        </div>
      </div>
      <button className="primary circular" type="submit">+</button>
    </form>
  );
};

export default AssignmentForm;