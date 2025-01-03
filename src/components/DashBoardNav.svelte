<script lang="ts">
    import { Home, CreditCard, DollarSign } from "lucide-svelte";
    export let name = ""
    import {goto} from "$app/navigation"
</script>


<nav class="bg-white shadow-sm">
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between h-16">
        <a href="/dashboard" class="text-xl font-semibold">
          BankApp
        </a>
        
        <div class="flex space-x-8">
          <a
            href="/dashboard"
            class="flex items-center space-x-2 text-slate-600 hover:text-slate-900"
          >
            <Home class="h-5 w-5" />
            <span>Home</span>
        </a>
          
          <a
            href="/transactions"
            class="flex items-center space-x-2 text-slate-600 hover:text-slate-900"
          >
            <CreditCard class="h-5 w-5" />
            <span>Transactions</span>
    </a>
          
          <a
            href="/pay"
            class="flex items-center space-x-2 text-slate-600 hover:text-slate-900"
          >
            <DollarSign class="h-5 w-5" />
            <span>Pay</span>
</a>
        </div>

        <div class="flex items-center space-x-4">
          <button class="text-sm text-slate-600 hover:text-slate-900" on:click={()=>{
                    document.cookie = "userId=;max-age=-1;path=/;";
                    document.cookie = "fullName=;max-age=-1;path=/;";
                    goto("/")
          }}>
            Logout
          </button>
        </div>
      </div>
    </div>
  </nav>