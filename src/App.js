import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="top-left">
        </div>
        <div className="top-right">
        </div>
        
        <div className="Happy-Birthday">
        <p className="love">
          I Love You, Kayvon!
        </p>
        <p className="birthday">
          <span style={{color: "#db353a"}}>H</span>
          <span style={{color: "#e38512"}}>A</span>
          <span style={{color: "#faf205"}}>P</span>
          <span style={{color: "green"}}>P</span>
          <span style={{color: "blue"}}>Y</span>
          <span> </span>
          <span style={{color: "indigo"}}>B</span>
          <span style={{color: "violet"}}>I</span>
          <span style={{color: "#db353a"}}>R</span>
          <span style={{color: "#e38512"}}>T</span>
          <span style={{color: "#faf205"}}>H</span>
          <span style={{color: "green"}}>D</span>
          <span style={{color: "blue"}}>A</span>
          <span style={{color: "indigo"}}>Y</span>
          <span style={{color: "violet"}}>!</span>
          <span style={{color: "#db353a"}}>!</span>
          <span style={{color: "#e38512"}}>!</span>
          
         
        </p>
        <p className="note">
          You mean so much to me Kayvon, <br />
          I hope you have the most wonderful birthday!<br />
         I surely will do my best to make it special. <br />
         I know this isn't much,<br /> 
         but It's a fun and cool way to show that I love you! :)
        </p>
        <p className="scroll">
          Scroll down! 
        </p>
        <div className="top-collage">
        <img src={require('./Pics/14.JPG')} alt='collageImg'/>
        <img src={require('./Pics/10.PNG')} alt='collageImgKay'/>
        </div>
        </div>
        </header>
        <main className="App-main">
        <div className="bottom-right">
        </div>
        <div className="bottom-left">
        </div>
        
        
        <div className="collage">
        <div className='tilt'>
        <img src={require('./Pics/8.JPG')} alt='collageImg'/>
        <img src={require('./Pics/13.PNG')} alt='collageImgKay'/>
        </div>
        <div className='smirk'>
        <img className='kay' src={require('./Pics/12.PNG')} alt='collageImgKay'/>
        <img className='me' src={require('./Pics/1.JPG')} alt='collageImg'/>
        </div>
        <div className='cuties'>
        <img src={require('./Pics/9.PNG')} alt='collageImgKay'/>
        <img  src={require('./Pics/3.JPG')} alt='collageImg'/>
        </div>
        <div className='leftOverOne'>
        <img src={require('./Pics/5.JPG')} alt='collageImg'/>
        <img src={require('./Pics/6.JPG')} alt='collageImg'/>
        </div>
        <div className='leftOverTwo'>
        <img  src={require('./Pics/2.JPG')} alt='collageImg'/>
        
        <img src={require('./Pics/4.JPG')} alt='collageImg'/>
        
        </div>
        <div className='last'>
        <img className='me' src={require('./Pics/7.JPG')} alt='collageImg'/>
       
        
        
        <img className='kay' src={require('./Pics/11.PNG')} alt='collageImgKay'/>
        </div>
        
        
        
        </div>
        
        <p className="theres-more">
          But of course, there's a little something more...
        </p>
        </main>
        
      
    </div>
  );
}

export default App;
