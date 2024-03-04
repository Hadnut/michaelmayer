export default function Contact() {
  return (
    <div className="p-10 xl:p-20">
      <span className="mb-12 inline-block font-bold uppercase tracking-[8px] text-[#333]">
        Get in Touch
      </span>
      <div className="mt-28 flex justify-between">
        <div className="md:w-[45%]">
          <span className="mb-12 inline-block font-bold uppercase tracking-[8px] text-[#333]">
            Frontend
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
