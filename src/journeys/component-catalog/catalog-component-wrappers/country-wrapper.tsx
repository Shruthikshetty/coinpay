import {useState} from 'react';
import CountryDropDown from '~/components/drop-down/wrapper/CountryDropDown';

// default way to use country dropdown
const Default = () => {
  const [value, selectedValue] = useState({
    country: '',
    code: '',
    phoneCode: '',
    _id: '',
  });
  return <CountryDropDown value={value} setValue={selectedValue} />;
};

// export all as a const
export const COUNTRY_DROPDOWN_VARIANTS = {
  Default: () => <Default />,
};
