<script>
    import { Button } from "$lib/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "$lib/components/ui/card";
import { Input } from "$lib/components/ui/input";
import { Label } from "$lib/components/ui/label";
import { Lock, Mail, User, CreditCard, Calendar } from "lucide-svelte";
</script>

<div class="min-h-screen flex items-center justify-center bg-slate-50 px-4">
    <Card class="w-full max-w-md glass-card fade-up">
      <CardHeader class="space-y-1">
        <CardTitle class="text-2xl font-bold">Create an account</CardTitle>
        <CardDescription>Enter your information to create your account</CardDescription>
      </CardHeader>
      <CardContent class="space-y-4">
        <div class="space-y-2">
          <Label >Full Name</Label>
          <div class="relative">
            <User class="absolute left-3 top-2.5 h-5 w-5 text-slate-400" />
            <Input id="fullName" type="text" placeholder="John Doe" class="pl-10" />
          </div>
        </div>

        <div class="space-y-2">
          <Label >Username</Label>
          <div class="relative">
            <Mail class="absolute left-3 top-2.5 h-5 w-5 text-slate-400" />
            <Input id="username" type="text" placeholder="johndoe123" class="pl-10" />
          </div>
        </div>

        <div class="space-y-2">
          <Label >ID Card Number</Label>
          <div class="relative">
            <CreditCard class="absolute left-3 top-2.5 h-5 w-5 text-slate-400" />
            <Input id="idCard" type="text" placeholder="31760170" class="pl-10" />
          </div>
        </div>

        <div class="space-y-2">
          <Label >Date of Birth</Label>
          <div class="relative">
            <Calendar class="absolute left-3 top-2.5 h-5 w-5 text-slate-400" />
            <Input id="dateOfBirth" type="date" class="pl-10" />
          </div>
        </div>

        <div class="space-y-2">
          <Label >Password</Label>
          <div class="relative">
            <Lock class="absolute left-3 top-2.5 h-5 w-5 text-slate-400" />
            <Input id="password" type="password" class="pl-10" />
          </div>
        </div>

        <Button class="w-full">Create account</Button>
        <div class="text-center text-sm">
          <span class="text-slate-600">Already have an account? </span>
          <a href="/login" class="text-blue-600 hover:underline">
            Sign in
          </a>
        </div>
      </CardContent>
    </Card>
  </div>