import React from "react";

function SectionHeading({ children }) {
  return (
    <h2 className="text-3xl sm:text-4xl font-bold capitalize mb-8 text-center">
      {children}
    </h2>
  );
}

export default SectionHeading;
