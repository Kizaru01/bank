import { Control, FieldPath } from "react-hook-form";
import { z } from "zod";
import { authFormSchema } from "@/lib/utils";

const Schema = authFormSchema('sign-up')

export interface CustomInputProps{
    control: Control<z.infer<typeof Schema>>;
    name: FieldPath<z.infer<typeof Schema>>;
    label: string;
    placeholder: string
}


