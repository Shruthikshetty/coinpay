import React, {useState} from 'react';
import {Text, View} from 'react-native';
import styles from './index.styles';
import {useTranslation} from 'react-i18next';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Languages} from '~/common/constants/language.constants';
import {changeLanguage} from 'i18next';
import DropDown from '~/components/drop-down/DropDown';
import {LanguageKey} from '~/types/types';

// simple example of how to use the i18next in react
// for multiple languages and internationalization
const InternationalizationExample = () => {
  // get translation fun from the hook
  const {t} = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState<LanguageKey>('en');

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Internationalization Example</Text>
      <View style={styles.dropDownContainer}>
        <DropDown<LanguageKey>
          options={Object.keys(Languages) as LanguageKey[]}
          value={selectedLanguage}
          renderOption={val => Languages[val].nativeName} // to show the native event as options
          handleValue={val => {
            // set state to show selected language
            setSelectedLanguage(val);
            // change language
            changeLanguage(val);
          }}
        />
      </View>
      <Text>Translation :- </Text>
      <View style={styles.contentContainer}>
        {/* translated values */}
        <Text>{t('example')}</Text>
      </View>
    </SafeAreaView>
  );
};

export default InternationalizationExample;
