import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";
import { Sparkles, Flower2, Scissors, UserCheck } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "@shared/routes";
import { useCreateInquiry } from "@/hooks/use-inquiries";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Import required images
import photoMakeup from "@assets/WhatsApp_Image_2026-03-10_at_4.30.35_PM_1773155924178.jpeg";
import photoHalloween from "@assets/WhatsApp_Image_2026-03-10_at_4.30.48_PM_1773155924178.jpeg";

const services = [
  {
    icon: <Sparkles className="w-8 h-8 stroke-[1.5]" />,
    title: "Makeup Styling",
    description: "Professional makeup artistry for weddings, events, and special occasions tailored to your unique features."
  },
  {
    icon: <UserCheck className="w-8 h-8 stroke-[1.5]" />,
    title: "Aesthetic Skin Care",
    description: "Advanced treatments to rejuvenate and nourish your skin, promoting a healthy, glowing complexion."
  },
  {
    icon: <Flower2 className="w-8 h-8 stroke-[1.5]" />,
    title: "Facial Techniques",
    description: "Certified facial therapies designed to relax, cleanse, and revitalize deep skin layers."
  },
  {
    icon: <Scissors className="w-8 h-8 stroke-[1.5]" />,
    title: "Costume Coordination",
    description: "Expert styling and costume coordination to ensure your complete look is flawlessly cohesive."
  }
];

export default function Home() {
  const { mutate: createInquiry, isPending } = useCreateInquiry();

  const form = useForm<z.infer<typeof api.inquiries.create.input>>({
    resolver: zodResolver(api.inquiries.create.input),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof api.inquiries.create.input>) {
    createInquiry(values, {
      onSuccess: () => form.reset(),
    });
  }

  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.7, ease: "easeOut" }
  };

  return (
    <Layout>
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-secondary/30 to-background min-h-[90vh] flex items-center">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-60 pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-96 h-96 bg-secondary/40 rounded-full blur-3xl opacity-60 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <motion.div 
              className="max-w-2xl pt-12 lg:pt-0"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-6">
                Welcome to Elegance
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-medium text-foreground leading-[1.1] mb-6">
                Reveal Your <br/>
                <span className="text-gradient italic">True Radiance</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-lg">
                Discover a personalized approach to beauty. Certified aesthetician Sahar Saleem offers premium makeup, skincare, and styling tailored to your unique essence.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#booking" 
                  className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium shadow-lg shadow-primary/25 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  Book Consultation
                </a>
                <a 
                  href="#portfolio" 
                  className="px-8 py-4 rounded-full bg-transparent border border-border text-foreground font-medium hover:bg-secondary/50 transition-all duration-300"
                >
                  View Gallery
                </a>
              </div>
            </motion.div>

            <motion.div 
              className="relative lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <img 
                src={photoMakeup} 
                alt="Sahar Saleem Makeup Artistry" 
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="font-display text-2xl mb-1">Signature Looks</p>
                <p className="text-sm text-white/80 font-light">Flawless execution for every occasion</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center max-w-2xl mx-auto mb-16" {...fadeIn}>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">Our Services</h2>
            <div className="w-16 h-1 bg-primary mx-auto mb-6 rounded-full" />
            <p className="text-muted-foreground">
              Elevate your beauty experience with specialized treatments and styling designed to bring out your best self.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-8 rounded-2xl bg-white border border-border/50 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-5 transform translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500">
                  {service.icon}
                </div>
                <div className="w-14 h-14 rounded-xl bg-secondary/50 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="font-display text-2xl font-medium mb-3 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED WORK (HALLOWEEN/CREATIVE) */}
      <section className="py-24 bg-foreground text-background relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              className="order-2 lg:order-1 relative rounded-2xl overflow-hidden aspect-[4/5] shadow-2xl"
              {...fadeIn}
            >
              <img 
                src={photoHalloween} 
                alt="Creative Costume and Makeup Styling" 
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            <motion.div className="order-1 lg:order-2 space-y-6" {...fadeIn}>
              <h2 className="font-display text-4xl md:text-5xl text-white leading-tight">
                Creative Expression & <br/>
                <span className="italic text-primary">Costume Styling</span>
              </h2>
              <p className="text-white/70 text-lg leading-relaxed">
                Beyond traditional beauty, Sahar specializes in thematic and creative styling. From striking Halloween transformations to intricate cultural coordination, experience artistry without limits.
              </p>
              <ul className="space-y-4 mt-8">
                {['Thematic Makeup Artistry', 'Cultural Event Styling', 'Full Costume Coordination', 'Special Effects & Character Work'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/80">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* BOOKING FORM SECTION */}
      <section id="booking" className="py-24 bg-secondary/20 relative">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="glass-effect p-8 md:p-12 rounded-3xl"
            {...fadeIn}
          >
            <div className="text-center mb-10">
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-3">Book an Appointment</h2>
              <p className="text-muted-foreground">Fill out the form below and we will contact you to confirm your slot.</p>
            </div>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground">Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Jane Doe" className="bg-white/50 border-white focus:border-primary" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground">Phone Number</FormLabel>
                        <FormControl>
                          <Input placeholder="+92 300 1234567" className="bg-white/50 border-white focus:border-primary" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground">Email Address</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="jane@example.com" className="bg-white/50 border-white focus:border-primary" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="service"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground">Service Required</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-white/50 border-white focus:border-primary">
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="makeup">Makeup Styling</SelectItem>
                            <SelectItem value="skincare">Aesthetic Skin Care</SelectItem>
                            <SelectItem value="facial">Facial Techniques</SelectItem>
                            <SelectItem value="costume">Costume Coordination</SelectItem>
                            <SelectItem value="other">Other / Consultation</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground">Additional Details (Optional)</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell us about the occasion or any specific requirements..." 
                          className="bg-white/50 border-white focus:border-primary min-h-[120px] resize-none" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  className="w-full h-14 rounded-xl text-lg font-medium bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20"
                  disabled={isPending}
                >
                  {isPending ? "Submitting..." : "Send Request"}
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
