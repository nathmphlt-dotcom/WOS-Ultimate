"use client";

import { useState } from "react";

import {
  Dashboard,
  Lobby,
  PlaceholderPage,
  WOSLayout,
  WOSPage
} from "../components/WOSUI";

export default function Home() {
  const [activePage, setActivePage] = useState<WOSPage>("Lobby");

  const renderPage = () => {
    if (activePage === "Lobby") {
      return <Lobby onNavigate={setActivePage} />;
    }

    if (activePage === "Dashboard") {
      return <Dashboard onNavigate={setActivePage} />;
    }

    return <PlaceholderPage page={activePage} />;
  };

  return (
    <WOSLayout
      activePage={activePage}
      onNavigate={setActivePage}
    >
      {renderPage()}
    </WOSLayout>
  );
}
