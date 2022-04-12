import React from "react";
import {Route, Routes} from "react-router-dom";

// Import the micro-frontend
// can be lazy load to
import SomeFeature from "some_feature_app/App";
import WelcomeContainer from "../modules/welcome/WelcomeContainer";
import CoreFeatureContainer from "../modules/core-feature/CoreFeatureContainer";


function AppRoutes() {

    return (
        <Routes>
            <Route path="/" element={<WelcomeContainer />} />
            <Route path="/core-feature" element={<CoreFeatureContainer />} />
            <Route path="/some-feature" element={<SomeFeature />} />
        </Routes>
    )
}

export default AppRoutes;