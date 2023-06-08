import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ChannelDetails } from "./components/ChannelDetails";
import { Feed } from "./components/Feed";
import { Navigation } from "./components/Navigation";
import { SearchFeed } from "./components/SearchFeed";
import { VideoDetails } from "./components/VideoDetails";

export const App = () => {
  return (
    <main id="youtube">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/channel/:id" element={<ChannelDetails />} />
          <Route path="/video/:id" element={<VideoDetails />} />
          <Route path="/search/:searchvideo" element={<SearchFeed />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
};
