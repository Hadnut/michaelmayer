export default function Portfolio() {
  return (
    <div className="p-10 xl:p-20">
      <span className="mb-12 inline-block font-bold uppercase tracking-[8px] text-[#333]">
        About Me
      </span>
      <div className="flex justify-between">
        <div className="md:w-[45%]">
          <p>
            Hello there! My name is Alan Walker. I am a graphic designer, and I am very passionate
            and dedicated to my work.
          </p>
          <p className="mt-5">
            With 20 years experience as a professional a graphic designer, I have acquired the
            skills and knowledge necessary to make your project a success.
          </p>
        </div>
        <div className="md:w-[50%]">
          <ul>
            <li className="float-left mb-[8px] w-full">
              <span className="first inline-block min-w-[100px] font-bold">Name:</span>
              <span className="second inline-block">Alan Walker</span>
            </li>
            <li className="float-left mb-[8px] w-full">
              <span className="first inline-block min-w-[100px] font-bold">Address:</span>
              <span className="second inline-block">Ave Street, New York, USA</span>
            </li>
            <li className="float-left mb-[8px] w-full">
              <span className="first inline-block min-w-[100px] font-bold">Study:</span>
              <span className="second inline-block">Univercity of Oxford</span>
            </li>
            <li className="float-left mb-[8px] w-full">
              <span className="first inline-block min-w-[100px] font-bold">Degree:</span>
              <span className="second inline-block">Master of Science</span>
            </li>
            <li className="float-left mb-[8px] w-full">
              <span className="first inline-block min-w-[100px] font-bold">Mail:</span>
              <span className="second inline-block">
                <a
                  className="text-[#7d7789] transition-all duration-300 hover:text-[#333]"
                  href="#"
                >
                  hello@cavani.com
                </a>
              </span>
            </li>
            <li className="float-left w-full">
              <span className="first inline-block min-w-[100px] font-bold">Phone:</span>
              <span className="second inline-block">+77 022 444 05 05</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-28 flex justify-between">
        <div className="md:w-[45%]">
          <span className="mb-12 inline-block font-bold uppercase tracking-[8px] text-[#333]">
            Skills
          </span>
          <p>
            Hello there! My name is Alan Walker. I am a graphic designer, and I am very passionate
            and dedicated to my work.
          </p>
          <p className="mt-5">
            With 20 years experience as a professional a graphic designer, I have acquired the
            skills and knowledge necessary to make your project a success.
          </p>
        </div>
        <div className="md:w-[50%]">
          <span className="mb-12 inline-block font-bold uppercase tracking-[8px] text-[#333]">
            Interrests
          </span>
          <ul>
            <li className="float-left mb-[8px] w-full">Painting Drawing</li>
            <li className="float-left mb-[8px] w-full ">Reading Writing</li>
            <li className="float-left mb-[8px] w-full ">Music Cinema</li>
            <li className="float-left mb-[8px] w-full ">Travel Picnik</li>
            <li className="float-left w-full">Rain Snow</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
