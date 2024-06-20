import DashboardWrapper from "../../../components/global/DashboardWrapper";
import RecentBooksTable from "./RecentBooksTable";
import Card from "./card";

const Dashboard = () => {
  const totalBooks = 100;
  const approved = 50;
  const totalReaders = 500;

  return (
    <>
      <DashboardWrapper>
        <div className="py-3">
          <div className="flex sm:flex-row flex-col justify-start items-center gap-4 py-3  mb-8 ">
            <Card title="Total Books" value={totalBooks} />
            <Card title="Total Books Approved" value={approved} />
            <Card title="Total Readers" value={totalReaders} />
          </div>
          <hr color="black"/>

          <div className="mt-3">
            <h2 className="text-2xl font-semibold mb-2 text-default_secondary py-3">
              Recent Uploaded Books
            </h2>
          <hr color="black"/>
            <RecentBooksTable />
          </div>
        </div>
      </DashboardWrapper>
    </>
  );
};

export default Dashboard;
