import React from 'react';
import {View, Text, Modal, TouchableOpacity, Image} from 'react-native';
import ElevatedBox from '~/components/elevated-box/ElevatedBox';
import styles from './confirm-phone-modal.styles';
import TitleSubtitle from '~/components/text-display/TitleSubtitle';
import Button from '~/components/buttons/Button';
import {useModal} from '~/common/hooks/use-model';

// types
type ConfirmPhoneModalType = {
  phoneNumber: string;
  modal: ReturnType<typeof useModal>;
  handleConfim: () => void;
};

// this is a custom modal used in signup flow for user confirmation on entered phone number
const ConfirmPhoneModal = ({
  phoneNumber = '',
  modal,
  handleConfim,
}: ConfirmPhoneModalType) => {
  return (
    <Modal transparent visible={modal.visible}>
      <View style={styles.blur}>
        <View style={styles.outerRim}>
          <ElevatedBox customStyles={styles.conatiner}>
            {/* cross icon */}
            <TouchableOpacity
              style={styles.cross}
              onPress={() => {
                modal.hide(); // close modal
              }}>
              {/* Replace with svg */}
              <Text>X</Text>
            </TouchableOpacity>
            {/* image  */}
            <Image
              source={require('~/../assets/email-tick.png')}
              style={styles.image}
              resizeMode="cover"
            />
            {/* text content */}
            <TitleSubtitle
              title="Verify your phone number before we send code"
              subTitle={`Is this correct? ${phoneNumber}`}
              customStyles={{
                title: styles.textCenter,
                subtitle: styles.textCenter,
              }}
            />
            {/* buttons */}
            <View style={styles.buttonContainer}>
              <Button
                handlePress={() => {
                  modal.hide(); // close modal
                  handleConfim();
                }}
                label="Yes"
                theme="Primary"
              />
              <Button
                handlePress={() => {
                  modal.hide(); // close modal
                }}
                label="No"
                theme="Primary"
                variant="Border"
              />
            </View>
          </ElevatedBox>
        </View>
      </View>
    </Modal>
  );
};

export default ConfirmPhoneModal;
