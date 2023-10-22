import React, { useState, useEffect } from 'react';
import "./Home.scss"
import Google from './Google/Google';
import Loading from '../components/Loading';
import Ya_ru from './Ya_ru/Ya_ru';
import Instagram from './Instagram/Instagram';
import Vk from './Vk/Vk';
import Twitter from './Twitter/Twitter';
import Twitter1 from './Twitter1/Twitter1';

  const links = [
    { name: 'Google', url: 'https://www.google.com/' },
    { name: 'Yandex', url: 'https://ya.ru/' },
    { name: 'Instagram', url: 'https://www.instagram.com/' },
    { name: 'VK', url: 'https://www.vk.com/' },
    { name: 'Twitter', url: 'https://twitter.com/' },
    {name:"Twitter 1",url:"https://twitter1.com/"}
  ];



  function Home() {
    const [currentIndex, setCurrentIndex] = useState(0);
    
          const handleNextLink = () => {
            if (currentIndex < links.length - 1) {
              setCurrentIndex(currentIndex + 1);
            }
          };
        
          const handlePrevLink = () => {
            if (currentIndex > 0) {
              setCurrentIndex(currentIndex - 1);
            }
          };

      const [results, setResults] = useState([]);
    
     

      useEffect(() => {
        async function fetchResults() {
          const fetchPromises = links.map(async (url) => {
            try {
              const response = await fetch(url.url);
              console.log(response);
              const status = response.status;
              return { name: url.name, status };
            } catch (error) {
              return { name: url.name, status: error };
            }
          });
    
          const results = await Promise.all(fetchPromises);
          setResults(results);
        }
    
        fetchResults();
      }, []);
    console.log(results);

    return (
      
        <div className="Home">
            {results[currentIndex]?.name ? (
              <div>
              {results[currentIndex].name === "Google" ? <Google/> : 
              links[currentIndex]?.name ==="Yandex" ? <Ya_ru/> : 
              links[currentIndex]?.name === "Instagram" ? <Instagram/> :
              links[currentIndex]?.name === "VK" ? <Vk/> : links[currentIndex]?.name === "Twitter" ? <Twitter/> :
              links[currentIndex]?.name === "Twitter 1" ? <Twitter1/> : null}

             <div className='errorAbsolute'>
             <div className='errorInner'>
             <h2  dangerouslySetInnerHTML={{ __html: results[currentIndex].name + ": " + results[currentIndex].status}} />
             <h4>If you want next website click next button</h4>

            <div className="buttons">
              <button onClick={handlePrevLink} disabled={currentIndex === 0}>
Previous
</button>
<button onClick={handleNextLink} disabled={currentIndex === links.length - 1}>
      Next
        </button>
            </div>
             </div>
             </div>
              </div>
              
            ) : (
                <div className='Loading'>       
                 <Loading/>
                </div>
            )}


            <p className='design'>Bilaman dizayn yaxshi chiqmagan idea kemadi oldindan uzr )</p>
          
        </div>
    );
  }
  
  export default Home;






  