import express from 'express';
import loginRoute from './LoginRoute';
import signUpRoute from './signUpRoute';

const router = express.Router();

router.use('/signin', loginRoute);
router.use('/signup', signUpRoute);

export default router;
