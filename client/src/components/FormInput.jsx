// import { useState } from "react";
// import "./form.scss";
// import FormInput from "./FormInput";

// function Register() {
//   const [values, setValues] = useState({
//     username: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const inputs = [
//     {
//       id: 1,
//       name: "username",
//       type: "text",
//       placeholder: "Username",
//       label: "Username",
//     },
//     {
//       id: 2,
//       name: "email",
//       type: "text",
//       placeholder: "Email",
//       label: "Email",
//     },
//     {
//       id: 3,
//       name: "password",
//       type: "password",
//       placeholder: "Password",
//       label: "Password",
//     },
//     {
//       id: 4,
//       name: "confirmPassword",
//       type: "password",
//       placeholder: "Confirm Password",
//       label: "Confirm Password",
//     },
//   ];

//   const handleSubmit = (e) => {
//     e.preventDefault();
//   };

//   const handleChange = (e) => {
//     setValues({ ...values, [e.target.name]: e.target.value });
//   };

//   console.log(values)
//   return (
//     <div className="form">
//       <form action="" onSubmit={handleSubmit}>
//         {inputs.map((input) => (
//           <FormInput key={input.id} {...input} value={values[input.name]} onChange={handleChange} />
//         ))}
//         <button>Submit</button>
//       </form>
//     </div>
//   );
// }

// export default Register;





// import "./form.scss";
// import PropTypes from "prop-types";

// const FormInput = (props) => {
//   const { label, handleChange, ...inputProps } = props;

//   return (
//     <div className="formInput">
//       <label>{label}</label>
//       <input {...inputProps} onChange={handleChange} />
//     </div>
//   );
// };

// // Menambahkan propTypes untuk memvalidasi properti
// FormInput.propTypes = {
//   placeholder: PropTypes.string,
//   label: PropTypes,
//   handleChange: PropTypes.string.isRequired,
// };

// export default FormInput;
