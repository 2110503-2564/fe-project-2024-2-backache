import Link from "next/link"

export default function LoginPage() {
    return (
        <main className="flex flex-col h-screen justify-center items-center bg-red-600 px-80">
            <div className="w-full bg-white text-gray-800 py-10 px-20 rounded-3xl shadow-2xl relative">
                <div className="text-3xl font-bold text-center mt-6 mb-8">
                    Login to your account
                </div>
                <div className="flex justify-center items-center block mb-6">
                    <input type="email" id="email" placeholder="Email"
                        className="w-4/5 h-10 rounded-xl ring-1 ring-inset ring-gray-400 px-2 py-1 bg-slate-100 text-lg leading-4 indent-3 placeholder:text-gray-800"/>
                </div>
                <div className="flex justify-center items-center block mb-2">
                    <input type="password" id="password" placeholder="Password"
                        className="w-4/5 h-10 rounded-xl ring-1 ring-inset ring-gray-400 px-2 py-1 bg-slate-100 text-lg leading-4 indent-3 placeholder:text-gray-800"/>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <div className="relative">
                        <button className='block bg-red-600 border border-white text-white text-xl font-semibold w-[150px] py-2 px-4 m-5 rounded-xl shadow-sm hover:bg-white hover:text-red-600 hover:border hover:border-red-600'>
                            Login
                        </button>
                    </div>
                </div>

                <div className="text-center mb-4 relative">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-400"></div>
                    </div>
                    <div className="relative flex justify-center">
                        <span className="bg-white px-4 text-gray-500">
                            Or
                        </span>
                    </div>
                </div>
                <div className="text-center text-slate-500 mb-2">
                    Need an account?
                </div>
                <div className="text-3xl font-bold text-center mb-2">
                    Craete an account
                </div>
                <div className="flex flex-col justify-center items-center mb-2">
                    <div className="relative">
                        <Link href="/auth/register">
                            <button className='block bg-red-600 border border-white text-white text-xl font-semibold w-[150px] py-2 px-4 m-5 rounded-xl shadow-sm hover:bg-white hover:text-red-600 hover:border hover:border-red-600'>
                                Sign up
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    )
}