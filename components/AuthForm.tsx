"use client"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { authFormSchema } from "@/lib/utils"
import { z } from "zod"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "./ui/button"
import { Divide, Loader2 } from "lucide-react"
import CustomInput from "./CustomInput"
const AuthForm = ({ type }: {type: string}) => {
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const schema = authFormSchema(type)
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      password: '',
      firstName: '',
      lastName: '',
      addressOne: '',
      state: '',
      postalCode: '',
      dateOfBirth: '',
      ssn: "",
      city: '',
    },
  })
  function onSubmit(values: z.infer<typeof authFormSchema>){
    setIsLoading(true);
    console.log(values);
    setIsLoading(false);
  }

  return (
    <section className='auth-form min-h-screen '>
      <header className='flex flex-col gap-5 md:gap-8'>
        <Link href="/"
            className="cursor-pointer items-center flex gap-1">
                <Image
                    src="/icons/logo.svg"
                    width={34}
                    height={34}
                    alt="horizon Logo"
                />
                <h1 className="text-[26px] font-ibm-plex-serif font-bold text-black-1">Horizon</h1>                
            </Link>
            <div className="flex flex-col gap-1 md:gap-3">
              <div className="text-[24px] lg:text-[36px] font-semibold text-gray-900">
                {
                  user ? 'Link Account' :
                  type === 'sign-in' ?
                  'Sign In' : "Sign Up"}
                  <p className="text-[16px] font-normal text-gray-600">
                    {user ? 
                    'Link your account to get started' : 'Please Enter your details'}
                 </p>
              </div>
            </div>
      </header>
      {
        user ? ( 
          <div className="flex flex-col gap-4">
            {}
          </div>
        ) : (
          <>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                {type === 'sign-up' &&
                <>
                  <div className="flex gap-2">
                    <CustomInput
                    control={form.control}
                    name='firstName'
                    placeholder="Enter your firstname"
                    label="First Name"
                  /><CustomInput
                    control={form.control}
                    name='lastName'
                    placeholder="Enter your lastname"
                    label="Last Name"
                  />
                  </div>
                    <div className="space-y-6">
                    <CustomInput
                    control={form.control}
                    name='addressOne'
                    placeholder="Enter your specific address"
                    label="Address"
                  /><CustomInput
                    control={form.control}
                    name='city'
                    placeholder="Enter your City"
                    label="City"
                  />
                    </div>
                    <div className="flex gap-2">
                      <CustomInput
                    control={form.control}
                    name='state'
                    placeholder="ex. NY"
                    label="State"
                  /><CustomInput
                    control={form.control}
                    name='postalCode'
                    placeholder="ex: 2000"
                    label="Postal Code"
                  />
                    </div>
                    <div className="flex gap-2">
                   <CustomInput
                    control={form.control}
                    name='dateOfBirth'
                    placeholder="YYYY-MM-DD"
                    label="Date of Birth"
                  /><CustomInput
                    control={form.control}
                    name='ssn'
                    placeholder="ex: 1234"
                    label="SSN"
                  />
                    </div>
                </>}
                  <CustomInput
                    control={form.control}
                    name='email'
                    placeholder="Enter your email"
                    label="Email"
                  />
                  <CustomInput
                    control={form.control}
                    name="password"
                    placeholder="Enter your password"
                    label="Password"
                  />
                <Button className="bg-p1 w-full" disabled={isLoading} type="submit">
                  {isLoading ? (
                    <>
                      <Loader2 size={20}
                      className="animate-spin" />
                      &nbsp;Loading..
                    </>
                  ) : type === 'sign-in' ? 'Sign-in' : 'Sign-up'}
                  </Button>
              </form>
            </Form>
            <footer className="flex justify-center gap-1">
              <p className="text-[14px] font-normal text-gray-600">
                {
                  type === 'sign-in' ?
                  "Don't have an account?" :
                  "Already have an account?"
                }
              </p>
              <Link className="text-p1 font-semibold" href={type === 'sign-in' ? '/sign-up' : '/sign-in'}>
                {type === 'sign-in' ? 'Sign up' : 'Sign in'}
              </Link>
            </footer>
          </>
        )
      }
    </section>
  )
}

export default AuthForm