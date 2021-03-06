import express from 'express';
import { socialLogin, regularLogin } from '../controllers/LoginController';

const loginController = express.Router();

loginController.
  post('/social', (req, res) => {
    socialLogin(req, res);
  }).post('/', (req, res) => {
    regularLogin(req, res);
  });

export default loginController;
