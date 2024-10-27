import Navbar from "@/components/navbar";
import Banner from "@/components/ิbanner";
import HomeContent from "@/components/HomeContent";
import LookingContent from "@/components/lookingcontent";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <div>
        <HomeContent />
      </div>

      <LookingContent />
    </div>
  );
}