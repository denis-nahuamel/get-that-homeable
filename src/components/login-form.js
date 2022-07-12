/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { inputForm, sendButton, signUpContainer } from "../styles/form";
import { montW400S12, montW400S15, montW400S24, sans14W600Gray } from "../styles/typography";
import { contColumn, contColumnM16, contColumnM16Start } from "../styles/utils";

const LoginForm = () => {
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <div
          css={css`
            ${signUpContainer}
          `}
        >
          <Form  >
            <div>
                <div css={css`${montW400S24}; margin-top:10px`}>Login</div>
              <div>
                <div css={css`${contColumnM16Start}`}>
                  <label css={css`${montW400S15}`}>Email address: </label>
                  <Field css={css`${inputForm}; width:90% ;`} type="email" name="email" />
                  <ErrorMessage name="email" component="div" />
                </div>
                <div css={css` ${contColumnM16Start} `}>
                  <label css={css`${montW400S15}`}>Password: </label>
                  <Field css={css`${inputForm}; width:90% ;`} type="password" name="password" />
                  <ErrorMessage name="password" component="div" />
                </div>
              </div>
              <div >
                <button css={css`${sendButton}`} type="submit" disabled={isSubmitting}>
                  submit
                </button>
              </div>
            </div>
          </Form>
        </div>
      )}
    </Formik>
  );
};
export default LoginForm;
