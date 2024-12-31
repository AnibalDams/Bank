<script lang="ts">
    import DashBoardNav from "../../components/DashBoardNav.svelte";
    import { Card, CardContent, CardHeader, CardTitle } from "$lib/components/ui/card";
    import { Input } from "$lib/components/ui/input";
    import { Button } from "$lib/components/ui/button";
    import { Toaster, toast } from 'svelte-sonner'

    async function sendPayment()  {
        toast.info("Section under construction")
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
              <Input
                type="text"
                placeholder="Enter account number"

              />
            </div>
            
            <div class="space-y-2">
              <label class="text-sm font-medium">Amount</label>
              <Input
                type="number"
                placeholder="Enter amount"
                min="0"
                step="0.01"
        
 
              />
            </div>
            
            <div class="space-y-2">
              <label class="text-sm font-medium">Concept</label>
              <Input
                type="text"
                placeholder="Enter payment concept"

              />
            </div>

            <Button on:click={async()=>{
                sendPayment()
            }} class="w-full">
              Send Payment
            </Button>
          </form>
        </CardContent>
      </Card>
    </main>
  </div>