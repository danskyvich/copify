'use client'

import { useEffect } from "react";
import "./../../styles/global.css"
import { anonymous } from "./../utils/fonts"
import { Field, FieldLabel } from "@/components/ui/field";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";
import { Lock, Mail } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import Image from "next/image";
import Link from "next/link";

export default function Authentication() {

    useEffect(() => {
        document.title = 'Log in to Copify'
    }, [])

    
    return (
      <div className="flex mx-auto w-screen h-screen m-0 p-0 bg-[#5C3A15]">
        <section className="flex flex-col flex-2 h-full"></section>

        <section className="flex flex-col flex-1 w-full h-full bg-white px-[10dvw] py-[20dvh]">
          <article className="flex flex-1 flex-col gap-3">
            <h1 className={` ${anonymous.className} text-4xl text-center`}>
              Sign in to Mapify
            </h1>
            <h3 className="text-[1rem] font-light text-center">
              Enter your email and password
            </h3>
          </article>

          <Field className="mt-10">
            <FieldLabel
              htmlFor="email-field"
              className="text-[1rem] font-light"
            >
              Email
            </FieldLabel>
            <InputGroup className="rounded-xl bg-[#EDEDED] border-[#EDEDED] py-5">
              <InputGroupAddon>
                <Mail />
              </InputGroupAddon>
              <InputGroupInput
                id="email-field"
                name="email-field"
                placeholder="Enter your email address."
              />
            </InputGroup>

            <FieldLabel
              htmlFor="email-field"
              className="text-[1rem] font-light"
            >
              Password
            </FieldLabel>
            <InputGroup className="rounded-xl bg-[#EDEDED] border-[#EDEDED] py-5">
              <InputGroupAddon>
                <Lock />
              </InputGroupAddon>
              <InputGroupInput
                id="email-field"
                name="email-field"
                placeholder="Enter your password"
                className="font-[#989898]"
              />
            </InputGroup>

            <Field orientation={"horizontal"}>
              <Checkbox
                className="border-black"
                id="remember-me-checkbox"
                name="remember-me-checkbox"
              />
              <Label htmlFor="remember-me-checkbox" className="font-light">
                Remember me
              </Label>

              <div className="flex flex-1 w-auto h-fit" />

              <p className="hover:underline hover:cursor-pointer font-light text-black text-[0.9rem]">
                Forgot password?
              </p>
            </Field>

            <Field className="mt-6">
              <Link href='/'>
                <Button
                variant='default'
                className='font-light py- w-full hover:cursor-pointer'
                >
                  Sign in
                </Button>
              </Link>
              <Link 
                href='/create-account'
                >
                <Button
                  variant='outline'
                  className='border-black text-black hover:cursor-pointer py-5 w-full'
                >Create an account</Button>
              </Link>
            </Field>

            <p className="text-center font-light">or</p>

            <Field>
              <ButtonGroup>
                <Button
                  variant="ghost"
                  className="w-full font-normal bg-[#F0F0F0] py-6 text-stone-500 hover:text-stone-500 hover:bg-stone-200 hover:cursor-pointer"
                >
                  <Image
                    src="/google-logo.png"
                    width={20}
                    height={5}
                    alt="google-logo"
                  />
                  <p>Sign in with Google</p>
                </Button>
              </ButtonGroup>
              <ButtonGroup>
                <Button
                  asChild
                  variant="ghost"
                  className="w-full font-normal bg-[#F0F0F0] py-6 text-stone-500 hover:text-stone-500 hover:bg-stone-200 hover:cursor-pointer"
                >
                  <Link
                    href='/'
                  >
                    <Image
                      src="/facebook.png"
                      width={20}
                      height={5}
                      alt="fb-logo"
                    />
                    <p>Sign in with Facebook</p>
                  </Link>
                </Button>
              </ButtonGroup>
            </Field>
          </Field>
        </section>
      </div>
    );
}