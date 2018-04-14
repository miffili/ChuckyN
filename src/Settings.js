import React from 'react';

const Settings = (props) => {
  return (
    <form onSubmit={ props.handleSubmit } className="settings">
      <label>
        Change name to:&nbsp;
        <input
          type="text"
          name="firstname"
          placeholder="Chuck"
          value={ props.state.firstname }
          onChange={ props.handleNameChange }
        />
        <input
          type="text"
          name="lastname"
          placeholder="Norris"
          value={ props.state.lastname }
          onChange={ props.handleNameChange }
        />
      </label>
      <label>
        <input
          type="checkbox"
          name="onlyDev"
          checked={ props.state.onlyDev }
          onChange={ props.handleCheckboxChange }
        />
        only nerdy
      </label>
      <label>
        Hits:&nbsp;
        <input
          type="number"
          min="1"
          value={ props.state.count }
          onChange={ props.handleCountChange }
        />
      </label>
      <input type="submit" style={{display: "none"}}/>
    </form>
  );
}

export default Settings;
