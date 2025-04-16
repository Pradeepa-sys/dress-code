import { check } from "express-validator";

// General Field Validators
export const nameValidator = (field = 'userName') =>
    check(field)
        .notEmpty().withMessage('Name is required')
        .isLength({ min: 3, max: 16 }).withMessage('Name must be between 3 and 16 characters');

export const emailValidator = (field = 'email') =>
    check(field)
        .notEmpty().withMessage('Email is required')
        .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
        .withMessage('Invalid email format');

export const mobileValidator = (field = 'mobileNumber') =>
    check(field)
        .notEmpty().withMessage('Mobile number is required')
        .isNumeric().withMessage('Mobile number must contain only digits')
        .isLength({ min: 10, max: 10 }).withMessage('Mobile number must be exactly 10 digits');

export const passwordValidator = (field = 'password') =>
    check(field)
        .notEmpty().withMessage('Password is required')
        .isLength({ min: 3, max: 16 }).withMessage('Password must be between 3 and 16 characters')
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{3,16}$/)
        .withMessage('Password must contain at least one uppercase letter, one lowercase letter, and one special character');
