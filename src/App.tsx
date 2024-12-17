import "./App.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "./components/header";
import Hero from "./components/hero";
import Features from "./components/features";
import Reviews from "./components/reviews";
import Pricing from "./components/pricing";
import Footer from "./components/footer";
import { Spotlight } from "./components/ui/spotlight";
import Subscribe from "./components/subscribe";
import { motion } from "motion/react";
import { ContainerScroll } from "./components/ui/container-scroll-animation";
function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div>
          <motion.div className="flex justify-center z-10">
            <Header />
          </motion.div>
          <main className="">
            <Hero />
            <div className="flex justfify-center flex-col overflow-hidden">
              <ContainerScroll
                titleComponent={
                  <>
                    <h1 className="text-4xl font-semibold text-black dark:text-white">
                      With Our Features <br />
                      <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                        Unlock Your Full Potential
                      </span>
                    </h1>
                  </>
                }
              >
                <Features />
              </ContainerScroll>
            </div>
            <div className="flex justfify-center flex-col">
              <h2 className="text-center font-bold text-4xl mt-10">
                Testimonials
              </h2>
              <Reviews />
            </div>
            <Spotlight
              className="-top-40 left-0 md:left-60 md:-top-20"
              fill="white"
            />

            <div className="flex justify-center flex-col">
              <h2 className="text-center font-bold text-4xl my-10">Pricing</h2>
              <Pricing />
            </div>
            <div className="flex justify-center ">
              <div className="flex">
                <Subscribe />
              </div>
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
