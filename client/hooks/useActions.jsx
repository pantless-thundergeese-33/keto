import { useMemo, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import * as Actions from '../actions/actions';

const useActions = () => {
  const dispatch = useDispatch();

  const setGuest = useCallback(() => dispatch(Actions.setGuestActionCreator()), [dispatch]);
  const addUser = useCallback(
    (username) => dispatch(Actions.addUserActionCreator(username)),
    [dispatch]
  );

  const updateActivity = useCallback(
    (activity) => Actions.setActivityActionCreator(activity),
    [dispatch]
  );

  const updateCarbon = useCallback(
    (carbon) => Actions.updateCarbonActionCreator(carbon),
    [dispatch]
  );

  const actions = useMemo({ setGuest, addUser, updateActivity, updateCarbon }, [dispatch]);
  return actions;
};

export default useActions;
