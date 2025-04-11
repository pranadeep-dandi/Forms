// import { useState } from "react";
// import "./App.css";

// export default function Forms() {
//   const [formData, setFormData] = useState({
//     name: "",
//     password: "",
//     Label: "",
//     checkbox: false,
//     switchState: false,
//     radio: "",
//     select: "",
//   });

//   //  Label error state
//   const [labelError, setLabelError] = useState("");

//   const handleChange = (
//     e: React.ChangeEvent<
//       HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
//     >
//   ) => {
//     const target = e.target as HTMLInputElement;
//     const { name, value, type, checked } = target;

//     setFormData((prev) => ({
//       ...prev,
//       [name]: type === "checkbox" ? checked : value,
//     }));

//     // Clear label error as user types
//     if (name === "Label" && value.trim() !== "") {
//       setLabelError("");
//     }
//   };

//   const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData((prev) => ({
//       ...prev,
//       radio: e.target.value,
//     }));
//   };

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     //  Validate only the Label input
//     if (!formData.Label.trim()) {
//       setLabelError("Label is required");
//       return;
//     }

//     const { name, password, Label, checkbox, switchState, radio, select } =
//       formData;

//     alert(
//       `Name: ${name}
// Password: ${password}
// Label: ${Label}
// Remember Me: ${checkbox}
// Switch: ${switchState ? "OFF" : "ON"}
// Selected Radio: ${radio}
// Dropdown: ${select}`
//     );

//     // Reset form
//     setFormData({
//       name: "",
//       password: "",
//       Label: "",
//       checkbox: false,
//       switchState: false,
//       radio: "",
//       select: "",
//     });
//     setLabelError(""); // Reset error state
//   };

//   return (
//     <section className="container">
//       <div className="card p-5 mx-auto">
//         <form onSubmit={handleSubmit} className="form-group mt-5">

//           {/* Username */}
//           <div className="user">
//             <label htmlFor="username" className="form-label">Username</label>
//             <input
//               type="text"
//               id="username"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               className="form-control"
//               placeholder="Enter your username"
//               required
//             />
//           </div>

//           {/* Password */}
//           <div className="password">
//             <label htmlFor="password" className="form-label">Password</label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               className="form-control"
//               placeholder="Enter your password"
//               required
//             />
//             <div className="form-text">Your password must be 4 to 12 characters long.</div>
//           </div>

//           {/* Label Field with Validation */}
//           <div className="label mb-3">
//             <label htmlFor="Label" className="form-label">Input Text Label</label>
//             <input
//               type="text"
//               id="Label"
//               name="Label"
//               value={formData.Label}
//               onChange={handleChange}
//               className={`form-control ${labelError ? "is-invalid" : ""}`}
//               placeholder="Text here"
//             />
//             {labelError && <div className="text-danger">{labelError}</div>}
//           </div>

//           {/* Checkbox */}
//           <div className="form-check">
//             <input
//               type="checkbox"
//               name="checkbox"
//               id="remember"
//               checked={formData.checkbox}
//               onChange={handleChange}
//               className="form-check-input"
//             />
//             <label htmlFor="remember" className="form-check-label">Remember Me</label>
//           </div>

//           {/* Switch */}
//           <div className="form-check form-switch">
//             <input
//               className="form-check-input"
//               type="checkbox"
//               role="switch"
//               name="switchState"
//               id="flexSwitchCheck"
//               checked={formData.switchState}
//               onChange={handleChange}
//             />
//             <label className="form-check-label" htmlFor="flexSwitchCheck">
//               {formData.switchState ? "ON" : "OFF"}
//             </label>
//           </div>

//           {/* Radio Buttons */}
//           <div className="radio">
//             <div className="form-check">
//               <input
//                 type="radio"
//                 name="radio"
//                 value="Option 1"
//                 checked={formData.radio === "Option 1"}
//                 onChange={handleRadioChange}
//                 className=""
//                 id="radio1"
//               />
//               <label className="form-check-label" htmlFor="radio1">Radio section 1</label>
//             </div>
//             <div className="form-check">
//               <input
//                 type="radio"
//                 name="radio"
//                 value="Option 2"
//                 checked={formData.radio === "Option 2"}
//                 onChange={handleRadioChange}
//                 className="remember"
//                 id="radio2"
//               />
//               <label className="form-check-label" htmlFor="radio2">Radio section 2</label>
//             </div>
//             <div className="form-check">
//               <input
//                 type="radio"
//                 name="radio"
//                 value="Option 3"
//                 checked={formData.radio === "Option 3"}
//                 onChange={handleRadioChange}
//                 className="remember"
//                 id="radio3"
//               />
//               <label className="form-check-label" htmlFor="radio3">Radio section 3</label>
//             </div>
//           </div>

//           {/* Dropdown */}
//           <div className="dropdown mb-3">
//             <label htmlFor="select" className="form-label">Dropdown Title:</label>
//             <select
//               className="form-control"
//               name="select"
//               value={formData.select}
//               onChange={handleChange}
//               id="select"
//             >
//               <option value="">Select an option</option>
//               <option value="Option 1">Dropdown option 1</option>
//               <option value="Option 2">Dropdown option 2</option>
//               <option value="Option 3">Dropdown option 3</option>
//             </select>
//           </div>

//           <div className="buttons">
//             <button type="submit" className="cancel">CANCEL</button>
//             <button type="submit" className="submit">SEND</button>
//           </div>
//         </form>
//       </div>
//     </section>
//   );
// }

import { useState } from "react";
import "./App.css";

export default function Forms() {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    Label: "",
    checkbox: false,
    switchState: false,
    radio: "",
    select: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    password: "",
    Label: "",
    radio: "",
    select: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const target = e.target as HTMLInputElement;
    const { name, value, type, checked } = target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Clear errors on change
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      radio: e.target.value,
    }));
    setErrors((prev) => ({
      ...prev,
      radio: "",
    }));
  };

  const validateForm = () => {
    const newErrors: typeof errors = {
      name: "",
      password: "",
      Label: "",
      radio: "",
      select: "",
    };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = "Username is required";
      isValid = false;
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
      isValid = false;
    } else if (
      formData.password.length < 4 ||
      formData.password.length > 12
    ) {
      newErrors.password = "Password must be 4 to 12 characters";
      isValid = false;
    }

    if (!formData.Label.trim()) {
      newErrors.Label = "Label is required";
      isValid = false;
    }

    if (!formData.radio) {
      newErrors.radio = "Select a radio option";
      isValid = false;
    }

    if (!formData.select) {
      newErrors.select = "Select an option from dropdown";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    const { name, password, Label, checkbox, switchState, radio, select } =
      formData;

    alert(
      `Name: ${name}
Password: ${password}
Label: ${Label}
Remember Me: ${checkbox}
Switch: ${switchState ? "OFF" : "ON"}
Selected Radio: ${radio}
Dropdown: ${select}`
    );

    // Reset form
    setFormData({
      name: "",
      password: "",
      Label: "",
      checkbox: false,
      switchState: false,
      radio: "",
      select: "",
    });

    setErrors({
      name: "",
      password: "",
      Label: "",
      radio: "",
      select: "",
    });
  };

  return (
    <section className="container">
      <div className="card p-5 mx-auto">
        <form onSubmit={handleSubmit} className="form-group mt-5">

          {/* Username */}
          <div className="user">
            <label htmlFor="username" className="form-label">Username</label>
            <input
              type="text"
              id="username"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="form-control"
              placeholder="Enter your username"
            />
            {errors.name && <div className="text-danger">{errors.name}</div>}
          </div>

          {/* Password */}
          <div className="password">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="form-control"
              placeholder="Enter your password"
            />
            <div className="form-text">Your password must be 4 to 12 characters long.</div>
            {errors.password && <div className="text-danger">{errors.password}</div>}
          </div>

          {/* Label Field with Validation */}
          <div className="label mb-3">
            <label htmlFor="Label" className="form-label">Input Text Label</label>
            <input
              type="text"
              id="Label"
              name="Label"
              value={formData.Label}
              onChange={handleChange}
              className="form-control"
              placeholder="Text here"
            />
            {errors.Label && <div className="text-danger">{errors.Label}</div>}
          </div>

          {/* Checkbox */}
          <div className="form-check">
            <input
              type="checkbox"
              name="checkbox"
              id="remember"
              checked={formData.checkbox}
              onChange={handleChange}
              className="form-check-input"
            />
            <label htmlFor="remember" className="form-check-label">Remember Me</label>
          </div>

          {/* Switch */}
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              name="switchState"
              id="flexSwitchCheck"
              checked={formData.switchState}
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="flexSwitchCheck">
              {formData.switchState ? "ON" : "OFF"}
            </label>
          </div>

          {/* Radio Buttons */}
          <div className="radio">
            <div className="form-check">
              <input
                type="radio"
                name="radio"
                value="Option 1"
                checked={formData.radio === "Option 1"}
                onChange={handleRadioChange}
                id="radio1"
              />
              <label className="form-check-label" htmlFor="radio1">Radio section 1</label>
            </div>
            <div className="form-check">
              <input
                type="radio"
                name="radio"
                value="Option 2"
                checked={formData.radio === "Option 2"}
                onChange={handleRadioChange}
                id="radio2"
              />
              <label className="form-check-label" htmlFor="radio2">Radio section 2</label>
            </div>
            <div className="form-check">
              <input
                type="radio"
                name="radio"
                value="Option 3"
                checked={formData.radio === "Option 3"}
                onChange={handleRadioChange}
                id="radio3"
              />
              <label className="form-check-label" htmlFor="radio3">Radio section 3</label>
            </div>
            {errors.radio && <div className="text-danger">{errors.radio}</div>}
          </div>

          {/* Dropdown */}
          <div className="dropdown mb-3">
            <label htmlFor="select" className="form-label">Dropdown Title:</label>
            <select
              className="form-control"
              name="select"
              value={formData.select}
              onChange={handleChange}
              id="select"
            >
              <option value="">Select an option</option>
              <option value="Option 1">Dropdown option 1</option>
              <option value="Option 2">Dropdown option 2</option>
              <option value="Option 3">Dropdown option 3</option>
            </select>
            {errors.select && <div className="text-danger">{errors.select}</div>}
          </div>

          <div className="buttons">
            <button type="submit" className="cancel">CANCEL</button>
            <button type="submit" className="submit">SEND</button>
          </div>
        </form>
      </div>
    </section>
  );
}
