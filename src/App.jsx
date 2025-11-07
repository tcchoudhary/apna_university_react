import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AURoutes from './routes/routing'
import MainLayout from "./layout/mainlayout";
import LoginPage from "./pages/Login/index";
import RegisterPage from "./pages/Ragister/index";
import ForgotPassword from "./pages/ForgatePassword/index";
import ProfilePage from "./componets/profile";
import HomePage from "./pages/HomePage";
import BlogsPage from "./pages/Blogs/BlogsPage";
import BlogDetail from "./componets/BlogDetail";
import ContactPage from './componets/ContactForm'
import TermCondition from "./pages/conditions/TermsConditions";
import PrivacyPolicy from "./pages/Policy/PrivacyPolicy";
import Notfound from "./pages/notFound/NotFound";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path={AURoutes?.LOGIN} element={<LoginPage />} />
          <Route path={AURoutes?.RAGISTER} element={<RegisterPage />} />
          <Route path={AURoutes?.FORGOT_PASSWORD} element={<ForgotPassword />} />
          <Route path={AURoutes?.PROFILE} element={<ProfilePage />} />
          <Route path={AURoutes?.BLOGS} element={<BlogsPage />} />
          <Route path={AURoutes?.BLOG_DETAILS} element={<BlogDetail />} />
          <Route path={AURoutes.CONTACT_US} element={<ContactPage />} />
          <Route path={AURoutes.TERM_CONDITIONS} element={<TermCondition />} />
          <Route path={AURoutes.PRIVACY_POLICY} element={<PrivacyPolicy />} />
          {/* ✅ NOT FOUND PAGE */}
          <Route path="*" element={<Notfound />} />
        </Route>
      </Routes>
    </Router>
  );
}
