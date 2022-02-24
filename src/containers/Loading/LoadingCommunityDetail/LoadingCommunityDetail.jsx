import React from "react";
import { FeedDetail } from "@/components";

const FeedDetailLoading = ({ ...props }) => {
  return <FeedDetail isLoading {...props} />;
};

export default FeedDetailLoading;
