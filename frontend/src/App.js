
import './App.css';
import logo from './img/logo.svg';
import home from './img/YGThome.jpg';

// import logofull from './img/logofull.jpeg';


function App() {
  return (
  <div>
    <img src={home} alt='yugaastech' ></img>
    <div className='pt-5 flex justify-between font-bold items-center'>
     <div className='pl-[52px] pt-[28px]'>
      <img src={logo} alt= 'logo' ></img>
     </div>
     {/* <div className='w-[267px] h-[46px] pt-[62.5px] text-[32px] font-bold '>
      <p className=' text-blue-800'>yugaas<span className='text-orange-500'>tech</span></p>
     </div> */}
     <div class="hidden lg:inline pr-[150px]">
                <ul class="flex space-x-2 text-[18px]">
                    <li class="py-1 px-3 hover:bg-slate-300 hover:rounded-full cursor-pointer">Home</li>
                    <li class="py-1 px-3 hover:bg-slate-300 hover:rounded-full cursor-pointer">About Us</li>
                    <li class="py-1 px-3 hover:bg-slate-300 hover:rounded-full cursor-pointer">Our Services</li>
                    <li class="py-1 px-3 hover:bg-slate-300 hover:rounded-full cursor-pointer">Careers</li>
                    <li class="py-1 px-3 hover:bg-slate-300 hover:rounded-full cursor-pointer">Contact us</li>
                </ul>
            </div>
    {/* <ul>
      <li></li>
    </ul>
    <div className='w-[942px] h-[102px] flex justify-center pt-[144.5px] pl-[600px] absolute right-281 top-66 text-black text-shadow-sm font-krona font-normal text-4xl'>
      About Our Company
    </div>
    <div className='w-[384px] h-[384px] pt-[180px]  align-middle '>
      <img src={logofull} alt='logo' ></img>
    </div> */}
    </div>
  </div>
  );
}

export default App;
