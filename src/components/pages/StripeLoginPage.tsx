import React from 'react';
const StripeLoginPage: FC<unknown> = () => (
    <>
        <div className="area">
            <ul className="circles">
                <li />
                <li />
                <li />
                <li />
                <li />
                <li />
                <li />
                <li />
                <li />
                <li />
            </ul>
        </div>
        <div className="context">
            <div className="flex flex-row justify-center pt-2 sm:pt-14 text-sm mb-12">
                <div className="flex flex-col justify-center gap-6 w-full mx-4 sm:w-2/4 2xl:w-1/4 sm:mx-auto">
                    <img
                        src="https://europeansting.files.wordpress.com/2016/02/stripe-logo.png"
                        className="w-16"
                        alt
                    />
                    <section className="px-4 sm:px-14 pt-4 sm:pt-14 pb-20 shadow-xl border-2 border-gray-100 bg-white">
                        <div className="flex flex-col gap-8">
                            <h3 className="text-lg sm:text-2xl font-bold">Sign in to your account</h3>
                            <div>
                                <label htmlFor=" email" className="block">
                                    Email
                  </label>
                                <input
                                    type="text"
                                    id="email"
                                    className="mt-2 form-input border-2 border-gray-100 rounded-md w-full"
                                />
                            </div>
                            <div>
                                <div className="flex flex-row">
                                    <label htmlFor="password" className="flex-1">
                                        Password
                    </label>
                                    <a href="#" className="text-stripepurple">
                                        Forgot your password
                    </a>
                                </div>
                                <input
                                    type="password"
                                    id="password"
                                    className="mt-2 w-full form-input border-2 border-gray-100 rounded-md"
                                />
                            </div>
                            <div className="flex flex-row items-center gap-2">
                                <input
                                    id="staysignedin"
                                    type="checkbox"
                                    className="form-checkbox rounded-sm"
                                />{" "}
                                <label htmlFor="staysignedin">Stay signed in for a week</label>
                            </div>
                            <button className="w-full py-3 rounded-md bg-stripepurple text-white">
                                Continue
                </button>
                            <a href="#" className="text-center block text-stripepurple">
                                Use single sign-on (SSO) instead
                </a>
                        </div>
                    </section>
                    <span>
                        Don't have an account?{" "}
                        <a href="#" className="text-stripepurple">
                            Signup
              </a>
                    </span>
                </div>
            </div>
        </div>
    </>
)
export default StripeLoginPage;