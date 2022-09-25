// DO NOT DELETE

import * as React from 'react'
import './App.css'

/**
 * 
 * @type {React.FC}
 */
export const App = () => {
  const [dogUrl, setDogUrl] = React.useState('https://images.dog.ceo/breeds/mountain-swiss/n02107574_2033.jpg');
  
  const handleChange = () => setDogUrl('https://images.dog.ceo/breeds/hound-english/n02089973_1132.jpg');
  
  return (
    <>
      <header>DogsApp</header>
      <p className="descript">犬の画像を表示するサイトです。</p>
      <img src={dogUrl} title="犬の画像" alt="犬の画像" />
      <button onClick={handleChange}>更新</button>
    </>
  )
}
