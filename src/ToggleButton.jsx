import React, { useState } from "react";
import PropTypes from "prop-types";
import "./ToggleButton.scss";

// comment is for storybook

const ToggleButton = ({ ...props }) => {
  // const { toggle_type, isDisabled, size, checked: checkedProp } = props
  const [checked, setChecked] = useState(false);
  // const onToggle = () => setIsToggled(!isToggled)

  return (
    <div className="ToggleButton">
      {/* <h1>{toggle_type}</h1> */}
      <h1>Full Toggle Switch Button</h1>
      <div className="FullToggle">
        {/* <div className={toggle_type}> */}
        <label className="button-switch large">
          {/* <label className={`button-switch ${size}`}> */}
          <input
            type="checkbox"
            checked={checked}
            onChange={(event) => setChecked(event.target.checked)}
            // disabled={isDisabled}
          />
          <span className="switch large" />
          {/* <span className={`switch ${size}`} /> */}
        </label>
      </div>

      <h1>Half Toggle Switch Button</h1>
      <div className="HalfToggle">
        {/* <div className={toggle_type}> */}
        <label className="button-switch large">
          {/* <label className={`button-switch ${size}`}> */}
          <input
            type="checkbox"
            checked={checked}
            onChange={(event) => setChecked(event.target.checked)}
            // disabled={isDisabled}
          />
          <span className="switch large" />
          {/* <span className={`switch ${size}`} /> */}
        </label>
      </div>

      <h1>Small Toggle Switch Button</h1>
      <div className="SmallToggle">
        {/* <div className={toggle_type}> */}
        <label className="button-switch small">
          {/* <label className={`button-switch ${size}`}> */}
          <input
            type="checkbox"
            checked={checked}
            onChange={(event) => setChecked(event.target.checked)}
            // disabled={isDisabled}
          />
          <span className="switch small" />
          {/* <span className={`switch ${size}`} /> */}
        </label>
      </div>

      <h1>Fix Toggle Switch Button</h1>
      <div className="FixToggle">
        {/* <div className={toggle_type}> */}
        <label className="button-switch large">
          {/* <label className={`button-switch ${size}`}> */}
          <input
            type="checkbox"
            checked={checked}
            onChange={(event) => setChecked(event.target.checked)}
            disabled
          />
          <span className="switch large" />
          {/* <span className={`switch ${size}`} /> */}
        </label>
      </div>
    </div>
  );
};

ToggleButton.propTypes = {
  toggle_type: PropTypes.oneOf([
    "FullToggle",
    "HalfToggle",
    "SmallToggle",
    "FixToggle"
  ]),
  size: PropTypes.oneOf(["large", "small"]),
  checked: PropTypes.bool,
  isDisabled: PropTypes.bool
};

export default ToggleButton;
