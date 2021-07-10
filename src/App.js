import React, { useEffect, useRef, useState } from 'react';
// import Main from './weatherapp/Main';
// import './priceTracker/main.css';
// import Logo from './priceTracker/Logo';
// import Coin from './priceTracker/Coin';
import Header from './FAQReader/Header';
import alanBtn from "@alan-ai/alan-sdk-web";
import Faq from './FAQReader/Faq';
import { ChakraProvider } from '@chakra-ui/react';
import './FAQReader/faq.css';

function App() {

  const alanBtnInstance = useRef(null);
  const [index, setIndex] = useState(null);

  useEffect(() => {
      if (!alanBtnInstance.current) {
          alanBtnInstance.current = alanBtn({
              key: 'f2e77a1918a1674446751c07a7ff91922e956eca572e1d8b807a3e2338fdd0dc/stage',
              onCommand: (commandData) => {
              if (commandData.command === 'gotoFaq') {
                  setIndex(commandData.faqId - 1)
                }
              }
          });
      }
  }, []);

  return (
    <div className="App">
      <Header />
      <div class="alan-btn"></div>
      <ChakraProvider>
        <Faq index={index} setIndex={setIndex}/>
      </ChakraProvider>
    </div>
  );
}

export default App;
