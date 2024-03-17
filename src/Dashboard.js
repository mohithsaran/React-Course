import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
const Dashboard = () => {
  let navigate = useNavigate();
  let { name } = useParams();
  return (
    <div>
      <h3>Welcome to Dashboard</h3>
      <h4>Hi {name}</h4>
      <button onClick={() => navigate(-1)}>Go Back</button>
      <button onClick={() => navigate(1)}>Go Forward</button>
    </div>
  );
};

export default Dashboard;
