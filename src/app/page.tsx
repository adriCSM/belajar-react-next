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
      <div className="h-auto w-5/6 md:w-[25vw] flex flex-col bg-white   rounded-xl flex items-center">
        <div className="h-20  rounded-t-xl  w-full   flex items-center justify-center">
          <div className="container   mx-5 -mt-[80px] p-5 flex items-center justify-center rounded-lg bg-lime-300 shadow-lg">
            <img src="../logo/icon-512x512.png" alt="" className="h-16 w-16 me-5" />
            <p className="text-3xl md:text-5xl font-bold">mLite</p>
          </div>
        </div>
        <div className="md:h-2/3 w-full p-5">
          <div className="relative   ">
            <FaUser className="absolute left-3 top-12 text-slate-400 pointer-events-none group-focus-within:text-blue-500" />
            <Input
              id="username"
              label="Username"
              placeholder="Username"
              type="text"
              inputStyle="pl-10"
            />
          </div>
          <div className="relative   ">
            <FaLock className="absolute left-3 top-12 text-slate-400 pointer-events-none group-focus-within:text-blue-500" />
            <Input
              id="password"
              label="Password"
              placeholder="Password"
              type="password"
              inputStyle="pl-10"
            />
          </div>
          <Button
            styleButton="my-5 w-full  bg-lime-300 shadow-md ring-lime-300"
            handleClick={login}
            text="Login"
            disable={false}
          />
        </div>
      </div>
    </main>
  );
}
