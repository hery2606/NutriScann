import React, { useState } from "react";

const Login = () => {
  const [activeTab, setActiveTab] = useState("login");

  return (
    <div className="min-h-screen bg-green-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-md p-8">
        <h2 className="text-3xl font-bold text-center text-green-600 mb-6">
          {activeTab === "login" ? "Login" : "Sign Up"}
        </h2>

        {/* Form */}
        <form>
          {activeTab === "signup" && (
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Nama Lengkap</label>
              <input
                type="text"
                placeholder="Masukkan Nama Lengkap"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>
          )}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">
              {activeTab === "login" ? "Email atau Username" : "Email"}
            </label>
            <input
              type="text"
              placeholder={
                activeTab === "login" ? "Masukkan Email atau Username" : "Masukkan Email"
              }
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Password</label>
            <input
              type="password"
              placeholder="Masukkan Password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
          >
            {activeTab === "login" ? "Login" : "Sign Up"}
          </button>
        </form>

        {/* Additional Links */}
        <p className="text-center text-gray-600 mt-4">
          {activeTab === "login" ? (
            <>
              Belum punya akun? {" "}
              <button
                onClick={() => setActiveTab("signup")}
                className="text-green-600 hover:underline"
              >
                Sign Up
              </button>
            </>
          ) : (
            <>
              Sudah punya akun? {" "}
              <button
                onClick={() => setActiveTab("login")}
                className="text-green-600 hover:underline"
              >
                Login
              </button>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default Login;
