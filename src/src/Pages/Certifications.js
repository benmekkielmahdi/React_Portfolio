import React from "react";
import CertificationCard from "../Components/CertificationCard";
import { certificationDetails } from "../Details";

function Certifications() {
  return (
    <main className="container mx-auto max-w-screen-xl pt-10 mb-20">
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Certifications
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
          {certificationDetails.map(({ title, image, Platform, verificationLink }) => (
            <CertificationCard
              key={title}
              title={title}
              image={image}
              Platform={Platform}
              verificationLink={verificationLink}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Certifications;
