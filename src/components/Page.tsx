import { Helmet } from "react-helmet-async";
import React, { ReactNode } from "react";

const Page = ({ children, title }: { children: ReactNode; title: string }) => {
  return (
    <React.Fragment>
      <Helmet>
        <title>{title} | D'Aux</title>
      </Helmet>

      <main style={{ position: "relative" }}>{children}</main>
    </React.Fragment>
  );
};

export default Page;
