"use client"; 

import React from 'react'
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button"
import { JoinMeetingFields, JoinMeetingValidationSchema } from '@/types/forms';
import { useForm, SubmitHandler, SubmitErrorHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import toast from 'react-hot-toast';

export default function JoinMeetingWidget() {
	const {register, handleSubmit, watch} = useForm<JoinMeetingFields>({
		mode: 'onBlur',
		defaultValues: {
			code: ''
		},
		resolver:zodResolver(JoinMeetingValidationSchema)	
	})
	const watchCode = watch('code')

	const onSubmit:SubmitHandler<JoinMeetingFields> = async (data) => { 
		console.log(data.code);
		
	}
	const onError:SubmitErrorHandler<JoinMeetingFields> = (data) => {
		toast.error(data.code?.message || '');
	}
  return (
	<>
	 <form onSubmit={handleSubmit(onSubmit,onError)} className='grid px-2 gap-3 sm:grid-cols-[3fr,1fr]'>
		<Input 
		{...register('code')}
		placeholder='Enter code'
		className='h-14 sm:rounded-2xl'
		maxLength={18}
		/>
		<Button type='submit' className='sm:rounded-2xl'>Join</Button>
	 </form>
	 <div className="ml-2 mt-1">{watchCode.length}/18</div>
	 </>
  )
}
