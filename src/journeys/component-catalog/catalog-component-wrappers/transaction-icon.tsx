import TransactionItem from '~/components/transaction-item/TransactionItem';

// default way to use transaction item
const Default = () => {
  return (
    <TransactionItem name={'John'} email={'john@example.com'} amount={'1000'} />
  );
};

// with credit true
const WithCredit = () => {
  return (
    <TransactionItem
      name={'John'}
      email={'john@example.com'}
      amount={'1000'}
      isCredit
    />
  );
};

//export all the variant's
export const TRANSACTION_ITEM_VARIANTS = {
  Default: () => <Default />,
  WithCredit: () => <WithCredit />,
};
