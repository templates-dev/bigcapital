import React, { createContext, useContext } from 'react';
import {
  useAccounts,
  useVendors,
  useItems,
  usePaymentMade,
  useSettings,
  useCreatePaymentMade,
  useEditPaymentMade
} from 'hooks/query';
import { DashboardInsider } from 'components';

// Payment made form context.
const PaymentMadeFormContext = createContext();

/**
 * Payment made form provider.
 */
function PaymentMadeFormProvider({ paymentMadeId, ...props }) {
  // Handle fetch accounts data.
  const { data: accounts, isFetching: isAccountsFetching } = useAccounts();

  // Handle fetch Items data table or list.
  const {
    data: { items },
    isFetching: isItemsFetching,
    isLoading: isItemsLoading,
  } = useItems();

  // Handle fetch venders data table or list.
  const {
    data: { vendors },
    isFetching: isVendorsFetching,
  } = useVendors();

  // Handle fetch specific payment made details.
  const {
    data: { paymentMade, payableBills, paymentBills },
    isFetching: isPaymentFetching,
    isLoading: isPaymentLoading,
  } = usePaymentMade(paymentMadeId, {
    enabled: !!paymentMadeId,
  });

  // Fetch payment made settings.
  useSettings();

  // Create and edit payment made mutations.
  const { mutateAsync: createPaymentMadeMutate } = useCreatePaymentMade();
  const { mutateAsync: editPaymentMadeMutate } = useEditPaymentMade();

  // Provider payload.
  const provider = {
    paymentMadeId,
    accounts,
    paymentMade,
    payableBills,
    paymentBills,
    vendors,
    items,

    isAccountsFetching,
    isItemsFetching,
    isItemsLoading,
    isVendorsFetching,
    isPaymentFetching,
    isPaymentLoading,

    createPaymentMadeMutate,
    editPaymentMadeMutate,
  };

  return (
    <DashboardInsider
      loading={
        isVendorsFetching ||
        isItemsFetching ||
        isAccountsFetching ||
        isPaymentFetching ||
        isPaymentLoading
      }
      name={'payment-made'}
    >
      <PaymentMadeFormContext.Provider value={provider} {...props} />
    </DashboardInsider>
  );
}

const usePaymentMadeFormContext = () => useContext(PaymentMadeFormContext);

export { PaymentMadeFormProvider, usePaymentMadeFormContext };
