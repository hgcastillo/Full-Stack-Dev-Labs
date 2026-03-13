import { type Employee } from '../types/Employee';

interface Props {
  name: string;
  employees: Employee[];
}

export const DepartmentSection = ({ name, employees }: Props) => {
  return (
    <section className="dept-group">
      <h2>{name}</h2>
      <ul>
        {employees.map((emp, index) => (
          <li key={index}>
            {emp.lastName ? `${emp.firstName} ${emp.lastName}` : emp.firstName}
          </li>
        ))}
      </ul>
    </section>
  );
};
