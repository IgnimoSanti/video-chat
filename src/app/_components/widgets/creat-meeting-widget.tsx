'use client';

import React from 'react'
import {
  Dialog,
  DialogContent,
  
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, SubmitHandler, SubmitErrorHandler } from 'react-hook-form';
import { CreateMeetingFields, CreateMeetingValidationSchema } from '@/types/forms';



export default function CreateMeetingWidget() {
  const {register, handleSubmit, formState:{errors}} = useForm<CreateMeetingFields>({
		mode: 'onBlur',
		defaultValues: {
			name: ''
		},
		resolver:zodResolver(CreateMeetingValidationSchema)	
	})


	const onSubmit:SubmitHandler<CreateMeetingFields> = async (data) => { 
		console.log(data.name);
		
	}
	
  return (
    <Dialog>
    <DialogTrigger asChild>
      <Button className='w-full'>Create new meeting</Button>
      </DialogTrigger>
    <DialogContent className='sm:max-w-[425px]'>
      <DialogHeader>
        <DialogTitle>Create new meeting</DialogTitle>
      </DialogHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Label htmlFor="name">Name</Label>
        <Input 
        {...register('name')}
        type="text" 
        id="name" 
        placeholder="English lesson" 
        className='mt-2 h-10'
        maxLength={110}
        />
        <span className='ml-5 text-xs text-red-500'>{errors.name?.message}</span>
        <Button type='submit' className='mt-2 w-full' size={'sm'}>Create new meeting</Button>
      </form>
    </DialogContent>
  </Dialog>
  )
}
