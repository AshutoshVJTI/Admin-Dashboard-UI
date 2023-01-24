import React from "react";

interface TypoProps {
  children: React.ReactNode;
  fontFamily?: "OS" | "SF" | "Roboto";
  className?: React.ComponentProps<"div">["className"];
}

const Typo = (props: TypoProps) => {
  const { children, fontFamily, className } = props;
  const getFontFamily = () => {
    if (fontFamily === "OS") return "Open Sans";
    else if (fontFamily === "Roboto") return "Roboto";
    else if (fontFamily === "SF") return "Source Sans Pro";
    else return "Source Sans Pro";
  };
  return (
    <div className={className} style={{ fontFamily: getFontFamily() }}>
      {children}
    </div>
  );
};

export default Typo;
