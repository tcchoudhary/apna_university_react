import { createContext, useContext, useState, useEffect } from "react";

const HomeSettingsContext = createContext();

export const HomeSettingsProvider = ({ children }) => {
    const [settings, setSettings] = useState({
        showTabsSection: true,
        showCareerGoals: true,
        showTopPrivateColleges: true,
        showSupportSection: true,
        showExpertCarousel: true,
        showCounselingSlider: true,
        showReviews: true,
        showSuccessStories: true,
        showMediaSection: true,
        showStudentFeedback: true,
        showAdvertisements: true,
    });

    // ✅ Future API se load karna ho to yaha call karna:
    useEffect(() => {
        // axios.get("/api/home-settings").then(res => setSettings(res.data));
    }, []);

    return (
        <HomeSettingsContext.Provider value={{ settings, setSettings }}>
            {children}
        </HomeSettingsContext.Provider>
    );
};

export const useHomeSettings = () => useContext(HomeSettingsContext);
