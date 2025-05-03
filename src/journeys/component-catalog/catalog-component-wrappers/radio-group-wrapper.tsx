/**
 * This file contains all catalog/demo variants of the RadioGroup component.
 */

import React, {useState} from 'react';
import {colors} from '~/common/constants/colors.constants';
import Radio from '~/components/radio/Radio';
import RadioGroup from '~/components/radio/wrapper/RadioGroup';
import ReceiptIcon from '~/components/svgs/ReceiptIcon';
import UserIcon from '~/components/svgs/UserIcon';

/** Default variant with two basic options */
const RadioGroupDefault = () => (
  <RadioGroup value={''} setValue={() => {}}>
    <Radio value="option 1" />
    <Radio value="option 2" />
  </RadioGroup>
);

/** Variant with subtitles under each option */
const RadioGroupWithSubtitle = () => (
  <RadioGroup value={'Title1'} setValue={() => {}}>
    <Radio value="Title1" subTitle="something ....." />
    <Radio value="Title2" subTitle="something ....." />
  </RadioGroup>
);

/** Variant with full props including subtitle, icons, and custom colors */
const RadioGroupAllProps = () => {
  const [selected, setSelected] = useState<string | undefined>('Title1'); // state to track selection

  return (
    <RadioGroup value={selected} setValue={setSelected}>
      <Radio
        value="Title1"
        subTitle="something ....."
        key="title-1"
        frameColor={colors.blue300}
        image={<ReceiptIcon />}
      />
      <Radio
        value="Title2"
        subTitle="something ....."
        key="title-2"
        frameColor={colors.yellow300}
        image={<UserIcon fill={colors.black} />}
      />
    </RadioGroup>
  );
};

/**
 * Exported variants map for use in catalog view or component registry
 */
export const RADIO_GROUP_VARIANTS = {
  Default: () => <RadioGroupDefault />,
  WithSubtitle: () => <RadioGroupWithSubtitle />,
  AllProps: () => <RadioGroupAllProps />,
};
