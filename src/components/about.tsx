export default function About() {
  return (
    <div id="contentAnchor" className="w-full px-20 xs:px-16 xs:mt-24 tracking-tight text-white mt-32">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col gap-6">
          <h1 data-aos="fade-up" className="text-5xl font-bold">About Me.</h1>
          <p data-aos="fade-up" data-aos-delay="50" className="text-[#b3b3b3]">{`Hello! I'm Chris, and I am a passionate Junior Web Developer that is dedicated to creating significant digital experiences. I'm a skilled HTML, CSS, and JavaScript developer who is eager to learn new technologies. With my creativity, technical expertise, and passion for knowledge, I'm excited to contribute to the ever-changing field of web development.`}</p>
        </div>
        <div className="mt-10">
          <h2 data-aos="fade-up" data-aos-delay="150" className="text-4xl font-semibold">Tech.</h2>
          <p data-aos="fade-up" data-aos-delay="200" className="text-[#b3b3b3] mt-2">Technologies I use to create your products.</p>
          <div data-aos="fade-up" data-aos-delay="300" data-aos-offset="100" className="box-border relative flex flex-wrap gap-8 md:gap-6 items-end mt-8">
            <span className="flex flex-col justify-center items-center gap-2">
              <i className="devicon-tailwindcss-original text-6xl md:text-5xl"></i>
              <p className="text-sm text-[#b3b3b3]">Tailwindcss</p>
            </span>
            <span className="flex flex-col justify-center items-center gap-2">
              <i className="devicon-react-original text-6xl md:text-5xl"></i>
              <p className="text-sm text-[#b3b3b3]">React.js</p>
            </span>
            <span className="flex flex-col justify-center items-center gap-2">
              <i className="devicon-nextjs-original-wordmark text-6xl md:text-5xl"></i>
              <p className="text-sm text-[#b3b3b3]">Next.js</p>
            </span>
            <span className="flex flex-col justify-center items-center gap-2">
              <i className="devicon-javascript-plain text-6xl md:text-5xl"></i>
              <p className="text-sm text-[#b3b3b3]">Javascript</p>
            </span>
            <span className="flex flex-col justify-center items-center gap-2">
              <i className="devicon-firebase-plain text-6xl md:text-5xl"></i>
              <p className="text-sm text-[#b3b3b3]">Firebase</p>
            </span>
            <span className="flex flex-col justify-center items-center gap-2">
              <i className="devicon-html5-plain text-6xl md:text-5xl"></i>
              <p className="text-sm text-[#b3b3b3]">HTML</p>
            </span>
            <span className="flex flex-col justify-center items-center gap-2">
              <i className="devicon-css3-plain text-6xl md:text-5xl"></i>
              <p className="text-sm text-[#b3b3b3]">CSS</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}