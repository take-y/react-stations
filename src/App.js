// DO NOT DELETE

import * as React from 'react'
import './App.css'

/**
 * 
 * @type {React.FC}
 */
export const App = () => {
  const [dogUrl, setDogUrl] = React.useState('https://images.dog.ceo/breeds/mountain-swiss/n02107574_2033.jpg');
  
  const handleChange = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(resp => resp.json())
    .then(parsedResp => setDogUrl(parsedResp.message));
  }
  
  return (
    <>
      <header>
      <h1>DogsApp</h1>
      </header>
      <main>
        <p className="descript">犬の画像を表示するサイトです。</p>
        <div className='app-main'>
          <div className='image-area'>
            <img src={dogUrl} title="犬の画像" alt="犬の画像" />          
          </div>
          <button onClick={handleChange}>更新</button>
        </div>
      </main>
    </>
  )
}
