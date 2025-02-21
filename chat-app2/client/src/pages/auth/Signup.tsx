import { useState, ChangeEvent, FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../app/store";
import { signUp } from "../../slice/authSlice";

export default function Signup() {
  const dispatch = useDispatch<AppDispatch>();
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  const { loading, error } = useSelector((state: RootState) => state.signup);

  // const [error, setError] = useState<string | null>(null);
  // const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    dispatch(signUp(formData));
    setFormData({ fullname: "", email: "", password: "" });
  };

  return (
    <div className="bg-white/20 backdrop-blur-2xl p-6 rounded-lg shadow-md w-80 text-white">
      <h2 className="text-xl font-semibold mb-4">Sign Up</h2>

      {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="fullname"
          placeholder="Full Name"
          className="w-full p-2 border-b-2 outline-none rounded mb-2 bg-transparent placeholder-white"
          value={formData.fullname}
          onChange={handleChange}
          required
        />
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
          {loading ? "Signing Up..." : "Sign Up"}
        </button>
      </form>
    </div>
  );
}
