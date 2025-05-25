import Parsetext from '~/components/text-display/Parsetext';

// showing text in blue and underline as link
const WithLink = () => {
  return <Parsetext text={'This is a link <li>click me<li>'} />;
};

// export all variations
export const PARSE_TEXT_ALL_VARIANTS = {
  WithLink: () => <WithLink />,
};
