import Link from "next/link"
import { ArrowLeft, Calendar, Clock, MapPin, Share2, User } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Mock data for a single gig
const gig = {
  id: 1,
  title: "Website Development for Local Cafe",
  description:
    "We're looking for a talented student web developer to create a modern, responsive website for our local cafe. The website should include a homepage, about page, menu page, and contact form. We want a clean, minimalist design that reflects our cafe's cozy atmosphere.\n\nThe ideal candidate will have experience with HTML, CSS, JavaScript, and React. You should be able to implement responsive design principles and ensure the website works well on all devices.\n\nWe'll provide all the content, including text and high-quality images of our cafe and menu items. We're also open to your creative input on the design and user experience.",
  budget: "₹300-500",
  location: "Remote",
  category: "Web Development",
  postedDate: "June 15, 2023",
  postedBy: {
    name: "Sarah Johnson",
    title: "Owner, Sunrise Cafe",
    rating: 4.8,
    reviews: 12,
  },
  skills: ["HTML", "CSS", "JavaScript", "React", "Responsive Design", "UI/UX"],
  duration: "2 weeks",
  applicants: 7,
  requirements: [
    "Experience with React and modern JavaScript",
    "Strong understanding of responsive design principles",
    "Ability to implement a contact form with validation",
    "Portfolio of previous web development work",
    "Excellent communication skills",
  ],
  responsibilities: [
    "Design and develop a responsive website for a local cafe",
    "Implement all required pages (home, about, menu, contact)",
    "Ensure cross-browser compatibility",
    "Optimize website performance and loading speed",
    "Provide basic SEO optimization",
  ],
}

export default function GigDetailsPage({ params }: { params: { id: string } }) {
  return (
    <div className="container py-8">
      <div className="mb-6">
        <Link href="/gigs" className="flex items-center text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Gigs
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="md:col-span-2 space-y-8">
          <div>
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h1 className="text-2xl font-bold">{gig.title}</h1>
                <div className="flex flex-wrap items-center gap-2 mt-2 text-sm text-muted-foreground">
                  <Badge variant="outline">{gig.category}</Badge>
                  <div className="flex items-center">
                    <MapPin className="mr-1 h-3.5 w-3.5" />
                    {gig.location}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="mr-1 h-3.5 w-3.5" />
                    Posted {gig.postedDate}
                  </div>
                  <div className="flex items-center">
                    <Clock className="mr-1 h-3.5 w-3.5" />
                    {gig.duration}
                  </div>
                </div>
              </div>
              <Button className="shrink-0">Apply Now</Button>
            </div>
          </div>

          <Tabs defaultValue="description">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="requirements">Requirements</TabsTrigger>
              <TabsTrigger value="responsibilities">Responsibilities</TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="mt-4 space-y-4">
              <p className="text-sm whitespace-pre-line">{gig.description}</p>
              <div>
                <h3 className="font-medium mb-2">Skills Required</h3>
                <div className="flex flex-wrap gap-2">
                  {gig.skills.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </TabsContent>
            <TabsContent value="requirements" className="mt-4">
              <ul className="space-y-2">
                {gig.requirements.map((req, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary shrink-0"></span>
                    <span className="text-sm">{req}</span>
                  </li>
                ))}
              </ul>
            </TabsContent>
            <TabsContent value="responsibilities" className="mt-4">
              <ul className="space-y-2">
                {gig.responsibilities.map((resp, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary shrink-0"></span>
                    <span className="text-sm">{resp}</span>
                  </li>
                ))}
              </ul>
            </TabsContent>
          </Tabs>

          <div>
            <h3 className="font-medium mb-4">Similar Gigs</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[1, 2].map((id) => (
                <Card key={id} className="hover:shadow-md transition-shadow">
                  <CardHeader className="p-4 pb-2">
                    <CardTitle className="text-base">E-commerce Website for Boutique</CardTitle>
                    <CardDescription className="flex items-center text-xs">
                      <MapPin className="mr-1 h-3 w-3" />
                      Remote
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <div className="flex justify-between items-center">
                      <div className="text-sm font-medium">₹400-600</div>
                      <Link href={`/gigs/₹{id + 10}`}>
                        <Button variant="ghost" size="sm" className="h-8 text-xs">
                          View Details
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Gig Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Budget</span>
                <span className="font-medium">{gig.budget}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Duration</span>
                <span className="font-medium">{gig.duration}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Location</span>
                <span className="font-medium">{gig.location}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Applicants</span>
                <span className="font-medium">{gig.applicants}</span>
              </div>
              <Separator />
              <div className="flex justify-between items-center">
                <Button className="w-full">Apply Now</Button>
              </div>
              <Button variant="outline" size="sm" className="w-full flex items-center gap-2">
                <Share2 className="h-4 w-4" />
                Share Gig
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">About the Client</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
                  <User className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-medium">{gig.postedBy.name}</div>
                  <div className="text-sm text-muted-foreground">{gig.postedBy.title}</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`h-4 w-4 ₹{i < Math.floor(gig.postedBy.rating) ? "text-yellow-400" : "text-gray-300"}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm font-medium">{gig.postedBy.rating}</span>
                <span className="text-sm text-muted-foreground">({gig.postedBy.reviews} reviews)</span>
              </div>
              <div className="text-sm">
                <div className="flex justify-between mb-1">
                  <span>Member since</span>
                  <span>March 2022</span>
                </div>
                <div className="flex justify-between">
                  <span>Gigs posted</span>
                  <span>15</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

