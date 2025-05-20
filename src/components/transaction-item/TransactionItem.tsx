import React from 'react';
import {Image, Text, View} from 'react-native';
import TitleSubtitle from '../text-display/TitleSubtitle';
import styles from './transaction-item.styles';
import {DEFAULT_TRANSACTION_IMAGE_URI} from '~/common/constants/screen.constants';

//types...
type TransactionItemProps = {
  name: string;
  email: string;
  amount: string;
  imageUri?: string;
  isCredit?: boolean; // optional flag for + or - styling
};

/**
 * this is a Reusable component that provides transaction item
 * it contains profile image, name, email and amount
 * @param param0  - name, subtitle, amount, imageUri, isCredit
 * @param param0.name - name of the recipient
 * @returns JSX.Element
 */
const TransactionItem = ({
  name = '',
  email = '',
  amount,
  imageUri,
  isCredit = false,
}: TransactionItemProps) => {
  return (
    <View style={styles.root}>
      <View style={styles.subContainer}>
        {/* profile image of recipient */}
        <Image
          source={{
            uri: imageUri ?? DEFAULT_TRANSACTION_IMAGE_URI,
          }}
          height={50}
          width={50}
          resizeMode="cover"
          style={styles.image}
        />
        {/* this container the name and email  */}
        <TitleSubtitle
          title={name}
          subTitle={email}
          customStyles={{
            title: styles.title,
            root: styles.titleSubtitleRoot,
            subtitle: styles.subtitle,
          }}
        />
      </View>
      {/* amount in debit or credit */}
      <Text
        style={[
          styles.amount,
          isCredit ? styles.creditColor : styles.debitColor,
        ]}>
        {isCredit ? '+' : '-'}
        {amount}
      </Text>
    </View>
  );
};

export default TransactionItem;
