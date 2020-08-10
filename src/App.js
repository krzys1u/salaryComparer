import React, {useState, useCallback, useEffect} from 'react';
import './App.css';
import './App.scss';

import { GitHubRibbon } from './components/GitHubRibbon/GitHubRibbon';
import { Diagram } from './components/Diagram/Diagram';
import { Filters } from './components/Filters/Filters';

const dateToString = (date) => `${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()}`;

const fetchMetaData = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
      json: () => ({
        version: 1,
          updated: dateToString(new Date(new Date().getTime())),
      })
    })
    }, 5000);
  });
};

const fetchData = (params) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({});
    }, 5000);
  })
}

export const App = () => {
  const isMobile = window.innerWidth <= 640; //@todo add recalculating on resize

  const [isSidebarVisible, setSidebarVisible] = useState(!isMobile);
  const [isDataLoading, setIsDataLoading] = useState(false);
  const [data, setData] = useState({});
  const [metaData, setMetaData] = useState({});
  const [metaDataLoadingDots, setMetaDataDots] = useState([]);

  const hideSidebarOnMobileAfterSubmit = useCallback(() => {
    setSidebarVisible(!isMobile)
  }, [isMobile]);

  const filtersSubmitted = useCallback((state) => {
    hideSidebarOnMobileAfterSubmit();

    setIsDataLoading(true);

    fetchData(state).then((data) => {
      setIsDataLoading(false);
      setData(data);
    })
  }, [
    hideSidebarOnMobileAfterSubmit,
    setIsDataLoading,
    setData
  ]);

  useEffect(() => {
    const metaDataLoadingInterval = setInterval(() => {
      setMetaDataDots((dots) => {
        const newDots = [...dots, '.'];

        newDots.length = newDots.length % 4;

        return newDots;
      });
    }, 500);

    fetchMetaData().then(data => data.json()).then((metaData) => {
      setMetaData(metaData)

      clearInterval(metaDataLoadingInterval);
    });

    return () => {
      clearInterval(metaDataLoadingInterval);
    };
  }, []);

  return (
    <div className="App">
      <header className={'appHeader'}>
        <button className={'sidebarToggle'} onClick={() => setSidebarVisible(!isSidebarVisible)}>
          <svg className="sidebarToggleIcon" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
          </svg>
        </button>
        <div>
          <div>
            <h6 className={'appName'}>
              Salario
            </h6>
          </div>
          <div className={'dataGeneratedTime'}>
            Data generated at {metaData && metaData.updated ? metaData.updated : metaDataLoadingDots}
          </div>
        </div>
        <GitHubRibbon repository={'https://github.com/krzys1u/salaryComparer'}/>
      </header>
      <section className={'content'}>
        { isSidebarVisible && <aside className={'sidebar'}>
          <Filters submitAction={filtersSubmitted}/>
        </aside> }
        <section className={'diagram'}>
          <Diagram/>
        </section>
      </section>
    </div>
  );
}

export default App;
