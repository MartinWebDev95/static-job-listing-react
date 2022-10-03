import React, { useEffect, useState } from 'react';
import Card from './components/Card';
import FilterBar from './components/FilterBar';
import { FilterContextProvider } from './context/FilterContext';
import dataJobs from './services/data.json';

function App() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    setJobs(dataJobs);
  }, []);

  return (
    <>
      <header className='bg-teal-700 bg-[url("./assets/bg-header-mobile.svg")] h-40 w-full bg-cover bg-no-repeat bg-center lg:bg-[url("./assets/bg-header-desktop.svg")]' />
      <main>
        <div className="container mx-auto px-6 lg:px-40">
          <FilterContextProvider>
            <FilterBar />
            {jobs.map((job) => (
              <Card key={job.id} job={job} />
            ))}
          </FilterContextProvider>
        </div>
      </main>
    </>
  );
}

export default App;
