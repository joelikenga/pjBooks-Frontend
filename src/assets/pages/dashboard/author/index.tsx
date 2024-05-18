
import RecentBooksTable from "../../../components/dashboardComp/RecentBooksTable";
import DashboardWrapper from "../../../components/global/DashboardWrapper";
import Card from "./card";




const Dashboard = () => {
  const totalBooks = 100; // Example value, replace with actual data
  const approved = 50; // Example value, replace with actual data
  const totalReaders = 500; // Example value, replace with actual data

  return (
    <>
      <DashboardWrapper>
        <div className="flex sm:flex-row flex-col justify-center items-center gap-4  w-full mb-8">
          <Card title="Total Books" value={totalBooks} />
          <Card title="Total Books Approved" value={approved} />
          <Card title="Total Readers" value={totalReaders} />
        </div>
        {/* <UploadBooks /> */}
        <hr />

        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Recent Uploaded Books</h2>
          <RecentBooksTable />
        </div>
      </DashboardWrapper>
    </>
  );
}

export default Dashboard