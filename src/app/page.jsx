"use client";

import InitialLoader from "@/components/InitialLoader";
import Homepage from "@/pages/Homepage";

const page = () => {
  return (
    <div id="landing_page" className="relative min-h-screen">
      <div
        className="relative"
        style={{
          background: "linear-gradient(99deg, rgb(44, 0, 87), rgb(12, 0, 22))",
        }}
      >
        <InitialLoader>
          <Homepage />
        </InitialLoader>
      </div>
    </div>
  );
};

export default page;
