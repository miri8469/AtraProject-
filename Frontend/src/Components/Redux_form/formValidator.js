export const formValidatorHelper = values => {
    const errors = {};
    if (!values.userName) {
        errors.userName = " UserName is required";
    }
    if (!values.firstName) {
        errors.firstName = "First name is required";
    }
    else if (values.firstName.length < 2) {
        errors.firstName = "First name should be > 2";
    }
    if (!values.lastName) {
        errors.lastName = "Last name is required";
    } else if (values.lastName.length < 2) {
        errors.lastName = "Last name should be > 2";
    }

    if (!values.Email) {
        errors.Email = "Email is required";
    } else if (!/(.+)@(.+){2,}\.(.+){2,}/i.test(values.Email)) {
        errors.Email = "Invalid Email !!";
    }

    if (!values.password) {
        errors.password = "Password is required";
    } else {
        if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/.test(values.password)) {
            errors.password = "הסיסמא חייבת להכיל 8 תווים או יותר ולפחות אות קטנה, אות גדולה, מספר וסימן אחר"
        }

    }


    if (!values.fileName) {
        errors.fileName = "FileName is required";
    }
    // if (!values.address) {
    //     errors.address = "Address is required";
    // } else if (values.address.length < 8) {
    //     errors.address = "Address should be > 8";
    // }


    return errors;
}