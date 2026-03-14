import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";
import { Award, GraduationCap, User, Sparkles } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const certifications = [
  {
    title: "Beautician Course Certificate",
    org: "Skill Development Association",
    details: [
      "Flourish Beauty Institute, Dera Ghazi Khan",
      "Duration: Six Months",
      "Grade: A",
    ],
  },
  {
    title: "Clinical Training Certificate – Aesthetic Skin Care & Facial Techniques",
    org: "Women Physiotherapy Hub, Dera Ghazi Khan",
    details: ["Training Period: 04 September 2024 – 03 December 2024"],
  },
  {
    title: "Modern Bridal Makeup & Fine Art Workshop Certificate",
    org: "Punjab Skills Vocational Council",
    details: ["Session: 2022 – 2023"],
  },
  {
    title: "Punjab Skills Vocational Council Professional Workshop Certificate",
    org: "Punjab Skills Vocational Council",
    details: [],
  },
  {
    title: "Skin Care Training Programme Certificate",
    org: "Golden Pearl Cosmetics Pakistan",
    details: [],
  },
  {
    title: "Beautician Workshop Certificate – Skin Whitening Treatment Solution",
    org: "Four Brothers Marketing Network & Cosmetics Traders",
    details: ["Venue: Hotel One, Dera Ghazi Khan", "Date: 24 June 2023"],
  },
  {
    title: "High Profile Bridal Makeup Master Class Certificate",
    org: "MORAL Professional Makeup",
    details: ["Date: 01 October 2023"],
  },
  {
    title: "Experience Certificate – Makeup Artist & Stylist",
    org: "TONI & GUY, Multan",
    details: ["Employment Period: 15 January 2024 – 20 December 2025"],
  },
  {
    title: "Experience Letter – Aesthetic Associate (Part-Time)",
    org: "Victoria Aesthetic & Physiotherapy Clinic, Dera Ghazi Khan",
    details: ["Work Period: 25 November 2025 – 25 February 2026", "Letter Issued: 12 March 2026"],
  },
  {
    title: "Production Makeup Collaboration Letter",
    org: "River View Films",
    details: ["Film Project: Khel", "Letter Issued: 20 January 2023"],
  },
  {
    title: "Photography Makeup Collaboration Letter",
    org: "Nabeel Photographic Moments, Multan",
    details: ["Collaboration Since: 2020"],
  },
  {
    title: "Event Collaboration Confirmation Letter",
    org: "SRS Marketing, Multan",
    details: ["Collaboration Since: 2023"],
  },
  {
    title: "Creative Event Support Letter",
    org: "The Spirit School, Dera Ghazi Khan",
    details: ["Support Since: January 2025"],
  },
  {
    title: "Letter of Appreciation",
    org: "Commissioner Office, Dera Ghazi Khan Division",
    details: ["Date: 23 March 2025"],
  },
  {
    title: "Second Letter of Appreciation",
    org: "Commissioner Office, Dera Ghazi Khan Division",
    details: ["Date: 23 March 2025"],
  },
  {
    title: "Certificate of Appreciation – Makeup Training Programme",
    org: "Allenora Multan",
    details: ["Date: 23 April 2021"],
  },
];

const formalQualifications = [
  {
    title: "MA International Relations",
    org: "Bahauddin Zakariya University, Multan",
    year: "2010",
  },
  {
    title: "BA (Bachelor of Arts)",
    org: "Bahauddin Zakariya University, Multan",
    year: "2008",
  },
  {
    title: "Intermediate (Humanities)",
    org: "Board of Intermediate and Secondary Education, Multan",
    year: "2006",
  },
  {
    title: "IELTS – General Training",
    org: "British Council",
    year: "2022",
    note: "Overall Band Score: 5.5",
  },
];

const skills = [
  {
    title: "Professional Makeup Application",
    items: [
      "Bridal makeup artistry",
      "Fashion and editorial makeup",
      "Event and stage makeup",
      "Camera-ready makeup for photography and film",
    ],
  },
  {
    title: "Film & Media Makeup",
    items: [
      "Character makeup design",
      "Continuity makeup during filming",
      "Makeup styling for actors and performers",
      "Collaboration with production teams and stylists",
    ],
  },
  {
    title: "Beauty & Salon Services",
    items: [
      "Professional salon makeup services",
      "Client consultation and beauty advice",
      "Makeup kit preparation and product selection",
      "Hygiene and cosmetic safety standards",
    ],
  },
  {
    title: "Aesthetic & Skin Care Techniques",
    items: [
      "Basic facial treatments",
      "Skin preparation before makeup application",
      "Skin analysis and cosmetic product selection",
      "Support in aesthetic skincare procedures",
    ],
  },
  {
    title: "Creative Styling",
    items: [
      "Makeup styling for photoshoots",
      "Fashion and promotional event styling",
      "Model and performer appearance preparation",
    ],
  },
  {
    title: "Professional Working Skills",
    items: [
      "Attention to detail",
      "Client communication and service",
      "Team collaboration in creative environments",
      "Time management in production and event settings",
    ],
  },
];

export default function Profile() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  return (
    <Layout>
      <section className="pt-24 pb-16 bg-secondary/20">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-5xl md:text-6xl font-display text-foreground mb-4">
              Qualifications & <span className="italic text-primary">Recognition</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Professional background, formal qualifications, and recognition across bridal, film, photography, and aesthetic practice.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            <motion.div className="lg:col-span-2" {...fadeIn}>
              <Card className="rounded-2xl">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <Award className="w-6 h-6 text-primary" />
                    <div>
                      <CardTitle className="font-display">Professional Certifications, Letters & Recognition</CardTitle>
                      <CardDescription>
                        Certificates, experience letters, collaboration confirmations, and appreciation letters.
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {certifications.map((c, idx) => (
                      <div key={idx} className="rounded-xl border border-border bg-card p-5">
                        <div className="flex items-start justify-between gap-4">
                          <div className="min-w-0">
                            <div className="text-base font-semibold text-foreground leading-snug">
                              {idx + 1}. {c.title}
                            </div>
                            <div className="text-sm text-muted-foreground mt-1">{c.org}</div>
                          </div>
                        </div>
                        {c.details.length > 0 && (
                          <ul className="mt-3 space-y-1.5 text-sm text-foreground/80">
                            {c.details.map((d, i) => (
                              <li key={i} className="leading-relaxed">
                                {d}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div className="space-y-8" {...fadeIn}>
              <Card className="rounded-2xl">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <GraduationCap className="w-6 h-6 text-primary" />
                    <div>
                      <CardTitle className="font-display">Formal Qualifications</CardTitle>
                      <CardDescription>Academic background and language proficiency.</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {formalQualifications.map((q, idx) => (
                      <div key={idx} className="rounded-xl border border-border bg-card p-5">
                        <div className="flex items-start justify-between gap-4">
                          <div className="min-w-0">
                            <div className="font-semibold text-foreground">{q.title}</div>
                            <div className="text-sm text-muted-foreground mt-1">{q.org}</div>
                            {q.note && <div className="text-sm text-foreground/80 mt-2">{q.note}</div>}
                          </div>
                          <div className="text-sm font-semibold text-foreground whitespace-nowrap">{q.year}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="rounded-2xl">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <User className="w-6 h-6 text-primary" />
                    <div>
                      <CardTitle className="font-display">About Me</CardTitle>
                      <CardDescription>Professional summary and personal statement.</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 text-sm text-foreground/80 leading-relaxed">
                    <p>
                      Creative and detail-oriented Makeup Artist and Beauty Professional with practical experience in bridal makeup,
                      salon services, aesthetic skincare assistance, and makeup styling for film, photography, and live events.
                      Experienced in working within professional salon environments, aesthetic clinics, media productions, and
                      promotional events.
                    </p>
                    <p>
                      Skilled in designing makeup looks that enhance appearance, suit character requirements, and maintain visual
                      consistency during photography and filming. Recognised for strong hygiene standards, client care, and the
                      ability to prepare performers, models, and clients for professional productions, events, and media appearances.
                    </p>
                    <div className="rounded-xl border border-border bg-card p-5">
                      <div className="text-sm font-semibold text-foreground">
                        SAHAR SALEEM
                      </div>
                      <div className="text-sm text-muted-foreground mt-1">
                        Professional Makeup Artist | Bridal & Film Makeup Specialist | Beauty & Aesthetic Practitioner
                      </div>
                      <p className="text-sm text-foreground/80 mt-4 leading-relaxed">
                        Coming from a small-town background, I have always been motivated to pursue excellence and continuously
                        develop my professional skills. I am passionate about makeup artistry and enjoy working behind the scenes
                        where I can use my creativity to enhance the appearance and confidence of others. I take pride in delivering
                        high-quality work and contributing to successful productions, events, and client experiences.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="max-w-3xl" {...fadeIn}>
            <div className="flex items-center gap-3 mb-6">
              <Sparkles className="w-6 h-6 text-primary" />
              <h2 className="text-3xl font-display text-foreground">Core Skills & Techniques</h2>
            </div>
            <p className="text-muted-foreground mb-10">
              Key strengths across makeup artistry, film/media continuity, aesthetic support, and client-focused salon services.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((s) => (
              <motion.div key={s.title} {...fadeIn}>
                <Card className="rounded-2xl h-full">
                  <CardHeader className="pb-2">
                    <CardTitle className="font-display text-xl">{s.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-foreground/80 leading-relaxed">
                      {s.items.map((it) => (
                        <li key={it}>{it}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
