import CountryDropDown from '~/components/drop-down/wrapper/CountryDropDown';

// default way to use country dropdown
const Default = () => {
  return <CountryDropDown />;
};

// export all as a const
export const COUNTRY_DROPDOWN_VARIANTS = {
  Default: () => <Default />,
};
