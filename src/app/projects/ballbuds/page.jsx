import React from "react";

import BB_Homepage from "@/pages/projects/ballbuds/BB_Homepage";
import BB_InitialLoader from "@/components/projects/ballbuds/BB_InitialLoader";

const page = () => {
  return (
    <div id="ballbuds_page" className="relative min-h-screen">
      <BB_InitialLoader>
        <BB_Homepage />
      </BB_InitialLoader>
    </div>
  );
};

export default page;
