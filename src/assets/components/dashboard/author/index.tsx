import DashboardWrapper from "../../global/DashboardWrapper"
import Card from "./card";



const Dashboard = () => {
  const totalBooks = 100; // Example value, replace with actual data
  const approved = 50; // Example value, replace with actual data
  const totalReaders = 500; // Example value, replace with actual data

  return (
    <>
      <DashboardWrapper>
        <div className="flex sm:flex-row flex-col justify-center items-center gap-4  w-full">
        <Card title="Total Books" value={totalBooks} />
        <Card title="Total Books Approved" value={approved} />
          <Card title="Total Readers" value={totalReaders} />
          </div>
      </DashboardWrapper>
    </>
  );
}

export default Dashboard