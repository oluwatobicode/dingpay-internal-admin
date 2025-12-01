import EventDashboardTables from "../components/event-dashboard/EventDasboardTables";
import EventDashboardCards from "../components/event-dashboard/EventDashboardCards";
import EventNavbar from "../ui/event/EventNavbar";

const EventDashboard = () => {
  return (
    <div className="mx-auto max-w-7xl">
      <EventNavbar />
      <EventDashboardCards />
      <EventDashboardTables />
    </div>
  );
};

export default EventDashboard;
