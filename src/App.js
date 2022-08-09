import './App.css';
import React, { useState, useEffect } from 'react';
const eggSound = new Audio('music/egg.mp3');
const eggBreakSound = new Audio('music/eggBreak.mp3');

function App() {
  const [count, setCount] = useState(0);
  const img = document.getElementById('egg');
  const text = document.getElementsByClassName('born')[0];
  const onClick = () => {
    if (count > 99) {
      eggBreakSound.play();
      return;
    }
    eggSound.play();
    setCount((prevCount) => prevCount + 1);
    img.animate(
      {
        transform: ['rotate(0deg)', 'rotate(15deg)', 'rotate(-15deg)'],
      },
      {
        duration: 300,
        easing: 'ease-in-out',
      }
    );
    text.animate(
      {
        transform: ['rotate(0deg)', 'rotate(15deg)', 'rotate(-15deg)'],
      },
      {
        delay: 100,
        duration: 300,
        easing: 'ease-in-out',
      }
    );
  };
  return (
    <div id="wrapper">
      {count < 100 ? <h1 id="count">{count}</h1> : <></>}
      <img
        src={
          count < 20
            ? 'imgs/egg1.png'
            : count < 100
            ? 'imgs/egg2.png'
            : 'imgs/egg3.jpeg'
        }
        class={count < 100 ? 'img1' : 'img2'}
        id="egg"
        onClick={onClick}
      />
      {count > 70 ? (
        count > 99 ? (
          <h1 class="born">生まれた！！</h1>
        ) : (
          <h1 class="born">う、産まれるッッ！！</h1>
        )
      ) : (
        <></>
      )}
    </div>
  );
}

export default App;
