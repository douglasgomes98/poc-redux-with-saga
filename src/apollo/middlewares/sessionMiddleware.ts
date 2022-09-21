import { onError } from '@apollo/client/link/error';
// import { store } from '@/configurations/store';
// import { sessionActions } from '@/store/authentication/session/actions';

export const sessionMiddleware = onError(({ operation, graphQLErrors }) => {
  const sessionErrors = [
    {
      code: 'UNAUTHENTICATED',
    },
  ];

  const servicesNotAllowed = ['Login', 'ChangePassword'];

  const sessionIsExpired = !!graphQLErrors?.find(
    error =>
      !!sessionErrors.find(
        sessionError => sessionError.code === error.extensions?.code,
      ),
  );

  if (
    sessionIsExpired &&
    !servicesNotAllowed.includes(operation.operationName)
  ) {
    // store.dispatch(sessionActions.removeSessionRequest());
    // store.dispatch(
    //   sessionActions.sessionHasExpired({ sessionHasExpired: true }),
    // );
  }
});
