import HomeHero from './components/Hero'
import HomePartners from './components/Partners'
import HomeBackgrounds from './components/Background'
import HomeContactUs from './components/ContactUs'
import HomeWhyUs from './components/WhyUs'
import ReactGA from "react-ga4";
import HomeLegalities from './components/Legalities'
import Issues from './components/Issues'
// import HomeTestimonials from './components/Testimonials'


function Home() {
  ReactGA.send(
    {
      hitType: "pageview",
      page: "/",
      title: "Homepage"
    }
  );
  return (
    <>
      <HomeHero />
      <HomeBackgrounds/>
      {/* <HomeProducts /> */}
      <HomeLegalities />
      {/* <HomePartners /> */}
      <Issues />
      {/* <HomeTestimonials /> */}
      <HomeWhyUs />
      <HomeContactUs />
    </>
  )
}

export default Home
