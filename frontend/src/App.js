
import './App.css';
import logofull from './img/logofull.jpeg';


function App() {
  return (
   <div>
    <ul>
      <li></li>
    </ul>
    <div className='w-[942px] h-[102px] flex justify-center pt-[144.5px] pl-[600px] absolute right-281 top-66 text-black text-shadow-sm font-krona font-normal text-4xl'>
      About Our Company
    </div>
    <div className='w-[384px] h-[384px] pt-[180px]  align-middle '>
      <img src={logofull} alt='logo' ></img>
    </div>
   </div>
  );
}

export default App;
