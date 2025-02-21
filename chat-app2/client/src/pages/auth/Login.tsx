import { useState, ChangeEvent, FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../app/store";
import { login } from "../../slice/loginSlice";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch<AppDispatch>();
  const [message, setMessage] = useState("");
  const { loading, error } = useSelector((state: RootState) => state.login);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage("");
    console.log(formData);
    try {
      const resultAction = await dispatch(login(formData));
      if (login.fulfilled.match(resultAction)) {
        setMessage("Login successful!");
        setFormData({ email: "", password: "" });
      } else {
        setMessage("Login failed! Please check your credentials.");
      }
    } catch (error) {
      setMessage("An unexpected error occurred.");
    }
    // console.log("Entered Values", formData);

    // try {
    //   const response = await fetch("http://localhost:5000/api/auth/login", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({
    //       email: formData.email,
    //       password: formData.password,
    //     }),
    //   });

    //   const data = await response.json();
    //   console.log("Response:", data);
    //   if (!response.ok) {
    //     throw new Error(data.message || "Login failed");
    //   }
    //   alert("Login successful!");
    //   setFormData({ email: "", password: "" });
    //   localStorage.setItem("user", JSON.stringify(data));

    //   setMesssage(data.message);
    // } catch (error: any) {
    //   setError(error.message);
    // } finally {
    //   setLoading(false);
    // }
  };

  return (
    <div>
      {" "}
      <div className="bg-white/20 backdrop-blur-2xl p-6 rounded-lg shadow-md w-80 text-white">
        <h2 className="text-xl font-semibold mb-4">Login</h2>
        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
        <form onSubmit={handleSubmit}>
          {" "}
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full p-2 border-b-2 outline-none rounded mb-2 bg-transparent placeholder-white"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full p-2 border-b-2 outline-none rounded mb-2 bg-transparent placeholder-white"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-500 mt-4 rounded-lg text-white p-2  hover:bg-blue-600 transition"
            disabled={loading}
          >
            {loading ? "Logging In..." : "Log In"}
          </button>
        </form>
      </div>{" "}
      <div className="bg-white/20 backdrop-blur-2xl rounded-lg shadow-md w-80 flex justify-center items-center mt-4">
        {message && <p className="text-white text-sm mb-2">{message}</p>}
      </div>
    </div>
  );
}
