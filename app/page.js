import Navbar from "@/components/navbar";
import Banner from "@/components/ิbanner";
import HomeContent from "@/components/HomeContent";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <div>
        <HomeContent />
      </div>
    </div>
  );
}
