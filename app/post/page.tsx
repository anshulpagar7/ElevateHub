"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft, ArrowRight, Check, Clock, DollarSign, FileText, Info, MapPin, Plus, Trash2 } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { toast } from "@/components/ui/use-toast"

const categories = [
  "Web Development",
  "Graphic Design",
  "Content Writing",
  "Marketing",
  "Data Entry",
  "Tutoring",
  "Research",
  "Photography",
  "Video Editing",
  "Translation",
  "Social Media",
  "Other",
]

export default function PostGigPage() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [skills, setSkills] = useState<string[]>([])
  const [newSkill, setNewSkill] = useState("")
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    description: "",
    budget: {
      type: "fixed", // or "hourly"
      amount: "",
      maxAmount: "", // for range
    },
    location: "remote", // or "in-person" or "on-campus"
    duration: "",
    requirements: "",
  })

  const handleSkillAdd = () => {
    if (newSkill && !skills.includes(newSkill)) {
      setSkills([...skills, newSkill])
      setNewSkill("")
    }
  }

  const handleSkillRemove = (skillToRemove: string) => {
    setSkills(skills.filter((skill) => skill !== skillToRemove))
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target

    if (name.includes(".")) {
      const [parent, child] = name.split(".")
      setFormData({
        ...formData,
        [parent]: {
          ...formData[parent as keyof typeof formData],
          [child]: value,
        },
      })
    } else {
      setFormData({
        ...formData,
        [name]: value,
      })
    }
  }

  const handleRadioChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleBudgetTypeChange = (value: string) => {
    setFormData({
      ...formData,
      budget: {
        ...formData.budget,
        type: value,
      },
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Here you would typically send the data to your backend
    console.log({ ...formData, skills })

    toast({
      title: "Gig Posted Successfully!",
      description: "Your gig has been published and is now visible to students.",
    })

    // Redirect to the gigs page
    router.push("/gigs")
  }

  const nextStep = () => setStep(step + 1)
  const prevStep = () => setStep(step - 1)

  return (
    <div className="container py-8 max-w-3xl">
      <div className="mb-6">
        <Link href="/dashboard" className="flex items-center text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Dashboard
        </Link>
      </div>

      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold">Post a New Gig</h1>
          <p className="text-muted-foreground">Create a gig to find talented students for your project</p>
        </div>

        {/* Progress Steps */}
        <div className="relative">
          <div className="absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 bg-muted"></div>
          <ol className="relative flex justify-between">
            {[1, 2, 3].map((i) => (
              <li key={i} className="flex items-center justify-center">
                <div
                  className={`relative flex h-8 w-8 items-center justify-center rounded-full border-2 ₹{
                    step > i
                      ? "border-primary bg-primary text-primary-foreground"
                      : step === i
                        ? "border-primary bg-background text-foreground"
                        : "border-muted bg-background text-muted-foreground"
                  }`}
                >
                  {step > i ? <Check className="h-4 w-4" /> : i}
                </div>
                <span
                  className={`absolute top-10 text-xs font-medium ₹{
                    step >= i ? "text-foreground" : "text-muted-foreground"
                  }`}
                >
                  {i === 1 ? "Basic Info" : i === 2 ? "Details" : "Review"}
                </span>
              </li>
            ))}
          </ol>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Step 1: Basic Information */}
          {step === 1 && (
            <Card>
              <CardHeader>
                <CardTitle>Basic Information</CardTitle>
                <CardDescription>Let's start with the essential details of your gig</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Gig Title</Label>
                  <Input
                    id="title"
                    name="title"
                    placeholder="e.g., Website Development for Local Business"
                    value={formData.title}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Select
                    name="category"
                    value={formData.category}
                    onValueChange={(value) => setFormData({ ...formData, category: value })}
                    required
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    name="description"
                    placeholder="Describe your gig in detail..."
                    className="min-h-[150px]"
                    value={formData.description}
                    onChange={handleChange}
                    required
                  />
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button type="button" onClick={nextStep}>
                  Next Step
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          )}

          {/* Step 2: Additional Details */}
          {step === 2 && (
            <Card>
              <CardHeader>
                <CardTitle>Additional Details</CardTitle>
                <CardDescription>Provide more specific information about your gig</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label>Budget</Label>
                  <RadioGroup
                    defaultValue={formData.budget.type}
                    onValueChange={(value) => handleBudgetTypeChange(value)}
                    className="flex flex-col space-y-1"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="fixed" id="budget-fixed" />
                      <Label htmlFor="budget-fixed">Fixed Price</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="range" id="budget-range" />
                      <Label htmlFor="budget-range">Budget Range</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="hourly" id="budget-hourly" />
                      <Label htmlFor="budget-hourly">Hourly Rate</Label>
                    </div>
                  </RadioGroup>

                  <div className="mt-2">
                    {formData.budget.type === "fixed" && (
                      <div className="flex items-center">
                        <DollarSign className="h-4 w-4 mr-2 text-muted-foreground" />
                        <Input
                          type="number"
                          name="budget.amount"
                          placeholder="Amount"
                          value={formData.budget.amount}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    )}

                    {formData.budget.type === "range" && (
                      <div className="flex items-center gap-2">
                        <DollarSign className="h-4 w-4 mr-2 text-muted-foreground" />
                        <Input
                          type="number"
                          name="budget.amount"
                          placeholder="Min"
                          value={formData.budget.amount}
                          onChange={handleChange}
                          required
                        />
                        <span>-</span>
                        <Input
                          type="number"
                          name="budget.maxAmount"
                          placeholder="Max"
                          value={formData.budget.maxAmount}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    )}

                    {formData.budget.type === "hourly" && (
                      <div className="flex items-center">
                        <DollarSign className="h-4 w-4 mr-2 text-muted-foreground" />
                        <Input
                          type="number"
                          name="budget.amount"
                          placeholder="Hourly Rate"
                          value={formData.budget.amount}
                          onChange={handleChange}
                          required
                        />
                        <span className="ml-2 text-muted-foreground">/hour</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Location</Label>
                  <RadioGroup
                    defaultValue={formData.location}
                    onValueChange={(value) => handleRadioChange("location", value)}
                    className="flex flex-col space-y-1"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="remote" id="location-remote" />
                      <Label htmlFor="location-remote">Remote</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="on-campus" id="location-campus" />
                      <Label htmlFor="location-campus">On Campus</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="in-person" id="location-in-person" />
                      <Label htmlFor="location-in-person">In-Person</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="duration">Duration</Label>
                  <Select
                    name="duration"
                    value={formData.duration}
                    onValueChange={(value) => setFormData({ ...formData, duration: value })}
                    required
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select duration" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="less-than-week">Less than a week</SelectItem>
                      <SelectItem value="1-2-weeks">1-2 weeks</SelectItem>
                      <SelectItem value="3-4-weeks">3-4 weeks</SelectItem>
                      <SelectItem value="1-3-months">1-3 months</SelectItem>
                      <SelectItem value="ongoing">Ongoing</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Required Skills</Label>
                  <div className="flex gap-2">
                    <Input
                      placeholder="Add a skill"
                      value={newSkill}
                      onChange={(e) => setNewSkill(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          e.preventDefault()
                          handleSkillAdd()
                        }
                      }}
                    />
                    <Button type="button" onClick={handleSkillAdd} size="icon">
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>

                  {skills.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="flex items-center gap-1">
                          {skill}
                          <button
                            type="button"
                            onClick={() => handleSkillRemove(skill)}
                            className="ml-1 rounded-full hover:bg-muted p-0.5"
                          >
                            <Trash2 className="h-3 w-3" />
                            <span className="sr-only">Remove {skill}</span>
                          </button>
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="requirements">Additional Requirements</Label>
                  <Textarea
                    id="requirements"
                    name="requirements"
                    placeholder="Any specific requirements or qualifications..."
                    className="min-h-[100px]"
                    value={formData.requirements}
                    onChange={handleChange}
                  />
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button type="button" variant="outline" onClick={prevStep}>
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Previous
                </Button>
                <Button type="button" onClick={nextStep}>
                  Next Step
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          )}

          {/* Step 3: Review and Submit */}
          {step === 3 && (
            <Card>
              <CardHeader>
                <CardTitle>Review Your Gig</CardTitle>
                <CardDescription>Please review all information before submitting</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="preview" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="preview">Preview</TabsTrigger>
                    <TabsTrigger value="summary">Summary</TabsTrigger>
                  </TabsList>

                  <TabsContent value="preview" className="mt-4">
                    <Card>
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-start">
                          <CardTitle className="text-lg">{formData.title || "Gig Title"}</CardTitle>
                          <Badge variant="outline" className="ml-2 whitespace-nowrap">
                            {formData.category || "Category"}
                          </Badge>
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground mt-1">
                          <MapPin className="h-3.5 w-3.5 mr-1" />
                          {formData.location === "remote"
                            ? "Remote"
                            : formData.location === "on-campus"
                              ? "On Campus"
                              : formData.location === "in-person"
                                ? "In-Person"
                                : "Location"}
                          <span className="mx-2">•</span>
                          <Clock className="h-3.5 w-3.5 mr-1" />
                          {formData.duration === "less-than-week"
                            ? "Less than a week"
                            : formData.duration === "1-2-weeks"
                              ? "1-2 weeks"
                              : formData.duration === "3-4-weeks"
                                ? "3-4 weeks"
                                : formData.duration === "1-3-months"
                                  ? "1-3 months"
                                  : formData.duration === "ongoing"
                                    ? "Ongoing"
                                    : "Duration"}
                        </div>
                      </CardHeader>
                      <CardContent className="pb-2">
                        <p className="text-sm text-muted-foreground whitespace-pre-line">
                          {formData.description || "Gig description will appear here..."}
                        </p>

                        {skills.length > 0 && (
                          <div className="flex flex-wrap gap-1 mt-3">
                            {skills.map((skill) => (
                              <Badge key={skill} variant="secondary" className="text-xs">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        )}
                      </CardContent>
                      <CardFooter className="flex justify-between pt-2">
                        <div className="text-sm font-medium">
                          {formData.budget.type === "fixed"
                            ? `₹₹{formData.budget.amount}`
                            : formData.budget.type === "range"
                              ? `₹₹{formData.budget.amount} - ₹₹{formData.budget.maxAmount}`
                              : formData.budget.type === "hourly"
                                ? `₹₹{formData.budget.amount}/hour`
                                : "Budget"}
                        </div>
                        <div className="text-sm text-muted-foreground">Just now</div>
                      </CardFooter>
                    </Card>
                  </TabsContent>

                  <TabsContent value="summary" className="mt-4 space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm font-medium">Title:</span>
                        <span className="text-sm">{formData.title}</span>
                      </div>
                      <Separator />

                      <div className="flex justify-between">
                        <span className="text-sm font-medium">Category:</span>
                        <span className="text-sm">{formData.category}</span>
                      </div>
                      <Separator />

                      <div className="flex justify-between">
                        <span className="text-sm font-medium">Budget:</span>
                        <span className="text-sm">
                          {formData.budget.type === "fixed"
                            ? `₹₹{formData.budget.amount}`
                            : formData.budget.type === "range"
                              ? `₹₹{formData.budget.amount} - ₹₹{formData.budget.maxAmount}`
                              : formData.budget.type === "hourly"
                                ? `₹₹{formData.budget.amount}/hour`
                                : "Not specified"}
                        </span>
                      </div>
                      <Separator />

                      <div className="flex justify-between">
                        <span className="text-sm font-medium">Location:</span>
                        <span className="text-sm">
                          {formData.location === "remote"
                            ? "Remote"
                            : formData.location === "on-campus"
                              ? "On Campus"
                              : formData.location === "in-person"
                                ? "In-Person"
                                : "Not specified"}
                        </span>
                      </div>
                      <Separator />

                      <div className="flex justify-between">
                        <span className="text-sm font-medium">Duration:</span>
                        <span className="text-sm">
                          {formData.duration === "less-than-week"
                            ? "Less than a week"
                            : formData.duration === "1-2-weeks"
                              ? "1-2 weeks"
                              : formData.duration === "3-4-weeks"
                                ? "3-4 weeks"
                                : formData.duration === "1-3-months"
                                  ? "1-3 months"
                                  : formData.duration === "ongoing"
                                    ? "Ongoing"
                                    : "Not specified"}
                        </span>
                      </div>
                      <Separator />

                      <div className="flex justify-between">
                        <span className="text-sm font-medium">Skills:</span>
                        <span className="text-sm text-right">
                          {skills.length > 0 ? skills.join(", ") : "None specified"}
                        </span>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>

                <div className="mt-6 p-4 bg-muted rounded-lg flex items-start gap-3">
                  <Info className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <p className="font-medium">Before you submit</p>
                    <p className="text-muted-foreground">
                      Your gig will be reviewed by our team before being published. Make sure all information is
                      accurate and follows our community guidelines.
                    </p>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button type="button" variant="outline" onClick={prevStep}>
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Previous
                </Button>
                <Button type="submit">
                  <FileText className="mr-2 h-4 w-4" />
                  Post Gig
                </Button>
              </CardFooter>
            </Card>
          )}
        </form>
      </div>
    </div>
  )
}

