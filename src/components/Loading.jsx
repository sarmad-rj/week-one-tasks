import React from 'react'
import { Atom } from "react-loading-indicators";
// npm install react-loading-indicators, from https://react-loading-indicators.netlify.app/
const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <Atom color="#3cc83d" size="medium" />
      <span className="text-xs font-semibold text-green-700 tracking-wider animate-pulse">
        Loading more...
      </span>
    </div>
  );
}

export default Loading