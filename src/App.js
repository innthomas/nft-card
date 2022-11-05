import imgEquilibrium from './assets/images/image-equilibrium.jpg';
import imgView from './assets/images/icon-view.svg';
import imgEth from './assets/images/icon-ethereum.svg';
import imgClock from './assets/images/icon-clock.svg';
import imgAvatar from './assets/images/image-avatar.png';
import './App.css';

function App() {
  return (
   <div className='container w-screen h-screen flex justify-center items-center'>
       <div className='card rounded-lg'>
         <div className='card__content ' >
           
           <img className='card__img' src={imgEquilibrium} alt="equilibrium img" />
           <div className='hide' >
          <img className='imgView' src={imgView} alt="view img" />
           </div>
        
         <div className='card__content-text'>
           <h3 className='equilibrium-text text-white'>Equilibrium #3429</h3>
           <p className='card__content-text-para text-white opacity-30 text-[12px]'>Our Equilibrium collection promotes balance and calm.</p>
           <div className=''>
             <div className='flex justify-between'>
              <div className='flex '>
               <img src={imgEth} alt="eth" />
              <span className='eth text-[14px]'>0.041ETH</span>
             </div>
             <div className='flex'>
               <img src={imgClock} alt="img clock" />
               <small  className='text-sm whitespace-nowrap text-white opacity-40'>3 days left</small>
             </div>
             </div>

             <hr className='hr opacity-5 w-50 m-2'/>
             <div className='avatar-container flex items-center'>
               <img className='avatar  h-8 w-8' src={imgAvatar} alt="avatar" />
               <small className='text-sm text-white '><span className='opacity-40'>Creation of</span> <span className='jules opacity-100 text-white'>Jules Wyvern</span></small>
             </div>
             
           </div>

         </div>
         </div>

       </div>
   </div>
  );
}

export default App;
