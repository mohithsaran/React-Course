import { useNavigate } from "react-router-dom";
const Dashboard = () => {
  let navigate = useNavigate();
  return (
    <div>
      <h3>Welcome to Dashboard</h3>
      <button onClick={() => navigate(-1)}>Go Back</button>
      <button onClick={() => navigate(1)}>Go Forward</button>
    </div>
  );
};

export default Dashboard;
