<script lang="ts">
    import DashBoardNav from "../../components/DashBoardNav.svelte";
    import { Card, CardContent, CardHeader, CardTitle } from "$lib/components/ui/card";
    import { Input } from "$lib/components/ui/input";
    import { Button } from "$lib/components/ui/button";
    import { Toaster, toast } from 'svelte-sonner'
    import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "$lib/components/ui/alert-dialog"; 
import axios from 'axios'
import getCookie from "$lib/getCookie";

    let accountNumber = ""
    let amount = 0
    let concept = ""
    let showModal = false
    async function sendPayment()  {
      const userId = getCookie("userId",document)
      showModal=false
        toast.loading("Sending payment...")
        console.log(accountNumber)
        try {
          const getAccountId = await axios.get(`http://localhost:8000/users/account/${accountNumber}/info`)
          await axios.post(`http://localhost:8000/users/account/transactions/new/${userId}`,{
            reciever:getAccountId.data.data.id,
            concept:concept,
            amount:amount,
            status:1,
            statusMessage:"Done"
          })
          toast.success("Payment sent")
        } catch (error:any) {
          toast.error(error.response.data.message)
          console.log(error)
        }
    }

</script>

<Toaster richColors/>
<div class="min-h-screen bg-slate-50">
  <DashBoardNav />
  <main class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-6">Make a Payment</h1>
    
    <Card class="max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Payment Details</CardTitle>
      </CardHeader>
      <CardContent>
        <form  class="space-y-4">
          <div class="space-y-2">
            <label class="text-sm font-medium">Account Number</label>
            <div class="flex gap-2">
              <div class="w-20 h-10 flex items-center justify-center bg-gray-100 rounded-md border border-input">
                <span class="text-sm text-gray-600">9134</span>
              </div>
              <div class="w-20 h-10 flex items-center justify-center bg-gray-100 rounded-md border border-input">
                <span class="text-sm text-gray-600">5687</span>
              </div>
              <Input
                type="text"
                placeholder="Enter account number"
                bind:value={accountNumber}
                class="flex-1"
              />
            </div>
          </div>
          
          <div class="space-y-2">
            <label class="text-sm font-medium">Amount</label>
            <Input
              type="number"
              placeholder="Enter amount"
              min="0"
              step="1"
              bind:value={amount}
            />
          </div>
          
          <div class="space-y-2">
            <label class="text-sm font-medium">Concept</label>
            <Input
              type="text"
              placeholder="Enter payment concept"
              bind:value={concept}
         
            />
          </div>

          <Button on:click={()=>{
              if(concept==="" || amount ===0|| accountNumber===""){
                toast.error("Please fill all the fields")
                return

              }
              showModal=true
            
            }} class="w-full">
            Send Payment
          </Button>
        </form>
      </CardContent>
    </Card>

    <AlertDialog open={showModal} on:close={() => showModal = false}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Confirm Payment</AlertDialogTitle>
          <AlertDialogDescription class="space-y-4">
            <p>
              Are you sure you want to pay ${amount} to account {accountNumber}?
            </p>
            <p class="text-red-500 font-medium">
              If the account doesn't have the funds, it's going to end with a debt with the bank
            </p>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel on:click={()=>{showModal=false}}>Cancel</AlertDialogCancel>
          <AlertDialogAction on:click={async()=>{
            
            await sendPayment()
            
            }}>
            Confirm Payment
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  </main>
</div>