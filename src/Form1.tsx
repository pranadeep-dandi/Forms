
// import { useState } from "react";
// import "./Form1.css";

// export function Form1() {
//   const [formData, setFormData] = useState({
//     username: "",
//     password: "",
//     text: "",
//     checkbox: false,
//     radio: "",
//     dropdownOption: "",
//     selection: "",
//     toggle: false,
//   });

//   const [errors, setErrors] = useState<{
//     username?: string;
//     password?: string;
//     checkbox?: string;
//     radio?: string;
//     dropdownOption?: string;
//     selection?: string;
//     toggle?: string;
//   }>({});

//   const [submitted, setSubmitted] = useState(false);

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
//   ) => {
//     const { name, value, type } = e.target;
//     const checked = (e.target as HTMLInputElement).checked;
//     const newValue = type === "checkbox" ? checked : value;
  
//     setFormData((prev) => ({
//       ...prev,
//       [name]: newValue,
//     }));
  
  
//     setErrors((prevErrors) => ({
//       ...prevErrors,
//       [name]: undefined,
//     }));
//   };
  

//   const validate = () => {
//     const newErrors: typeof errors = {};

//     if (!formData.username.trim()) {
//       newErrors.username = "Username is required";
//     }

//     if (!formData.password || formData.password.length < 6) {
//       newErrors.password = "Password must be at least 6 characters";
//     }

//     if (!formData.checkbox) {
//       newErrors.checkbox = "You must accept the terms";
//     }

//     if (!formData.selection) {
//       newErrors.selection = "Please select an option";
//     }

//     if (!formData.dropdownOption) {
//       newErrors.dropdownOption = "Please select from dropdown";
//     }
//     if(!formData.toggle){
//       newErrors.toggle="please"
//     }

//     return newErrors;
//   };

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     const validationErrors = validate();
//     setErrors(validationErrors);
//     setSubmitted(true);

//     if (Object.keys(validationErrors).length === 0) {
     

      
//       setFormData({
//         username: "",
//         password: "",
//         text: "",
//         checkbox: false,
//         radio: "",
//         dropdownOption: "",
//         selection: "",
//         toggle: false,
//       });

//       setSubmitted(false);
//       setErrors({});
//     } 
//   };

//   return (
//     <>
//       <div className="container">
//         <div className="card">
//           <form className="form" onSubmit={handleSubmit}>
//             <div className="username">
//               <label htmlFor="name">Username</label>
//               <br />
//               <input
//                 type="text"
//                 name="username"
//                 value={formData.username}
//                 onChange={handleChange}
//                 placeholder="Enter your name"
//               />
//               {submitted && errors.username && (
//                 <span className="error">{errors.username}</span>
//               )}
//             </div>

//             <div className="password">
//               <label htmlFor="password">Password</label>
//               <br />
//               <input
//                 type="password"
//                 name="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 placeholder="Enter Password"
//               />
//               {submitted && errors.password && (
//                 <span className="error">{errors.password}</span>
//               )}
//             </div>

//             <div className="text">
//               <label htmlFor="text">Text</label>
//               <br />
//               <input
//                 type="text"
//                 name="text"
//                 value={formData.text}
//                 onChange={handleChange}
//                 placeholder="Enter text"
//               />
//             </div>

//             <div className="checkbox">
//               <input
//                 type="checkbox"
//                 id="checkbox"
//                 name="checkbox"
//                 checked={formData.checkbox}
//                 onChange={handleChange}
//                 className="check"
//               />
//               <label htmlFor="checkbox">RememberMe</label>
//               {submitted && errors.checkbox && (
//                 <span className="error">{errors.checkbox}</span>
//               )}
//             </div>

//             <div className="toggle" style={{height:"24px"}}>
//               <label className="switch mirror">
//                 <input
//                   type="checkbox"
//                   name="toggle"
//                   checked={formData.toggle}
//                   onChange={handleChange}
//                 />
//                 <span className="slider"></span>
//               </label>
//               <span className="toggle-text-label">
//                 {formData.toggle ? "ON" : "OFF"}
//               </span>
//             </div>

//             <div className="selection-radio-group">
//               <label>
//                 <input
//                   type="radio"
//                   name="selection"
//                   value="selection1"
//                   checked={formData.selection === "selection1"}
//                   onChange={handleChange}
//                 />
//                 Selection 1
//               </label>
//               <label>
//                 <input
//                   type="radio"
//                   name="selection"
//                   value="selection2"
//                   checked={formData.selection === "selection2"}
//                   onChange={handleChange}
//                 />
//                 Selection 2
//               </label>
//               <label>
//                 <input
//                   type="radio"
//                   name="selection"
//                   value="selection3"
//                   checked={formData.selection === "selection3"}
//                   onChange={handleChange}
//                 />
//                 Selection 3
//               </label>
//               {submitted && errors.selection && (
//                 <span className="error">{errors.selection}</span>
//               )}
//             </div>

//             <div className="dropdown-field">
//               <label htmlFor="dropdownOption">Select an option:</label>
//               <select
//                 id="dropdownOption"
//                 name="dropdownOption"
//                 value={formData.dropdownOption}
//                 onChange={handleChange}
//               >
//                 <option value="">-- Select --</option>
//                 <option value="option1">Option 1</option>
//                 <option value="option2">Option 2</option>
//                 <option value="option3">Option 3</option>
//               </select>
//               {submitted && errors.dropdownOption && (
//                 <span className="error">{errors.dropdownOption}</span>
//               )}
//             </div>

//             <div className="sure">
//               <button
//                 type="reset"
//                 style={{ backgroundColor: "grey" }}
//                 onClick={() => {
//                   setFormData({
//                     username: "",
//                     password: "",
//                     text: "",
//                     checkbox: false,
//                     radio: "",
//                     dropdownOption: "",
//                     selection: "",
//                     toggle: false,
//                   });
//                   setErrors({});
//                   setSubmitted(false);
//                 }}
//               >
//                 Reset
//               </button>
//               <button type="submit" style={{ backgroundColor: "blue" }}>
//                 Submit
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Form1;



import { useState } from "react";
import "./Form1.css";

export function Form1() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    text: "",
    checkbox: false,
    radio: "",
    dropdownOption: "",
    selection: "",
    toggle: false,
  });

  const [errors, setErrors] = useState<{
    username?: string;
    password?: string;
    checkbox?: string;
    radio?: string;
    dropdownOption?: string;
    selection?: string;
    toggle?: string;
  }>({});

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    const newValue = type === "checkbox" ? checked : value;

    setFormData((prev) => ({
      ...prev,
      [name]: newValue,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: undefined,
    }));
  };

  const validate = () => {
    const newErrors: typeof errors = {};

    if (!formData.username.trim()) {
      newErrors.username = "Username is required";
    }

    if (!formData.password || formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (!formData.checkbox) {
      newErrors.checkbox = "You must accept the terms";
    }

    if (!formData.selection) {
      newErrors.selection = "Please select an option";
    }

    if (!formData.dropdownOption) {
      newErrors.dropdownOption = "Please select from dropdown";
    }

    if (!formData.toggle) {
      newErrors.toggle = "Toggle must be turned ON";
    }

    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    setSubmitted(true);

    if (Object.keys(validationErrors).length === 0) {
      // Show form data in alert
      alert(`
        Username: ${formData.username}
        Password: ${formData.password}
        Text: ${formData.text}
        Checkbox: ${formData.checkbox ? "Checked" : "Not Checked"}
        Toggle: ${formData.toggle ? "ON" : "OFF"}
        Selection: ${formData.selection}
        Dropdown: ${formData.dropdownOption}
      `);

      // Reset form
      setFormData({
        username: "123",
        password: "",
        text: "",
        checkbox: false,
        radio: "",
        dropdownOption: "",
        selection: "",
        toggle: false,
      });

      setSubmitted(false);
      setErrors({});
    }
  };

  return (
    <div className="container">
      <div className="card">
        <form className="form" onSubmit={handleSubmit}>
          <div className="username">
            <label htmlFor="name">Username</label>
            <br />
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter your name"
            />
            {submitted && errors.username && (
              <span className="error">{errors.username}</span>
            )}
          </div>

          <div className="password">
            <label htmlFor="password">Password</label>
            <br />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter Password"
            />
            {submitted && errors.password && (
              <span className="error">{errors.password}</span>
            )}
          </div>

          <div className="text">
            <label htmlFor="text">Text</label>
            <br />
            <input
              type="text"
              name="text"
              value={formData.text}
              onChange={handleChange}
              placeholder="Enter text"
            />
          </div>

          <div className="checkbox">
            <input
              type="checkbox"
              id="checkbox"
              name="checkbox"
              checked={formData.checkbox}
              onChange={handleChange}
              className="check"
            />
            <label htmlFor="checkbox">Remember Me</label>
            {submitted && errors.checkbox && (
              <span className="error">{errors.checkbox}</span>
            )}
          </div>

          <div className="toggle" style={{ height: "24px" }}>
            <label className="switch mirror">
              <input
                type="checkbox"
                name="toggle"
                checked={formData.toggle}
                onChange={handleChange}
              />
              <span className="slider"></span>
            </label>
            <span className="toggle-text-label">
              {formData.toggle ? "ON" : "OFF"}
            </span>
            {submitted && errors.toggle && (
              <span className="error">{errors.toggle}</span>
            )}
          </div>

          <div className="selection-radio-group">
            <label>
              <input
                type="radio"
                name="selection"
                value="selection1"
                checked={formData.selection === "selection1"}
                onChange={handleChange}
              />
              Selection 1
            </label>
            <label>
              <input
                type="radio"
                name="selection"
                value="selection2"
                checked={formData.selection === "selection2"}
                onChange={handleChange}
              />
              Selection 2
            </label>
            <label>
              <input
                type="radio"
                name="selection"
                value="selection3"
                checked={formData.selection === "selection3"}
                onChange={handleChange}
              />
              Selection 3
            </label>
            {submitted && errors.selection && (
              <span className="error">{errors.selection}</span>
            )}
          </div>

          <div className="dropdown-field">
            <label htmlFor="dropdownOption">Select an option:</label>
            <select
              id="dropdownOption"
              name="dropdownOption"
              value={formData.dropdownOption}
              onChange={handleChange}
            >
              <option value="">-- Select --</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
            {submitted && errors.dropdownOption && (
              <span className="error">{errors.dropdownOption}</span>
            )}
          </div>

          <div className="sure">
            <button
              type="reset"
              style={{ backgroundColor: "grey" }}
              onClick={() => {
                setFormData({
                  username: "",
                  password: "",
                  text: "",
                  checkbox: false,
                  radio: "",
                  dropdownOption: "",
                  selection: "",
                  toggle: false,
                });
                setErrors({});
                setSubmitted(false);
              }}
            >
              Reset
            </button>
            <button type="submit" style={{ backgroundColor: "blue" }}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form1;
