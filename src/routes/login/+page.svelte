<script lang="ts">
	import axios from 'axios';
	import { Button } from '$lib/components/ui/button';
	import {
		Card,
		CardContent,
		CardDescription,
		CardHeader,
		CardTitle
	} from '$lib/components/ui/card';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { Lock, User } from 'lucide-svelte';
	import { Toaster, toast } from 'svelte-sonner';
	import { goto } from '$app/navigation';

	let username = '';
	let password = '';

	async function login() {
		if (username.length === 0 || password.length === 0) {
			toast.error('Please fill in all fields');
		} else {
			try {
				toast.loading('Loading...');
				const login = await axios.post('http://localhost:8000/users/login', {
					username: username,
					password: password
				});
				if (login.data.message === 'User found') {
					document.cookie = `userId=${login.data.data.id};path=/`;
					document.cookie = `fullName=${login.data.data.full_name};path=/`;
					console.log(document.cookie);
					toast.success(`Welcome back! ${login.data.data.full_name}`);
					setTimeout(() => {
						goto('/dashboard');
					}, 1000);
				}
			} catch (error: any) {
				console.log(error.response);
				toast.error(
					error.response.data.message == 'User not found'
						? 'Incorrect username or password'
						: 'An error occurred'
				);
			}
		}
	}
</script>

<Toaster richColors />
<div class="flex min-h-screen items-center justify-center bg-slate-50 px-4">
	<Card class="glass-card fade-up w-full max-w-md">
		<CardHeader class="space-y-1">
			<CardTitle class="text-2xl font-bold">Welcome back</CardTitle>
			<CardDescription>Enter your username to sign in to your account</CardDescription>
		</CardHeader>
		<CardContent class="space-y-4">
			<div class="space-y-2">
				<Label>Username</Label>
				<div class="relative">
					<User class="absolute left-3 top-2.5 h-5 w-5 text-slate-400" />
					<Input
						bind:value={username}
						id="username"
						type="text"
						placeholder="username"
						class="pl-10"
					/>
				</div>
			</div>
			<div class="space-y-2">
				<Label>Password</Label>
				<div class="relative">
					<Lock class="absolute left-3 top-2.5 h-5 w-5 text-slate-400" />
					<Input
						bind:value={password}
						placeholder="Password"
						id="password"
						type="password"
						class="pl-10"
					/>
				</div>
			</div>
			<Button
				class="w-full"
				on:click={async () => {
					await login();
				}}>Sign in</Button
			>
			<div class="text-center text-sm">
				<span class="text-slate-600">Don't have an account? </span>
				<a href="/newAccount" class="text-blue-600 hover:underline"> Create one </a>
			</div>
		</CardContent>
	</Card>
</div>
