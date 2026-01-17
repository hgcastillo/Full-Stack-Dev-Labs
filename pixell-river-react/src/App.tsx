import './App.css';
import { Header } from './components/Header';
import { DepartmentSection } from './components/DepartmentSection';
import { organizationData } from './data/organizationData';

function App() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="App">
      <Header />
      
      <main id="employee-container">
        {organizationData.map((dept) => (
          <DepartmentSection 
            key={dept.name} 
            name={dept.name} 
            employees={dept.employees} 
          />
        ))}
      </main>

      <footer>
        <p>Copyright Pixell River Financial {currentYear}.</p>
      </footer>
    </div>
  );
}

export default App;
