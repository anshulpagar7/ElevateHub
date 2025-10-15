import Link from "next/link"
import { ArrowRight, BookOpen, Briefcase, GraduationCap } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Find Gigs Made for Students
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Connect with local businesses and individuals looking for student talent. Find flexible work that fits
                  your schedule.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  href="/gigs"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  Browse Gigs
                </Link>
                <Link
                  href="/post"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  Post a Gig
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-[500px] aspect-square">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl opacity-20 blur-2xl"></div>
                <div className="relative bg-background border rounded-xl shadow-lg p-6 h-full">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <GraduationCap className="h-5 w-5 text-primary" />
                      <h3 className="font-medium">Popular Categories</h3>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        "Web Development",
                        "Graphic Design",
                        "Content Writing",
                        "Marketing",
                        "Data Entry",
                        "Tutoring",
                      ].map((category) => (
                        <div
                          key={category}
                          className="bg-muted rounded-lg p-3 text-sm hover:bg-muted/80 cursor-pointer"
                        >
                          {category}
                        </div>
                      ))}
                    </div>
                    <div className="pt-4">
                      <div className="flex items-center gap-2">
                        <Briefcase className="h-5 w-5 text-primary" />
                        <h3 className="font-medium">Latest Opportunities</h3>
                      </div>
                      <div className="mt-2 space-y-2">
                        {["Website for Local Cafe", "Social Media Management", "Math Tutoring"].map((job) => (
                          <div
                            key={job}
                            className="flex items-center justify-between bg-background rounded-lg p-3 text-sm border"
                          >
                            <span>{job}</span>
                            <ArrowRight className="h-4 w-4" />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Why Choose Us</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Built for Students, by Students</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our platform is designed to help students find flexible work opportunities that fit around their
                studies.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
            <div className="grid gap-4 text-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-muted mx-auto">
                <BookOpen className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Study-Friendly</h3>
              <p className="text-muted-foreground">
                Find gigs that work around your class schedule and academic commitments.
              </p>
            </div>
            <div className="grid gap-4 text-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-muted mx-auto">
                <Briefcase className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Real Experience</h3>
              <p className="text-muted-foreground">
                Build your portfolio with real-world projects and gain valuable work experience.
              </p>
            </div>
            <div className="grid gap-4 text-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-muted mx-auto">
                <GraduationCap className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Student Verified</h3>
              <p className="text-muted-foreground">
                All users are verified students, creating a trusted community for gig work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to find your next gig?
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Join thousands of students already finding flexible work opportunities.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <form className="flex space-x-2">
                <Input type="email" placeholder="Enter your email" className="max-w-lg flex-1" />
                <Button type="submit">Sign Up</Button>
              </form>
              <p className="text-xs text-muted-foreground">
                By signing up, you agree to our{" "}
                <Link href="#" className="underline underline-offset-2">
                  Terms & Conditions
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

