import React from 'react';

const Settings = (props) => {
  return (
    <form onSubmit={ props.handleSubmit } className="settings">
      <label className="name-change">
        Change name to:&nbsp;
        <input
          type="text"
          name="firstname"
          placeholder="Chuck"
          value={ props.state.firstname }
          onChange={ props.handleNameChange }
          tabIndex="3"
        />
        <input
          type="text"
          name="lastname"
          placeholder="Norris"
          value={ props.state.lastname }
          onChange={ props.handleNameChange }
          tabIndex="4"
        />
      </label>
      <label>
        <input
          type="checkbox"
          name="onlyDev"
          checked={ props.state.onlyDev }
          onChange={ props.handleCheckboxChange }
          tabIndex="5"
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
          tabIndex="6"
        />
      </label>
      <button type="submit" style={{display: "none"}}/>
    </form>
  );
}

export default Settings;
