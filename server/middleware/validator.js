import { check } from "express-validator";



export const validateRegister = [
    check('userName', 'Name is required').notEmpty()
        .isLength({ min: 3, max: 16 }).withMessage('Name must be between 3 and 16 characters')
    ,
    check('email')
        .notEmpty().withMessage('Email is required')
        .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
        .withMessage('Invalid email format'),


    check('mobileNumber')
        .notEmpty().withMessage('Mobile number is required')
        .isNumeric().withMessage('Mobile number must contain only digits')
        .isLength({ min: 10, max: 10 }).withMessage('Mobile number must be exactly 10 digits')
    ,
    check('password', 'Password must be at least 3 characters long')
        .notEmpty().withMessage('Password is required')
        .isLength({ min: 3, max: 16 }).withMessage('Password must be between 3 and 16 characters')
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{3,16}$/)
        .withMessage('Password must contain at least one uppercase letter, one lowercase letter, and one special character'),


];


export const validateLogin = [

    check('email')
        .if((value, { req }) => req.body.email) // Only validate if type is email
        .notEmpty().withMessage('Email is required')
        .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
        .withMessage('Invalid email format')
    ,

    check('mobileNumber')
        .if((value, { req }) => req.body.mobileNumber) // Only validate if type is mobile
        .notEmpty().withMessage('Mobile number is required')
        .isNumeric().withMessage('Mobile number must contain only digits')
        .isLength({ min: 10, max: 10 }).withMessage('Mobile number must be exactly 10 digits')
    ,
  
    check('password')
        .notEmpty().withMessage('Password is required')
        .isLength({ min: 3, max: 16 }).withMessage('Password must be between 3 and 16 characters')
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{3,16}$/)
        .withMessage('Password must contain at least one uppercase letter, one lowercase letter, and one special character'),
];

