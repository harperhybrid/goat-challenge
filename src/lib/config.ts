export const siteConfig = {
    name: "GOAT Challenge",
    description: "Build consistent practice habits and earn rewards with the GOAT Challenge!",
    url: "https://goatchallenge.org",
    ogImage: "https://goatchallenge.org/og.jpg",
    links: {
      twitter: "https://twitter.com/harperhybrid",
      github: "https://github.com/harperhybrid",
    },
  }
  
  export const tiers = [
    {
      id: "lil_goat",
      name: "Lil' GOAT",
      weeklyPrice: 5,
      totalPrice: 50,
      weeklyGoats: 5,
      maxRefund: 50,
      description: "Perfect for beginners and younger students",
    },
    {
      id: "grinder_goat",
      name: "Grinder GOAT",
      weeklyPrice: 10,
      totalPrice: 100,
      weeklyGoats: 10,
      maxRefund: 100,
      description: "Great for committed learners",
    },
    {
      id: "boss_goat",
      name: "Boss GOAT",
      weeklyPrice: 25,
      totalPrice: 250,
      weeklyGoats: 25,
      maxRefund: 250,
      description: "For serious students aiming for maximum growth",
    },
  ]