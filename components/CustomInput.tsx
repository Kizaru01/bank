import React from 'react'
import { FormField, FormLabel, FormControl, FormMessage } from './ui/form'
import { Input } from './ui/input'
import { CustomInputProps } from '@/Types/auth'
import { authFormSchema } from '@/lib/utils'



const CustomInput = ({ control, placeholder, name, label} : CustomInputProps) => {
  return (

      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <div className="form-item">
            <FormLabel className="form-label">
              {label}
            </FormLabel>
            <div className="flex w-full flex-col ">
              <FormControl>
                <Input 
                  placeholder={placeholder}
                  className="input-class"
                  type={name === 'password' ? 'password' : 'text'}
                  {...field}
                  />
              </FormControl>
              <FormMessage className="text-[12px]  text-red-500 "/>
              
            </div>
          </div>
        )}
      />
  )
}

export default CustomInput