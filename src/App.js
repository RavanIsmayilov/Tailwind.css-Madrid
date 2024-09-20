import Icon from "./assets/instagram (1).png"

function App() {
  return (

    <>
      <section className='flex flex-col h-[100vh] mx-40 justify-center mt-[50px] '>

        <div className='flex flex-col'>
          <span className='text-[#96BB7C] font-semibold '>Practice Advice</span>
          <h2 className='text-[32px] text-[black] font-bold'>Our Popular Courses</h2>
          <p className='w-[46%] text-[18px] text-[#737373] font-semibold mt-2'>Problems trying to resolve the conflict between 
          the two major realms of Classical physics: Newtonian mechanics </p>
        </div>

      <div className='flex gap-8'>
        <div className='flex flex-col mt-10 bg-[white] shadow-custom w-[250px] gap-2 px-5 py-4 '>
          <img className='w-7 mb-2' src={Icon} alt=''/>
          <span className='text-[green] font-semibold '>Training Courses</span>
          <div className='border border-[red] w-[80px]'></div>
          <p className='w-[70%] font-semibold'>The gradual accumulation of information about </p>
        </div>

        <div className='flex flex-col mt-10 bg-[white] shadow-custom w-[250px] gap-2 px-5 py-4 '>
          <img className='w-7 mb-2' src={Icon} alt=''/>
          <span className='text-[green] font-semibold '>Training Courses</span> 
          <div className='border border-[red] w-[80px]'></div>
          <p className='w-[70%] font-semibold'>The gradual accumulation of information about </p>
        </div>

        <div className='flex flex-col mt-10 bg-[white] shadow-custom w-[250px] gap-2 px-5 py-4 '>
          <img className='w-7 mb-2' src={Icon} alt=''/>
          <span className='text-[green] font-semibold '>Training Courses</span>
          <div className='border border-[red] w-[80px]'></div>
          <p className='w-[70%] font-semibold'>The gradual accumulation of information about </p>
        </div>
        
        <div className='flex flex-col mt-10 bg-[white] shadow-custom w-[250px] gap-2 px-5 py-4 '>
          <img className='w-7 mb-2' src={Icon} alt=''/>
          <span className='text-[green] font-semibold '>Training Courses</span>
          <div className='border border-[red] w-[80px]'></div>
          <p className='w-[70%] font-semibold'>The gradual accumulation of information about </p>
        </div>
      </div>
    </section>
  </>
  );
}

export default App;
