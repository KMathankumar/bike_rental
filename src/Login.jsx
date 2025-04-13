import React from 'react';

function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-gray-300 p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-3xl font-bold text-center mb-6">Login</h2>
        <form>
          <div className="mb-4">
            <label className="block text-lg font-semibold mb-2" htmlFor="mobile">
              Mobile number
            </label>
            <input
              className="w-full px-4 py-2 border border-orange-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              id="mobile"
              placeholder="Enter Your mobile no"
              type="text"
            />
          </div>
          <div className="mb-4">
            <label className="block text-lg font-semibold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="w-full px-4 py-2 border border-orange-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              id="password"
              placeholder="Enter Your Password"
              type="password"
            />
          </div>
          <div className="flex items-center justify-between mb-6">
            <button className="bg-orange-500 text-black font-bold py-2 px-4 rounded-2xl hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500">
              Login
            </button>
            <a className="text-sm text-gray-700 hover:underline" href="#">
              Forgot Password?
            </a>
          </div>
          <div className="text-center mb-4">
            <span className="text-lg font-semibold">(OR)</span>
          </div>
          <button className="w-full flex items-center justify-center bg-white border border-orange-500 text-gray-700 font-semibold py-2 px-4 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500">
            <img alt="Google logo" className="mr-2" src="https://placehold.co/20x20" />
            Continue with Google
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;