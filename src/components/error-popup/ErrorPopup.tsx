import {Modal, Text, View} from 'react-native';
import styles from './error-styles';
import LinkButton from '../buttons/LinkButton';
import {useModal} from '~/common/hooks/use-model';

type ErrorPopupProps = {
  title: string;
  description: string;
  code?: string;
  handleOkay: () => void;
  buttonTitle?: string;
  modal: Pick<ReturnType<typeof useModal>, 'visible' | 'hide'> &
    Partial<Pick<ReturnType<typeof useModal>, 'show' | 'setVisible'>>;
};

// to show api error
// title , description and error code
const ErrorPopup = ({
  title,
  description,
  code,
  handleOkay,
  buttonTitle = 'Okay',
  modal,
}: ErrorPopupProps) => {
  return (
    <Modal visible={modal.visible} transparent>
      <View style={styles.root}>
        {/* main inner container */}
        <View style={styles.errorContainer}>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.content}>
            <Text style={styles.description}>{description}</Text>
            {code && <Text style={styles.codetext}>{code}</Text>}
          </View>
          <LinkButton
            handlePress={() => {
              // close modal
              modal.hide();
              // handler from parent
              handleOkay?.();
            }}
            title={buttonTitle}
            center
          />
        </View>
      </View>
    </Modal>
  );
};

export default ErrorPopup;
