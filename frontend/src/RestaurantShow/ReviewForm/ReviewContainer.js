import React from "react";

import ReviewForm from "./ReviewForm";
import ReviewShow from "./ReviewShow";
import ReviewSummary from "./ReviewSummary";

const ReviewContainer = () => (
  <div>
    <ReviewForm />
    <ReviewSummary />
    <ReviewShow />
  </div>
);

export default ReviewContainer;
