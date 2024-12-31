<script lang="ts">
    import { Lock, Shield, Key } from "lucide-svelte";
</script>

<section id="security" class="py-24 bg-slate-50">
    <div class="container mx-auto px-4">
      <div class="max-w-3xl mx-auto text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
          Bank-Grade Security
        </h2>
        <p class="text-lg text-slate-600">
          Your security is our top priority. We use the latest technology to keep your money and data safe.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="glass-card rounded-xl p-8 text-center fade-up">
          <Lock class="h-12 w-12 mx-auto mb-6 text-slate-700" />
          <h3 class="text-xl font-semibold mb-4">End-to-End Encryption</h3>
          <p class="text-slate-600">
            Your data is encrypted at every step, from your device to our servers.
          </p>
        </div>

        <div 
          class="glass-card rounded-xl p-8 text-center fade-up"
          style={` animationDelay: "0.1s" `}
        >
          <Shield class="h-12 w-12 mx-auto mb-6 text-slate-700" />
          <h3 class="text-xl font-semibold mb-4">Fraud Protection</h3>
          <p class="text-slate-600">
            24/7 monitoring and real-time fraud detection to protect your accounts.
          </p>
        </div>

        <div 
          class="glass-card rounded-xl p-8 text-center fade-up"
          style={` animationDelay: "0.2s" `}
        >
          <Key class="h-12 w-12 mx-auto mb-6 text-slate-700" />
          <h3 class="text-xl font-semibold mb-4">Secure Authentication</h3>
          <p class="text-slate-600">
            Multi-factor authentication and biometric login options for added security.
          </p>
        </div>
      </div>
    </div>
  </section>