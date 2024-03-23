import {Link as LinkReactScroll} from 'react-scroll'

export default function Jumbotron() {
  return (
    <>
      <div className="jumbotron">
        {/* bottom arrow */}
        <div className="bottom-8 z-10 absolute w-full flex items-center justify-center p-1 cursor-pointer">
          <LinkReactScroll to="contentAnchor" smooth={true} spy={true} offset={-80} duration={200} className="animate-bounce">
            <span className="mx-auto text-white/50 left-1/2 -translate-x-1/2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
            </span>
          </LinkReactScroll>
        </div>
        {/* jumbo text */}
        <div className="w-full h-full flex justify-center items-center absolute top-0 left-0">
          <div className="max-w-5xl text-white z-[5] flex flex-col gap-2 items-center justify-center">
            <div data-aos="fade-up" className="text-center text-[80px] font-bold leading-[100%] flex flex-col justify-center items-center tracking-tight lg:text-7xl md:text-[56px]">
              <span>
                Hi!
              </span>
              <span className="whitespace-nowrap sm:whitespace-normal">
                {`I'm a Web Developer`}
              </span>
            </div>
            <p data-aos="fade-up" data-aos-delay="100" className="max-w-[500px] sm:max-w-[350px] text-xl font-normal text-center tracking-tight text-gray-400 lg:text-lg md:text-base">{`I'm Christophorus Prasetya, a Web Developer based in Jakarta, Indonesia.`}</p>
            <div data-aos="fade-up" data-aos-delay="200" className="mt-2 whitespace-nowrap">
              <a href="https://www.linkedin.com/" target="_blank">
                <button className="rounded-full px-5 py-2.5 bg-[#09090B] border border-[#666666] hover:bg-[#30303B] transition-all">
                  <i className="devicon-linkedin-plain mr-2"></i>
                  LinkedIn
                </button>
              </a>
              <a className="ml-2" href="https://github.com/" target="_blank">
                <button className="text-black rounded-full px-5 py-2.5 bg-[#f5f5f5] border border-[#333333] hover:bg-[#c2c2c2] transition-all">
                  <i className="devicon-github-plain mr-2"></i>
                  GitHub
                </button>
              </a>
            </div>
          </div>
        </div>
        
        {/* gradient background */}
        <div className="gradient-container">
          <div className="g1"></div>
          <div className="g2"></div>
          <div className="g3"></div>
          <div className="g4"></div>
        </div>
      </div>  
      <div className="h-[1px] bg-gradient-to-r from-transparent via-white to-transparent"></div>
    </>
  )
}