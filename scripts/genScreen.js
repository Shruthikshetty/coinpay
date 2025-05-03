/**
 * Script to generate a screen folder with required files
 */
const fs = require('fs');
const path = require('path');

const componentName = process.argv[2];

if (!componentName) {
  console.error('❌ Please provide a component name.');
  process.exit(1);
}

const componentDir = path.join(
  __dirname,
  '..',
  'src',
  'journeys',
  componentName,
);

// Create folder
if (!fs.existsSync(componentDir)) {
  fs.mkdirSync(componentDir.toLocaleLowerCase(), {recursive: true});
}

const componentContent = `
import React from 'react';
import { View, Text } from 'react-native';
import styles from './index.styles';

const ${componentName} = () => {
  return (
    <View style={styles.container}>
      <Text>${componentName} Component</Text>
    </View>
  );
};

export default ${componentName}
`;
// index.tsx
fs.writeFileSync(
  path.join(componentDir, 'index.tsx'),
  componentContent.trimStart(),
);

const styleContent = `
import { StyleSheet } from 'react-native';

const ${componentName.toLowerCase()}Styles = StyleSheet.create({
  container:{flex:1}
});

export default ${componentName.toLowerCase()}Styles;
`;

// index.styles.ts
fs.writeFileSync(
  path.join(componentDir, 'index.styles.ts'),
  styleContent.trim(),
);

// index.test.tsx
fs.writeFileSync(
  path.join(componentDir, 'index.test.tsx'),
  `import React from 'react';\nimport { render } from '@testing-library/react-native';\nimport ${componentName} from './index';\n\ntest('renders ${componentName} correctly', () => {\n  const { getByText } = render(<${componentName} />);\n  expect(getByText('${componentName} Component')).toBeTruthy();\n});\n`,
);

console.log(`✅ Component "${componentName}" created successfully.`);
