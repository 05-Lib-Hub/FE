import { auth } from './api';

export const signIn = async () => {
  try {
    const { status } = await auth.signIn();
    if (!status) throw new Error('Failed to sign in');
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};
