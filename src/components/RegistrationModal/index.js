import React, {useState, useEffect} from 'react';
import {Modal, View} from 'react-native';
import {Input, Button} from 'react-native-elements';

import MainWrapper from '../MainWrapper';
import styles from './styles';

const RegistrationModal = (props) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const [loginError, setLoginError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);

  let passwordRef;
  let loginRef;

  useEffect(() => {
    if (props.registrationErrorForm) {
      setLoginError(props.registrationErrorForm);
    }
  }, [props.registrationErrorForm]);

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
    <Modal
      transparent
      animationType="fade"
      visible={props.visible}
      onRequestClose={() => props.onClose()}
    >
      <MainWrapper>
        <View style={styles.formWrapper}>
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
          <Button title="Create User" onPress={() => handleFormSubmit()} />
          <Button
            title="Close"
            onPress={() => props.onClose()}
            style={styles.secondButton}
          />
        </View>
      </MainWrapper>
    </Modal>
  );
};

export default RegistrationModal;
