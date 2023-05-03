"use client";

import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function Grafic() {
  const [data, setData] = React.useState({ datasets: [], labels: [] });

  const fetchDateSatelit = async () => {
    const rez = await fetch('/data')
    const jsn = await rez.json()
    setData(jsn)
  }

  React.useEffect(() => {
    const interval = setInterval(async () => {
      await fetchDateSatelit();
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <section>
      <div className="root-page-container">
        <div className="terminal-outer-container">
          <div className="terminal-inner-container">
            <div className="terminal-title-bar">
              <div className="terminal-title-text">Date</div>
            </div>
            
            <div className="terminal-content-container">
              {data.labels.length ? <Line data={data} /> : <p>Nu sunt date</p>}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
