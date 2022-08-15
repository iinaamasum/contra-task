import React from 'react';
import { BiLocationPlus } from 'react-icons/bi';
import { components } from 'react-select';
import CreatableSelect from 'react-select/creatable';

const locationArray = [
  { value: 'Rajshahi', label: 'Rajshahi' },
  { value: 'Alaska', label: 'Alaska' },
  { value: 'Bihar', label: 'Bihar' },
  { value: 'Colombo', label: 'Colombo' },
  { value: 'Dishal', label: 'Dishal' },
  { value: 'EverHope', label: 'EverHope' },
  { value: 'France', label: 'France' },
  { value: 'Goa', label: 'Goa' },
  { value: 'Holand', label: 'Holand' },
  { value: 'Ice', label: 'Ice' },
  { value: 'Jumpar', label: 'Jumpar' },
  { value: 'Kashmir', label: 'Kashmir' },
  { value: 'Linda', label: 'Linda' },
  { value: 'Murshidabad', label: 'Murshidabad' },
  { value: 'Okana', label: 'Okana' },
  { value: 'Persuit', label: 'Persuit' },
  { value: 'queen', label: 'queen' },
  { value: 'Richi', label: 'Richi' },
  { value: 'Sylhet', label: 'Sylhet' },
  { value: 'Tangail', label: 'Tangail' },
  { value: 'Uganda', label: 'Uganda' },
  { value: 'Vulgaria', label: 'Vulgaria' },
  { value: 'Nothing', label: 'Nothing' },
];

const ValueContainer = ({ children, ...props }) => {
  return (
    components.ValueContainer && (
      <components.ValueContainer {...props}>
        {!!children && (
          <BiLocationPlus
            size={30}
            className="mr-2 relative -top-8 -left-8 text-gray-700"
          />
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
      fontSize: 16,
      background: state.isFocused || state.isSelected ? '#f6f6f6' : 'white',
      '&:hover': {
        background: '#f6f6f6',
      },
      paddingLeft: 10,
      paddingRight: 10,
      paddingTop: 5,
      paddingBottom: 5,
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
    placeholder: (base) => ({
      ...base,
      color: '#9ca3af',
      fontSize: 16,
    }),
    menu: (base) => ({
      ...base,
      marginTop: 2,
      paddingTop: 0,
    }),
    singleValue: (base) => ({
      ...base,
      fontSize: 16,
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
      className="placeholder:text-gray-400 placeholder:text-base"
    />
  );
};

export default LocationSelection;
