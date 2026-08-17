import Navbar from "@/components/common/Navbar";
import AboutCumilla from "@/components/home/AboutCumilla";

export default function HistoricalPlacesPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen pt-20">
        <AboutCumilla />
      </main>
    </>
  );
}