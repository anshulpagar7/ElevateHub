import Link from "next/link"
import { Filter, MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"

// Mock data for gigs
const gigs = [
  {
    id: 1,
    title: "Website Development for Local Cafe",
    description: "Create a simple website for a local cafe with menu, about page, and contact form.",
    budget: "₹300-500",
    location: "Remote",
    category: "Web Development",
    postedDate: "2 days ago",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    duration: "2 weeks",
  },
  {
    id: 2,
    title: "Social Media Content Creation",
    description: "Create engaging content for Instagram and TikTok for a fashion brand targeting college students.",
    budget: "₹20/hour",
    location: "Remote",
    category: "Marketing",
    postedDate: "1 day ago",
    skills: ["Content Creation", "Social Media", "Photography"],
    duration: "Ongoing",
  },
  {
    id: 3,
    title: "Math Tutoring for High School Student",
    description: "Need a tutor for AP Calculus. Two sessions per week, 1 hour each.",
    budget: "₹250/hour",
    location: "In-person",
    category: "Tutoring",
    postedDate: "3 days ago",
    skills: ["Calculus", "Teaching", "Patience"],
    duration: "3 months",
  },
  {
    id: 4,
    title: "Logo Design for Tech Startup",
    description: "Design a modern, minimalist logo for a new tech startup in the education space.",
    budget: "₹150-250",
    location: "Remote",
    category: "Graphic Design",
    postedDate: "5 days ago",
    skills: ["Logo Design", "Illustrator", "Branding"],
    duration: "1 week",
  },
  {
    id: 5,
    title: "Research Assistant for Psychology Professor",
    description: "Help with literature review and data analysis for research on student mental health.",
    budget: "₹800/hour",
    location: "On Campus",
    category: "Research",
    postedDate: "1 week ago",
    skills: ["Research", "Data Analysis", "Psychology"],
    duration: "Semester",
  },
  {
    id: 6,
    title: "Event Photography for Campus Concert",
    description: "Capture photos of upcoming campus concert featuring local bands.",
    budget: "₹200",
    location: "On Campus",
    category: "Photography",
    postedDate: "4 days ago",
    skills: ["Photography", "Editing", "Event Experience"],
    duration: "1 day",
  },
]

export default function GigsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="container py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="w-full md:w-1/4 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Filters</h2>
              <Button variant="ghost" size="sm" className="h-8 text-xs">
                Clear All
              </Button>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="font-medium mb-2">Category</h3>
                <div className="space-y-2">
                  {[
                    "Web Development",
                    "Graphic Design",
                    "Content Writing",
                    "Marketing",
                    "Tutoring",
                    "Research",
                    "Photography",
                  ].map((category) => (
                    <div key={category} className="flex items-center space-x-2">
                      <Checkbox id={`category-₹{category}`} />
                      <Label htmlFor={`category-₹{category}`} className="text-sm font-normal">
                        {category}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="font-medium mb-2">Location</h3>
                <div className="space-y-2">
                  {["Remote", "On Campus", "In-person"].map((location) => (
                    <div key={location} className="flex items-center space-x-2">
                      <Checkbox id={`location-₹{location}`} />
                      <Label htmlFor={`location-₹{location}`} className="text-sm font-normal">
                        {location}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="font-medium mb-2">Duration</h3>
                <div className="space-y-2">
                  {["Less than a week", "1-2 weeks", "3-4 weeks", "1-3 months", "Ongoing"].map((duration) => (
                    <div key={duration} className="flex items-center space-x-2">
                      <Checkbox id={`duration-₹{duration}`} />
                      <Label htmlFor={`duration-₹{duration}`} className="text-sm font-normal">
                        {duration}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="font-medium mb-2">Budget Range</h3>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <Label htmlFor="min-budget" className="text-sm">
                      Min
                    </Label>
                    <Input id="min-budget" placeholder="₹0" className="h-8" />
                  </div>
                  <div>
                    <Label htmlFor="max-budget" className="text-sm">
                      Max
                    </Label>
                    <Input id="max-budget" placeholder="₹1000" className="h-8" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="w-full md:w-3/4 space-y-6">
            {/* Search and Sort */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
              <div className="relative w-full sm:w-auto">
                <Input placeholder="Search gigs..." className="pl-10 w-full sm:w-[300px]" />
                <Filter className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
              </div>
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <Label htmlFor="sort-by" className="text-sm whitespace-nowrap">
                  Sort by:
                </Label>
                <Select defaultValue="newest">
                  <SelectTrigger className="w-full sm:w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">Newest First</SelectItem>
                    <SelectItem value="oldest">Oldest First</SelectItem>
                    <SelectItem value="budget-high">Budget: High to Low</SelectItem>
                    <SelectItem value="budget-low">Budget: Low to High</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Results Count */}
            <div>
              <p className="text-sm text-muted-foreground">
                Showing <span className="font-medium text-foreground">{gigs.length}</span> gigs
              </p>
            </div>

            {/* Gigs Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {gigs.map((gig) => (
                <Link href={`/gigs/₹{gig.id}`} key={gig.id}>
                  <Card className="h-full hover:shadow-md transition-shadow">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-lg">{gig.title}</CardTitle>
                        <Badge variant="outline" className="ml-2 whitespace-nowrap">
                          {gig.category}
                        </Badge>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground mt-1">
                        <MapPin className="h-3.5 w-3.5 mr-1" />
                        {gig.location}
                        <span className="mx-2">•</span>
                        {gig.postedDate}
                      </div>
                    </CardHeader>
                    <CardContent className="pb-2">
                      <p className="text-sm text-muted-foreground line-clamp-2">{gig.description}</p>
                      <div className="flex flex-wrap gap-1 mt-3">
                        {gig.skills.slice(0, 3).map((skill) => (
                          <Badge key={skill} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                        {gig.skills.length > 3 && (
                          <Badge variant="secondary" className="text-xs">
                            +{gig.skills.length - 3} more
                          </Badge>
                        )}
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between pt-2">
                      <div className="text-sm font-medium">{gig.budget}</div>
                      <div className="text-sm text-muted-foreground">{gig.duration}</div>
                    </CardFooter>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

