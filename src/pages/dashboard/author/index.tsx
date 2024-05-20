import RecentBooksTable from "../../../components/dashboardComp/RecentBooksTable";
import DashboardWrapper from "../components/dashboardComp/RecentBooksTable
import Card from "./card";../components/global/DashboardWrapper


const Dashboard = () => {
  const totalBooks = 100; 
  const approved = 50; 
  const totalReaders = 500; 

  return (
    <>
      <DashboardWrapper>
        <div className="p-3">
        <div className="flex sm:flex-row flex-col justify-center items-center gap-4 p-3 w-full mb-8">
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
          </div>
      </DashboardWrapper>
    </>
  );
}

export default Dashboard