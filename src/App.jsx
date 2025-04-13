import { Suspense } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import PricingOptions from "./components/PricingOptions/PricingOptions";
import ResultChart from "./components/ResultChart/ResultChart";
import MarksChart from "./components/MarksChart/MarksChart";
import axios from "axios";

function App() {



  const pricingPromise = fetch('pricing.json').then(res => res.json());

const marksPromise = axios.get('marksData.json');


  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
      <Suspense fallback={<span className="loading loading-spinner loading-xl absolute left-[50%]"></span>}>
        <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
      </Suspense>



    <Suspense fallback={<span className="loading loading-spinner loading-lg absolute left-[50%]"></span>}>
      <MarksChart marksPromise={marksPromise}></MarksChart>
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
