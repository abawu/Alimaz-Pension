"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bath,
  BedDouble,
  CalendarDays,
  Car,
  ChevronDown,
  ChevronRight,
  Clock,
  Coffee,
  ConciergeBell,
  House,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Sparkles,
  Star,
  Users,
  Wifi,
  X
} from "lucide-react";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const imagePath = (name: string) => `${basePath}/images/${name}`;
const image = (name: string) => `url('${imagePath(name)}')`;
const whatsappNumber = "251910971046";
const receptionPhone = "+251 91 097 1046";
const bookingMessage = (message: string) =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

const clientImages = {
  exterior: "photo_2026-06-29_14-09-21.jpg",
  room: "Rooms.jpg",
  wolayta: "visit wolayta.jpg",
  culture: "visit wolayta2.jpg"
};

const heroSlides = [
  {
    image: clientImages.exterior,
    eyebrow: "Welcome to ALIMAZ Pension",
    title: "Experience Premium Hospitality in Wolayta",
    text: "Where comfort meets authentic Ethiopian hospitality."
  },
  {
    image: clientImages.room,
    eyebrow: "Private Rooms",
    title: "Rest Easy. Wake Refreshed.",
    text: "Enjoy peaceful nights and exceptional comfort at ALIMAZ Pension."
  },
  {
    image: clientImages.exterior,
    eyebrow: "Effortless Booking",
    title: "Your Perfect Stay Starts Here.",
    text: "Whether you're traveling for business, family, or adventure, we have the perfect room waiting for you."
  },
  {
    image: clientImages.wolayta,
    eyebrow: "Central Wolayta Access",
    title: "Stay Close to Everything That Matters.",
    text: "Minutes from Gutera Hall, local attractions, restaurants, and the heart of Wolayta."
  },
  {
    image: clientImages.culture,
    eyebrow: "Explore the Region",
    title: "Discover Wolayta. Stay in Comfort.",
    text: "Explore breathtaking landscapes, vibrant culture, and return to a place that feels like home."
  }
];

const rooms = [
  {
    name: "Deluxe Room",
    image: clientImages.room,
    details: "A quiet room with a comfortable bed, private bathroom, and work desk.",
    occupancy: "2 guests",
    price: "From ETB 2,800"
  },
  {
    name: "Standard Room",
    image: clientImages.room,
    details: "Clean, practical, and refined for solo travelers and short business stays.",
    occupancy: "1-2 guests",
    price: "From ETB 2,200"
  },
  {
    name: "Family Room",
    image: clientImages.room,
    details: "Flexible accommodation for families, wedding guests, and group visits.",
    occupancy: "Up to 4 guests",
    price: "Available on request"
  }
];

const amenities = [
  ["Free Wi-Fi", Wifi],
  ["Private Bathroom", Bath],
  ["Hot Shower", Sparkles],
  ["Breakfast", Coffee],
  ["Secure Parking", Car],
  ["Family Rooms", BedDouble],
  ["Daily Housekeeping", House],
  ["24/7 Reception", ConciergeBell]
];

const gallery = [
  ["Rooms", clientImages.room, "h-72"],
  ["Exterior", clientImages.exterior, "h-96"],
  ["Wolayta", clientImages.wolayta, "h-80"],
  ["Culture", clientImages.culture, "h-80"],
  ["Local Views", clientImages.wolayta, "h-96"]
];

const attractions = [
  {
    title: "Wolayta City Gateway",
    time: "Approx. 10 min",
    image: clientImages.wolayta,
    text: "A bright welcome into one of southern Ethiopia's most memorable cultural regions."
  },
  {
    title: "Wolayta Cultural Heritage",
    time: "Seasonal events",
    image: clientImages.culture,
    text: "Traditional dress, music, and dance give guests a vivid sense of place."
  },
  {
    title: "Local Markets & Cuisine",
    time: "Approx. 10-25 min",
    image: clientImages.wolayta,
    text: "Explore local flavors, everyday hospitality, and the rhythm of Wolayta town life."
  }
];

const testimonials = [
  {
    name: "Marta G.",
    place: "Addis Ababa",
    review:
      "The rooms were calm, clean, and beautifully maintained. The team made our family trip feel effortless."
  },
  {
    name: "Daniel T.",
    place: "Hawassa",
    review:
      "Perfect for my Gutera Hall conference visit. It felt polished, convenient, and genuinely welcoming."
  },
  {
    name: "Liya A.",
    place: "Wolayta Sodo",
    review:
      "A refined stay with warm local service. I would recommend it for both work and leisure guests."
  }
];

const primaryNav = [
  ["Home", "home"],
  ["Visit Wolayta", "visit-wolayta"],
  ["Contact", "contact"]
];

function sectionHref(id: string) {
  return `#${id}`;
}

function Logo({ light = false }: { light?: boolean }) {
  return (
    <a href="#home" className="group flex items-center gap-3" aria-label="ALIMAZ Pension home">
      <span className="grid size-11 place-items-center rounded-full border border-gold/45 bg-gold/15 font-heading text-xl text-gold shadow-sm transition group-hover:bg-gold group-hover:text-charcoal">
        A
      </span>
      <span className="leading-none">
        <span className={`block font-heading text-2xl tracking-wide ${light ? "text-white" : "text-charcoal"}`}>
          ALIMAZ
        </span>
        <span className="block text-[0.64rem] font-bold uppercase tracking-[0.28em] text-gold">
          Pension
        </span>
      </span>
    </a>
  );
}

function Reveal({
  children,
  className = ""
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [slide, setSlide] = useState(0);
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [testimonial, setTestimonial] = useState(0);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [roomDetails, setRoomDetails] = useState<(typeof rooms)[number] | null>(null);
  const [bookingForm, setBookingForm] = useState({
    checkIn: "",
    checkOut: "",
    guests: "2 Guests",
    roomType: "Any Room"
  });

  useEffect(() => {
    heroSlides.forEach((item) => {
      const img = new Image();
      img.src = `/images/${item.image}`;
    });
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(window.scrollY > 48);
      setScrollProgress(scrollable > 0 ? Math.min((window.scrollY / scrollable) * 100, 100) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActiveSection(visible.target.id);
      },
      { threshold: [0.35, 0.55], rootMargin: "-18% 0px -55% 0px" }
    );

    ["home", "rooms", "visit-wolayta", "contact"].forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const timer = window.setInterval(
      () => setSlide((index) => (index + 1) % heroSlides.length),
      5600
    );
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = window.setInterval(
      () => setTestimonial((index) => (index + 1) % testimonials.length),
      4200
    );
    return () => window.clearInterval(timer);
  }, []);

  const currentSlide = heroSlides[slide];
  const navTone = scrolled ? "text-charcoal" : "text-white";
  const reservationText = `Hello ALIMAZ Pension, I would like to check room availability.

Check-in: ${bookingForm.checkIn || "Not selected"}
Check-out: ${bookingForm.checkOut || "Not selected"}
Guests: ${bookingForm.guests}
Room type: ${bookingForm.roomType}

Please confirm availability, price, and booking details. Thank you.`;
  const quickMessage =
    "Hello ALIMAZ Pension, I would like to make a reservation. Please share room availability and booking details.";

  return (
    <main className="min-h-screen overflow-hidden bg-warmWhite text-charcoal">
      <link rel="preload" as="image" href={imagePath(heroSlides[0].image)} />
      <div className="fixed inset-x-0 top-0 z-[80] h-1 bg-transparent">
        <div
          className="h-full bg-gold transition-[width] duration-200"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
      <header className="fixed inset-x-0 top-4 z-50 px-4 md:top-6 md:px-8">
        <div
          className={`mx-auto flex max-w-7xl items-center justify-between rounded-full border px-4 py-3 transition-all duration-500 md:px-5 ${
            scrolled
              ? "border-beige bg-warmWhite/96 text-charcoal shadow-nav backdrop-blur-xl"
              : "border-white/18 bg-white/10 text-white shadow-[0_18px_60px_rgba(0,0,0,0.18)] backdrop-blur-2xl"
          }`}
        >
          <Logo light={!scrolled} />

          <nav className="hidden items-center gap-2 text-sm font-semibold lg:flex">
            <a
              href="#home"
              className={`rounded-full px-4 py-3 transition ${
                activeSection === "home"
                  ? "bg-gold/18 text-gold"
                  : `${navTone} hover:text-gold`
              }`}
            >
              Home
            </a>

            <div className="group relative">
              <a
                href="#rooms"
                className={`flex items-center gap-1 rounded-full px-4 py-3 transition ${
                  activeSection === "rooms"
                    ? "bg-gold/18 text-gold"
                    : `${navTone} hover:text-gold`
                }`}
              >
                Rooms <ChevronDown size={15} />
              </a>
              <div className="pointer-events-none absolute left-1/2 top-full w-[38rem] -translate-x-1/2 translate-y-4 opacity-0 transition duration-300 group-hover:pointer-events-auto group-hover:translate-y-3 group-hover:opacity-100">
                <div className="overflow-hidden rounded-[1.5rem] border border-beige bg-warmWhite/97 p-3 text-charcoal shadow-soft backdrop-blur-xl">
                  <div className="grid gap-3 md:grid-cols-[1fr_1fr_1.05fr]">
                    <div className="rounded-[1.1rem] bg-softIvory p-5">
                      <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-gold">
                        Accommodation
                      </p>
                      {["Deluxe Room", "Standard Room", "Family Room"].map(
                        (item) => (
                          <a
                            key={item}
                            href="#rooms"
                            className="flex items-center justify-between rounded-xl px-3 py-3 text-sm font-semibold transition hover:bg-white hover:text-gold"
                          >
                            {item} <ChevronRight size={15} />
                          </a>
                        )
                      )}
                    </div>
                    <div className="rounded-[1.1rem] bg-softIvory p-5">
                      <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-gold">
                        Explore
                      </p>
                      {[
                        ["Room Gallery", "gallery"],
                        ["Amenities", "amenities"],
                        ["Guest Experiences", "guest-experiences"]
                      ].map(([item, id]) => (
                        <a
                          key={item}
                          href={sectionHref(id)}
                          className="flex items-center justify-between rounded-xl px-3 py-3 text-sm font-semibold transition hover:bg-white hover:text-gold"
                        >
                          {item} <ChevronRight size={15} />
                        </a>
                      ))}
                    </div>
                    <div
                      className="image-fill min-h-56 rounded-[1.1rem] p-5"
                      style={{ "--image-url": image(clientImages.room) } as React.CSSProperties}
                    >
                      <div className="flex h-full flex-col justify-end">
                        <span className="w-fit rounded-full bg-white/90 px-3 py-2 text-xs font-bold uppercase tracking-[0.18em] text-charcoal">
                          Private Rooms
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {primaryNav.slice(1).map(([label, id]) => (
              <a
                key={id}
                href={sectionHref(id)}
                className={`rounded-full px-4 py-3 transition ${
                  activeSection === id
                    ? "bg-gold/18 text-gold"
                    : `${navTone} hover:text-gold`
                }`}
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#booking"
              className="hidden rounded-full bg-charcoal px-6 py-3 text-sm font-bold text-champagne shadow-lg shadow-black/10 transition duration-300 hover:-translate-y-0.5 hover:bg-gold hover:text-charcoal md:inline-flex"
            >
              Book Now
            </a>
            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setMenuOpen(true)}
              className={`grid size-11 place-items-center rounded-full border transition lg:hidden ${
                scrolled ? "border-beige text-charcoal" : "border-white/25 text-white"
              }`}
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-charcoal/55 backdrop-blur-sm lg:hidden"
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 28 }}
              className="ml-auto flex h-full w-[88%] max-w-sm flex-col bg-warmWhite p-6 shadow-soft"
            >
              <div className="mb-8 flex items-center justify-between">
                <Logo />
                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={() => setMenuOpen(false)}
                  className="grid size-10 place-items-center rounded-full border border-beige"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="flex flex-col gap-3 text-lg font-semibold">
                {[
                  ["Home", "home"],
                  ["Rooms", "rooms"],
                  ["Visit Wolayta", "visit-wolayta"],
                  ["Contact", "contact"]
                ].map(([label, id]) => (
                  <a
                    key={id}
                    href={sectionHref(id)}
                    onClick={() => setMenuOpen(false)}
                    className="rounded-2xl bg-softIvory px-5 py-4"
                  >
                    {label}
                  </a>
                ))}
                <div className="rounded-2xl border border-beige p-4 text-sm">
                  <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-gold">
                    Rooms
                  </p>
                  {["Deluxe Room", "Standard Room", "Family Room"].map((item) => (
                    <a
                      key={item}
                      href="#rooms"
                      onClick={() => setMenuOpen(false)}
                      className="block py-2 text-slate"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>
              <a
                href="#booking"
                onClick={() => setMenuOpen(false)}
                className="mt-auto rounded-full bg-charcoal px-5 py-4 text-center font-bold text-champagne"
              >
                Book Now
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <section id="home" className="relative h-screen min-h-[720px] overflow-hidden bg-softIvory text-white">
        <div
          className="hero-fallback absolute inset-0"
          style={{ "--image-url": image(heroSlides[0].image) } as React.CSSProperties}
        />
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide.image + currentSlide.title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.15, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <motion.div
              initial={{ scale: 1 }}
              animate={{ scale: 1.08 }}
              transition={{ duration: 6.2, ease: "easeOut" }}
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: image(currentSlide.image) }}
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,10,10,0.74),rgba(10,10,10,0.35),rgba(10,10,10,0.18)),linear-gradient(0deg,rgba(10,10,10,0.58),transparent_45%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_26%_42%,rgba(200,169,106,0.16),transparent_28%)]" />

        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-5 md:px-8">
          <div className="max-w-4xl pt-20">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide.title}
                initial={{ opacity: 0, y: 34 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.75, ease: "easeOut" }}
              >
                <motion.p
                  initial={{ letterSpacing: "0.12em", opacity: 0 }}
                  animate={{ letterSpacing: "0.34em", opacity: 1 }}
                  transition={{ duration: 0.9, ease: "easeOut" }}
                  className="mb-5 text-xs font-bold uppercase text-champagne md:text-sm"
                >
                  {currentSlide.eyebrow}
                </motion.p>
                <h1 className="max-w-5xl font-heading text-5xl leading-[0.95] md:text-7xl lg:text-8xl">
                  {currentSlide.title}
                </h1>
                <p className="mt-7 max-w-2xl text-lg leading-8 text-white/82 md:text-xl">
                  {currentSlide.text}
                </p>
                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <motion.a
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.98 }}
                    href="#booking"
                    className="rounded-full bg-champagne px-8 py-4 text-center text-sm font-bold text-charcoal shadow-[0_20px_50px_rgba(0,0,0,0.24)] transition hover:bg-gold"
                  >
                    Book Your Stay
                  </motion.a>
                  <motion.a
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.98 }}
                    href="#visit-wolayta"
                    className="rounded-full border border-white/28 bg-white/8 px-8 py-4 text-center text-sm font-bold text-white backdrop-blur-md transition hover:border-champagne hover:text-champagne"
                  >
                    Explore Wolayta
                  </motion.a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="absolute bottom-8 left-5 right-5 z-10 mx-auto flex max-w-7xl items-end justify-between gap-8 md:px-3">
          <div className="hidden gap-3 md:flex">
            {heroSlides.map((item, index) => (
              <button
                key={item.title}
                type="button"
                onClick={() => setSlide(index)}
                className={`h-1.5 rounded-full transition-all ${
                  slide === index ? "w-16 bg-champagne" : "w-8 bg-white/35"
                }`}
                aria-label={`Show slide ${index + 1}`}
              />
            ))}
          </div>
          <div className="ml-auto rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white/78 backdrop-blur-md">
            0{slide + 1} / 0{heroSlides.length}
          </div>
        </div>
      </section>

      <section id="booking" className="relative z-20 -mt-20 px-5 md:px-8">
        <Reveal className="mx-auto max-w-6xl rounded-[2rem] border border-white/60 bg-warmWhite/96 p-5 shadow-soft backdrop-blur-xl md:p-7">
          <div className="grid gap-4 lg:grid-cols-[1fr_1fr_0.8fr_1fr_auto]">
            {["Check-in", "Check-out"].map((label) => (
              <label key={label} className="block">
                <span className="mb-2 block text-xs font-bold uppercase tracking-[0.2em] text-slate">
                  {label}
                </span>
                <div className="flex items-center gap-3 rounded-2xl bg-softIvory px-4 py-4">
                  <CalendarDays size={18} className="text-gold" />
                  <input
                    type="date"
                    value={label === "Check-in" ? bookingForm.checkIn : bookingForm.checkOut}
                    onChange={(event) =>
                      setBookingForm((value) => ({
                        ...value,
                        [label === "Check-in" ? "checkIn" : "checkOut"]: event.target.value
                      }))
                    }
                    className="w-full bg-transparent outline-none"
                  />
                </div>
              </label>
            ))}
            <label className="block">
              <span className="mb-2 block text-xs font-bold uppercase tracking-[0.2em] text-slate">
                Guests
              </span>
              <div className="flex items-center gap-3 rounded-2xl bg-softIvory px-4 py-4">
                <Users size={18} className="text-gold" />
                <select
                  value={bookingForm.guests}
                  onChange={(event) =>
                    setBookingForm((value) => ({ ...value, guests: event.target.value }))
                  }
                  className="w-full bg-transparent outline-none"
                >
                  <option>1 Guest</option>
                  <option>2 Guests</option>
                  <option>3 Guests</option>
                  <option>4+ Guests</option>
                </select>
              </div>
            </label>
            <label className="block">
              <span className="mb-2 block text-xs font-bold uppercase tracking-[0.2em] text-slate">
                Room Type
              </span>
              <div className="flex items-center gap-3 rounded-2xl bg-softIvory px-4 py-4">
                <BedDouble size={18} className="text-gold" />
                <select
                  value={bookingForm.roomType}
                  onChange={(event) =>
                    setBookingForm((value) => ({ ...value, roomType: event.target.value }))
                  }
                  className="w-full bg-transparent outline-none"
                >
                  <option>Any Room</option>
                  <option>Deluxe Room</option>
                  <option>Standard Room</option>
                  <option>Family Room</option>
                </select>
              </div>
            </label>
            <button
              type="button"
              onClick={() => setBookingOpen(true)}
              className="mt-6 rounded-2xl bg-charcoal px-8 py-4 font-bold text-champagne transition hover:-translate-y-0.5 hover:bg-gold hover:text-charcoal lg:mt-7"
            >
              Check Availability
            </button>
          </div>
        </Reveal>
      </section>

      <section id="rooms" className="px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-7xl">
          <Reveal className="mb-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.35em] text-gold">
                Accommodation
              </p>
              <h2 className="font-heading text-4xl md:text-6xl">
                Quiet rooms with the comfort that matters most.
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-slate">
              Every room is presented with the client&apos;s real photography,
              practical amenities, and a simple path to direct booking.
            </p>
          </Reveal>
          <div className="grid gap-6 lg:grid-cols-3">
            {rooms.map((room) => (
              <Reveal key={room.name}>
                <article className="group overflow-hidden rounded-[1.7rem] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
                  <div className="overflow-hidden">
                    <div
                      className="image-fill h-80 transition duration-700 group-hover:scale-[1.04]"
                      style={{ "--image-url": image(room.image) } as React.CSSProperties}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading text-3xl">{room.name}</h3>
                    <p className="mt-3 text-slate">{room.details}</p>
                    <div className="mt-5 flex items-center justify-between rounded-2xl bg-softIvory px-4 py-3 text-sm">
                      <span className="flex items-center gap-2">
                        <Users size={17} className="text-gold" />
                        {room.occupancy}
                      </span>
                      <span className="font-semibold">{room.price}</span>
                    </div>
                    <div className="mt-6 flex flex-wrap gap-3">
                      <button
                        type="button"
                        onClick={() => setRoomDetails(room)}
                        className="inline-flex items-center gap-2 font-semibold text-charcoal transition hover:text-gold"
                      >
                        View details <ChevronRight size={17} />
                      </button>
                      <a
                        href={bookingMessage(
                          `Hello ALIMAZ Pension, I would like to reserve the ${room.name}. Please confirm availability, price, and booking details.`
                        )}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-softIvory px-4 py-2 text-sm font-bold transition hover:bg-gold hover:text-charcoal"
                      >
                        WhatsApp <MessageCircle size={16} />
                      </a>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="amenities" className="bg-softIvory px-5 py-20 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <Reveal>
            <div
              className="image-fill min-h-[30rem] rounded-[2rem] shadow-soft"
              style={{ "--image-url": image(clientImages.exterior) } as React.CSSProperties}
            />
          </Reveal>
          <div>
            <Reveal>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.35em] text-gold">
                Amenities
              </p>
              <h2 className="font-heading text-4xl md:text-5xl">
                Everything essential, delivered with boutique care.
              </h2>
            </Reveal>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {amenities.map(([label, Icon]) => (
                <Reveal key={label as string}>
                  <div className="rounded-2xl bg-warmWhite p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
                    <Icon className="mb-5 text-gold" size={24} />
                    <p className="font-semibold">{label as string}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-7xl">
          <Reveal className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.35em] text-gold">
                Room Gallery
              </p>
              <h2 className="font-heading text-4xl md:text-6xl">
                Real views from ALIMAZ and Wolayta.
              </h2>
            </div>
            <p className="max-w-md text-slate">
              A polished gallery using only client-provided photography.
            </p>
          </Reveal>
          <div className="masonry">
            {gallery.map(([category, photo, height]) => (
              <button
                key={`${category}-${photo}`}
                type="button"
                onClick={() => setLightbox(photo)}
                className={`masonry-item image-fill relative w-full overflow-hidden rounded-[1.5rem] ${height} text-left shadow-sm transition hover:-translate-y-1 hover:shadow-soft`}
                style={{ "--image-url": image(photo) } as React.CSSProperties}
              >
                <span className="absolute bottom-4 left-4 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold">
                  {category}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section id="visit-wolayta" className="bg-charcoal px-5 py-24 text-white md:px-8 md:py-32">
        <div className="mx-auto max-w-7xl">
          <Reveal className="mb-12 grid gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-end">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.35em] text-champagne">
                Visit Wolayta
              </p>
              <h2 className="font-heading text-4xl md:text-6xl">
                Discover Wolayta&apos;s Beauty and Culture
              </h2>
            </div>
            <p className="text-lg leading-8 text-white/70">
              Stay at ALIMAZ Pension and move easily between city access,
              culture, landscapes, markets, and event destinations.
            </p>
          </Reveal>
          <div className="grid gap-6 lg:grid-cols-3">
            {attractions.map((place) => (
              <Reveal key={place.title}>
                <article className="group overflow-hidden rounded-[1.7rem] bg-white/[0.07] shadow-sm transition hover:-translate-y-1 hover:bg-white/[0.1]">
                  <div className="overflow-hidden">
                    <div
                      className="image-fill h-72 transition duration-700 group-hover:scale-[1.04]"
                      style={{ "--image-url": image(place.image) } as React.CSSProperties}
                    />
                  </div>
                  <div className="p-6">
                    <div className="mb-4 flex items-center gap-2 text-sm text-champagne">
                      <Clock size={16} /> {place.time} from ALIMAZ
                    </div>
                    <h3 className="font-heading text-3xl">{place.title}</h3>
                    <p className="mt-3 text-white/72">{place.text}</p>
                    <button className="mt-6 inline-flex items-center gap-2 font-semibold text-champagne">
                      Learn More <ChevronRight size={17} />
                    </button>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="events-and-meetings" className="px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div
              className="image-fill min-h-[32rem] rounded-[2rem] shadow-soft"
              style={{ "--image-url": image(clientImages.exterior) } as React.CSSProperties}
            />
          </Reveal>
          <Reveal>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.35em] text-gold">
              Events & Meetings
            </p>
            <h2 className="font-heading text-4xl md:text-6xl">
              Perfect Stay for Meetings & Events
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate">
              Attending an event at Gutera Hall? ALIMAZ Pension offers
              comfortable accommodation just minutes away, making it the ideal
              choice for business travelers, conference participants, wedding
              guests, and families.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                "Wedding guests",
                "Conference attendees",
                "Business travelers",
                "Training participants",
                "Family events",
                "Government and NGO workshops"
              ].map((item) => (
                <div key={item} className="rounded-2xl bg-softIvory px-4 py-3 font-medium">
                  {item}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section id="guest-experiences" className="bg-softIvory px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <Reveal>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.35em] text-gold">
              Guest Experiences
            </p>
            <h2 className="font-heading text-4xl md:text-6xl">
              Trusted by travelers who value comfort and care.
            </h2>
            <motion.div
              key={testimonial}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-10 rounded-[2rem] bg-white p-8 shadow-soft"
            >
              <div className="mb-6 flex gap-1 text-gold">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} size={20} fill="currentColor" />
                ))}
              </div>
              <p className="font-heading text-2xl leading-10">
                &ldquo;{testimonials[testimonial].review}&rdquo;
              </p>
              <p className="mt-8 font-semibold">{testimonials[testimonial].name}</p>
              <p className="text-slate">{testimonials[testimonial].place}</p>
            </motion.div>
          </Reveal>
          <Reveal>
            <div
              className="image-fill min-h-[34rem] rounded-[2rem] shadow-soft"
              style={{ "--image-url": image(clientImages.culture) } as React.CSSProperties}
            />
          </Reveal>
        </div>
      </section>

      <section id="contact" className="relative overflow-hidden px-5 py-24 md:px-8 md:py-32">
        <div
          className="image-fill absolute inset-0 opacity-15"
          style={{ "--image-url": image(clientImages.exterior) } as React.CSSProperties}
        />
        <div className="absolute inset-0 bg-warmWhite/88" />
        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.35em] text-gold">
              Contact
            </p>
            <h2 className="font-heading text-4xl md:text-6xl">
              Reserve directly with ALIMAZ Pension.
            </h2>
            <div className="mt-8 space-y-4 text-slate">
              <p className="flex items-center gap-3">
                <Phone className="text-gold" size={20} /> {receptionPhone}
              </p>
              <p className="flex items-center gap-3">
                <Mail className="text-gold" size={20} /> reservations@alimazpension.com
              </p>
              <p className="flex items-center gap-3">
                <MapPin className="text-gold" size={20} /> Wolayta, Ethiopia
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={bookingMessage(quickMessage)}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-charcoal px-6 py-4 text-center font-semibold text-champagne transition hover:-translate-y-0.5 hover:bg-gold hover:text-charcoal"
              >
                WhatsApp Reservation
              </a>
              <a
                href={`tel:+${whatsappNumber}`}
                className="rounded-full bg-white px-6 py-4 text-center font-semibold transition hover:text-gold"
              >
                Call Reception
              </a>
            </div>
            <div className="mt-8 min-h-80 overflow-hidden rounded-[1.5rem] bg-warmWhite shadow-soft">
              <iframe
                title="ALIMAZ Pension map"
                src="https://www.google.com/maps?q=Wolayta%20Sodo%20Ethiopia&output=embed"
                className="h-80 w-full"
                loading="lazy"
              />
            </div>
          </Reveal>
          <Reveal>
            <form className="rounded-[2rem] bg-warmWhite/96 p-6 shadow-soft backdrop-blur-xl md:p-8">
              <div className="grid gap-5">
                <input
                  aria-label="Full name"
                  placeholder="Full name"
                  className="rounded-2xl bg-softIvory px-5 py-4 outline-none focus:ring-2 focus:ring-gold/50"
                />
                <input
                  aria-label="Email address"
                  type="email"
                  placeholder="Email address"
                  className="rounded-2xl bg-softIvory px-5 py-4 outline-none focus:ring-2 focus:ring-gold/50"
                />
                <input
                  aria-label="Phone or WhatsApp"
                  placeholder="Phone or WhatsApp"
                  className="rounded-2xl bg-softIvory px-5 py-4 outline-none focus:ring-2 focus:ring-gold/50"
                />
                <textarea
                  aria-label="Message"
                  placeholder="Tell us your travel dates, room needs, or event plans."
                  rows={6}
                  className="rounded-2xl bg-softIvory px-5 py-4 outline-none focus:ring-2 focus:ring-gold/50"
                />
                <button className="rounded-2xl bg-charcoal px-8 py-4 font-bold text-champagne transition hover:-translate-y-0.5 hover:bg-gold hover:text-charcoal">
                  Send Inquiry
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </section>

      <footer className="bg-charcoal px-5 py-12 text-white md:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <Logo light />
            <p className="mt-4 max-w-md text-white/65">
              Premium Wolayta hospitality for restful stays, business visits,
              cultural trips, and nearby Gutera Hall events.
            </p>
          </div>
          <div>
            <p className="mb-4 font-semibold text-champagne">Quick Links</p>
            <div className="grid gap-2 text-white/70">
              {[
                ["Rooms", "rooms"],
                ["Visit Wolayta", "visit-wolayta"],
                ["Guest Experiences", "guest-experiences"],
                ["Contact", "contact"]
              ].map(([label, id]) => (
                <a key={id} href={sectionHref(id)}>
                  {label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <p className="mb-4 font-semibold text-champagne">Direct Booking</p>
            <a
              href={bookingMessage(quickMessage)}
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-full bg-champagne px-5 py-3 font-semibold text-charcoal"
            >
              Reserve on WhatsApp
            </a>
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-sm text-white/50">
          Copyright © 2026 ALIMAZ Pension. All rights reserved.
        </div>
      </footer>

      {lightbox && (
        <button
          type="button"
          aria-label="Close image"
          onClick={() => setLightbox(null)}
          className="fixed inset-0 z-[70] grid place-items-center bg-black/86 p-5"
        >
          <div
            className="image-fill h-[82vh] w-full max-w-6xl rounded-[1.5rem]"
            style={{ "--image-url": image(lightbox) } as React.CSSProperties}
          />
        </button>
      )}

      <a
        href={bookingMessage(quickMessage)}
        target="_blank"
        rel="noreferrer"
        aria-label="Reserve on WhatsApp"
        className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-3 rounded-full bg-[#1f7a45] px-5 py-4 text-sm font-bold text-white shadow-[0_18px_45px_rgba(0,0,0,0.28)] transition hover:-translate-y-1 hover:bg-[#249653] md:bottom-7 md:right-7"
      >
        <MessageCircle size={21} />
        <span className="hidden sm:inline">Reserve on WhatsApp</span>
      </a>

      <AnimatePresence>
        {bookingOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[75] grid place-items-center bg-charcoal/70 p-5 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, y: 28, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 18, scale: 0.96 }}
              className="w-full max-w-xl rounded-[2rem] bg-warmWhite p-6 shadow-soft md:p-8"
            >
              <div className="mb-6 flex items-start justify-between gap-5">
                <div>
                  <p className="mb-2 text-xs font-bold uppercase tracking-[0.28em] text-gold">
                    Booking Request
                  </p>
                  <h3 className="font-heading text-4xl">Send a clear WhatsApp message</h3>
                </div>
                <button
                  type="button"
                  aria-label="Close booking request"
                  onClick={() => setBookingOpen(false)}
                  className="grid size-10 shrink-0 place-items-center rounded-full border border-beige"
                >
                  <X size={19} />
                </button>
              </div>
              <div className="rounded-2xl bg-softIvory p-5 text-sm leading-7 text-slate">
                <p>Check-in: {bookingForm.checkIn || "Not selected"}</p>
                <p>Check-out: {bookingForm.checkOut || "Not selected"}</p>
                <p>Guests: {bookingForm.guests}</p>
                <p>Room type: {bookingForm.roomType}</p>
              </div>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href={bookingMessage(reservationText)}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-charcoal px-6 py-4 text-center font-bold text-champagne transition hover:bg-gold hover:text-charcoal"
                >
                  Send on WhatsApp
                </a>
                <button
                  type="button"
                  onClick={() => setBookingOpen(false)}
                  className="rounded-full bg-white px-6 py-4 font-bold transition hover:text-gold"
                >
                  Edit Details
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {roomDetails && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[74] grid place-items-center bg-charcoal/70 p-5 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, y: 28, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 18, scale: 0.96 }}
              className="grid w-full max-w-4xl overflow-hidden rounded-[2rem] bg-warmWhite shadow-soft md:grid-cols-[0.9fr_1.1fr]"
            >
              <div
                className="image-fill min-h-80"
                style={{ "--image-url": image(roomDetails.image) } as React.CSSProperties}
              />
              <div className="p-6 md:p-8">
                <div className="mb-5 flex items-start justify-between gap-5">
                  <div>
                    <p className="mb-2 text-xs font-bold uppercase tracking-[0.28em] text-gold">
                      Room Details
                    </p>
                    <h3 className="font-heading text-4xl">{roomDetails.name}</h3>
                  </div>
                  <button
                    type="button"
                    aria-label="Close room details"
                    onClick={() => setRoomDetails(null)}
                    className="grid size-10 shrink-0 place-items-center rounded-full border border-beige"
                  >
                    <X size={19} />
                  </button>
                </div>
                <p className="text-lg leading-8 text-slate">{roomDetails.details}</p>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl bg-softIvory p-4">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate">
                      Occupancy
                    </p>
                    <p className="mt-2 font-semibold">{roomDetails.occupancy}</p>
                  </div>
                  <div className="rounded-2xl bg-softIvory p-4">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate">
                      Rate
                    </p>
                    <p className="mt-2 font-semibold">{roomDetails.price}</p>
                  </div>
                </div>
                <a
                  href={bookingMessage(
                    `Hello ALIMAZ Pension, I would like to reserve the ${roomDetails.name}. Please confirm availability, price, and booking requirements.`
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-7 inline-flex rounded-full bg-charcoal px-6 py-4 font-bold text-champagne transition hover:bg-gold hover:text-charcoal"
                >
                  Reserve this room on WhatsApp
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
