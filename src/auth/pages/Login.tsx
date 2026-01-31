import { Formik, Form, Field, ErrorMessage } from "formik";
import type { FormikHelpers } from "formik";
import * as Yup from "yup";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { IoMdEyeOff } from "react-icons/io";
import { IoEye } from "react-icons/io5";

import styles from "./LoginPage.module.css";
import type { LoginFormValues } from "../type";
import { Typography } from "../../shared/components/ui/Typography";
import { LoginStrings } from "../../shared/constants/strings";
import { useState } from "react";
import logo from "../../assets/logo/logo1.png";

export const LoginPage = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email(`${LoginStrings.email.validation1}`)
      .required(`${LoginStrings.email.validation1}`),
    password: Yup.string()
      .min(6, `${LoginStrings.password.validation1}`)
      .required(`${LoginStrings.password.validation2}`),
  });

  const initialValues: LoginFormValues = {
    email: "",
    password: "",
  };

  const handleSubmit = (
    values: LoginFormValues,
    { setErrors, setSubmitting }: FormikHelpers<LoginFormValues>,
  ) => {
    const success = login(values.email, values.password);

    if (success) {
      navigate("/dashboard", { replace: true });
    } else {
      setErrors({
        password: `${LoginStrings.errorMessage}`,
      });
    }

    setSubmitting(false);
  };

  return (
    <div className={styles.loginWrapper}>
      <div className={styles.loginCard}>
        <img src={logo} alt="" className={styles.loginLogo} />

        <div className={styles.header}>
          <Typography variant="h4">{LoginStrings.welcomeNote}</Typography>
        </div>

        <Formik
          initialValues={initialValues}
          validationSchema={LoginSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, errors, touched }) => (
            <Form className={styles.form} noValidate>
              <div className={styles.fieldGroup}>
                <label htmlFor="email">
                  <Typography variant="p">
                    {LoginStrings.email.fieldName}
                  </Typography>
                </label>
                <Field
                  id="email"
                  name="email"
                  type="email"
                  placeholder="name@example.com"
                  className={
                    errors.email && touched.email ? styles.inputError : ""
                  }
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className={styles.error}
                />
              </div>

              <div className={styles.fieldGroup}>
                <label htmlFor="password">
                  <Typography variant="p">
                    {LoginStrings.password.fieldName}
                  </Typography>
                </label>

                <div className={styles.passwordWrapper}>
                  <Field
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    className={`${styles.passwordInput} ${
                      errors.password && touched.password
                        ? styles.inputError
                        : ""
                    }`}
                  />

                  <button
                    type="button"
                    className={styles.eyeBtn}
                    onClick={() => setShowPassword(!showPassword)}
                    tabIndex={-1}
                  >
                    {showPassword ? (
                      <IoMdEyeOff size={20} />
                    ) : (
                      <IoEye size={20} />
                    )}
                  </button>
                </div>

                <ErrorMessage
                  name="password"
                  component="div"
                  className={styles.error}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={styles.loginBtn}
              >
                {isSubmitting ? (
                  <span className={styles.loader}>
                    {LoginStrings.buttonTitle.title1}
                  </span>
                ) : (
                  `${LoginStrings.buttonTitle.title2}`
                )}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
