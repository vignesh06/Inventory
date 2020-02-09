import React, { useState } from 'react';

const SelectElement = props => {
  return (
    <React.Fragment>
        <label>{props.label}{props.mandatory?'*':''}</label>
        <select
            className='form-control'
            onChange={props.selectChangeHandler}
            value={props.inputValue}
          >
            <option selected disabled value=''>---Please select---</option>
            {props.dropdownList.map((name, i) => {
              return (
                <option value={name} key={i}>
                  {name}
                </option>
              );
            })}
          </select>
    </React.Fragment>
  );
};

export default SelectElement;
