# Student Assignment Dashboard

A React-based dashboard for managing student assignments with features for tracking titles, due dates, grades, and completion status.

## Installation

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open your browser and navigate to the URL shown in the terminal (typically `http://localhost:5173`)

## Project Structure

### JSX Components

- **`src/App.jsx`** - Main application component that provides the layout structure and wraps all components with the AssignmentsProvider context

- **`src/components/Header.jsx`** - Displays the application title "Student Assignment Dashboard"

- **`src/components/Stats.jsx`** - Shows statistics about assignments including:

  - Total number of assignments
  - Number of completed assignments
  - Average grade (when available)

- **`src/components/AssignmentForm.jsx`** - Form for adding new assignments with fields for:

  - Assignment title (required)
  - Due date (required)
  - Grade (optional, 0-100)

- **`src/components/AssignmentTable.jsx`** - Displays all assignments in a table format with columns for title, due date, grade, status, and actions

- **`src/components/AssignmentRow.jsx`** - Individual table row component for each assignment featuring:
  - Display of assignment details
  - Grade counter with increment/decrement buttons
  - Action buttons (Mark Done/Undo, Edit Grade, Delete)
  - Visual indication when assignment is marked as done

## Context Provider

### AssignmentsContext (`src/context/AssignmentsContext.jsx`)

The application uses React Context API for state management. The `AssignmentsProvider` manages all assignment data and provides the following:

**State:**

- `assignments` - Array of assignment objects, each containing:
  - `id` - Unique identifier
  - `title` - Assignment name
  - `due` - Due date
  - `grade` - Numerical grade (optional)
  - `done` - Boolean completion status

**Functions:**

- `addAssignment(title, dueDate, grade)` - Adds a new assignment
- `toggleDone(id)` - Toggles the completion status of an assignment
- `editGrade(id, newGrade)` - Updates the grade for an assignment
- `deleteAssignment(id)` - Removes an assignment from the list

The context provider uses `localStorage` to persist assignments between sessions, automatically saving and loading data.

## Generate Test Data

To quickly populate the dashboard with test data, you can run this script in your browser's console:

```javascript
// Script to generate 3000 random assignments
(function generateRandomAssignments() {
  // Random title components
  const subjects = [
    "Intro to Javascript",
    "HTML",
    "Advanced Javascript",
    "CSS",
    "SQL",
    "React",
    "Frontend Javascript",
    "ExpressJS",
    "EJS",
    "Knex.JS",
  ];
  const types = ["Homework", "Project", "Quiz", "Assignment", "Presentation"];
  const topics = [
    "Chapter 1",
    "Chapter 2",
    "Chapter 3",
    "Unit 1",
    "Unit 2",
    "Unit 3",
    "Midterm",
    "Final",
    "Introduction",
    "Advanced Topics",
  ];

  // Function to generate random date within the next 180 days
  function randomDate() {
    const start = new Date();
    const end = new Date();
    end.setDate(start.getDate() + 180);
    const date = new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    );
    return date.toISOString().split("T")[0];
  }

  // Function to generate random grade (or null)
  function randomGrade() {
    // 30% chance of no grade yet
    if (Math.random() < 0.3) return null;
    // Otherwise return grade between 60-100
    return Math.floor(Math.random() * 41) + 60;
  }

  // Function to generate random done status
  function randomDone() {
    // 40% chance of being done
    return Math.random() < 0.4;
  }

  // Generate assignments
  const assignments = [];
  for (let i = 0; i < 3000; i++) {
    const subject = subjects[Math.floor(Math.random() * subjects.length)];
    const type = types[Math.floor(Math.random() * types.length)];
    const topic = topics[Math.floor(Math.random() * topics.length)];

    assignments.push({
      id: Date.now() + i,
      title: `${subject} - ${type}: ${topic}`,
      due: randomDate(),
      grade: randomGrade(),
      done: randomDone(),
    });
  }

  // Save to localStorage
  localStorage.setItem("assignments", JSON.stringify(assignments));

  // Reload the page to see the new data
  location.reload();

  console.log("Generated 3000 random assignments successfully!");
})();
```

Simply paste this script into your browser's developer console while on the application page and press Enter. The page will reload with 3000 randomly generated assignments.

## Features

- ✅ Add new assignments with title, due date, and optional grade
- ✅ Mark assignments as complete/incomplete
- ✅ Edit grades using increment/decrement buttons or manual input
- ✅ Delete assignments
- ✅ View statistics (total, completed, average grade)
- ✅ Persistent storage using localStorage
- ✅ Visual feedback for completed assignments
- ✅ Responsive design with centered layout
