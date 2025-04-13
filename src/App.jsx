import { Suspense } from "react";
import "./App.css";
import DaisuiNav from "./components/daisuiNav/DaisuiNav";
import Navbar from "./components/navbar/Navbar";
import PricingOptions from "./components/PricingOptions/PricingOptions";

function App() {



  const pricingPromise = fetch('pricing.json').then(res => res.json());


  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
      {/* <DaisuiNav></DaisuiNav> */}
      <main>
      <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
        <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
      </Suspense>
      </main>
      <footer>

      </footer>
    </>
  );
}

export default App;
