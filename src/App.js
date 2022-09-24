// DO NOT DELETE

import * as React from 'react'
import './App.css'

/**
 * 
 * @type {React.FC}
 */
export const App = () => {
  return (
    <>
      <header>DogsApp</header>
      <p className="descript">犬の画像を表示するサイトです。</p>
      <img src="https://images.dog.ceo/breeds/mountain-swiss/n02107574_2033.jpg" title="犬の画像" alt="犬の画像" />
    </>
  )
}
