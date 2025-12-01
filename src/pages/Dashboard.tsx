import DashboardTables from "../components/admin-dashboard/DashboardTables";
import DashboardCards from "../components/admin-dashboard/DashboardCards";
import Navbar from "../ui/admin/Navbar";

const Dashboard = () => {
  return (
    <div className="mx-auto max-w-7xl">
      <Navbar />
      <DashboardCards />
      <DashboardTables />
    </div>
  );
};

export default Dashboard;
