import React from "react";

const SkillsCard = ({ title, Icon, skills }) => {
  return (
    <section className="">
      <div
        className={`group relative overflow-hidden px-3 py-3 w-full h-96 bg-secondary border-b-2 border-accent sm:w-fit sm:my-4 shadow-[0_1px_3px_rgba(15,23,42,0.08)] duration-300 flex flex-col items-center place-self-start before:content-[''] before:absolute before:left-0 before:right-0 before:bottom-0 before:h-0 before:bg-accent before:transition-all before:duration-500 before:ease-out hover:before:h-full`}
      >
        <div className={`relative z-10 bg-muted rounded-full w-fit p-3`}>
          <Icon
            className={`w-6 h-6 text-foreground transition-colors duration-300 group-hover:text-accent-foreground`}
          />
        </div>
        <h2
          className={`relative z-10 text-foreground text-base font-bold my-6 transition-colors duration-300 group-hover:text-accent-foreground`}
        >
          {title}
        </h2>
        <p
          className={`relative z-10 text-base text-center mt-3 lg:text-base text-foreground transition-colors duration-300 group-hover:text-accent-foreground`}
        >
          {skills}
        </p>
      </div>
    </section>
  );
};

export default SkillsCard;
