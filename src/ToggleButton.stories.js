import React from "react";

import ToggleButton from "components/Buttons/ToggleButton";

export default {
  title: "Components/Buttons/ToggleButton",
  component: ToggleButton
};

const Template = (args) => <ToggleButton {...args} />;

export const FullToggle = Template.bind({});
FullToggle.args = {
  toggle_type: "FullToggle",
  size: "large",
  checked: true,
  isDisabled: false
};

export const HalfToggle = Template.bind({});
HalfToggle.args = {
  toggle_type: "HalfToggle",
  size: "large",
  checked: false,
  isDisabled: false
};

export const SmallToggle = Template.bind({});
SmallToggle.args = {
  toggle_type: "SmallToggle",
  size: "small",
  checked: true,
  isDisabled: false
};

export const FixToggle = Template.bind({});
FixToggle.args = {
  toggle_type: "FixToggle",
  size: "large",
  isDisabled: true
};
