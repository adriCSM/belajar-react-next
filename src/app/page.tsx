'use client';
import Button from '@/components/Elements/Button';
import Input from '@/components/Elements/Input';
import { FaLock, FaUser } from 'react-icons/fa6';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
export default function Home() {
  const router = useRouter();
  const login = () => {
    router.push('/admin');
  };
  return (
    <main className="flex items-center justify-center bg-white">
      <section className="w-2/5  flex justify-center flex-col items-center">
        <div className=" flex items-center justify-center my-5 bg-white ">
          <Image src="/logo/icon-512x512.png" alt="" className="me-5" width={64} height={64} />
          <p className="text-3xl md:text-5xl font-bold text-lime-500">mLite</p>
        </div>
        <div className="md:h-2/3 w-3/4 p-5 ">
          <div className="relative   ">
            <FaUser className="absolute left-3 top-3 text-slate-400 pointer-events-none group-focus-within:text-blue-500" />
            <Input
              id="username"
              placeholder="Username"
              type="text"
              inputStyle="pl-10  py-3 outline-0 focus:border-x-4 focus:border-lime-300 placeholder:text-gray-500 mb-5 text-black "
            />
          </div>
          <div className="relative ">
            <FaLock className="absolute left-3 top-3 text-slate-400  pointer-events-none group-focus-within:text-blue-500" />
            <Input
              id="password"
              placeholder="Password"
              type="password"
              inputStyle="pl-10  py-3 outline-0 placeholder:text-gray-500 text-black "
            />
          </div>
          <Button
            styleButton="my-5 py-2 bg-green-700 w-full text-white font-bold "
            handleClick={login}
            text="Login"
            disable={false}
          />
        </div>
      </section>
      <section className=" bg-home  h-screen bg-cover w-3/5 rounded-l-lg"></section>
    </main>
  );
}
