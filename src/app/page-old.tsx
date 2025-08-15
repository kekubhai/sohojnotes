import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import './globals.css'
export default function Home() {
  return (
    <div className="min-h-screen bg-scheme-background text-scheme-text">
      {/* Header */}
      <header className="z-[999] flex w-full items-center border-b border-scheme-border bg-scheme-background lg:min-h-18 lg:px-[5%]">
        <div className="size-full lg:flex lg:items-center lg:justify-between">
          <div className="flex min-h-16 items-center justify-between px-[5%] md:min-h-18 lg:min-h-full lg:px-0">
            <a href="#">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/logo-image.svg"
                alt="Logo image"
              />
            </a>
            <button className="-mr-2 flex size-12 flex-col items-center justify-center lg:hidden">
              <span className="my-[3px] h-0.5 w-6 bg-neutral-darkest"></span>
              <span className="my-[3px] h-0.5 w-6 bg-neutral-darkest"></span>
              <span className="my-[3px] h-0.5 w-6 bg-neutral-darkest"></span>
            </button>
          </div>
          <div className="overflow-hidden px-[5%] lg:flex lg:items-center lg:px-0">
            <a href="#" className="text-regular block py-3 first:pt-7 lg:px-4 lg:py-2 first:lg:pt-2">
              Dashboard
            </a>
            <a href="#" className="text-regular block py-3 first:pt-7 lg:px-4 lg:py-2 first:lg:pt-2">
              My Notes
            </a>
            <a href="#" className="text-regular block py-3 first:pt-7 lg:px-4 lg:py-2 first:lg:pt-2">
              Explore Deals
            </a>
            <div className="mt-6 flex flex-col items-center gap-4 lg:mt-0 lg:ml-4 lg:flex-row">
              <Button variant="outline" className="w-full">
                Join
              </Button>
              <Button className="bg-neutral-darkest text-white w-full">
                Login
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-[5%] py-16 md:py-24 lg:py-28">
        <div className="container">
          <div className="flex flex-col items-center">
            <div className="mb-12 text-center md:mb-18 lg:mb-20">
              <div className="w-full max-w-lg">
                <h1 className="heading-h1 mb-5 font-bold md:mb-6">
                  Empower Your Learning Through Collaboration
                </h1>
                <p className="text-medium">
                  Join a vibrant community where students connect to share notes and
                  insights. Collaborate effectively and enhance your academic journey
                  today!
                </p>
                <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
                  <Button className="bg-neutral-darkest text-white px-6 py-3">
                    Get Started
                  </Button>
                  <Button variant="outline" className="px-6 py-3">
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
            <div>
              <button
                type="button"
                className="relative flex w-full items-center justify-center overflow-hidden rounded-image"
              >
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-video-thumbnail-landscape.svg"
                  alt="Relume placeholder image"
                  className="size-full object-cover"
                />
                <span className="absolute inset-0 z-10 bg-neutral-darkest/50"></span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24px"
                  height="24px"
                  viewBox="0 -960 960 960"
                  className="absolute z-20 size-20 text-white"
                  fill="currentColor"
                >
                  <path d="m426-330 195-125q14-9 14-25t-14-25L426-630q-15-10-30.5-1.5T380-605v250q0 18 15.5 26.5T426-330Zm54 250q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-[5%] py-16 md:py-24 lg:py-28">
        <div className="container">
          <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
            <h2 className="heading-h3 font-bold">
              Unlock the power of collaboration with our innovative note-sharing
              platform.
            </h2>
          </div>
          <div className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
            {[
              {
                title: "Hire talented writers or offer your own note-writing services easily.",
                description: "Our platform connects students for seamless note sharing and collaboration.",
                linkText: "Learn More"
              },
              {
                title: "Explore a vast library of notes tailored to your study needs.",
                description: "Discover notes on trending subjects and enhance your learning experience.",
                linkText: "Explore"
              },
              {
                title: "Take advantage of exclusive brand deals to save on educational resources.",
                description: "Join our community and access special offers from top brands.",
                linkText: "Deals"
              }
            ].map((feature, index) => (
              <div key={index} className="flex w-full flex-col items-center text-center">
                <div className="mb-6 md:mb-8">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                    alt="Relume placeholder image"
                    className="rounded-image"
                  />
                </div>
                <h3 className="heading-h5 mb-3 font-bold md:mb-4">
                  {feature.title}
                </h3>
                <p>{feature.description}</p>
                <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                  <Button variant="ghost" className="gap-2 p-0">
                    {feature.linkText}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24px"
                      height="24px"
                      viewBox="0 -960 960 960"
                      className="text-scheme-text"
                      fill="currentColor"
                    >
                      <path d="M504-480 348-636q-11-11-11-28t11-28q11-11 28-11t28 11l184 184q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L404-268q-11 11-28 11t-28-11q-11-11-11-28t11-28l156-156Z"></path>
                    </svg>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-[5%] py-16 md:py-24 lg:py-28">
        <div className="container">
          <div className="mb-12 grid grid-cols-1 items-start justify-between gap-x-12 gap-y-5 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20">
            <div>
              <p className="mb-3 font-semibold md:mb-4">Stats</p>
              <h3 className="heading-h2 font-bold">
                Discover Our Growing Community of Students
              </h3>
            </div>
            <div>
              <p className="text-medium mb-6 md:mb-8">
                Join thousands of students collaborating and sharing notes. Our
                platform empowers you to connect, learn, and succeed together.
              </p>
              <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
                <div>
                  <h3 className="heading-h2 mb-2 font-bold">3000+</h3>
                  <p>of students report improved grades through our services.</p>
                </div>
                <div>
                  <h3 className="heading-h2 mb-2 font-bold">5000+</h3>
                  <p>Notes written by our talented community</p>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                <Button variant="outline" className="px-6 py-3">
                  Learn More
                </Button>
                <Button variant="ghost" className="gap-2 p-0">
                  Explore
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24px"
                    height="24px"
                    viewBox="0 -960 960 960"
                    className="text-scheme-text"
                    fill="currentColor"
                  >
                    <path d="M504-480 348-636q-11-11-11-28t11-28q11-11 28-11t28 11l184 184q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L404-268q-11 11-28 11t-28-11q-11-11-11-28t11-28l156-156Z"></path>
                  </svg>
                </Button>
              </div>
            </div>
          </div>
          <img
            src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
            className="w-full rounded-image object-cover"
            alt="Relume placeholder image"
          />
        </div>
      </section>

      {/* Services Section */}
      <section className="px-[5%] py-16 md:py-24 lg:py-28">
        <div className="container">
          <div className="mb-12 grid grid-cols-1 items-start gap-5 md:mb-18 md:grid-cols-2 md:gap-x-12 lg:mb-20 lg:gap-x-20">
            <div>
              <h2 className="heading-h3 font-bold">
                Unlock Your Potential with Our Student-Centric Collaboration Services
              </h2>
            </div>
            <div>
              <p className="text-medium">
                Our Note Writing Service connects students with skilled writers to
                create high-quality notes tailored to their needs. Whether you need
                comprehensive study materials or quick summaries, our platform makes
                it easy to find the perfect notes. Experience the ease of
                collaboration and elevate your learning today!
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-3 md:gap-x-8 lg:gap-x-12">
            {[
              {
                title: "Hire a Writer for Custom Note-Taking Services",
                description: "Get personalized notes from talented peers who understand your study requirements.",
                linkText: "Learn More"
              },
              {
                title: "Explore a Diverse Range of Note-Taking Services",
                description: "Browse through various subjects and find the notes that suit your learning style.",
                linkText: "Explore"
              },
              {
                title: "Join Our Community of Writers and Learners",
                description: "Become a part of our vibrant community and start sharing your expertise.",
                linkText: "Sign Up"
              }
            ].map((service, index) => (
              <div key={index} className="w-full">
                <div className="mb-6 md:mb-8">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                    alt="Relume placeholder image"
                    className="rounded-image"
                  />
                </div>
                <h3 className="heading-h5 mb-3 font-bold md:mb-4">
                  {service.title}
                </h3>
                <p>{service.description}</p>
                <div className="mt-6 flex items-center gap-4 md:mt-8">
                  <Button variant="ghost" className="gap-2 p-0">
                    {service.linkText}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24px"
                      height="24px"
                      viewBox="0 -960 960 960"
                      className="text-scheme-text"
                      fill="currentColor"
                    >
                      <path d="M504-480 348-636q-11-11-11-28t11-28q11-11 28-11t28 11l184 184q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L404-268q-11 11-28 11t-28-11q-11-11-11-28t11-28l156-156Z"></path>
                    </svg>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="px-[5%] py-16 md:py-24 lg:py-28">
        <div className="container">
          <div className="mb-12 md:mb-18 lg:mb-20">
            <div className="w-full max-w-lg">
              <p className="mb-3 font-semibold md:mb-4">Blog</p>
              <h2 className="heading-h2 mb-5 font-bold md:mb-6">
                Unlocking Student Potential
              </h2>
              <p className="text-medium">
                Discover the power of collaboration among students.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-3">
            {[
              {
                category: "Collaboration",
                title: "The Art of Note-Writing",
                description: "Master effective note-taking techniques for academic success.",
                author: "Jane Doe",
                date: "11 Jan 2022",
                readTime: "5 min read"
              },
              {
                category: "Success",
                title: "Student Success Stories",
                description: "Real-life examples of collaboration leading to academic achievements.",
                author: "John Smith",
                date: "11 Jan 2022",
                readTime: "5 min read"
              },
              {
                category: "Tips",
                title: "Effective Collaboration Techniques",
                description: "Strategies to enhance teamwork and communication among peers.",
                author: "Emily Clark",
                date: "11 Jan 2022",
                readTime: "5 min read"
              }
            ].map((post, index) => (
              <Card key={index} className="overflow-hidden rounded-card border border-scheme-border bg-scheme-foreground text-scheme-text">
                <a href="#" className="w-full max-w-full">
                  <div className="w-full overflow-hidden">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="aspect-[3/2] size-full object-cover"
                    />
                  </div>
                </a>
                <div className="px-5 py-6 md:p-6">
                  <a href="#" className="text-small mb-2 flex font-semibold">
                    {post.category}
                  </a>
                  <a href="#" className="mb-2 block max-w-full">
                    <h5 className="heading-h5 font-bold">{post.title}</h5>
                  </a>
                  <p>{post.description}</p>
                  <div className="mt-4 flex items-center">
                    <div className="mr-4 shrink-0">
                      <img
                        src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                        alt="Relume placeholder avatar"
                        className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                      />
                    </div>
                    <div>
                      <h6 className="text-small font-semibold">{post.author}</h6>
                      <div className="flex items-center">
                        <p className="text-small">{post.date}</p>
                        <span className="mx-2">•</span>
                        <p className="text-small">{post.readTime}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          <div className="flex items-center justify-end">
            <Button variant="outline" className="px-6 py-3 mt-10 md:mt-14 lg:mt-16">
              View all
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="overflow-hidden px-[5%] py-16 md:py-24 lg:py-28">
        <div className="container">
          <div className="relative overflow-hidden">
            <div className="relative">
              <div className="flex ml-0 md:mx-3">
                <div className="min-w-0 shrink-0 grow-0 basis-full pl-0 md:basis-full md:px-16">
                  <div className="mx-auto flex w-full max-w-lg flex-col items-center text-center">
                    <div className="mb-6 md:mb-8">
                      <img
                        src="https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg"
                        alt="Webflow logo 1"
                        className="max-h-14"
                      />
                    </div>
                    <blockquote className="heading-h5 font-bold">
                      "Using this platform transformed my study routine. I
                      found amazing writers who helped me excel in my courses!"
                    </blockquote>
                    <div className="mt-6 flex flex-col items-center justify-center md:mt-8">
                      <div className="mb-3 md:mb-4">
                        <img
                          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                          alt="Testimonial avatar 1"
                          className="size-16 min-h-16 min-w-16 rounded-full object-cover"
                        />
                      </div>
                      <p className="font-semibold">Emily Johnson</p>
                      <p>Student, University A</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-[30px] flex items-center justify-center md:mt-[46px]">
              <button className="relative mx-[3px] inline-block size-2 rounded-full bg-scheme-text/20"></button>
              <button className="relative mx-[3px] inline-block size-2 rounded-full bg-scheme-text/20"></button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-[5%] py-12 md:py-18 lg:py-20">
        <div className="container">
          <Card className="overflow-hidden rounded-card border border-scheme-border bg-scheme-foreground text-scheme-text grid grid-cols-1 gap-x-[8vw] gap-y-12 p-8 md:gap-y-16 md:p-12 lg:grid-cols-[0.75fr_1fr] lg:gap-y-4">
            <div className="flex flex-col">
              <a href="#" className="mb-5 md:mb-6">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/logo-image.svg"
                  alt="Logo image"
                  className="inline-block"
                />
              </a>
              <p className="mb-5 md:mb-6">
                Subscribe to our newsletter for the latest features and updates.
              </p>
              <div className="max-w-md">
                <form className="mb-3 grid grid-cols-1 gap-x-4 gap-y-3 sm:grid-cols-[1fr_max-content] md:gap-y-4">
                  <div className="relative flex w-full items-center">
                    <Input
                      type="email"
                      className="border border-scheme-border bg-scheme-background min-h-11"
                      placeholder="Your email here"
                    />
                  </div>
                  <Button variant="outline" className="px-5 py-2">
                    Join
                  </Button>
                </form>
                <p className="text-tiny">
                  By subscribing, you consent to our Privacy Policy and receive
                  updates.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 items-start gap-y-10 sm:grid-cols-3 sm:gap-x-6 md:gap-x-8 md:gap-y-4">
              <div className="flex flex-col items-start justify-start">
                <h2 className="mb-3 font-semibold md:mb-4">Quick Links</h2>
                <ul>
                  {["About Us", "Contact Us", "Help Center", "Blog Posts", "Careers"].map((link) => (
                    <li key={link} className="text-small py-2">
                      <a href="#" className="flex items-center gap-3">
                        <span>{link}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col items-start justify-start">
                <h2 className="mb-3 font-semibold md:mb-4">Connect With Us</h2>
                <ul>
                  {["Facebook Page", "Instagram Feed", "Twitter Profile", "LinkedIn Page", "YouTube Channel"].map((link) => (
                    <li key={link} className="text-small py-2">
                      <a href="#" className="flex items-center gap-3">
                        <span>{link}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col items-start justify-start">
                <h2 className="mb-3 font-semibold md:mb-4">Stay Updated</h2>
                <ul className="flex flex-col items-start">
                  {[
                    { name: "Facebook", icon: "M12.001 2.002c-5.522 0-9.999 4.477-9.999 9.999 0 4.99 3.656 9.126 8.437 9.879v-6.988h-2.54v-2.891h2.54V9.798c0-2.508 1.493-3.891 3.776-3.891 1.094 0 2.24.195 2.24.195v2.459h-1.264c-1.24 0-1.628.772-1.628 1.563v1.875h2.771l-.443 2.891h-2.328v6.988C18.344 21.129 22 16.992 22 12.001c0-5.522-4.477-9.999-9.999-9.999z" },
                    { name: "Instagram", icon: "M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z" },
                    { name: "Twitter", icon: "M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" },
                    { name: "LinkedIn", icon: "M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM8.339 18.337H5.667v-8.59h2.672v8.59zM7.003 8.574a1.548 1.548 0 1 1 0-3.096 1.548 1.548 0 0 1 0 3.096zm11.335 9.763h-2.669V14.16c0-.996-.018-2.277-1.388-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248h-2.667v-8.59h2.56v1.174h.037c.355-.675 1.227-1.387 2.524-1.387 2.704 0 3.203 1.778 3.203 4.092v4.71z" },
                    { name: "YouTube", icon: "M21.593 7.203a2.506 2.506 0 0 0-1.762-1.766C18.265 5.007 12 5 12 5s-6.264-.007-7.831.404a2.56 2.56 0 0 0-1.766 1.778c-.413 1.566-.417 4.814-.417 4.814s-.004 3.264.406 4.814c.23.857.905 1.534 1.763 1.765 1.582.43 7.83.437 7.83.437s6.265.007 7.831-.403a2.515 2.515 0 0 0 1.767-1.763c.414-1.565.417-4.812.417-4.812s.02-3.265-.407-4.831zM9.996 15.005l.005-6 5.207 3.005-5.212 2.995z" }
                  ].map((social) => (
                    <li key={social.name} className="text-small py-2">
                      <a href="#" className="flex items-center gap-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24px"
                          height="24px"
                          viewBox={social.name === "Twitter" ? "0 0 512 512" : "0 0 24 24"}
                          className={`size-6 text-scheme-text ${social.name === "Twitter" ? "p-0.5" : ""}`}
                          fill="currentColor"
                        >
                          <path d={social.icon}></path>
                        </svg>
                        <span>{social.name}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>
          <div className="text-small flex flex-col-reverse items-start justify-between pt-6 pb-4 md:flex-row md:items-center md:pt-8 md:pb-0">
            <p className="mt-6 md:mt-0">© 2024 Relume. All rights reserved.</p>
            <ul className="text-small grid grid-flow-row grid-cols-[max-content] justify-center gap-y-4 md:grid-flow-col md:gap-x-6 md:gap-y-0">
              {["Privacy Policy", "Terms of Service", "Cookie Settings"].map((link) => (
                <li key={link} className="underline">
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
