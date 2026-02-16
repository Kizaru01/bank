import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { z } from "zod"
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export function formatAmount(amount: number): string {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });

  return formatter.format(amount);
}
export const authFormSchema = (type: string) => z.object({
  email: z.email({ error: "Please enter a valid email"}),
  password: z.string().min(8,{ error: "Password must be 8 characters"}),
  firstName: type === 'sign-in' ? z.string().optional() : z.string().min(3, { error: 'required'}),
  lastName: type === 'sign-in' ? z.string().optional() : z.string().min(3,{ error: 'required'}),
  addressOne: type === 'sign-in' ? z.string().optional() : z.string().min(3,{ error: 'required'}),
  state: type === 'sign-in' ? z.string().optional() : z.string().min(2,{ error: 'required'}).max(2,{ message: 'max na yung 2 tanginaka!'}),
  postalCode: type === 'sign-in' ? z.string().optional() : z.string().min(4,{ error: 'required'}).max(10),
  dateOfBirth: type === 'sign-in' ? z.string().optional() : z.string().min(3,{ error: 'required'}),  
  city: type === 'sign-in' ? z.string().optional() : z.string().min(2,{ error: 'required'}),
  ssn: type === 'sign-in' ? z.string().optional() : z.string().min(3,{ error: 'required'}),
})
export const parseStringify = (value: unknown) => JSON.parse(JSON.stringify(value));

export const removeSpecialCharacters = (value: string) => {
  return value.replace(/[^\w\s]/gi, "");
};