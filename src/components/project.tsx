import Image from "next/image"
import Link from "next/link"

export default function Project() {
  return (
    <div className="w-full px-20 xs:px-16 xs:mt-24 tracking-tight text-white mt-32">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col gap-6">
          <h1 data-aos="fade-up" className="text-5xl font-bold">Project.</h1>
          <div data-aos="fade-up" data-aos-delay="100" className="w-full p-20 md:py-14 md:px-10 bg-[#131317]">
            <h1 className="text-2xl md:text-xl font-medium text-white w-fit mx-auto text-center">Project still under maintenance</h1>
          </div>
          {/* <div data-aos="fade-up" data-aos-delay="100" className="flex flex-wrap gap-6">
            <div className="max-w-xs border rounded-lg bg-gray-80 border-gray-700 overflow-hidden">
              <div className="w-full h-48 bg-gray-300"/>
              <div className="p-5">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-90 text-white">Project 1</h5>
                  <p className="mb-3 font-normal text-gray-70 text-gray-400 line-clamp-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non harum corrupti deserunt aperiam asperiores quas.</p>
                  <Link href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-30 bg-blue-60 hover:bg-blue-70">
                      See codes
                      <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                      </svg>
                  </Link>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}