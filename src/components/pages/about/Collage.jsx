const Collage = () => {
  return (
    <div className="px-10 py-10 bg-take_care_bg">
         <div className="flex items-center justify-center rounded-lg text-center xl:p-20">
            <div className="flex flex-row gap-4 items-center justify-center lg:pt-10">
               <div className="relative hidden w-1/2 p-5 xl:block  md:blur-lg xl:blur-none">
                  {/* Middle Image */}
                  <img
                     src="/images/about-us.jpg"
                     alt="About Us"
                     className="mb-5 rounded-lg shadow-lg"
                  />
                  {/* Bottom Right image */}
                  <img
                     src="/images/hero.jpg"
                     alt="About Us"
                     className="absolute right-0 top-3/4 mb-5 w-2/6 -rotate-6 scale-110 transform rounded-lg shadow-lg"
                  />
                  {/* Top Left Image */}
                  <img
                     src="/images/about-us-2.jpg"
                     alt="About Us"
                     className="scale-120 absolute left-0 top-[-100px] mb-5 w-1/3 -rotate-12 transform rounded-lg shadow-lg"
                  />
                  {/* Top Right Image */}
                  <img
                     src="/images/about-us-3.jpg"
                     alt="About Us"
                     className="absolute right-0 top-[-30px] mb-5 w-1/5 rotate-2 scale-110 transform rounded-lg shadow-lg"
                  />
                  {/* Bottom Left Image */}
                  <img
                     src="/images/about-us-4.jpg"
                     alt="About Us"
                     className="absolute left-[-20px] top-[350px] mb-5 w-2/5 rotate-3 scale-110 transform rounded-lg shadow-lg"
                  />
               </div>
               <div className="px-4 pb-10  xl:w-1/2 md:p-5 xl:relative">
                  <p className="mb-10 pt-10 text-center text-5xl font-bold text-take_care_primary">
                     About Us
                  </p>
                  <p className="text-lg md:mt-28 lg:mt-5">
                     <span className="font-semibold text-take_care_primary">
                        Take Care
                     </span>{" "}
                     is a home care agency that provides compassionate care for
                     your loved ones. We provide personalized care plans
                     tailored to meet the unique needs of each individual.
                  </p>
                  <p className="mt-5 text-lg">
                     Our team of experienced caregivers is dedicated to ensuring
                     the highest quality of care, promoting independence, and
                     enhancing the quality of life for our clients. We offer a
                     range of services including personal care, companionship,
                     and specialized care for individuals with chronic
                     conditions. At Humeny, we believe in treating each client
                     with dignity, respect, and compassion.
                  </p>
               </div>
            </div>
         </div>
      </div>
  )
}

export default Collage