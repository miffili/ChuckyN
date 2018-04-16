import React from "react";
import PropTypes from "prop-types";

const Settings = (props) => {
  return (
    <form onSubmit={ props.handleSubmit } className="settings">
      <label className="name-change">
        Change name to:&nbsp;
        <input
          type="text"
          name="firstname"
          placeholder="Chuck"
          value={ props.firstname }
          onChange={ props.handleSettingsChange }
          tabIndex="2"
        />
        <input
          type="text"
          name="lastname"
          placeholder="Norris"
          value={ props.lastname }
          onChange={ props.handleSettingsChange }
          tabIndex="2"
        />
      </label>
      <label>
        <input
          type="checkbox"
          name="onlyDev"
          checked={ props.onlyDev }
          onChange={ props.handleCheckboxChange }
          tabIndex="2"
        />
        only nerdy
      </label>
      <label>
        Hits:&nbsp;
        <input
          type="number"
          name="count"
          min="1"
          value={ props.count }
          onChange={ props.handleSettingsChange }
          tabIndex="2"
        />
      </label>
      <button type="submit" style={{display: "none"}}/>
    </form>
  );
}

Settings.propTypes = {
  count: PropTypes.string.isRequired,
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  onlyDev: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleSettingsChange: PropTypes.func.isRequired,
  handleCheckboxChange: PropTypes.func.isRequired
}

export default Settings;
