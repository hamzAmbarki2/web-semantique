import React from "react";
import {
  Typography,
} from "@material-tailwind/react";

export function Home() {
  return (
    <div className="mt-12">
      <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4">
        <Typography variant="h5" color="blue-gray">
          Dashboard Home
        </Typography>
      </div>
    </div>
  );
}

export default Home;
