<script lang="ts">
    import { Button } from "$lib/components/ui/button";
</script>

<nav class="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-slate-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <div class="flex items-center">
          BankApp
        </div>

       
        <div class="hidden md:flex items-center space-x-8">
          <a href="#features" class="text-slate-600 hover:text-slate-900 transition-colors">
            Features
          </a>
          <a href="#security" class="text-slate-600 hover:text-slate-900 transition-colors">
            Security
          </a>
          <a href="#about" class="text-slate-600 hover:text-slate-900 transition-colors">
            About
          </a>
          
            <Button href="/login" variant="outline" class="mr-2">
              Sign In
            </Button>
       
         
            <Button href="/newAccount">Get Started</Button>
        
        </div>
    </div>
</nav>
