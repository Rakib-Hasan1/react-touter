import { Suspense } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import PricingOptions from "./components/PricingOptions/PricingOptions";
import ResultChart from "./components/ResultChart/ResultChart";

function App() {



  const pricingPromise = fetch('pricing.json').then(res => res.json());


  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
      <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
        <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
      </Suspense>
      </main>
      <footer>

    <ResultChart>

    </ResultChart>
      </footer>
    </>
  );
}

export default App;
