import "./App.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "./components/header";
import Hero from "./components/hero";
import Features from "./components/features";
import Reviews from "./components/reviews";
import Pricing from "./components/pricing";
import Footer from "./components/footer";
import { Spotlight } from "./components/ui/spotlight";
function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div>
          <Header />
          <main className="">
            <Hero />
            <div className="flex justfify-center flex-col">
              <h2 className="text-center font-bold text-4xl">Our Features</h2>
              <Features />
            </div>
            <div className="flex justfify-center flex-col">
              <h2 className="text-center font-bold text-4xl mt-10">
                Testimonials
              </h2>
              <Reviews />
            </div>
            <Spotlight className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"/>
            <div>
              <h2 className="text-center font-bold text-4xl my-10">Pricing</h2>
              <Pricing />
            </div>
            <div>
              <Footer />
            </div>
          </main>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
