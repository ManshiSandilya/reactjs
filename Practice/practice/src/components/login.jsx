import { useState } from "react";

function Login() {
  const [data, setData] = useState({
    email: "",
    password: ""
  });

  const [errors, setError] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handledata = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value
    });
  };

  const validate = () => {
    const err = {};

    if (data.email === "") {
      err.email = "Email is required";
    } else if (!data.email.includes("@")) {
      err.email = "Enter a valid email";
    }

    if (data.password === "") {
      err.password = "Password is required";
    } else if (data.password.length < 6) {
      err.password = "Password must be at least 6 characters";
    }

    setError(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
    }
  };

  return (
    <>
      {!isSubmitted ? (
        <>
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={data.email}
              onChange={handledata}
            />
            <p>{errors.email}</p>

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={data.password}
              onChange={handledata}
            />
            <p>{errors.password}</p>

            <button type="submit">Submit</button>
          </form>
        </>
      ) : (
        <>
          <div>Login Successful</div>
          <h1>Hello Manshi, welcome back!!</h1>
        </>
      )}
    </>
  );
}

export default Login;
