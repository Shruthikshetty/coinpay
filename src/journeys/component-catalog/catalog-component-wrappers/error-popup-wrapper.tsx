// this files contains all the varients of error pop up to be shown in catalog

import {useModal} from '~/common/hooks/use-model';
import ErrorPopup from '~/components/error-popup/ErrorPopup';

// default way to use
const ErrorPopUpDefault = () => {
  const modal = useModal(true);
  return (
    <ErrorPopup
      title={'title'}
      description={'some description'}
      handleOkay={() => {
        modal.hide();
      }}
      modal={modal}
    />
  );
};

// ussing error pop up with all optional props
const ErrorPopUpAllProps = () => {
  const modal = useModal(true);
  return (
    <ErrorPopup
      title={'title'}
      buttonTitle="Button title"
      code="404"
      key={'api-error'}
      description={'some description'}
      handleOkay={() => {
        modal.hide();
      }}
      modal={modal}
    />
  );
};

// export all as a const
export const ERROR_POPUP_VARIENTS = {
  Default: () => <ErrorPopUpDefault />,
  AllProps: () => <ErrorPopUpAllProps />,
};
