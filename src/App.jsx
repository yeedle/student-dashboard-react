import { AssignmentsProvider } from './context/AssignmentsContext';
import Header from './components/Header';
import Stats from './components/Stats';
import AssignmentForm from './components/AssignmentForm';
import AssignmentTable from './components/AssignmentTable';
import './App.css';

function App() {
  return (
    <AssignmentsProvider>
      <div className="container">
        <Header />
        <Stats />
        <AssignmentForm />
        <AssignmentTable />
      </div>
    </AssignmentsProvider>
  );
}

export default App;