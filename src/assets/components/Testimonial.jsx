import avatar1 from "../avatar1.png";
import avatar2 from "../avatar2.png";
import avatar3 from "../avatar3.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Testimonial() {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  });
  return (
    <section className={`bg-[#FAFAFA] mx-auto py-11 `} data-aos="fade-up">
      <div className="mt-16  font-gilroy px-4 max-w-6xl mx-auto xl:px-0 pb-8">
        <h2
          className={`text-center font-extrabold text-3xl mb-4
          `}
        >
          What our clients say about us
        </h2>
        <p className="text-center text-[#999999]">
          Customer reviews on our Products and their feedbacks.
        </p>
        <div className="flex gap-16 flex-col lg:flex-row lg:gap-8 mt-16">
          <article className="bg-white px-10 pt-10 pb-20 w-full  max-w-[400px] mx-auto  ">
            <div className="grid items-center justify-center">
              <img src={avatar1} alt="" className="h-24 w-24 mx-auto mb-6" />
              <h6 className="text-center font-bold text-2xl  mb-4">
                Jane Cooper
              </h6>
              <p className="text-center text-[#000001]">
                {" "}
                I have to say, I enjoyed every single bite of the meal in (RN).
                I had a 3 course meal, with a couple of beers. Considering the
                quality, the price is reasonable.
              </p>
            </div>
          </article>
          <article className="bg-white px-10 pt-10 pb-20 w-full max-w-[400px]  mx-auto ">
            <div className="grid items-center justify-center">
              <img src={avatar2} alt="" className="h-24 w-24 mx-auto mb-6" />
              <h6 className="text-center font-bold text-2xl  mb-4">
                Esther Howard
              </h6>
              <p className="text-center text-[#000001]">
                {" "}
                It’s a great experience. The ambiance is very welcoming and
                charming. Amazing food and service. Staff are extremely
                knowledgeable and make great recommendations
              </p>
            </div>
          </article>
          <article className="bg-white px-10 pt-10 pb-20 w-full max-w-[400px] mx-auto ">
            <div className="grid items-center justify-center">
              <img src={avatar3} alt="" className="h-24 w-24 mx-auto mb-6" />
              <h6 className="text-center font-bold text-2xl  mb-4">
                Guy Hawkins
              </h6>
              <p className="text-center text-[#000001]">
                {" "}
                Do yourself a favor and order from this lovely restaurant. The
                service is unmatched. The staff truly cares about your
                experience.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
