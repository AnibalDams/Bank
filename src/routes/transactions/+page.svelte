<script lang="ts">
	import { onMount } from 'svelte';
	import DashBoardNav from '../../components/DashBoardNav.svelte';
	import {
		Table,
		TableBody,
		TableCell,
		TableHead,
		TableHeader,
		TableRow,
		TableFooter
	} from '$lib/components/ui/table';
	import { ArrowUpRight, ArrowDownRight } from 'lucide-svelte';
	import axios from 'axios';
	import getCookie from '$lib/getCookie';
	import Loader from '../../components/Loader.svelte';
	let transactions: any = [];
	let loaded = false;

	onMount(async () => {
		try {
			const userId = getCookie('userId', document);
			const getAccountId = await axios(`http://localhost:8000/users/${userId}/account/id`);
			const getTransactions = await axios(
				`http://localhost:8000/users/account/${getAccountId.data.data.id}/transactions`
			);
			console.log(getTransactions);
			transactions = getTransactions.data.data;
			loaded = true;
		} catch (error: any) {
			console.log(error);
		}
	});

	const totalCredits = transactions
		.filter((t: any) => t.amount > 0)
		.reduce((sum: any, t: any) => sum + t.amount, 0);

	const totalDebits = transactions
		.filter((t: any) => t.amount < 0)
		.reduce((sum: any, t: any) => sum + Math.abs(t.amount), 0);
</script>

{#if !loaded}
	<Loader />
{:else}
	<div class="min-h-screen bg-slate-50">
		<DashBoardNav />
		<main class="container mx-auto px-4 py-8">
			<h1 class="mb-6 text-3xl font-bold">Transaction History</h1>

			<div class="rounded-lg bg-white shadow">
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>Operation #</TableHead>
							<TableHead>Date</TableHead>
							<TableHead>Description</TableHead>
							<TableHead>Amount</TableHead>
							<TableHead>Type</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{#each transactions as transaction}
							<TableRow>
								<TableCell class="font-mono">OP-{transaction.operation_number}</TableCell>
								<TableCell>{new Date(transaction.date).toISOString().split('T')[0]}</TableCell>
								<TableCell>{transaction.concept}</TableCell>
								<TableCell class={transaction.amount > 0 ? 'text-green-600' : 'text-red-600'}>
									{transaction.amount > 0 ? '+' : '-'}${Math.abs(transaction.amount).toFixed(2)}
								</TableCell>
								<TableCell>
									<span class="flex items-center">
										{#if transaction.amount > 0}
											<ArrowUpRight class="mr-1 h-4 w-4 text-green-600" />
										{:else}
											<ArrowDownRight class="mr-1 h-4 w-4 text-red-600" />
										{/if}

										{transaction.amount > 0 ? 'Credit' : 'Debit'}
									</span>
								</TableCell>
							</TableRow>
						{/each}
					</TableBody>
				</Table>
			</div>
		</main>
	</div>
{/if}
