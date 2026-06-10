import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-800 via-green-700 to-lime-600 text-white">
        <div className="absolute -left-24 top-16 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-yellow-300/20 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 md:grid-cols-2">
          <div>
            <p className="mb-4 inline-flex rounded-full bg-white/15 px-4 py-2 text-sm font-semibold">
              Gulfport&apos;s local nutrition spot
            </p>

            <h1 className="mb-6 text-5xl font-bold leading-tight md:text-6xl">
              Healthy energy for your busiest days.
            </h1>

            <p className="mb-8 max-w-xl text-lg text-white/90">
              Protein shakes, loaded energy teas, wellness challenges, and a
              positive community built to help Gulfport feel better every day.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#menu"
                className="rounded-full bg-white px-6 py-3 font-semibold text-green-800 transition hover:bg-green-50"
              >
                View Menu
              </a>

              <a
                href="#location"
                className="rounded-full border border-white/70 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                Get Directions
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] bg-white/15 p-6 shadow-2xl backdrop-blur">
            <div className="rounded-[1.5rem] bg-white p-8 text-gray-900">
              <p className="mb-2 text-sm font-bold uppercase tracking-wide text-green-700">
                Today&apos;s Focus
              </p>

              <h2 className="mb-4 text-3xl font-bold">
                Shakes. Teas. Community.
              </h2>

              <div className="space-y-4">
                <div className="rounded-xl bg-green-50 p-4">
                  <p className="font-semibold text-green-900">
                    Meal replacement shakes
                  </p>
                  <p className="text-sm text-gray-600">
                    Protein-packed and customizable.
                  </p>
                </div>

                <div className="rounded-xl bg-lime-50 p-4">
                  <p className="font-semibold text-green-900">
                    Loaded energy teas
                  </p>
                  <p className="text-sm text-gray-600">
                    Refreshing flavor with clean energy.
                  </p>
                </div>

                <div className="rounded-xl bg-yellow-50 p-4">
                  <p className="font-semibold text-green-900">
                    Wellness challenges
                  </p>
                  <p className="text-sm text-gray-600">
                    Accountability, goals, and local support.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Drinks */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-wide text-green-700">
              Local Favorites
            </p>

            <h2 className="text-4xl font-bold text-gray-950">
              Fresh shakes and loaded teas made for Gulfport energy.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Loaded Energy Teas",
                desc: "Bright, refreshing teas made for clean energy and hydration.",
                image: "/images/drink-1.jpg",
              },
              {
                title: "Protein Shakes",
                desc: "Smooth, filling shakes packed with flavor and protein.",
                image: "/images/drink-2.jpg",
              },
              {
                title: "Wellness Combos",
                desc: "Pair your favorite tea and shake for a complete daily boost.",
                image: "/images/drink-3.jpg",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="h-72 overflow-hidden bg-green-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  <h3 className="mb-2 text-2xl font-bold text-green-900">
                    {item.title}
                  </h3>

                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-lime-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-wide text-green-700">
              Community Love
            </p>

            <h2 className="text-4xl font-bold text-gray-950">
              A local spot people can feel good about visiting.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                quote:
                  "Great drinks, friendly service, and the perfect stop when I need energy for the day.",
                name: "Local Customer",
              },
              {
                quote:
                  "The loaded teas are refreshing and the atmosphere is always positive.",
                name: "Gulfport Guest",
              },
              {
                quote:
                  "Love having a healthy option nearby for shakes, teas, and wellness motivation.",
                name: "Repeat Visitor",
              },
            ].map((item) => (
              <div
                key={item.quote}
                className="rounded-3xl bg-white p-6 shadow-sm"
              >
                <p className="mb-4 text-xl font-bold text-yellow-500">★★★★★</p>

                <p className="mb-6 text-gray-700">&ldquo;{item.quote}&rdquo;</p>

                <p className="font-semibold text-green-900">— {item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-wide text-green-700">
              Menu Favorites
            </p>

            <h2 className="text-4xl font-bold text-gray-950">
              Drinks made for energy, nutrition, and everyday wellness.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Loaded Energy Teas",
                desc: "Refreshing flavors with energy, hydration, and a lighter feel.",
                items: ["Tropical", "Watermelon", "Peach", "Blue Raspberry"],
              },
              {
                title: "Protein Shakes",
                desc: "Smooth, filling shakes designed as a better meal option.",
                items: [
                  "Chocolate",
                  "Vanilla",
                  "Strawberry",
                  "Cookies & Cream",
                ],
              },
              {
                title: "Specialty Combos",
                desc: "Pair your favorite tea and shake for a complete stop.",
                items: [
                  "Tea + Shake",
                  "Post-workout",
                  "Morning boost",
                  "Seasonal picks",
                ],
              },
            ].map((category) => (
              <div
                key={category.title}
                className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="mb-3 text-2xl font-bold text-green-900">
                  {category.title}
                </h3>

                <p className="mb-5 text-gray-600">{category.desc}</p>

                <div className="flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-green-50 px-3 py-1 text-sm font-medium text-green-800"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-green-950 py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-wide text-lime-300">
              More than drinks
            </p>

            <h2 className="mb-6 text-4xl font-bold">
              A local spot built around better habits and community support.
            </h2>

            <p className="mb-6 text-lg text-white/80">
              Gulfport Nutrition helps customers start their day with energy,
              protein, hydration, and encouragement. Whether someone is grabbing
              a quick tea, replacing a meal, or joining a wellness challenge,
              the goal is simple: help people feel better and stay consistent.
            </p>

            <a
              href="https://www.facebook.com/gulfportnutrition/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-full bg-lime-300 px-6 py-3 font-semibold text-green-950"
            >
              Follow on Facebook
            </a>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Local wellness support",
              "Positive daily energy",
              "Meal replacement options",
              "Community challenges",
            ].map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-white/10 bg-white/10 p-6"
              >
                <p className="text-xl font-bold">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Gallery */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-wide text-green-700">
              Fresh Daily
            </p>

            <h2 className="text-4xl font-bold text-gray-950">
              Stop in for shakes, teas, and good energy.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="overflow-hidden rounded-3xl">
              <img
                src="/images/drink-1.jpg"
                alt="Drink 1"
                className="h-80 w-full object-cover"
              />
            </div>

            <div className="overflow-hidden rounded-3xl">
              <img
                src="/images/drink-2.jpg"
                alt="Drink 2"
                className="h-80 w-full object-cover"
              />
            </div>

            <div className="overflow-hidden rounded-3xl">
              <img
                src="/images/drink-3.jpg"
                alt="Drink 3"
                className="h-80 w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Location */}
      <section id="location" className="bg-gray-100 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-wide text-green-700">
              Visit us
            </p>

            <h2 className="mb-6 text-4xl font-bold text-gray-950">
              Stop by Gulfport Nutrition.
            </h2>

            <div className="space-y-4 text-lg text-gray-700">
              <p>
                <strong>Address:</strong> 15456 Dedeaux Rd, Gulfport, MS 39503
              </p>

              <p>
                <strong>Hours:</strong> Mon–Fri 6:30 AM – 5:30 PM | Sat 10:00 AM
                – 2:00 PM
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://www.google.com/maps/search/?api=1&query=15456+Dedeaux+Rd+Gulfport+MS+39503"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-green-700 px-6 py-3 font-semibold text-white hover:bg-green-800"
              >
                Get Directions
              </a>

              <a
                href="https://www.facebook.com/gulfportnutrition/"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-green-700 px-6 py-3 font-semibold text-green-800 hover:bg-green-50"
              >
                Message on Facebook
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
            <iframe
              title="Gulfport Nutrition Map"
              src="https://www.google.com/maps?q=15456%20Dedeaux%20Rd%20Gulfport%20MS%2039503&output=embed"
              className="h-[360px] w-full"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-wide text-green-700">
            Ready when you are
          </p>

          <h2 className="mb-6 text-4xl font-bold text-gray-950">
            Start your day with something better.
          </h2>

          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600">
            Follow Gulfport Nutrition for daily specials, challenge updates, new
            flavors, and community wellness events.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://www.facebook.com/gulfportnutrition/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-green-700 px-6 py-3 font-semibold text-white hover:bg-green-800"
            >
              Visit Facebook
            </a>

            <a
              href="https://www.google.com/maps/search/?api=1&query=15456+Dedeaux+Rd+Gulfport+MS+39503"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-green-700 px-6 py-3 font-semibold text-green-800 hover:bg-green-50"
            >
              Find Location
            </a>
          </div>
        </div>
      </section>

      {/* Mobile Action Bar */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-gray-200 bg-white p-3 shadow-lg md:hidden">
        <div className="grid grid-cols-3 gap-2 text-center text-sm font-semibold">
          <a
            href="https://www.google.com/maps/search/?api=1&query=15456+Dedeaux+Rd+Gulfport+MS+39503"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-green-700 px-3 py-3 text-white"
          >
            Directions
          </a>

          <a
            href="https://www.facebook.com/gulfportnutrition/"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-lime-200 px-3 py-3 text-green-950"
          >
            Facebook
          </a>

          <a
            href="https://www.facebook.com/gulfportnutrition/"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-green-950 px-3 py-3 text-white"
          >
            Order
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-green-950 px-6 pb-28 pt-10 text-white md:pb-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-xl font-bold">Gulfport Nutrition</h3>
            <p className="mt-2 text-sm text-white/70">
              Healthy shakes, loaded teas, and wellness support in Gulfport, MS.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 text-sm text-white/80">
            <a href="#menu" className="hover:text-lime-300">
              Menu
            </a>
            <a href="#about" className="hover:text-lime-300">
              About
            </a>
            <a href="#location" className="hover:text-lime-300">
              Location
            </a>
            <a
              href="https://www.facebook.com/gulfportnutrition/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-lime-300"
            >
              Facebook
            </a>
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-7xl border-t border-white/10 pt-6 text-sm text-white/50">
          © {new Date().getFullYear()} Gulfport Nutrition. Website built by
          Michael Sullivan.
        </div>
        <a
          href="https://www.facebook.com/gulfportnutrition/"
          target="_blank"
          rel="noreferrer"
          className="fixed bottom-6 right-6 z-50 rounded-full bg-green-700 px-6 py-3 font-semibold text-white shadow-lg transition hover:scale-105 hover:bg-green-800"
        >
          Order Now
        </a>
      </footer>
    </main>
  );
}
