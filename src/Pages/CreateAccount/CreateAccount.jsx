
const CreateAccount = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 mt-16">
            <div className="w-full max-w-lg p-8 space-y-6  rounded-md">
                <h2 className="text-center text-2xl font-bold">REGISTRATION</h2>
                <p className="text-center text-sm text-gray-600">
                    Do you like Bata? You will love Bata Club! Register now! Only for members, there are discount coupons, exclusive previews and many other advantages.
                </p>
                <form className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-mail *</label>
                        <input type="email" id="email" name="email" required className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    </div>
                    <div>
                        <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">Mobile No. *</label>
                        <div className="flex">
                            <span className="inline-flex items-center px-3 text-sm text-gray-500 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md">+880</span>
                            <input type="tel" id="mobile" name="mobile" required className="flex-1 block w-full p-2 border border-gray-300 rounded-none rounded-r-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                            <button type="button" className="ml-2 px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Send OTP</button>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="otp" className="block text-sm font-medium text-gray-700">OTP *</label>
                        <input type="text" id="otp" name="otp" required className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password *</label>
                        <input type="password" id="password" name="password" required className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                        <p className="mt-1 text-xs text-gray-500">The password should be at least 9 characters long and must contain at least one upper case letter, one lower case letter, a number and a special character (!,@,#,$,%,^,&,*).</p>
                    </div>
                    <div>
                        <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">Confirm Password *</label>
                        <input type="password" id="confirm-password" name="confirm-password" required className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    </div>
                    <div>
                        <span className="block text-sm font-medium text-gray-700">Title *</span>
                        <div className="flex items-center space-x-4">
                            <label className="inline-flex items-center">
                                <input type="radio" name="title" value="Mr" required className="form-radio text-indigo-600" />
                                <span className="ml-2">Mr</span>
                            </label>
                            <label className="inline-flex items-center">
                                <input type="radio" name="title" value="Ms" required className="form-radio text-indigo-600" />
                                <span className="ml-2">Ms</span>
                            </label>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">First Name *</label>
                        <input type="text" id="first-name" name="first-name" required className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    </div>
                    <div>
                        <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">Last Name *</label>
                        <input type="text" id="last-name" name="last-name" required className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    </div>
                    <div>
                        <label htmlFor="referral-code" className="block text-sm font-medium text-gray-700">Referral Code</label>
                        <input type="text" id="referral-code" name="referral-code" className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    </div>
                    <div className="flex items-center">
                        <input type="checkbox" id="terms" name="terms" required className="form-checkbox text-indigo-600" />
                        <label htmlFor="terms" className="ml-2 text-sm text-gray-700">
                            I accept the <a href="#" className="text-indigo-600 underline">Privacy Policy</a> &amp; <a href="#" className="text-indigo-600 underline">Terms and Conditions</a>
                        </label>
                    </div>
                    <div>
                        <button type="submit" className="w-full px-4 py-2 text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">CREATE AN ACCOUNT</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateAccount;
