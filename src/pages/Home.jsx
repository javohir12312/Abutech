import React, { useState, useEffect } from 'react';
import AnimatedPage from './AnimationPage';
import "./Home.scss"
import axios from 'axios';

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

    const [responses, setResponses] = useState({});
  const [currentLink, setCurrentLink] = useState(links[0]);

  useEffect(() => {
    async function fetchData() {
      const updatedResponses = { ...responses };

      for (const link of links) {
        if (!updatedResponses[link.name]) {
          try {
            const response = await axios(link.url);
            const text = await response.text();
            updatedResponses[link.name] = text;
          } catch (error) {
            updatedResponses[link.name] = error;
          }
        }
      }

      setResponses(updatedResponses);
    }

    fetchData();
  }, []);
  console.log(responses);

  return (
      <div className="Home">
        <h1>{links[currentIndex].name}</h1>
        <AnimatedPage>
          {responses[links[currentIndex].name] ? (
            <div  dangerouslySetInnerHTML={{ __html: responses[currentLink.name]}} />
          ) : (
            <p>Loading...</p>
          )}
        </AnimatedPage>
        <button onClick={handlePrevLink} disabled={currentIndex === 0}>
          Previous
        </button>
        <button onClick={handleNextLink} disabled={currentIndex === links.length - 1}>
          Next
        </button>
      </div>
    );
  }

export default Home;