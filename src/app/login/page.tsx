import Logo from "@/components/ui/logo";
import React from "react";
import Image from "@/components/ui/image";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
const LoginPage: React.FC = () => {
  return (
    <div className="flex  h-screen flex-col">
      <div className=" flex min-h-full w-screen  ">
        <div className=" z-10 flex flex-1 flex-col bg-white px-4 py-10 sm:justify-center md:flex-none md:px-28 min-w-[50vw]">
          <main className="mx-auto w-full max-w-md sm:px-4 md:w-96 md:max-w-sm md:px-0">
            <div className="flex">
              <Logo className="sm:max-w-40" textCn="text-2xl" />
            </div>
            <h2 className="mt-20 text-3xl font-semibold text-gray-900">
              Sign in to your account
            </h2>
            <p className="mt-2 text-sm text-gray-700">
              Don’t have an account?{" "}
              <Link
                className="font-medium text-blue-600 hover:underline"
                href="/register"
              >
                Sign up
              </Link>{" "}
              for a free trial.
            </p>
            <form action="#" className="mt-10 grid grid-cols-1 gap-y-8">
              <div>
                <label
                  htmlFor=":S1:"
                  className="mb-3 block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <Input
                  id=":S1:"
                  autoComplete="email"
                  required
                  className="block w-full appearance-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-blue-500 sm:text-sm"
                  type="email"
                  name="email"
                />
              </div>
              <div>
                <label
                  htmlFor=":S2:"
                  className="mb-3 block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <Input
                  id=":S2:"
                  autoComplete="current-password"
                  required
                  className="block w-full appearance-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-blue-500 sm:text-sm"
                  type="password"
                  name="password"
                />
              </div>
                <Button
                  className="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-blue-600 text-white hover:text-slate-100 hover:bg-blue-500 active:bg-blue-800 active:text-blue-100 focus-visible:outline-blue-600 w-full"
                  type="submit"
                  color="blue"
                >
                  <span>
                    Sign in <span aria-hidden="true">→</span>
                  </span>
                </Button>
            </form>
          </main>
        </div>
        <div className="hidden sm:flex w-full  bg-gray-400">
          <Image className="object-contain w-full max-w-xl m-auto" src="/images/image-7.png" />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
