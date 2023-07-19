import { Outlet } from "react-router-dom";
import Header from "../src/components/Header";

const PublicLayout = () => {
  return (
    <div className="">
      <Header />
      <main className="container mx-auto mt-5 md:mt-20 p-5 md:flex md:justify-center">
        <Outlet />
      </main>
    </div>
  );
};

export default PublicLayout;
