import * as Yup from "yup";
import { TransferFormStrings } from "../../../../shared/constants/strings";
import type { TransferFormValues } from "../../type";

export const transferFormSchema = (availableBalance: number) =>
  Yup.object<TransferFormValues>().shape({
    account_number: Yup.string()
      .required(TransferFormStrings.accountNumber.validation1)
      .matches(/^[0-9]+$/, `${TransferFormStrings.accountNumber.validation2}`)
      .length(10, `${TransferFormStrings.accountNumber.validation3}`),
    amount: Yup.number()
      .typeError(TransferFormStrings.amount.validation1)
      .required(TransferFormStrings.amount.validation2)
      .moreThan(0, TransferFormStrings.amount.validation3)
      .max(availableBalance, TransferFormStrings.amount.validation4),
    bank_name: Yup.string().required(TransferFormStrings.bankName.validation1),
  });
