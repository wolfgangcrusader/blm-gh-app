import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import BlackCreatorsPage from "./pages/blackCreators";
import BlackOwnedEtsy from "./pages/BlackOwnedEtsy";
import BloodDrivePage from "./pages/BloodDrive";
import SocialMediaDownloads from "./pages/SocialMedia";
import BlackHistoryMovies from "./pages/BlackMovies";
import PetitionsPage from "./pages/PetitionsPage";
import DiscordBoostPage from "./pages/DiscordBoost";



function App() {
    return (
        <Router>
            <Routes>
                <Route path="/*" element={<Home />} />
                <Route path="/black-creators" element={<BlackCreatorsPage />} />
                <Route path="/black-owned-etsy" element={<BlackOwnedEtsy />} />
                <Route path="/blood-drive" element={<BloodDrivePage />} />
                <Route path="/social" element={<SocialMediaDownloads />} />
                <Route path="/movies" element={<BlackHistoryMovies />} />
                <Route path="/petition" element={<PetitionsPage />} />
                <Route path="/boost" element={<DiscordBoostPage />} />
            </Routes>
        </Router>
    );
}

export default App;
