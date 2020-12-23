import React, {useState} from 'react';
import {View, Text, Dimensions, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';

import MainWrapper from '../../components/MainWrapper';
import LoginForm from '../../components/LoginForm';
import RegistrationModal from '../../components/RegistrationModal';

import {registerUser} from '../../redux/actions/storage';
import {logIn} from '../../redux/actions/auth';

import styles from './styles';

const LoginScreen = (props) => {
  const [errorForm, setErrorForm] = useState(null);
  const [registrationVisible, setRegistrationVisible] = useState(false);
  const [registrationErrorForm, setRegistrationErrorForm] = useState(null);
  const {listUsers} = props;

  const handleLogInUser = (user) => {
    props.dispatchLoginUser(user);
    props.navigation.navigate('SearchScreen');
  };

  const handleFormSubmit = ({username, password}) => {
    const findingUser = listUsers.find(
      (user) => user.username === username && user.password === password,
    );
    if (findingUser) {
      handleLogInUser({username, password});
    } else {
      setErrorForm('Incorrect Field');
    }
  };

  const handleRegistrationModalShow = () => {
    setRegistrationVisible(true);
  };

  const handleRegistrationModalClose = () => {
    setRegistrationVisible(false);
  };

  const handleRegistrationSubmit = ({ username, password }) => {
    const findingUser = listUsers.find((user) => user.username === username);
    if (findingUser) {
      setRegistrationErrorForm('Username entered already in use.');
      return;
    }
    handleRegistrationModalClose();
    props.dispatchRegisterUser({username, password});
    handleLogInUser({username, password});
  };

  return (
    <MainWrapper>
      <LoginForm
        formError={errorForm}
        submitForm={handleFormSubmit}
        lastSessionUser={props.user}
        onRegistrationPress={handleRegistrationModalShow}
      />
      <RegistrationModal
        visible={registrationVisible}
        onClose={handleRegistrationModalClose}
        submitForm={handleRegistrationSubmit}
        errorForm={registrationErrorForm}
      />
    </MainWrapper>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
  listUsers: state.store.listUsers,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchRegisterUser: (user) => dispatch(registerUser(user)),
  dispatchLoginUser: (user) => dispatch(logIn(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
