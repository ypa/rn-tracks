import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';

const authReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const signup = (dispatch) => {
  return async ({ email, password }) => {
    try {
      const response = await trackerApi.post('/signup', { email: email, password: password });
      console.log(response.data);
    } catch (err) {
      console.log(err.response.data);
    }
  };
};

const signin = (dispatch) => {
  return ({ email, password }) => {
    // Try to sign in

    // Handle success by updating state

    // Handle failing by showing error message
  };
};

const signout = (dispatch) => {
  return () => {
    // sign out
  };
};

export const { Provider, Context } = createDataContext(
  authReducer,
  {
    signup: signup,
    signin: signin,
    signout: signout
  },
  { isSignedIn: false }
)
