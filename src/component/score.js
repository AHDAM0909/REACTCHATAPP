import React from "react";
export default function ScoreCard({score, total,Comment}) {
  return(
  <div>
     <h1>Quiz Score</h1>
    <div>
      {score}/{total}
    </div>
    <div>
      {Comment}
    </div>
  </div>
  )
}