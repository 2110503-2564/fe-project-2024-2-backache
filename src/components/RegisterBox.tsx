export default function RegisterBox() {
    return (
            <div className="w-full bg-white text-gray-800 py-10 px-20 rounded-3xl shadow-2xl relative">
                <div className="text-3xl font-bold text-center mt-6 mb-12">
                    Create an account
                </div>
                <div className="flex justify-center items-center block mb-6">
                    <input type="email" id="email" placeholder="Email"
                        className="w-4/5 h-10 rounded-xl ring-1 ring-inset ring-gray-400 px-2 py-1 bg-slate-100 text-lg leading-4 indent-3 placeholder:text-gray-800"/>
                </div>
                <div className="flex justify-center items-center block mb-6">
                    <input type="password" id="password" placeholder="Password"
                        className="w-4/5 h-10 rounded-xl ring-1 ring-inset ring-gray-400 px-2 py-1 bg-slate-100 text-lg leading-4 indent-3 placeholder:text-gray-800"/>
                </div>
                <div className="flex justify-center items-center block mb-6">
                    <input type="name" id="name" placeholder="Name"
                        className="w-4/5 h-10 rounded-xl ring-1 ring-inset ring-gray-400 px-2 py-1 bg-slate-100 text-lg leading-4 indent-3 placeholder:text-gray-800"/>
                </div>
                <div className="flex justify-center items-center block mb-6">
                    <input type="tel" id="tel" placeholder="Tel"
                        className="w-4/5 h-10 rounded-xl ring-1 ring-inset ring-gray-400 px-2 py-1 bg-slate-100 text-lg leading-4 indent-3 placeholder:text-gray-800"/>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <div className="relative">
                        <button className='block bg-myred border border-white text-white text-xl font-semibold w-[150px] py-2 px-4 m-5 rounded-xl shadow-sm hover:bg-white hover:text-red-600 hover:border hover:border-red-600'>
                            Sign up
                        </button>
                    </div>
                    <div className="text-center text-slate-500 mb-6">
                        Already have an account?
                        <a href="/auth/login" className="text-slate-800 hover:underline ml-2">
                            Log in
                        </a>
                    </div>
                </div>
            </div>
    )
}