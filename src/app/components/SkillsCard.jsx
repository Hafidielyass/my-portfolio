import React from "react";

const SkillsCard = ({ title, Icon, skills }) => {
  return (
    <section>
      <div
        className={`px-3 py-3 w-full  bg-white-50 sm:w-fit sm:my-4 rounded-xl border border-mercury-100 shadow-[0_1px_3px_rgba(15,23,42,0.08)]  duration-300 flex flex-col  items-center place-self-start`}
      >
        <div className={`bg-second-600 rounded-full w-fit p-3`}>
          <Icon className={`w-6 h-6  text-mercury-50 `} />
        </div>
        <h2 className={`text-primary-950 text-base font-bold my-6`}>{title}</h2>
        <p
          className={`text-base text-center  mt-3 lg:text-base text-primary-950`}
        >
          {skills}
        </p>
      </div>
    </section>
  );
};

export default SkillsCard;
