import React from "react";
import { Button, TextInput, View, Text } from "react-native";
import { useFormik } from "formik";
import * as Yup from "yup";

export const RegistrationScreen = () => {
  const formik = useFormik({
    initialValues: { login: "", email: "", password: "" },
    validationSchema: Yup.object({
      login: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(6, "Must be 6 characters or more")
        .required("Required"),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm();
    },
  });
  return (
    <View>
      <Text>Реєстрація</Text>
      <View>
        <TextInput
          onChangeText={formik.handleChange("login")}
          onBlur={formik.handleBlur("login")}
          value={formik.values.login}
        />
        {formik.touched.login && formik.errors.login ? (
          <Text>{formik.errors.login}</Text>
        ) : null}
        <TextInput
          onChangeText={formik.handleChange("email")}
          onBlur={formik.handleBlur("email")}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <Text>{formik.errors.email}</Text>
        ) : null}

        <TextInput
          onChangeText={formik.handleChange("password")}
          onBlur={formik.handleBlur("password")}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password ? (
          <Text>{formik.errors.password}</Text>
        ) : null}
        <Button onPress={formik.handleSubmit} title="Зареєстуватися" />
      </View>
    </View>
  );
};
