import React from 'react';
import { BiLocationPlus } from 'react-icons/bi';
import { components } from 'react-select';
import CreatableSelect from 'react-select/creatable';

const locationArray = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

const ValueContainer = ({ children, ...props }) => {
  return (
    components.ValueContainer && (
      <components.ValueContainer {...props}>
        {!!children && (
          <BiLocationPlus size={30} className="mr-2 relative -top-8 -left-8" />
        )}
        {children}
      </components.ValueContainer>
    )
  );
};

const LocationSelection = ({ setSelectedLocation }) => {
  const handleChange = (newValue) => {
    setSelectedLocation(newValue);
  };

  const styles = {
    option: (provided, state) => ({
      ...provided,
      color: '#000',
      fontSize: '16px',
      background: state.isFocused || state.isSelected ? '#f6f6f6' : 'white',
      '&:hover': {
        background: '#f6f6f6',
      },
      padding: 15,
      borderRadius: '0px',
      margin: '0px',
      cursor: 'pointer',
    }),
    control: (css) => ({
      ...css,
      paddingLeft: '.2rem',
      background: '#fff',
      border: '0px',
      boxShadow: 'none',
      height: '36px',
    }),
    valueContainer: (base) => ({
      ...base,
      paddingLeft: 40,
      cursor: 'text',
      height: '36px',
    }),
  };

  return (
    <CreatableSelect
      isClearable
      isSearchable
      onChange={handleChange}
      placeholder={'Where are you located?'}
      components={{ ValueContainer }}
      options={locationArray}
      styles={styles}
    />
  );
};

export default LocationSelection;
