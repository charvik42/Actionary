import React from 'react'

const Navbar = () => {
  const handleGithubClick = () => {
  window.open("https://github.com", "_blank");
  };
  return (
    <nav className='flex justify-around bg-slate-800 text-white py-2 hover:font'>
        <div className="logo flex gap-1 items-center">
          <svg
    width="32"
    height="32"
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="64" height="64" rx="12" fill="rgb(30 41 59)" stroke='white' strokeWidth={4} />
    <circle cx="17" cy="20" r="3" fill="white" />
    <circle cx="17" cy="32" r="3" fill="white" />
    <circle cx="17" cy="44" r="3" fill="white" />
    <rect x="24" y="18" width="24" height="4" rx="2" fill="white" />
    <rect x="24" y="30" width="24" height="4" rx="2" fill="white" />
    <rect x="24" y="42" width="24" height="4" rx="2" fill="white" />
  </svg>
            <span className='font-bold text-xl mx-2'>Actionary</span>
        </div>
      <ul className="flex gap-8 mx-9">
        {/* <li className='cursor-pointer hover:font-bold transition-all'>Home</li>
        <li className='cursor-pointer hover:font-bold transition-all'>Your Tasks</li> */}
        <button onClick={()=>handleGithubClick()} className='flex justify-center bg-slate-800 mx-2 hover:bg-slate-950 border border-white p-4 text-sm font-bold py-2 text-white rounded-full'>
          <img src="/github.svg" width={22} alt="" className='invert mr-2' />
          View On GitHub</button>
      </ul>
    </nav>
  )
}

export default Navbar
