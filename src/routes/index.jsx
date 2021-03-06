import Components from "views/Components/Components.jsx";
import LandingPage from "views/LandingPage/LandingPage.jsx";
import ProfilePage from "views/ProfilePage/ProfilePage.jsx";
import LoginPage from "views/LoginPage/LoginPage.jsx";
import HomePage from "views/HomePage/HomePage.jsx";
import ServicesPage from "views/ServicesPage/ServicesPage.jsx";
import ServicePricingPage from "views/ServicePricingPage/ServicePricingPage.jsx";

var indexRoutes = [
  { path: "/landing-page", name: "LandingPage", component: LandingPage },
  { path: "/profile-page", name: "ProfilePage", component: ProfilePage },
  { path: "/login-page", name: "LoginPage", component: LoginPage },
  { path: "/home-page", name: "HomePage", component: HomePage },
  { path: "/service-pricing-page", name: "ServicePricingPage", component: ServicePricingPage },
  { path: "/services-page", name: "ServicesPage", component: ServicesPage },
  { path: "/", name: "Components", component: Components }
];

export default indexRoutes;
