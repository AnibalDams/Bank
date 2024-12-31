<script lang="ts">
    import {Button} from "$lib/components/ui/button"
    import { ArrowRight } from "lucide-svelte";
</script>

<div class="relative min-h-screen flex items-center justify-center overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-br from-slate-100 to-white z-0" ></div>
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),rgba(255,255,255,0))]" ></div>

    <div class="container mx-auto px-4 pt-32 pb-16 relative z-10">
      <div class="text-center max-w-4xl mx-auto">
        <h1 class="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 mb-8 fade-up">
          Banking Made Simple, <br />
          <span class="text-slate-600">Secure by Design</span>
        </h1>
        <p class="text-xl text-slate-600 mb-12 fade-up" style={`animationDelay: "0.1s"`} >
          Experience the future of banking with our innovative digital platform.
          Manage your money with confidence and ease.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center fade-up" style={ `animationDelay: "0.2s"` }>
          <Button href="/newAccount" size="lg" class="text-lg px-8">
            Open Account <ArrowRight class="ml-2 h-5 w-5" />
          </Button>
          <Button size="lg" variant="outline" class="text-lg px-8">
            Learn More
          </Button>
        </div>
      </div>
    </div>
</div>
  