import React from "react";

import "./styles.css";

function RootLayout({ children }) {
  console.log("layout rendered");

  return (
    <html lang="en">
      <body>
        {children}
        <footer>Page rendered on {new Date().toLocaleString()}</footer>
      </body>
    </html>
  );
}

export default RootLayout;
