import React from "react";
import CertificationCard from "./CertificationCard";

const certificateData = [
  {
    id: 1,
    title: "Sage ipv6 he",
    imgUrl: "/images/Certifcate-Sage.png",
    previewUrl: "https://github.com",
  },
  {
    id: 2,
    title: "Network Operations",

    imgUrl: "/images/introduction-Network-Operations.png",
    previewUrl: "https://github.com",
  },
  {
    id: 3,
    title: "Encryption",

    imgUrl: "/images/Encryption-screenshot.png",
    previewUrl: "https://github.com",
  },
];

const CertificationSection = () => {
  return (
    <>
      <h2 className="text-primary-950 text-5xl font-Gaegu font-extrabold mb-1">Certficates</h2>
      <hr className="border-second-500  border-2 w-24 mb-8" />

      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {certificateData.map((certificate) => (
          <CertificationCard
            key={certificate.id}
            imgUrl={certificate.imgUrl}
            title={certificate.title}
            description={certificate.description}
            previewUrl={certificate.previewUrl}
          />
        ))}
      </div>
    </>
  );
};

export default CertificationSection;
