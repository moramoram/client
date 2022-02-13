import React from "react";
import Notification from ".";

export default {
  title: "Patterns/Notification",
  component: Notification,
};

export const Default = (args) => (
  <div>
    <Notification {...args} />
  </div>
);

export const All = () => (
  <div style={{ display: "flex", gap: "2rem" }}>
    <Notification />
    <Notification isUpdated />
  </div>
);
