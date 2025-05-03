import {Animated, Text} from 'react-native';
import styles from './alert.styles';
import {useEffect, useRef} from 'react';
import {useAlertContext} from './AlertProvider';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import CheckCircle from '../svgs/CheckCircle';
import {ALERT_THEME_MAP} from './alerts-theme-map';

type AlertProps = {
  duration?: number;
};

/**
 *  component to show alert messages
 */
const Alert = ({duration = 1000}: AlertProps) => {
  // getting the top insert as to place the alert at correct place
  const {top} = useSafeAreaInsets();
  // getting the state from context
  const {message, setMessage, theme, varient} = useAlertContext();
  // ref for time out
  const timeoutRef = useRef<NodeJS.Timeout>(null);
  const opacity = useRef(new Animated.Value(1)).current; // Start fully visible
  useEffect(() => {
    if (!message) {
      return;
    } // return when not visible
    timeoutRef.current = setTimeout(() => {
      // Start fade-out
      Animated.timing(opacity, {
        toValue: 0,
        duration: 400, // fade-out duration
        useNativeDriver: true,
      }).start(() => {
        setMessage(''); // Finally hide the component
      });
    }, duration);
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        setMessage('');
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [duration, opacity]);

  // extract the bg and text color to be used in the Alert as per the theme
  const getThemeColors = () => {
    // the currently selcted theme and varient map color
    const currentTheme = ALERT_THEME_MAP[theme] || ALERT_THEME_MAP.Primary;
    const isLight = varient === 'light';

    return {
      bgColor: isLight ? currentTheme.light : currentTheme.dark,
      textColor: isLight ? currentTheme.dark : currentTheme.light,
    };
  };

  return (
    <Animated.View
      style={[
        styles.root,
        {backgroundColor: getThemeColors().bgColor},
        {marginTop: top},
        {opacity},
      ]}>
      <CheckCircle fill={getThemeColors().textColor} />
      <Text style={[styles.message, {color: getThemeColors().textColor}]}>
        {message}
      </Text>
    </Animated.View>
  );
};

export default Alert;
