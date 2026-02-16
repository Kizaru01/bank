'use server';

import { SignUpParams } from "@/Types/user.actions";
import { createAdminClient, createSessionClient } from "../appwrite";
import { ID } from "node-appwrite";
import { cookies } from "next/headers";
import { parseStringify } from "../utils";
interface signInProps {
  email: string;
  password: string;
}

export const signIn = async ({ email, password}: signInProps) => {
    try {
         const { account } = await createAdminClient();

         const response = await account.createEmailPasswordSession(email, password);

         return parseStringify(response)

    } catch (error) {
        console.log('error', error)
    }
}
export const signUp = async (userData: SignUpParams) => {
    const { email, password, firstName, lastName } = userData;

    try {
    const { account } = await createAdminClient();
        const newUserAccount = await account.create({
        userId:ID.unique(),
        email,
        password,
        name: `${firstName} ${lastName}`,
    });
        const session = await account.createEmailPasswordSession({
        email,
        password
    });

  const cookieStore = await cookies();
    cookieStore.set("appwrite-session", session.secret, {
    path: "/",
    httpOnly: true,
    sameSite: "strict",
    secure: true,
  });

  return parseStringify(newUserAccount);
    } catch (error) {
        console.log('error', error)
    } 
}

export async function getLoggedInUser(){
    try {
        const { account } = await createSessionClient()
        return await account.get()
        
    } catch (error) {
        return null;
    }
}