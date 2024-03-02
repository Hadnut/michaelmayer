export default function Contact() {
  return (
    <div className="p-10 xl:p-20">
      <span className="mb-12 inline-block font-bold uppercase tracking-[8px] text-[#333]">
        Get in Touch
      </span>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2663.244569137237!2d11.549931176659635!3d48.12480675204978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479ddf4e5a3a28ed%3A0xfb905ab23b89360!2sSchmellerstra%C3%9Fe%2011%2C%2080337%20M%C3%BCnchen!5e0!3m2!1sde!2sde!4v1709392310571!5m2!1sde!2sde"
        width="400"
        height="300"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
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
