import React, { useState, useEffect, useContext } from "react";
import logo from "../../../public/Logo.png";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX, FiUser } from "react-icons/fi";
import english from "../../../Images/gb.svg";
import arabic from "../../../Images/ae.svg";
import { LanguageContext } from "../../Context/LanguageContext"; // استدعاء الكونتكست

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [showAuth, setShowAuth] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);

  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");

  // جلب الكونتكست
  const { isArabic, toggleLanguage } = useContext(LanguageContext);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Load logged in user on mount
  useEffect(() => {
    const savedUser = localStorage.getItem("loggedInUser");
    if (savedUser) {
      setLoggedInUser(JSON.parse(savedUser));
    }
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleAuth = (e) => {
    e.preventDefault();
    setError("");

    if (isRegister) {
      // Register
      let users = JSON.parse(localStorage.getItem("users")) || [];
      const exists = users.find((u) => u.email === formData.email);
      if (exists) {
        setError("User already exists with this email");
        return;
      }
      const newUser = { name: formData.name, email: formData.email, password: formData.password };
      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));
      localStorage.setItem("loggedInUser", JSON.stringify(newUser));
      setLoggedInUser(newUser);
      setShowAuth(false);
    } else {
      // Login
      let users = JSON.parse(localStorage.getItem("users")) || [];
      const user = users.find(
        (u) => u.email === formData.email && u.password === formData.password
      );
      if (!user) {
        setError("Invalid email or password");
        return;
      }
      localStorage.setItem("loggedInUser", JSON.stringify(user));
      setLoggedInUser(user);
      setShowAuth(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setLoggedInUser(null);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="bg-black top-0 right-0 left-0 z-40 shadow-md relative">
        <div className="flex justify-between items-center mx-auto px-4 lg:px-10 py-2  xl:pb-4  md:pb-4 lg:pb-4">
          {/* Left side */}
          <div className="flex items-center gap-8 px-2">
            <NavLink to="/" className="flex items-center">
              <img src={logo} alt="Logo" className="w-[100px] h-[54px]" />
            </NavLink>

            {/* Desktop Menu */}
            <ul className="hidden lg:flex gap-5 items-center">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `font-medium px-3 text-[15px] ${isActive ? "text-[#D72638]" : "text-white"}`
                  }
                >
                  {isArabic ? "الرئيسية" : "Home"}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/ourcars"
                  className={({ isActive }) =>
                    `font-medium px-3 text-[15px] ${isActive ? "text-[#D72638]" : "text-white"}`
                  }
                >
                  {isArabic ? "سياراتنا" : "Our Cars"}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blog"
                  className={({ isActive }) =>
                    `font-medium px-3 text-[15px] ${isActive ? "text-[#D72638]" : "text-white"}`
                  }
                >
                  {isArabic ? "المدونة" : "Blogs"}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `font-medium px-3 text-[15px] ${isActive ? "text-[#D72638]" : "text-white"}`
                  }
                >
                  {isArabic ? "من نحن" : "About"}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `font-medium px-3 text-[15px] ${isActive ? "text-[#D72638]" : "text-white"}`
                  }
                >
                  {isArabic ? "اتصل بنا" : "Contact"}
                </NavLink>
              </li>
              <li>
                              <NavLink
                                to="https://wa.me/+971567567467"
                                target="_blank" 
                                className={({ isActive }) =>
                                  `font-medium px-3 text-[15px] ${isActive ? "text-[#D72638]" : "text-white"}`
                                }
                              >
                                 <i class="fab fa-whatsapp text-xl px-1"></i> +971567567467
                              </NavLink>
                            </li>
            </ul>
          </div>

          {/* Right side (Desktop) */}
          <div className="hidden lg:flex items-center gap-6">
            {loggedInUser ? (
              <div className="flex items-center gap-3 text-white">
                <span>{isArabic ? `مرحباً، ${loggedInUser.name}` : `Hello, ${loggedInUser.name}`}</span>
                <button
                  onClick={handleLogout}
                  className="bg-[#D72638] px-3 py-1 rounded text-sm"
                >
                  {isArabic ? "تسجيل الخروج" : "Logout"}
                </button>
              </div>
            ) : (
              <span
                onClick={() => setShowAuth(true)}
                className="text-white font-medium text-[15px] cursor-pointer flex items-center gap-2"
              >
                <FiUser className="text-lg" /> {isArabic ? "تسجيل الدخول" : "Sign in"}
              </span>
            )}

            {/* Language Toggle */}
            <div className="relative">
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-2 text-white bg-black font-medium outline-none text-[15px]"
              >
                {isArabic ? (
                  <>
                    <img src={arabic} alt="Arabic" className="w-5 h-4" />
                    عربي
                  </>
                ) : (
                  <>
                    <img src={english} alt="English" className="w-5 h-4" />
                    English
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-white text-2xl"
            onClick={toggleMenu}
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-black text-white  top-full left-0 w-full flex flex-col items-start p-5 space-y-4 z-30">
            {/* Links */}
            <NavLink to="/" className="w-full py-2 border-b border-gray-700" onClick={toggleMenu}>
              {isArabic ? "الرئيسية" : "Home"}
            </NavLink>
            <NavLink to="/ourcars" className="w-full py-2 border-b border-gray-700" onClick={toggleMenu}>
              {isArabic ? "سياراتنا" : "Our Cars"}
            </NavLink>
            <NavLink to="/blog" className="w-full py-2 border-b border-gray-700" onClick={toggleMenu}>
              {isArabic ? "المدونة" : "Blogs"}
            </NavLink>
            <NavLink to="/about" className="w-full py-2 border-b border-gray-700" onClick={toggleMenu}>
              {isArabic ? "من نحن" : "About"}
            </NavLink>
            <NavLink to="/contact" className="w-full py-2 border-b border-gray-700" onClick={toggleMenu}>
              {isArabic ? "اتصل بنا" : "Contact"}
            </NavLink>
              <NavLink to="https://wa.me/+971567567467" target="_blank"  className="w-full py-2 border-b border-gray-700" onClick={toggleMenu}>
                            <i class="fab fa-whatsapp text-xl px-1"></i> +971567567467
                        </NavLink>

            {/* Sign in / User */}
            <div className="w-full py-3 border-b border-gray-700">
              {loggedInUser ? (
                <div className="flex items-center justify-between w-full">
                  <span>{isArabic ? `مرحباً، ${loggedInUser.name}` : `Hello, ${loggedInUser.name}`}</span>
                  <button
                    onClick={handleLogout}
                    className="bg-[#D72638] px-3 py-1 rounded text-sm"
                  >
                    {isArabic ? "تسجيل الخروج" : "Logout"}
                  </button>
                </div>
              ) : (
                <span
                  onClick={() => {
                    setShowAuth(true);
                    setIsOpen(false);
                  }}
                  className="font-medium text-[15px] cursor-pointer flex items-center gap-2"
                >
                  <FiUser className="text-lg" /> {isArabic ? "تسجيل الدخول" : "Sign in"}
                </span>
              )}
            </div>

            {/* Language Toggle */}
            <div className="w-full py-3">
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-2 font-medium outline-none text-[15px]"
              >
                {isArabic ? (
                  <>
                    <img src={arabic} alt="Arabic" className="w-5 h-4" />
                    عربي
                  </>
                ) : (
                  <>
                    <img src={english} alt="English" className="w-5 h-4" />
                    English
                  </>
                )}
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Auth Modal */}
      {showAuth && (
        <div className="fixed inset-0 flex justify-center items-center z-50">
          <div className="bg-[#050B20] rounded-lg shadow-lg w-[95%] max-w-3xl p-0 flex overflow-hidden relative">
            
            {/* Close button */}
            <button
              onClick={() => setShowAuth(false)}
              className="absolute top-3 right-3 text-white hover:text-black z-10"
            >
              <FiX size={22} />
            </button>

            {/* Form */}
            <div className="w-full md:w-full p-8 text-white">
              <h2 className="text-2xl font-bold mb-4 text-center">
                {isRegister ? (isArabic ? "إنشاء حساب" : "Create Account") : (isArabic ? "تسجيل الدخول" : "Sign In")}
              </h2>

              <form className="flex flex-col gap-4" onSubmit={handleAuth}>
                {isRegister && (
                  <input
                    type="text"
                    name="name"
                    placeholder={isArabic ? "الاسم الكامل" : "Full Name"}
                    value={formData.name}
                    onChange={handleChange}
                    className="border rounded p-2"
                    required
                  />
                )}
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="border rounded p-2"
                  required
                />
                <input
                  type="password"
                  name="password"
                  placeholder={isArabic ? "كلمة المرور" : "Password"}
                  value={formData.password}
                  onChange={handleChange}
                  className="border rounded p-2"
                  required
                />

                {error && <p className="text-red-600 text-sm">{error}</p>}

                <button className="bg-[#D72638] text-white font-medium text-[18px] py-2 rounded hover:bg-red-700 transition">
                  {isRegister ? (isArabic ? "تسجيل" : "Register") : (isArabic ? "دخول" : "Login")}
                </button>
              </form>

              {!isRegister && (
                <p className="text-sm text-white mt-3 cursor-pointer hover:underline">
                  {isArabic ? "نسيت كلمة المرور؟" : "Forgot password?"}
                </p>
              )}

              <p className="text-sm text-white mt-4 text-center">
                {isRegister
                  ? isArabic ? "لديك حساب بالفعل؟" : "Already have an account?"
                  : isArabic ? "ليس لديك حساب؟" : "Don't have an account?"}{" "}
                <span
                  onClick={() => setIsRegister(!isRegister)}
                  className="text-[#D72638] cursor-pointer hover:underline"
                >
                  {isRegister
                    ? isArabic ? "تسجيل الدخول" : "Sign in"
                    : isArabic ? "إنشاء حساب" : "Register"}
                </span>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
