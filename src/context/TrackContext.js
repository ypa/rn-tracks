import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';

const trackReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const fetchTracks = dispatch => () => {};

const createTrack = dispatch => async (name, locations) => {
  await trackerApi.post('/tracks', { name: name, locations: locations });
};

export const { Provider, Context } = createDataContext(
  trackReducer,
  {
    fetchTracks: fetchTracks,
    createTrack: createTrack
  },
  []
);
