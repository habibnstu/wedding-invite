"use client";

import { useEffect, useState } from "react";
import LoadingScreen from "@/components/common/LoadingScreen";
import Navbar from "@/components/common/Navbar";
import Hero from "@/components/home/Hero";
import PersonalizedGreeting from "@/components/home/PersonalizedGreeting";
import SaveTheDate from "@/components/home/SaveTheDate";
import OurStory from "@/components/home/OurStory";
import EventTimeline from "@/components/home/EventTimeline";
import Venue from "@/components/home/Venue";

import WeatherWidget from "@/components/home/WeatherWidget";
import Gallery from "@/components/gallery/Gallery";
import EmergencyContacts from "@/components/home/EmergencyContacts";
import RSVPForm from "@/components/rsvp/RSVPForm";
import Wishes from "@/components/rsvp/Wishes";
import DownloadInvitation from "@/components/home/DownloadInvitation";
import SocialShare from "@/components/common/SocialShare";
import AboutCumilla from "@/components/home/AboutCumilla";

export default function HomeClient({ guestName }: { guestName: string }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1400);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <LoadingScreen show={loading} />
      <Navbar />
      <main>
        <Hero guestName={guestName} />
        <PersonalizedGreeting guestName={guestName} />
        <SaveTheDate />
        <OurStory />
        <EventTimeline />
        <Venue />
        {/* <WeatherWidget />  */}
        {/* <Gallery />   */}
        <RSVPForm defaultName={guestName} />
        <Wishes />
        <DownloadInvitation guestName={guestName} />
        <EmergencyContacts />
        {/* <AboutCumilla /> */}
  
        {/* <SocialShare guestName={guestName} /> */}
      </main>
      <footer className="text-center py-8 text-xs text-gold-500/70 dark:text-gold-300/50">
        Made with 💛 for {guestName === "Guest" ? "our guests" : guestName}
      </footer>
    </>
  );
}
