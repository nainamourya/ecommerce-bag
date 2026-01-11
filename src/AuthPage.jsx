export default function AuthPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-5xl flex gap-24">
        {/* Register */}
        <div className="w-1/2">
          <h2 className="text-2xl font-semibold">
            Welcome to <span className="text-sky-500">Scratch</span>
          </h2>
          <p className="text-gray-500 mt-1">Create your account</p>

          <form className="mt-6 space-y-4">
            <input
              className="w-full border rounded-lg px-4 py-3"
              placeholder="Full Name"
            />
            <input
              className="w-full border rounded-lg px-4 py-3"
              placeholder="Email"
            />
            <input
              className="w-full border rounded-lg px-4 py-3"
              placeholder="Password"
              type="password"
            />

            <button className="mt-2 px-6 py-3 rounded-full bg-sky-500 text-white">
              Create My Account
            </button>
          </form>
        </div>

        {/* Login */}
        <div className="w-1/2">
          <h2 className="text-2xl font-semibold">Login Your Account</h2>

          <form className="mt-10 space-y-4">
            <input
              className="w-full border rounded-lg px-4 py-3"
              placeholder="Email"
            />
            <input
              className="w-full border rounded-lg px-4 py-3"
              placeholder="Password"
              type="password"
            />

            <button className="mt-2 px-6 py-3 rounded-full bg-sky-500 text-white">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
