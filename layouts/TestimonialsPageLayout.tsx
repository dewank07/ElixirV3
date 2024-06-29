// import Arrow from "@/assets/svg/Arrow";
// import ClipPath from "@/assets/svg/ClipPath";
import PageHeading from "@/components/PageHeading";
import { testimonials } from "@/data";

const TestimonialsPageLayout = () => {
  return (
    <div className='pt-20 relative z-10'>
      <div className='flex flex-col items-center justify-center'>
        <PageHeading smallHeading='Take A Note(s)' longHeading='YOUR LAST NIGHT STUDY GUIDE' />
        <ul className='flex items-center justify-center flex-wrap ' style={{ gap: "3rem", padding: "4rem 0" }}>
          {testimonials.map((item, idx) => (
            <li
              className='rounded-2xl border border-slate-800 p-5 md:p-16 '
              style={{
                background: "rgb(4,7,29)",
                backgroundColor: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                width: "30rem",
              }}
              key={idx}
            >
              <blockquote>
                <span className=' relative z-20 text-sm md:text-base leading-[1.6] text-white font-normal'>
                  {item.quote}
                </span>
                <div className='relative z-20 mt-6 flex flex-row items-center'>
                  {/* add this div for the profile img */}
                  <div className='me-3'>
                    <img src='/profile.svg' alt='profile' />
                  </div>
                  <span className='flex flex-col gap-1'>
                    {/* change text color, font-normal to font-bold, text-xl */}
                    <span className='text-xl font-bold leading-[1.6] text-white'>{item.name}</span>
                    {/* change text color */}
                    <span className=' text-sm leading-[1.6] text-white-200 font-normal'>{item.title}</span>
                  </span>
                </div>
              </blockquote>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TestimonialsPageLayout;
