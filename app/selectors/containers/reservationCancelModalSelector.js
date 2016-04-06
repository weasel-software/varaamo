import { createSelector } from 'reselect';

import ModalTypes from 'constants/ModalTypes';
import isAdminSelector from 'selectors/isAdminSelector';
import modalIsOpenSelectorFactory from 'selectors/factories/modalIsOpenSelectorFactory';

const toCancelSelector = (state) => state.ui.reservation.toCancel;
const resourcesSelector = (state) => state.data.resources;

const reservationCancelModalSelector = createSelector(
  isAdminSelector,
  modalIsOpenSelectorFactory(ModalTypes.CANCEL_RESERVATION),
  resourcesSelector,
  toCancelSelector,
  (
    isAdmin,
    cancelReservationModalIsOpen,
    resources,
    reservationsToCancel
  ) => {
    return {
      isAdmin,
      reservationsToCancel,
      resources,
      show: cancelReservationModalIsOpen,
    };
  }
);

export default reservationCancelModalSelector;
