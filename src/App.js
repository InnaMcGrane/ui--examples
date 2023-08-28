// import { Accordian } from "./Accordian/Accordian";

// import { useState } from 'react';
// import "./App.css";
// import TabInfoOne from "./Tabs/TabInfoOne";
// import TabInfoTwo from "./Tabs/TabInfoTwo";
// import TabInfoThree from './Tabs/TabInfoThree';
// import  Tabs  from './Tabs/Tabs';

// function App() {

//   const [activeTab, setActiveTab] = useState(0);

//   return (
//     <div className="App">
//       {/* <Accordian /> */}
//       <Tabs setActiveTab = { setActiveTab }/>
//       {activeTab === 0 && <TabInfoOne/>}
//       {activeTab === 1 && <TabInfoTwo/>}
//       {activeTab === 2 && <TabInfoThree/>}

//     </div>
//   );
// }

// export default App;

// import { useState } from "react";
// import Modal from "./Modal/Modal";
// import Content from "./Modal/Content";
// import "./App.css";

// function App() {
//   const [isOpen, setIsOpen] = useState (false);

//   return (
//     <div>
//       <button onClick={() => setIsOpen(true)}>Open Modal</button>
//       {isOpen &&
//       <Modal setIsOpen={setIsOpen}>
//       <Content setIsOpen={setIsOpen}/>
//       </Modal>
//       }
//     </div>
//   );
// }

// export default App;
// import "./App.css";
// import { useEffect, useState } from "react";
// import LoaderPage from "./Loader/LoaderPage";

// function App() {

//   const [stateLoader, setStateLoader] = useState(true);

//   useEffect(()=> {
//     const timer = setTimeout(()=> setStateLoader(false),3000);
//     return () => clearTimeout(timer)
//   },[])
//   return (
//     <div>
//       {stateLoader && <LoaderPage/>}

//     </div>
//   );
// }
// export default App;

//SWEET ALERT

// import Swal from "sweetalert2";
// import "./App.css";


// function App() {
//   const handleAlert = () => {
//     Swal.fire(
//       "The Internet?",
//        "That thing is still around?", 
//        "question");
//   };
//   return (
//     <div>
//       <button onClick={handleAlert}>Alert </button>
//     </div>
//   );
// }
// export default App;

// TRANSLATION

import { useTranslation } from 'react-i18next';
import './App.css';

function App() {

  const { i18n, t } = useTranslation();

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === 'en' ? "ru" : "en")
  }

  return(
    <div>
      <h1>{t('Welcome to React')}</h1>
      <button onClick={toggleLang}>
        {i18n.language === 'en' ? "RU" : "EN"}
      </button>

    </div>
  );
}
export default App;