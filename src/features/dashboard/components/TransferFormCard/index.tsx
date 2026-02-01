import { Formik, Form, Field, ErrorMessage } from "formik";
import type { FormikHelpers } from "formik";
import { toast } from "react-hot-toast";

import styles from "./TransferForm.module.css";
import type { TransferFormProps, TransferFormValues } from "../../type";
import {
  formatCurrencyInput,
  stripCommas,
} from "../../../../shared/components/utils/formatter";
import { TransferFormStrings } from "../../../../shared/constants/strings";
import { transferFormSchema } from "./validation";

export const TransferForm = ({
  availableBalance,
  closeForm,
  handleFormSubmit,
}: Omit<TransferFormProps, "onSubmit">) => {
  const initialValues: TransferFormValues = {
    account_number: "",
    amount: "",
    bank_name: "",
  };

  const TransferSchema = transferFormSchema(availableBalance);

  const handleSubmit = (
    values: TransferFormValues,
    { resetForm, setSubmitting }: FormikHelpers<TransferFormValues>,
  ) => {
    handleFormSubmit(values);

    toast.success(`${TransferFormStrings.notificationMessage}`);
    resetForm();
    setSubmitting(false);
    closeForm();
  };

  return (
    <div className={styles.formWrapper}>
      <Formik
        initialValues={initialValues}
        validationSchema={TransferSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, errors, touched, setFieldValue, values }) => (
          <Form className={styles.form}>
            <div className={styles.fieldGroup}>
              <label htmlFor="account_number" className={styles.label}>
                {TransferFormStrings.accountNumber.fieldName}
              </label>
              <Field
                id="account_number"
                name="account_number"
                inputMode="numeric"
                maxLength={10}
                placeholder="0123456789"
                className={`${styles.input} ${
                  errors.account_number && touched.account_number
                    ? styles.inputError
                    : ""
                }`}
              />
              <ErrorMessage
                name="account_number"
                component="div"
                className={styles.error}
              />
            </div>

            <div className={styles.fieldGroup}>
              <label htmlFor="bank_name" className={styles.label}>
                {TransferFormStrings.bankName.fieldName}
              </label>
              <Field
                id="bank_name"
                name="bank_name"
                placeholder="Sparkle"
                className={`${styles.input} ${
                  errors.bank_name && touched.bank_name ? styles.inputError : ""
                }`}
              />
              <ErrorMessage
                name="bank_name"
                component="div"
                className={styles.error}
              />
            </div>

            <div className={styles.fieldGroup}>
              <label htmlFor="amount" className={styles.label}>
                {TransferFormStrings.amount.fieldName}
              </label>
              <input
                id="amount"
                name="amount"
                type="text"
                inputMode="decimal"
                className={styles.input}
                value={formatCurrencyInput(values.amount.toString())}
                onChange={(e) => {
                  const rawValue = stripCommas(e.target.value);

                  if (/^\d*\.?\d*$/.test(rawValue)) {
                    setFieldValue("amount", rawValue);
                  }
                }}
              />
              <ErrorMessage
                name="amount"
                component="div"
                className={styles.error}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={styles.submitBtn}
            >
              {isSubmitting
                ? `${TransferFormStrings.buttonTitle.title1}`
                : `${TransferFormStrings.buttonTitle.title2}`}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
