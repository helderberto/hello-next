"use client";
import React from "react";

function AboutPage() {
  React.useEffect(() => {
    console.log("about page effect");
  });

  return <div>About this site.</div>;
}

export default AboutPage;
