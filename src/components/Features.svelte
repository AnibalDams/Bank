<script>
    import { Shield, Smartphone, CreditCard, PiggyBank } from "lucide-svelte";

const features = [
  {
    icon: Smartphone,
    title: "Mobile Banking",
    description: "Bank on the go with our intuitive mobile app. Transfer money, pay bills, and check balances instantly.",
  },
  {
    icon: Shield,
    title: "Secure Transactions",
    description: "Advanced encryption and multi-factor authentication keep your money and data safe.",
  },
  {
    icon: CreditCard,
    title: "Digital Cards",
    description: "Virtual cards for safer online shopping. Lock and unlock cards with a single tap.",
  },
  {
    icon: PiggyBank,
    title: "Smart Savings",
    description: "Automated savings tools and personalized insights to help you reach your financial goals.",
  },
];
</script>

<section id="features" class="py-24 bg-white">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
          Everything You Need in One Place
        </h2>
        <p class="text-lg text-slate-600 max-w-2xl mx-auto">
          Discover a better way to manage your finances with our comprehensive banking solutions.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {#each features as feature, index}
        <div
        
        class="glass-card rounded-xl p-6 fade-up"
        style={ `animationDelay: ${index * 0.1}s `}
      >
        <feature.icon className="h-12 w-12 text-slate-700 mb-4" />
        <h3 class="text-xl font-semibold text-slate-900 mb-2">{feature.title}</h3>
        <p class="text-slate-600">{feature.description}</p>
      </div>
        {/each}
  
      </div>
    </div>
  </section>