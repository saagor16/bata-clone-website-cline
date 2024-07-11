import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center bg-gray-100">
            {/* Left Section */}
            <div className="lg:w-2/5 w-full p-8  rounded-lg m-4">
                <h2 className="text-3xl font-bold mb-4 text-red-600">SIGN IN TO YOUR ACCOUNT</h2>
                <p className="text-gray-700 mb-4">Welcome back! If you already have a BataClub membership, simply sign in and get free access to all the amazing offers awaiting you.</p>
                <p className="text-gray-700 mb-4">Get your hands on exclusive BataClub discounts, cashback offers, vouchers, and preferential prices. If you already registered at the store, kindly create an account on the website first.</p>
                <form className="space-y-6">
                    <div>
                        <label className="block text-gray-700 font-semibold">E-mail/Mobile No*</label>
                        <input type="text" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Enter your email or mobile number" />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-semibold">Password *</label>
                        <input type="password" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Enter your password" />
                        <p className="text-sm text-gray-500 mt-1">Mobile number should be entered without zero or country code. Ex. Enter </p>
                    </div>
                    <div className="flex items-center justify-between">
                        <a href="#" className="text-blue-600 hover:underline">Forgot Password?</a>
                    </div>
                    <button type="submit" className="w-full bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition">LOG IN</button>
                </form>
            </div>
            
            {/* Right Section */}
            <div className="lg:w-2/5 w-full p-8  rounded-lg m-4">
                <h2 className="text-3xl font-bold mb-4 text-red-600">DONT HAVE A BATA ACCOUNT?</h2>
                <ul className="text-gray-700 space-y-2 mb-6">
                    <li>✓ Receive 50 points on free signup</li>
                    <li>✓ Get up to 100 bonus points for profile update</li>
                    <li>✓ Birthday Treat</li>
                    <li>✓ Earn 1 Point with every BDT 100 purchase</li>
                    <li>✓ Bonus points after every even number purchase worth BDT 100+</li>
                </ul>
                <Link to='/create' className="block text-center bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition">CREATE A BATA ACCOUNT</Link>
            </div>
        </div>
    );
};

export default Login;
