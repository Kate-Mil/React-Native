import React from "react";
import { useState } from "react";
import { TextInput, View, Text, StyleSheet, SafeAreaView } from "react-native";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Title } from "../components/Title";
import { AddPhoto } from "../components/AddPhoto";
import { Background } from "../components/Background";
import { Button } from "../components/Button";
import { Link } from "../components/Link";
import { ShowPassword } from "../components/ShowPassword";
import { KeyboardWrapper } from "../components/KeyboardWrapper";

export const RegistrationScreen = () => {
  const [focusedInput, setFocusedInput] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const handleFocus = (inputName) => {
    setFocusedInput(inputName);
  };

  const handleBlur = () => {
    setFocusedInput(null);
  };

  const getInputStyle = (inputName) => {
    switch (inputName) {
      case "login":
        return focusedInput === "login"
          ? [styles.input, styles.inputFocused]
          : styles.input;
      case "email":
        return focusedInput === "email"
          ? [styles.input, styles.inputFocused]
          : styles.input;
      case "password":
        return focusedInput === "password"
          ? [styles.input, styles.inputFocused]
          : styles.input;
      default:
        return styles.input;
    }
  };

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
    <Background>
      <KeyboardWrapper style={{ paddingTop: 147 }}>
        <AddPhoto />
        <View style={styles.wrapper}>
          <Title title={"Реєстрація"} />
          <View style={styles.inputWrapper}>
            <View>
              <TextInput
                style={getInputStyle("login")}
                onChangeText={formik.handleChange("login")}
                onFocus={() => handleFocus("login")}
                onBlur={handleBlur}
                value={formik.values.login}
                placeholder={"Логін"}
                name="login"
              />
              {formik.touched.login && formik.errors.login ? (
                <Text style={styles.baseErrorTextStyle}>
                  {formik.errors.login}
                </Text>
              ) : null}
            </View>
            <View>
              <TextInput
                style={getInputStyle("email")}
                onChangeText={formik.handleChange("email")}
                onFocus={() => handleFocus("email")}
                onBlur={handleBlur}
                value={formik.values.email}
                placeholder={"Адреса електронної пошти"}
                name="email"
              />
              {formik.touched.email && formik.errors.email ? (
                <Text style={styles.baseErrorTextStyle}>
                  {formik.errors.email}
                </Text>
              ) : null}
            </View>
            <View style={(position = "relative")}>
              <TextInput
                style={getInputStyle("password")}
                onChangeText={formik.handleChange("password")}
                onFocus={() => handleFocus("password")}
                onBlur={handleBlur}
                value={formik.values.password}
                placeholder={"Пароль"}
                name="password"
                secureTextEntry={!showPassword}
              />
              {formik.touched.password && formik.errors.password ? (
                <Text style={styles.baseErrorTextStyle}>
                  {formik.errors.password}
                </Text>
              ) : null}
              <ShowPassword
                onPress={() => setShowPassword((prevState) => !prevState)}
              />
            </View>
          </View>
          <Button onPress={formik.handleSubmit} title="Зареєстуватися" />
          <Link>Вже є акаунт? Увійти</Link>
        </View>
      </KeyboardWrapper>
    </Background>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#fff",
    paddingTop: 92,
    paddingHorizontal: 16,
    paddingBottom: 66,
  },
  inputWrapper: {
    width: "100%",
    marginBottom: 43,
    gap: 16,
  },
  input: {
    height: 50,
    borderRadius: 8,
    paddingLeft: 16,
    paddingHorizontal: 16,
    color: "#212121",
    fontFamily: "rb-regular",
    fontSize: 16,
    lineHeight: 16,
    backgroundColor: "#F6F6F6",
    fontWeight: "700",
    borderWidth: 1,
    borderColor: "#F6F6F6",
  },
  inputFocused: { borderColor: "#FF6C00" },
  baseErrorTextStyle: {
    color: "#FF6C00",
    fontSize: 16,
    fontFamily: "rb-regular",
    fontWeight: "700",
  },
});
