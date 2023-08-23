import { useEffect, useState } from "react";

export default function MainHeading({ textColor, headingStyle }) {
  const words = ["Connectee", "inclusive"];
  const [visibleIndex, setVisibleIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setVisibleIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <>
      <div className="w-full">
        <h1
          className={`${headingStyle} text-[24px] sm:text-[30px] md:text-[6.25vw] font-bold uppercase flex justify-center`}
        >
          <span className={`${textColor} mr-3 lg:mr-6`}>La carte</span>

          <div className="relative w-[40%] sm:w-[30%] md:w-[35%] lg:w-[45%]">
            {visibleIndex === 0 ? (
              <>
                <span
                  className={`${textColor} animate__animated animate__fadeInUp absolute left-0`}
                >
                  {words[0]}
                </span>
                <span
                  className={`${textColor} animate__animated animate__fadeOutDown absolute left-0`}
                >
                  {words[1]}
                </span>
              </>
            ) : (
              <>
                <span
                  className={`${textColor} animate__animated animate__fadeOutDown absolute left-0`}
                >
                  {words[0]}
                </span>
                <span
                  className={`${textColor} animate__animated animate__fadeInUp absolute left-0`}
                >
                  {words[1]}
                </span>
              </>
            )}
          </div>
        </h1>
      </div>
    </>
  );
}
