import React, {useEffect, useRef, useState} from 'react';
import './App.css';

const App = () => {
  const [timerDays, setTimerDays] = useState('00');
  const [timerHours, setTimerHours] = useState('00');
  const [timerMinutes, setTimerMinutes] = useState('00');
  const [timerSeconds, setTimerSeconds] = useState('00');

  let interval = useRef();
  const startTimer = () =>{
    const countdownDate = new Date('May 30, 2022').getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor(distance % (1000 * 60 ) / 1000);

      if(distance < 0){
        clearInterval(interval.current);
      }
      else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  }; 

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  })
  return (
    <>
    <div className="App container-xl-12">
      <div className='pt-5 logo-design'>
        <img src='/logo-k.png' alt='logo'/>
      </div>
      <div className='text pt-4'>
        <h1 style={{ color: '#fff' }}>We Are Coming Soon!</h1>
        <p style={{ color: '#fff' }}>Our Website Is under Development We Will Coming Soon</p>
      </div>
      <div className='countdown d-flex justify-content-center'>
        <ul >
          <li> <p className='h1 text-center'>{timerDays}</p><p className='text-center'>Days</p></li>
          <li> <p className='h1 text-center'>{timerHours}</p><p className='text-center'>Hours</p></li>
          <li> <p className='h1 text-center'>{timerMinutes}</p><p className='text-center'>Minutes</p></li>
          <li> <p className='h1 text-center'>{timerSeconds}</p><p className='text-center'>Seconds</p></li>
        </ul>
      </div>
    </div>
    </>
  );
}

export default App;
