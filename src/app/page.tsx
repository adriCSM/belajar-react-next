'use client';
import Button from '@/components/Elements/Button';
import Input from '@/components/Elements/Input';
import { FaLock, FaUser } from 'react-icons/fa6';

import { useRouter } from 'next/navigation';
export default function Home() {
  const router = useRouter();
  const login = () => {
    router.push('/admin');
  };
  return (
    <main className="flex h-screen items-center  bg-home bg-cover justify-center bg-white">
      <div className="h-auto w-5/6 md:w-[25vw] flex flex-col bg-lime-100 ring-4 ring-white shadow-lg   rounded-2xl flex items-center">
        <div className="h-20  rounded-t-xl  w-full   flex items-center justify-center">
          <div className="container   mx-5 -mt-[80px] p-5 flex items-center justify-center rounded-2xl bg-white shadow-lg">
            <img src="../logo/icon-512x512.png" alt="" className="h-16 w-16 me-5" />
            <p className="text-3xl md:text-5xl font-bold">mLite</p>
          </div>
        </div>
        <div className="md:h-2/3 w-full p-5">
          <div className="relative   ">
            <FaUser className="absolute left-3 top-3 text-slate-400 pointer-events-none group-focus-within:text-blue-500" />
            <Input
              id="username"
              placeholder="Username"
              type="text"
              inputStyle="pl-10  py-3  shadow-2xl focus:border-x-4 focus:border-lime-300 outline-none placeholder:text-gray-500 mb-5 text-black "
            />
          </div>
          <div className="relative   ">
            <FaLock className="absolute left-3 top-3 text-slate-400 pointer-events-none group-focus-within:text-blue-500" />
            <Input
              id="password"
              placeholder="Password"
              type="password"
              inputStyle="pl-10  py-3 shadow-2xl focus:border-x-4 focus:border-lime-300 outline-none placeholder:text-gray-500 text-black "
            />
          </div>
          <Button
            styleButton="my-5 py-2 bg-gray-100 w-full before:h-full before:left-0 before:rounded-full  before:w-0 before:bg-gradient-to-r 
            before:from-lime-400 before:to-green-400 before:content-[''] active:scale-105 transition
            before:bg-lime-200 before:-z-10 hover:before:w-full before:top-0  before:absolute shadow-md ring-lime-300 shadow-xl  transform    before:transition-width before:duration-700 before:ease-in-out hover:text-white font-bold text-lime-700"
            handleClick={login}
            text="Login"
            disable={false}
          />
        </div>
      </div>
    </main>
  );
}
