import React from 'react';

import Select from 'react-select';

const skillSetArray = [
  { value: 'Javascript', label: 'Javascript' },
  { value: 'C++', label: 'C++' },
  { value: 'C', label: 'C' },
  { value: 'Python', label: 'Python' },
  { value: 'Web dev', label: 'Web dev' },
  { value: 'Front-end', label: 'Front-end' },
  { value: 'Backend', label: 'Backend' },
  { value: 'Java', label: 'Java' },
  { value: 'IOS', label: 'IOS' },
  { value: 'Swift', label: 'Swift' },
  { value: 'Objective C', label: 'Objective C' },
];

const styles = {
  control: (styles, state) => ({
    ...styles,
    backgroundColor: 'white',
    background: '#fff',
    border: '0px',
    boxShadow: 'none',
    paddingLeft: 6,
  }),
  option: (styles, state) => {
    return {
      ...styles,
      backgroundColor: '#fff',
      color: '#000',
      ':active': {
        ...styles[':active'],
        backgroundColor: '#f6f6f6',
      },
      background: state.isFocused || state.isSelected ? '#f6f6f6' : 'white',
      '&:hover': {
        background: '#f6f6f6',
      },
      paddingLeft: 10,
      paddingRight: 10,
      paddingTop: 5,
      paddingBottom: 5,
    };
  },
  multiValue: (styles, { data }) => {
    return {
      ...styles,
      backgroundColor: '#fff',
      borderRadius: '20px',
      boxShadow: 'rgb(228 232 247 / 70%) 0px 0px 10px',
      padding: '5px',
    };
  },
  multiValueLabel: (styles, { data }) => ({
    ...styles,
    color: '#000',
  }),
  multiValueRemove: (styles, { data }) => ({
    ...styles,
    color: '#000',
    ':hover': {
      backgroundColor: '#fff',
      color: 'red',
    },
  }),
  placeholder: (base) => ({
    ...base,
    color: '#9ca3af',
    fontSize: '14px',
  }),
  menu: (base) => ({
    ...base,
    marginTop: 2,
    paddingTop: 0,
  }),
};

const SkillSetSelector = ({ setSkillSet }) => {
  const handleChange = (newValue) => {
    setSkillSet(newValue);
  };
  return (
    <Select
      closeMenuOnSelect={false}
      onChange={handleChange}
      placeholder={'List your skills'}
      isMulti
      options={skillSetArray}
      styles={styles}
    />
  );
};

export default SkillSetSelector;
