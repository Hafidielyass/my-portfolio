import React from "react";

const EducationSection = () => {
  return (
    <section className="font-AlbertSans">
      <h2 className="text-foreground text-5xl font-Gaegu font-extrabold mb-1 mt-5 ">
        Eduction
      </h2>
      <hr className="border-second-500 border-2 w-14" />

      <div className=" flex items-center justify-center font-AlbertSans">
        <div className="flex flex-col md:grid grid-cols-9 mx-auto p-2">
          <div className="flex flex-row-reverse md:contents">
            <div className="w-full col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto border border-mercury-100 bg-second-50 ">
              <h3 className="font-semibold text-lg mb-1 text-foreground">
                Ecole Supérieur de Technologie, Meknes |{" "}
                <span className=" text-primary-800"> 2022 - 2023 </span>
              </h3>
              <p className="text-primary-900 text-base">
                LP - Développement des Systems d&nbsp;information et de
                communication
              </p>
            </div>
            <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
              <div className="h-full w-6 flex items-center justify-center">
                <div className="h-full w-px bg-mercury-200 pointer-events-none"></div>
              </div>

              <div className="w-6 h-6 absolute top-1/2 -mt-3 border-2 border-second-600 rounded-full bg-mercury-100 shadow"></div>
            </div>
          </div>

          <div className="flex md:contents">
            <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
              <div className="h-full w-6 flex items-center justify-center">
                <div className="h-full w-px bg-mercury-200 pointer-events-none"></div>
              </div>

              <div className="w-6 h-6 absolute top-1/2 -mt-3 border-2 border-second-600 rounded-full bg-mercury-100 shadow"></div>
            </div>

            <div className="w-full col-start-6 col-end-10 my-4 mr-auto p-4 border border-mercury-100 bg-second-50 rounded-xl">
              <h3 className="font-semibold text-lg mb-1 text-foreground">
                Ecole Supérieur de Technologie, Oujda |{" "}
                <span className=" text-primary-800"> 2020 - 2022 </span>
              </h3>
              <p className="text-primary-900 text-base">
                DUT Administrateur de Système et Réseaux
              </p>
            </div>
          </div>

          <div className="flex flex-row-reverse md:contents">
            <div className="w-full col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto border border-mercury-100 bg-second-50">
              <h3 className="font-semibold text-lg mb-1 text-foreground">
                Nouveau Lycée, Erfoud |
                <span className=" text-primary-800"> 2018 - 2020 </span>
              </h3>
              <p className="text-primary-900 text-base">
                Baccalauréat Science Mathematique A
              </p>
            </div>

            <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
              <div className="h-full w-6 flex items-center justify-center">
                <div className="h-full w-px bg-mercury-200 pointer-events-none"></div>
              </div>

              <div className="w-6 h-6 absolute top-1/2 -mt-3 border-2 border-second-600 rounded-full bg-mercury-100 shadow"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
