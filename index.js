/**
 * @format
 */
import './gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import '~/i18next/i18next.config'; // importing i18next config

AppRegistry.registerComponent(appName, () => App);
