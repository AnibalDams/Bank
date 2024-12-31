<script lang="ts">
    import { Loader2 } from "lucide-svelte";
</script>

<div class="fixed inset-0 bg-background/80 backdrop-blur-sm">
    <div class="flex h-screen w-full items-center justify-center">
      <div class="flex flex-col items-center gap-2">
        <Loader2 class="h-12 w-12 animate-spin text-primary" />
        <h2 class="text-xl font-semibold">Loading...</h2>
        <p class="text-muted-foreground">Please wait while we process your request</p>
      </div>
    </div>
  </div>