<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import getCookie from '$lib/getCookie';
	import DashBoardNav from '../../components/DashBoardNav.svelte';
	import Loader from '../../components/Loader.svelte';
	import { Card, CardContent, CardHeader, CardTitle } from '$lib/components/ui/card';
	import { Toaster, toast } from 'svelte-sonner';

	import axios from 'axios';
	let name: string | undefined = '';
	let loaded = false;
	let balance: number | undefined;
	let transactions:any=[];
	onMount(async () => {
		const userId = getCookie('userId', document);

		if (!userId || userId.length === 0) {
			goto('/');
		} else {
			try {
				const fullName = getCookie('fullName', document);
				name = fullName;
				const getBalance = (await axios(`http://localhost:8000/users/account/${userId}/balance`))
					.data.data.balance;
				const getTransanctions = await axios(
					`http://localhost:8000/users/account/${userId}/transactions`
				);
				for (let index = 0; index < getTransanctions.data.data.length; index++) {
					const transaction = getTransanctions.data.data[index];
					if (index < 3) {
						transactions.push(transaction);
					}
				}
                console.log(transactions)
				balance = getBalance;

				loaded = true;
			} catch (error) {
				toast.error('An error has occurred while performing the requests');
			}
		}
	});
</script>

<Toaster richColors />

{#if !loaded}
	<Loader />
{:else}
	<div class="min-h-screen bg-slate-50">
		<DashBoardNav {name} />
		<main class="container mx-auto px-4 py-8">
			<h1 class="mb-6 text-3xl font-bold">Welcome back, {name}</h1>

			<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
				<Card>
					<CardHeader>
						<CardTitle class="text-lg">Current Balance</CardTitle>
					</CardHeader>
					<CardContent>
						<p class="text-3xl font-bold">${balance?.toLocaleString()}</p>
						<p class="mt-1 text-sm text-slate-500">Available funds</p>
						<p class="mt-2 text-sm text-slate-500">Account: **** **** **** 4589</p>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle class="text-lg">Recent Transactions</CardTitle>
					</CardHeader>
					<CardContent>
                        {#each transactions as transaction}
                        <div class="space-y-2">
							<div class="flex items-center justify-between">
								<span>{transaction.concept}</span>
                                {#if transaction.amount < 0}
                                <span class="text-red-500">${transaction.amount.toLocaleString()}</span> 
                                {:else}
								<span class="text-green-500">${transaction.amount.toLocaleString()}</span>

                                {/if}
								
							</div>
                            </div>
                        {/each}
						
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle class="text-lg">Quick Actions</CardTitle>
					</CardHeader>
					<CardContent class="space-y-2">
						<button class="w-full rounded-md bg-blue-500 py-2 text-white hover:bg-blue-600">
							Send Money
						</button>
						<button class="w-full rounded-md bg-slate-100 py-2 text-slate-700 hover:bg-slate-200">
							Request Payment
						</button>
					</CardContent>
				</Card>
			</div>
		</main>
	</div>
{/if}
