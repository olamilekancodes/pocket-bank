import * as Yup from "yup";
import { TransferFormStrings } from "../../../../shared/constants/strings";
import type { TransferFormValues } from "../../type";

export const transferFormSchema = (availableBalance: number) =>
  Yup.object<TransferFormValues>().shape({
    account_number: Yup.number()
      .typeError(TransferFormStrings.accountNumber.validation1)
      .required(TransferFormStrings.accountNumber.validation2),
    amount: Yup.number()
      .typeError(TransferFormStrings.amount.validation1)
      .required(TransferFormStrings.amount.validation2)
      .moreThan(0, TransferFormStrings.amount.validation3)
      .max(availableBalance, TransferFormStrings.amount.validation4),
    bank_name: Yup.string().required(TransferFormStrings.bankName.validation1),
  });
