import AuthLayout from '@/components/layouts/AuthLayout'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'
import { FcGoogle } from 'react-icons/fc'

export default function RegisterPage() {
    return (
        <AuthLayout>
            <form action="" className='space-y-2'>
                <div className="flex flex-col items-center gap-2 text-center pb-5">
                    <h1 className="text-2xl font-bold">Register your account!</h1>
                    <p className="text-muted-foreground text-sm">
                        Complete your details below to enjoy our services!
                    </p>
                </div>
                <div className="grid gap-3">
                    <div className="grid gap-3">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" type="text" placeholder="jhon doe" required />
                    </div>
                    <div className="grid gap-3">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="m@example.com" required />
                    </div>
                    <div className="grid gap-3">
                        <Label htmlFor="password">Password</Label>
                        <Input id="password" type="password" required />
                    </div>
                    <Button type="submit" className="w-full">
                        Login
                    </Button>
                </div>
                <div className="text-center text-sm mt-1">
                    Already have an account?{" "}
                    <a href="/login" className="underline underline-offset-4">
                        Login
                    </a>
                </div>
            </form>
        </AuthLayout>
    )
}
