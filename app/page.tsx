
"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  Camera,
  Flower2,
  Heart,
  Moon,
  Sparkles,
  Star,
} from "lucide-react";

function SectionNumber({ number }: { number: string }) {
  return (
    <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.25em] opacity-60">
      <span>{number}</span>
      <span className="h-px w-8 bg-current" />
    </div>
  );
}

function FloatingCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={`aura-float absolute rounded-2xl border border-white/50 bg-white/80 p-3 shadow-xl backdrop-blur-md md:p-4 ${className}`}
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
    >
      {children}
    </motion.div>
  );
}

function ExperienceCard({
  image,
  title,
  subtitle,
  number,
  details,
  href,
}: {
  image: string;
  title: string;
  subtitle: string;
  number: string;
  details: string;
  href: string;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -7 }}
      className="group relative"
    >
      <div className="aura-experience-card relative h-[420px] overflow-hidden rounded-[1.7rem] md:h-[450px]">
        <img
          src={image}
          alt={`${title} personalised website concept`}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#211719]/95 via-[#211719]/25 to-black/5" />

        <div className="absolute left-5 top-5 rounded-full border border-white/30 bg-black/20 px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-white backdrop-blur-md">
          Experience {number}
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-7">
          <div className="mb-4 h-px w-10 bg-[#f0b7a4] transition-all duration-500 group-hover:w-20" />

          <h3 className="font-serif text-3xl italic leading-tight text-white md:text-4xl">
            {title}
          </h3>

          <p className="mt-3 text-sm leading-6 text-white/80">
            {subtitle}
          </p>

          <p className="mt-4 border-t border-white/20 pt-4 text-xs leading-6 text-white/65">
            {details}
          </p>

          <a
            href={href}
            className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/35 bg-white/10 px-4 py-2.5 text-xs font-medium text-white backdrop-blur-md transition-all hover:bg-white hover:text-[#25251f]"
          >
            {title === "Birthday Surprise"
              ? "View birthday experience"
              : "Create something like this"}
            <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </motion.article>
  );
}

const lifeStages = [
  {
    number: "01",
    title: "Beginning",
    text: "Every story starts somewhere. A first smile, a first meeting, a tiny moment that becomes unforgettable.",
    color: "bg-[#f4f0e6]",
    accent: "text-[#6d8062]",
    icon: Flower2,
  },
  {
    number: "02",
    title: "Growing",
    text: "Friendships grow, memories collect, and ordinary days become the moments we wish we could keep forever.",
    color: "bg-[#f0b7a4]",
    accent: "text-[#8d514d]",
    icon: Sparkles,
  },
  {
    number: "03",
    title: "Love",
    text: "Some stories become deeper. Two people become a chapter, a home, a favourite memory.",
    color: "bg-[#e6c5c5]",
    accent: "text-[#6f3947]",
    icon: Heart,
  },
  {
    number: "04",
    title: "Celebration",
    text: "Birthdays, achievements, surprises and milestones. Moments that deserve to be remembered.",
    color: "bg-[#ead49e]",
    accent: "text-[#654b13]",
    icon: Star,
  },
  {
    number: "05",
    title: "Memory",
    text: "Photographs become memories. Messages become stories. Little details become pieces of a life.",
    color: "bg-[#d5a18c]",
    accent: "text-[#663b2d]",
    icon: Camera,
  },
  {
    number: "06",
    title: "Remembering",
    text: "Years later, the most valuable things are the moments we can still feel.",
    color: "bg-[#ded7ec]",
    accent: "text-[#403653]",
    icon: Moon,
  },
];

const experiences = [
  {
    image:
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1400&q=85",
    title: "Birthday Surprise",
    subtitle:
      "A little corner of the internet made just for their special day.",
    number: "01",
    details: "Birthday letters · Photo memories · Surprise reveals",
    theme: "birthday",
  },
  {
    image:
      "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=1400&q=85",
    title: "Love Story",
    subtitle:
      "Your journey together, told through the moments only you share.",
    number: "02",
    details: "Our timeline · Love letters · Meaningful dates",
    theme: "love",
  },
  {
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1400&q=85",
    title: "Friendship Memories",
    subtitle:
      "For the people who turn ordinary days into favourite memories.",
    number: "03",
    details: "Inside jokes · Shared adventures · Personal messages",
    theme: "friendship",
  },
    {
    number: "04",
    theme: "celebrations",
    title: "Special Celebrations",
    subtitle: "Step into something magical",
    details:
      "A glowing world of golden lights, enchanted pathways, and unforgettable celebrations.",
    

image: "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1400&q=85",
  },
];


export default function Home() {
  const [currency, setCurrency] = useState<"INR" | "USD">("INR");
  const [currencyChosenManually, setCurrencyChosenManually] = useState(false);
const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    if (currencyChosenManually) return;

    fetch("https://ipapi.co/json/")
      .then((response) => response.json())
      .then((data) => {
        setCurrency(data.country_code === "IN" ? "INR" : "USD");
      })
      .catch(() => {
        setCurrency("INR");
      });
  }, [currencyChosenManually]);

  return (
  
    <main className="overflow-hidden bg-[#f4f0e6] text-[#25251f]">
      <div className="aura-grain" />


      {/* NAVBAR */}
      <nav className="fixed left-0 right-0 top-0 z-50 px-3 py-3 sm:px-4 sm:py-4 md:px-10">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 rounded-full border border-black/10 bg-[#f4f0e6]/90 px-4 py-2.5 shadow-lg backdrop-blur-xl sm:px-5 sm:py-3 md:px-7">
          <a
            href="#top"
            className="flex min-w-0 shrink items-center"
            aria-label="Aura home"
            onClick={() => setMobileMenuOpen(false)}
          >
            <img
              src="/images/aura-logo.png"
              alt="AURA — Personal stories. Beautifully experienced."
              className="h-10 w-auto max-w-[150px] object-contain object-left sm:h-12 sm:max-w-[200px] md:h-14 md:max-w-[240px]"
            />
          </a>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden items-center gap-5 text-sm lg:flex xl:gap-7">
            <a href="#story" className="transition-opacity hover:opacity-50">
              Story
            </a>
            <a
              href="#experiences"
              className="transition-opacity hover:opacity-50"
            >
              Experiences
            </a>
            <a
              href="#process"
              className="transition-opacity hover:opacity-50"
            >
              How it works
            </a>
            <a
              href="#contact"
              className="transition-opacity hover:opacity-50"
            >
              Contact Us
            </a>
          </div>

          {/* DESKTOP CTA */}
          <a
            href="#contact"
            className="hidden rounded-full bg-[#25251f] px-5 py-2.5 text-sm font-medium text-white transition-transform hover:scale-105 lg:inline-flex"
          >
            Tell your story
          </a>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-black/10 text-[#25251f] transition hover:bg-black/5 lg:hidden"
          >
            <span className="text-2xl leading-none">
              {mobileMenuOpen ? "×" : "☰"}
            </span>
          </button>
        </div>

        {/* MOBILE DROPDOWN */}
        {mobileMenuOpen && (
          <div className="mx-auto mt-2 max-w-7xl rounded-2xl border border-black/10 bg-[#f4f0e6]/95 p-5 text-[#25251f] shadow-xl backdrop-blur-xl lg:hidden">
            <div className="flex flex-col gap-5 text-sm">
              <a
                href="#story"
                onClick={() => setMobileMenuOpen(false)}
                className="transition-opacity hover:opacity-50"
              >
                Story
              </a>
              <a
                href="#experiences"
                onClick={() => setMobileMenuOpen(false)}
                className="transition-opacity hover:opacity-50"
              >
                Experiences
              </a>
              <a
                href="#process"
                onClick={() => setMobileMenuOpen(false)}
                className="transition-opacity hover:opacity-50"
              >
                How it works
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="transition-opacity hover:opacity-50"
              >
                Contact Us
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-full bg-[#25251f] px-5 py-3 text-center font-medium text-white"
              >
                Tell your story
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section
        id="top"
        className="relative flex min-h-[auto] items-center overflow-hidden px-5 pb-14 pt-28 sm:px-8 md:min-h-[760px] md:px-12 md:pb-16 md:pt-28"
      >
        <div className="aura-glow left-[5%] top-[12%] h-64 w-64 bg-[#f0b7a4]" />
        <div className="aura-glow right-[5%] top-[20%] h-72 w-72 bg-[#a8b89a]" />

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-4">
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-5 inline-flex items-center gap-3 rounded-full border border-black/10 bg-white/50 px-4 py-2 text-[10px] uppercase tracking-[0.2em] backdrop-blur-sm md:text-xs"
            >
              <span className="h-2 w-2 rounded-full bg-[#c87578]" />
              Personalized Web Experiences
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-serif text-[clamp(3.7rem,8vw,7.5rem)] font-medium leading-[0.84] tracking-[-0.055em]"
            >
              Every life
              <br />
              <span className="italic text-[#6f3947]">is made of</span>
              <br />
              moments.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-6 max-w-lg text-sm leading-7 text-black/60 md:mt-7 md:text-base md:leading-8"
            >
              Your memories deserve more than a photo album. Tell me your
              story, share your moments, and I&apos;ll turn them into a
              beautiful experience made just for you.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="mt-6 flex flex-wrap items-center gap-3 md:mt-8"
            >
              <a
                href="#experiences"
                className="group flex items-center gap-3 rounded-full bg-[#25251f] px-5 py-3.5 text-sm font-medium text-white transition-all hover:gap-4"
              >
                Explore experiences
                <ArrowDown
                  size={15}
                  className="transition-transform group-hover:translate-y-1"
                />
              </a>

              <a
                href="#contact"
                className="rounded-full border border-black/15 bg-white/50 px-5 py-3.5 text-sm font-medium transition hover:bg-white"
              >
                Create yours
              </a>
            </motion.div>

            <div className="mt-7 flex items-center gap-3 text-xs text-black/45 md:mt-9">
              <div className="flex -space-x-2">
                <span className="h-7 w-7 rounded-full border-2 border-[#f4f0e6] bg-[#f0b7a4]" />
                <span className="h-7 w-7 rounded-full border-2 border-[#f4f0e6] bg-[#a8b89a]" />
                <span className="h-7 w-7 rounded-full border-2 border-[#f4f0e6] bg-[#9b91b5]" />
              </div>
              Every detail made personal
            </div>
          </div>

          {/* ANIMATED MEMORY GALLERY */}
          <div className="relative mx-auto h-[380px] w-full max-w-[420px] sm:h-[440px] md:h-[470px] md:max-w-[470px]">
            <motion.div
              initial={{ opacity: 0, y: 25, rotate: -8 }}
              animate={{ opacity: 1, y: 0, rotate: -5 }}
              transition={{ duration: 1 }}
              className="absolute left-[2%] top-[7%] z-10 w-[49%] rounded-2xl border-[5px] border-white bg-white p-1 shadow-xl"
            >
              <motion.img
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=700&q=85"
                alt="Friends enjoying time together"
                className="h-[145px] w-full rounded-xl object-cover sm:h-[175px] md:h-[190px]"
                animate={{ y: [0, -7, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              />
              <p className="px-1 py-2 font-serif text-xs italic text-[#6f3947] sm:text-sm">
                people who feel like home
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 25, rotate: 8 }}
              animate={{ opacity: 1, y: 0, rotate: 6 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="absolute right-[1%] top-[3%] z-20 w-[45%] rounded-2xl border-[5px] border-white bg-white p-1 shadow-xl"
            >
              <motion.img
                src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=700&q=85"
                alt="Colourful birthday celebration"
                className="h-[125px] w-full rounded-xl object-cover sm:h-[155px] md:h-[170px]"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
              <p className="px-1 py-2 font-serif text-xs italic text-[#6f3947] sm:text-sm">
                little reasons to celebrate
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 25, rotate: -3 }}
              animate={{ opacity: 1, y: 0, rotate: -2 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="absolute bottom-[4%] left-[9%] z-30 w-[47%] rounded-2xl border-[5px] border-white bg-white p-1 shadow-xl"
            >
              <motion.img
                src="https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=700&q=85"
                alt="A couple sharing a loving moment"
                className="h-[135px] w-full rounded-xl object-cover sm:h-[165px] md:h-[180px]"
                animate={{ y: [0, 7, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
              />
              <p className="px-1 py-2 font-serif text-xs italic text-[#6f3947] sm:text-sm">
                a story only you know
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20, rotate: 7 }}
              animate={{ opacity: 1, y: 0, rotate: 4 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="absolute bottom-[11%] right-[1%] z-20 w-[40%] rounded-2xl border-[5px] border-white bg-white p-1 shadow-xl"
            >
              <motion.img
                src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=700&q=85"
                alt="A joyful event filled with lights"
                className="h-[115px] w-full rounded-xl object-cover sm:h-[140px] md:h-[155px]"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
              />
              <p className="px-1 py-2 font-serif text-[10px] italic text-[#6f3947] sm:text-xs">
                moments worth keeping
              </p>
            </motion.div>

            <motion.div
              animate={{ rotate: [0, 10, 0], scale: [1, 1.08, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-[47%] top-[44%] z-40 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border border-white bg-[#f0b7a4] text-[#6f3947] shadow-lg sm:h-14 sm:w-14"
            >
              <Heart size={22} />
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-center">
          <div className="mb-2 text-[9px] uppercase tracking-[0.35em] text-black/40">
            Scroll to explore
          </div>
          <ArrowDown className="mx-auto animate-bounce text-black/50" size={18} />
        </div>
      </section>

      {/* STORY INTRO */}
      <section
        id="story"
        className="relative overflow-hidden bg-[#eee4d8] px-6 py-20 text-[#25251f] md:px-12 md:py-28"
      >
        <div className="aura-glow right-[-8%] top-[-15%] h-80 w-80 bg-[#f0b7a4]" />
        <div className="aura-glow bottom-[-20%] left-[-8%] h-80 w-80 bg-[#a8b89a]" />

        <div className="relative mx-auto max-w-7xl">
          <SectionNumber number="01" />

          <div className="mt-10 grid gap-10 lg:grid-cols-[0.65fr_1.35fr] lg:gap-16">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-[#6f3947]">
                Why Aura exists
              </p>

              <div className="mt-7 flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#c87578]/15 text-[#6f3947]">
                  <Heart size={20} />
                </span>
                <span className="font-serif text-lg italic text-[#6f3947]">
                  Made for your moments
                </span>
              </div>

              <div className="mt-8 hidden max-w-xs grid-cols-3 gap-3 sm:grid">
                <div className="h-24 rounded-t-full bg-[#c87578]/70" />
                <div className="mt-5 h-24 rounded-t-full bg-[#a8b89a]" />
                <div className="h-24 rounded-t-full bg-[#d9a441]/75" />
              </div>
            </div>

            <div>
              <motion.h2
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="max-w-4xl font-serif text-4xl leading-[0.98] tracking-[-0.035em] sm:text-5xl md:text-7xl"
              >
                Some memories are too special to live inside a camera roll.
              </motion.h2>

              <p className="mt-7 max-w-2xl text-sm leading-7 text-black/65 md:text-base md:leading-8">
                Aura turns personal stories into beautiful interactive web
                experiences. Not templates. Not generic pages. Something
                designed around the people, photographs and little details
                that make your story yours.
              </p>

              <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-[#6f3947]/15 bg-white/60 px-5 py-3 text-sm shadow-sm">
                <Sparkles size={17} className="text-[#6f3947]" />
                Every detail has a story.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LIFE CYCLE */}
      <section className="relative px-6 py-16 md:px-12 md:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionNumber number="02" />

          <div className="mt-7 grid items-end gap-4 md:grid-cols-[1fr_0.55fr]">
            <h2 className="aura-experience-heading font-serif text-4xl leading-[0.98] tracking-[-0.04em] sm:text-5xl md:text-6xl">
              Life is not one moment.
              <span className="italic text-[#6f3947]">
                {" "}It is everything between them.
              </span>
            </h2>

            <p className="max-w-sm text-sm leading-6 text-black/55 md:justify-self-end">
              Every chapter has its own feeling. Aura gives those moments a
              place to live.
            </p>
          </div>

          <div className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {lifeStages.map((stage) => {
              const Icon = stage.icon;

              return (
                <motion.div
                  key={stage.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.5 }}
                  className={`aura-life-stage group relative overflow-hidden rounded-[2rem] ${stage.color} p-7 md:p-10`}
                >
                  <div className="flex items-start justify-between">
                    <span className="text-xs opacity-50">{stage.number}</span>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white/20 transition-transform duration-500 group-hover:rotate-12">
                      <Icon size={18} className={stage.accent} />
                    </div>
                  </div>

                  <div className="mt-7">
                    <h3 className={`font-serif text-3xl italic ${stage.accent} md:text-4xl`}>
                      {stage.title}
                    </h3>
                    <p className="mt-2 max-w-sm text-xs leading-6 text-black/60 md:text-sm">
                      {stage.text}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* EXPERIENCES */}
      <section
        id="experiences"
        className="relative px-6 py-20 md:px-12 md:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <SectionNumber number="03" />

          <div className="mt-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-[#6f3947]">
                Your story, your way
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-[0.95] tracking-[-0.04em] sm:text-6xl md:text-7xl">
                Personalized
                <br />
                <span className="italic text-[#6f3947]">Web Experiences</span>
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-7 text-black/55 md:text-base">
              Every person has a story worth celebrating. Choose the feeling
              you want to create, and we&apos;ll make it personal.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {experiences.map((experience) => (
              <ExperienceCard
                key={experience.number}
                image={experience.image}
                title={experience.title}
                subtitle={experience.subtitle}
                number={experience.number}
                details={experience.details}
                
              

href={
  experience.theme === "birthday"
    ? "/experiences/birthday"
    : experience.theme === "love"
      ? "/experiences/love-story"
      : experience.theme === "friendship"
        ? "/experiences/friendship"
        : experience.theme === "celebrations"
          ? "/experiences/special-celebrations"
          : "#contact"
}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED EXPERIENCE */}
      <section
        id="featured"
        className="relative overflow-hidden bg-[#25251f] px-6 py-20 text-[#f4f0e6] md:px-12 md:py-28"
      >
        <div className="aura-glow right-[-5%] top-[-15%] h-80 w-80 bg-[#6f3947]" />
        <div className="aura-glow bottom-[-20%] left-[10%] h-72 w-72 bg-[#a8b89a]" />

        <div className="relative mx-auto max-w-7xl">
          <SectionNumber number="04" />

          <div className="mt-10 grid items-center gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative overflow-hidden rounded-[2rem]"
              >
                <img
                  src="https://images.unsplash.com/photo-1511988617509-a57c8a288659?auto=format&fit=crop&w=1400&q=85"
                  alt="Friends sharing a meaningful moment"
                  loading="lazy"
                  className="h-[360px] w-full object-cover md:h-[500px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />

                <div className="absolute bottom-6 left-6 right-6">
                  <span className="rounded-full border border-white/40 bg-black/20 px-4 py-2 text-xs text-white backdrop-blur-md">
                    Made around your memories
                  </span>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -8, 0], rotate: [-4, -1, -4] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-5 -right-2 rounded-2xl border border-white/20 bg-[#f4f0e6] p-5 text-[#25251f] shadow-xl sm:-right-5"
              >
                <Heart size={20} className="mb-2 text-[#6f3947]" />
                <p className="font-serif text-lg italic">Your moments.</p>
                <p className="font-serif text-lg italic">Your story.</p>
              </motion.div>
            </div>

            <div className="pt-5 lg:pt-0">
              <p className="text-xs uppercase tracking-[0.3em] text-[#d8b0a5]">
                A little more personal
              </p>

              <h2 className="mt-6 font-serif text-5xl leading-[0.95] tracking-[-0.04em] sm:text-6xl md:text-7xl">
                Not just a
                <br />
                <span className="italic text-[#d8b0a5]">website.</span>
                <br />
                A feeling.
              </h2>

              <p className="mt-7 max-w-lg text-sm leading-7 text-white/65 md:text-base md:leading-8">
                Imagine opening a website made entirely for you. Your
                photographs, your favourite memories, your inside jokes and
                the words you wish you could say. Every detail comes together
                to create something you can revisit long after the moment
                has passed.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Designed around your story",
                  "Personal photographs and meaningful details",
                  "A unique experience made with care",
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: 15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-3 text-sm text-white/80"
                  >
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10">
                      <Heart size={13} className="text-[#d8b0a5]" />
                    </span>
                    {item}
                  </motion.div>
                ))}
              </div>

              <a
                href="#contact"
                className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#f4f0e6] px-6 py-4 text-sm font-medium text-[#25251f] transition-all hover:gap-5"
              >
                Let&apos;s create yours
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section
        id="process"
        className="relative overflow-hidden bg-[#eee4d8] px-6 py-20 text-[#25251f] md:px-12 md:py-28"
      >
        <div className="aura-glow right-[-8%] top-[-10%] h-72 w-72 bg-[#f0b7a4]" />
        <div className="aura-glow bottom-[-10%] left-[-5%] h-72 w-72 bg-[#a8b89a]" />

        <div className="relative mx-auto max-w-7xl">
          <SectionNumber number="05" />

          <div className="mt-8 grid gap-5 md:grid-cols-[1fr_0.7fr] md:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-[#6f3947]">
                Simple, personal, meaningful
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-[0.95] tracking-[-0.04em] sm:text-6xl md:text-7xl">
                From your
                <br />
                <span className="italic text-[#6f3947]">story to Aura.</span>
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-black/60 md:justify-self-end md:text-base">
              You don&apos;t need to know how to build a website. You just
              need a story you want to share.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              {
                number: "01",
                title: "Tell me",
                text: "Share who it is for, what makes them special and what you want the experience to feel like.",
                color: "bg-[#faf6ef]",
                icon: Heart,
              },
              {
                number: "02",
                title: "We create",
                text: "I bring your photos, memories, messages and ideas together in a website designed just for you.",
                color: "bg-[#e2e9dc]",
                icon: Sparkles,
              },
              {
                number: "03",
                title: "Make them feel",
                text: "Share your personalised experience and give someone a moment they can return to again and again.",
                color: "bg-[#f4d9d1]",
                icon: Star,
              },
            ].map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.55, delay: index * 0.12 }}
                  whileHover={{ y: -5 }}
                  className={`rounded-[2rem] ${step.color} p-7 shadow-sm transition-shadow hover:shadow-lg md:p-9`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs tracking-[0.2em] text-black/45">
                      STEP {step.number}
                    </span>
                    <span className="flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-white/60">
                      <Icon size={20} className="text-[#6f3947]" />
                    </span>
                  </div>

                  <h3 className="mt-9 font-serif text-3xl italic md:text-4xl">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-black/65">
                    {step.text}
                  </p>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-black/10 bg-white/45 p-5 md:p-7">
            <p className="font-serif text-xl italic text-[#6f3947] md:text-2xl">
              You tell me the story. I create the experience.
            </p>

            <a
              href="#contact"
              className="inline-flex items-center gap-3 rounded-full bg-[#25251f] px-5 py-3 text-sm text-white transition-all hover:gap-4"
            >
              Start your story
              <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </section>

      {/* FINAL MESSAGE */}
      <section className="relative overflow-hidden px-6 py-24 md:px-12 md:py-40">
        <div className="aura-glow left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 bg-[#f0b7a4] md:h-[500px] md:w-[500px]" />

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto max-w-5xl text-center"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-black/40">
            Because some moments deserve more
          </p>

          <h2 className="mt-8 font-serif text-5xl leading-[0.95] tracking-[-0.05em] sm:text-6xl md:text-8xl">
            We don&apos;t build
            <br />
            <span className="italic text-[#6f3947]">websites.</span>
            <br />
            We build experiences.
          </h2>

          <div className="mx-auto mt-10 flex h-14 w-14 items-center justify-center rounded-full bg-[#25251f] text-white">
            <Heart size={19} />
          </div>
        </motion.div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="relative bg-[#eadfce] px-6 py-20 md:px-12 md:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <SectionNumber number="06" />

          <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-black/45">
                Start your story
              </p>

              <h2 className="mt-6 max-w-4xl font-serif text-5xl leading-[0.9] tracking-[-0.05em] sm:text-6xl md:text-8xl">
                Tell me
                <br />
                <span className="italic text-[#6f3947]">your story.</span>
              </h2>

              <p className="mt-7 max-w-xl text-sm leading-7 text-black/60 md:text-lg md:leading-8">
                Tell me who it&apos;s for, what you&apos;re celebrating, and
                what you want them to feel when they open it. Let&apos;s turn
                your idea into a personal web experience.
              </p>

              <div className="mt-10 space-y-4 text-sm text-black/60">
                {[
                  "Made personally for your story",
                  "Every detail thoughtfully personalised",
                  "Created with care, just for you",
                ].map((item) => (
                  <p key={item} className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-[#6f3947]" />
                    {item}
                  </p>
                ))}
              </div>
            </div>

            {/* ENQUIRY FORM */}
            <div className="rounded-[2rem] border border-black/10 bg-white/70 p-6 shadow-xl backdrop-blur-md md:p-9">
              <p className="text-xs uppercase tracking-[0.25em] text-black/45">
                Your personal experience
              </p>

              <h3 className="mt-4 font-serif text-3xl italic text-[#6f3947]">
                Let&apos;s make it unforgettable.
              </h3>

              <p className="mt-3 text-sm leading-6 text-black/55">
                Share a few details below. I&apos;ll be in touch to discuss
                your idea.
              </p>

              <form
                action="https://formsubmit.co/aurabyagc@gmail.com"
                method="POST"
                className="mt-8 space-y-5"
              >
                <input
                  type="hidden"
                  name="_subject"
                  value="New AURA Website Enquiry"
                />
                <input type="hidden" name="_captcha" value="true" />
                <input type="hidden" name="_template" value="table" />

                <div>
                  <label htmlFor="aura-name" className="mb-2 block text-sm font-medium text-black/70">
                    Your name *
                  </label>
                  <input
                    id="aura-name"
                    type="text"
                    name="Name"
                    placeholder="What should I call you?"
                    required
                    autoComplete="name"
                    className="w-full rounded-xl border border-black/10 bg-white/80 px-4 py-3 text-sm outline-none transition focus:border-[#6f3947]"
                  />
                </div>

                <div>
                  <label htmlFor="aura-email" className="mb-2 block text-sm font-medium text-black/70">
                    Your email address *
                  </label>
                  <input
                    id="aura-email"
                    type="email"
                    name="Reply Email"
                    placeholder="you@example.com"
                    required
                    autoComplete="email"
                    className="w-full rounded-xl border border-black/10 bg-white/80 px-4 py-3 text-sm outline-none transition focus:border-[#6f3947]"
                  />
                </div>

                <div>
                  <label htmlFor="aura-recipient" className="mb-2 block text-sm font-medium text-black/70">
                    Who is this experience for? *
                  </label>
                  <select
                    id="aura-recipient"
                    name="Experience For"
                    required
                    defaultValue=""
                    className="w-full rounded-xl border border-black/10 bg-white/80 px-4 py-3 text-sm text-black/70 outline-none transition focus:border-[#6f3947]"
                  >
                    <option value="" disabled>Choose one</option>
                    <option>My friend</option>
                    <option>My partner</option>
                    <option>My family member</option>
                    <option>Myself</option>
                    <option>Someone else</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="aura-occasion" className="mb-2 block text-sm font-medium text-black/70">
                    What are we celebrating? *
                  </label>
                  <select
                    id="aura-occasion"
                    name="Occasion"
                    required
                    defaultValue=""
                    className="w-full rounded-xl border border-black/10 bg-white/80 px-4 py-3 text-sm text-black/70 outline-none transition focus:border-[#6f3947]"
                  >
                    <option value="" disabled>Choose an occasion</option>
                    <option>Birthday surprise</option>
                    <option>Love story or anniversary</option>
                    <option>Friendship memories</option>
                    <option>Wedding or engagement</option>
                    <option>Graduation or achievement</option>
                    <option>Just because</option>
                    <option>Something else</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="aura-date" className="mb-2 block text-sm font-medium text-black/70">
                    When do you need it?
                  </label>
                  <input
                    id="aura-date"
                    type="date"
                    name="Needed By"
                    className="w-full rounded-xl border border-black/10 bg-white/80 px-4 py-3 text-sm outline-none transition focus:border-[#6f3947]"
                  />
                </div>

                
                 
<div className="space-y-3">
  <div>
    <label
      htmlFor="aura-currency"
      className="mb-2 block text-sm font-medium text-black/70"
    >
      Currency
    </label>

    <select
      id="aura-currency"
      value={currency}
      onChange={(event) => {
        setCurrency(event.target.value as "INR" | "USD");
        setCurrencyChosenManually(true);
      }}
      className="w-full rounded-xl border border-black/10 bg-white/80 px-4 py-3 text-sm outline-none transition focus:border-[#6f3947]"
    >
      <option value="INR">INR (₹) — Indian Rupee</option>
      <option value="USD">USD ($) — US Dollar</option>
    </select>
  </div>

  <div>
    <label
      htmlFor="aura-budget"
      className="mb-2 block text-sm font-medium text-black/70"
    >
      Your approximate budget
    </label>

    <select
      id="aura-budget"
      name="Budget"
      defaultValue=""
      className="w-full rounded-xl border border-black/10 bg-white/80 px-4 py-3 text-sm outline-none transition focus:border-[#6f3947]"
    >
      <option value="" disabled>
        Select a budget (optional)
      </option>

      {currency === "INR" ? (
        <>
          <option value="INR 79-100">₹79–₹100</option>
          <option value="INR 100-500">₹100–₹500</option>
          <option value="INR 500-1000">₹500–₹1,000</option>
          <option value="INR 1000-1500">₹1,000–₹1,500</option>
        </>
      ) : (
        <>
          <option value="USD 10.78-25">$10.78–$25</option>
          <option value="USD 25-50">$25–$50</option>
          <option value="USD 50-75">$50–$75</option>
          <option value="USD 75-100">$75–$100</option>
        </>
      )}

      <option value="Not sure yet">Not sure yet</option>
    </select>
  </div>
</div>

                <div>
                  <label htmlFor="aura-idea" className="mb-2 block text-sm font-medium text-black/70">
                    Tell me your idea *
                  </label>
                  <textarea
                    id="aura-idea"
                    name="Project Idea"
                    rows={5}
                    placeholder="Who is it for? What memories, photos, surprises, or special details would you love to include?"
                    required
                    className="w-full resize-y rounded-xl border border-black/10 bg-white/80 px-4 py-3 text-sm leading-6 outline-none transition focus:border-[#6f3947]"
                  />
                </div>

                <button
                  type="submit"
                  className="group flex w-full items-center justify-between rounded-full bg-[#25251f] px-6 py-4 text-sm font-medium text-white transition hover:bg-[#6f3947]"
                >
                  <span>Send your enquiry</span>
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </button>

                <p className="text-center text-xs leading-5 text-black/45">
                  Your story matters. I&apos;ll personally review your enquiry
                  and get back to you.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

     
      {/* FOOTER */}
      <footer className="bg-[#25251f] px-6 py-10 text-[#f4f0e6] md:px-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div className="space-y-2">
            <a
              href="#top"
              className="font-serif text-2xl font-bold tracking-[0.12em]"
            >
              AURA
            </a>

            <p className="text-xs leading-6 text-white/50">
              Personal stories. Beautifully experienced.
            </p>
          </div>

          <div className="max-w-md space-y-3">
            <h3 className="font-serif text-lg text-[#f4f0e6]">
              Need a little help?
            </h3>

            <p className="text-sm leading-6 text-white/60">
              Having any questions or facing any issues? Email us directly —
              we're happy to help.
            </p>

            <a
              href="mailto:aurabyagc@gmail.com"
              className="inline-flex items-center gap-2 text-sm text-[#e6b8a7] transition hover:text-white"
            >
              <span aria-hidden="true">✉</span>
              aurabyagc@gmail.com
              <span aria-hidden="true">↗</span>
            </a>

            <div>
              <a
                href="mailto:aurabyagc@gmail.com"
                className="inline-block rounded-full border border-white/20 px-5 py-2 text-xs text-white/80 transition hover:border-[#e6b8a7] hover:text-[#e6b8a7]"
              >
                Contact Us
              </a>
            </div>
          </div>

          <a
            href="#top"
            className="text-xs text-white/65 transition hover:text-white"
          >
            Back to top ↑
          </a>
        </div>

        <div className="mx-auto mt-8 max-w-7xl border-t border-white/10 pt-5 text-xs text-white/35">
          © {new Date().getFullYear()} AURA. Made with care.
        </div>
      </footer>
    </main>
  );
}