import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {Input, Button} from 'react-native-elements';

import styles from './styles';

const LoginForm = (props) => {
  const {lastSessionUser} = props;
  const [login, setLogin] = useState(lastSessionUser.username);
  const [password, setPassword] = useState(lastSessionUser.password);

  const [loginError, setLoginError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);

  let passwordRef;
  let loginRef;

  useEffect(() => {
    if (props.formError) {
      setLoginError(props.formError);
      setPasswordError(props.formError);
    }
  }, [props.formError]);

  const handleLoginChange = (value) => {
    setLoginError(null);
    setLogin(value);
  };

  const handlePasswordChange = (value) => {
    setPasswordError(null);
    setPassword(value);
  };

  const handleLoginSubmit = () => {
    passwordRef.focus();
  };

  const handleFormSubmit = () => {
    if (!login.length) {
      setLoginError('Empty username');
      loginRef.focus();
      return;
    }
    if (!password.length) {
      setPasswordError('Empty password');
      passwordRef.focus();
      return;
    }
    props.submitForm({username: login, password});
  };

  return (
    <View style={styles.inputWrapper}>
      <Input
        placeholder="Login"
        value={login}
        onChangeText={handleLoginChange}
        onSubmitEditing={() => handleLoginSubmit()}
        autoCapitalize="none"
        autoCorrect={false}
        errorMessage={loginError}
        ref={(ref) => (loginRef = ref)}
      />
      <Input
        placeholder="Password"
        value={password}
        secureTextEntry
        onChangeText={handlePasswordChange}
        errorMessage={passwordError}
        onSubmitEditing={() => handleFormSubmit()}
        ref={(ref) => (passwordRef = ref)}
      />
      <Button title="Log in" onPress={() => handleFormSubmit()} />
      <Button
        title="Registration"
        style={styles.registrationButton}
        onPress={() => props.onRegistrationPress()}
      />
    </View>
  );
};

export default LoginForm;
