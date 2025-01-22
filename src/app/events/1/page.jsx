import Footer from "@/components/Footer";
import Header from "@/app/events/components/Header";
import Event1 from "../components/Event1";

const page = () => {
  return (
    <main className="flex flex-col items-center px-4 overflow-hidden">
      <Header />
      <Event1 />
      <Footer />
    </main>
  );
};

export default page;
