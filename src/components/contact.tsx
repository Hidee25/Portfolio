export default function Contact() {
  return (
    <div className="w-full tracking-tight mt-32 xs:mt-24 text-white">
      <div className="mx-auto">
        <div className="flex flex-col justify-center items-center gap-5 bg-[#131317] py-16">
          <h1 className="text-4xl font-semibold">{`Let's Connect`}</h1>
          <div className="text-white/30 flex items-center justify-center gap-2">
            <a href="https://www.linkedin.com/" target="_blank" className="p-1">
              <i className="devicon-linkedin-plain text-2xl hover:text-white cursor-pointer transition-all"></i>
            </a>
            <a href="https://github.com/" target="_blank" className="p-1">
              <i className="devicon-github-original text-2xl hover:text-white cursor-pointer transition-all"></i>
            </a>
            <a href="mailto:prasetya.christophorus@gmail.com" className="p-1">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-[25px] h-[25px] hover:text-white cursor-pointer transition-all">
                <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}