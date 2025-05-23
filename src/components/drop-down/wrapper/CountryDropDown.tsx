import React, {useEffect, useState} from 'react';

import DropDown from '../DropDown';
import {Country, useFetchCountry} from '~/services/country-service';
import {useAlert} from '~/common/hooks/use-alert';
import {COUNTRY_FLAG_MAP} from './country-mapping';
import UnknownFlag from '~/components/svgs/UnknownFlag';

/**
 * Helper function to get the flag component for a given country code.
 * Returns the corresponding flag component or UnknownFlag if not found.
 */
const getFlagComponent = (code: string): React.ComponentType<any> => {
  return (
    (COUNTRY_FLAG_MAP?.[
      code as keyof typeof COUNTRY_FLAG_MAP
    ] as React.ComponentType<any>) || UnknownFlag
  );
};

/**
 * This is a country dropdown that shows the country with its flags as a dropdown
 */
const CountryDropDown = () => {
  // state to store selected country
  const [value, setValue] = useState<Country>({
    code: '',
    country: '',
    phoneCode: '',
    _id: '',
  });

  // get the function to show alerts
  const {alert} = useAlert('Error', 'light');
  // fetch all the country list
  const {data, error} = useFetchCountry();

  // show error in case api fails
  useEffect(() => {
    if (error?.message) {
      alert('Failed to get Country list try after sometime.');
    }
  }, [alert, error?.message]);

  // Get the flag component for the currently selected country
  const SelectedFlag = getFlagComponent(value.code);

  /** function to get the flags for options */
  const handleFlagOptions = (item: Country) => {
    const OptionFlag = getFlagComponent(item.code);
    return <OptionFlag />;
  };

  return (
    <DropDown<Country>
      optionsLeftIcon={handleFlagOptions}
      leftComponent={<SelectedFlag />}
      options={data ?? []}
      value={value}
      handleValue={setValue}
      label="Country"
      placeholder="country"
      renderOption={item => item.country}
      emptyHandlerMessage="Sorry failed to get country list"
    />
  );
};

export default CountryDropDown;
