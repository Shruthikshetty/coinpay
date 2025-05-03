import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Text, View} from 'react-native';
import DropDown from '~/components/drop-down/DropDown';
import styles from './index.styles';

import {COMPONENT_KEYS, COMPONENT_VARIANTS_MAP} from './component-mapping';

// this is a catalog of all the components used in the app
// used for development purpose
const ComponentCatalogScreen = () => {
  const [selectedComponent, setSelectedComponent] = useState('');
  const [selectedVariant, setSelectedVariant] = useState('');

  // Get variant options dynamically based on selected component
  const variantOptions = selectedComponent
    ? Object.keys(COMPONENT_VARIANTS_MAP[selectedComponent])
    : [];

  // Render selected component variant
  const RenderedComponent =
    selectedComponent && selectedVariant
      ? COMPONENT_VARIANTS_MAP[selectedComponent][selectedVariant]()
      : null;

  return (
    <SafeAreaView style={styles.container}>
      <DropDown
        options={COMPONENT_KEYS}
        value={selectedComponent}
        placeholder="Select Component"
        handleValue={value => {
          setSelectedComponent(value);
          setSelectedVariant(''); // Reset variant when component changes
        }}
        label="Component"
      />

      {selectedComponent && (
        <DropDown
          options={variantOptions}
          value={selectedVariant}
          placeholder="Select Variant"
          handleValue={setSelectedVariant}
          label="Variant"
        />
      )}

      <View style={styles.componentContainer}>
        {RenderedComponent || (
          <Text style={styles.text}>
            Select a component and variant to preview
          </Text>
        )}
      </View>
    </SafeAreaView>
  );
};

export default ComponentCatalogScreen;
