import { BriefcaseIcon, CheckCircle2, Clock, DollarSign, FileText, MessageSquare } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
          <div className="flex items-center space-x-2">
            <Button>
              <FileText className="mr-2 h-4 w-4" />
              Post a Gig
            </Button>
          </div>
        </div>

        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="applications">My Applications</TabsTrigger>
            <TabsTrigger value="gigs">My Gigs</TabsTrigger>
            <TabsTrigger value="messages">Messages</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Earnings</CardTitle>
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">₹450.00</div>
                  <p className="text-xs text-muted-foreground">+20.1% from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Applications</CardTitle>
                  <BriefcaseIcon className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">12</div>
                  <p className="text-xs text-muted-foreground">5 pending responses</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active Gigs</CardTitle>
                  <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">3</div>
                  <p className="text-xs text-muted-foreground">2 due this week</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Unread Messages</CardTitle>
                  <MessageSquare className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">7</div>
                  <p className="text-xs text-muted-foreground">+3 since yesterday</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-4">
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                </CardHeader>
                <CardContent className="pl-2">
                  <div className="relative">
                    <div className="absolute h-full w-px bg-muted left-7 top-0"></div>
                    <ol className="space-y-4">
                      {[
                        {
                          title: "Application Accepted",
                          description: "Your application for 'Logo Design' was accepted",
                          time: "2 hours ago",
                          icon: CheckCircle2,
                          iconClass: "bg-green-500",
                        },
                        {
                          title: "New Message",
                          description: "You received a message from Sarah about the website project",
                          time: "5 hours ago",
                          icon: MessageSquare,
                          iconClass: "bg-blue-500",
                        },
                        {
                          title: "Payment Received",
                          description: "You received ₹150 for completing the social media project",
                          time: "1 day ago",
                          icon: DollarSign,
                          iconClass: "bg-yellow-500",
                        },
                        {
                          title: "New Application",
                          description: "You applied for 'Content Writing for Blog'",
                          time: "2 days ago",
                          icon: FileText,
                          iconClass: "bg-purple-500",
                        },
                      ].map((item, index) => {
                        const Icon = item.icon
                        return (
                          <li key={index} className="relative flex gap-6">
                            <div
                              className={`relative flex h-7 w-7 items-center justify-center rounded-full ₹{item.iconClass} text-white z-10`}
                            >
                              <Icon className="h-4 w-4" />
                            </div>
                            <div className="flex flex-col">
                              <span className="font-medium">{item.title}</span>
                              <span className="text-sm text-muted-foreground">{item.description}</span>
                              <span className="text-xs text-muted-foreground">{item.time}</span>
                            </div>
                          </li>
                        )
                      })}
                    </ol>
                  </div>
                </CardContent>
              </Card>
              <Card className="col-span-3">
                <CardHeader>
                  <CardTitle>Current Projects</CardTitle>
                  <CardDescription>Your ongoing gigs and their progress</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        title: "Website Development",
                        client: "Sunrise Cafe",
                        progress: 75,
                        dueDate: "Jun 25, 2023",
                      },
                      {
                        title: "Logo Design",
                        client: "TechEd Startup",
                        progress: 40,
                        dueDate: "Jun 30, 2023",
                      },
                      {
                        title: "Social Media Content",
                        client: "Fashion Brand",
                        progress: 90,
                        dueDate: "Jun 20, 2023",
                      },
                    ].map((project, index) => (
                      <div key={index} className="mb-4">
                        <div className="flex items-center justify-between mb-1">
                          <div>
                            <div className="font-medium">{project.title}</div>
                            <div className="text-xs text-muted-foreground">Client: {project.client}</div>
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-3 w-3 mr-1 text-muted-foreground" />
                            <span className="text-xs text-muted-foreground">{project.dueDate}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Progress value={project.progress} className="h-2" />
                          <span className="text-xs font-medium">{project.progress}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Applications</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        title: "Content Writing for Blog",
                        status: "Pending",
                        date: "Jun 18, 2023",
                      },
                      {
                        title: "UI Design for Mobile App",
                        status: "Rejected",
                        date: "Jun 15, 2023",
                      },
                      {
                        title: "Logo Design",
                        status: "Accepted",
                        date: "Jun 10, 2023",
                      },
                    ].map((application, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div>
                          <div className="font-medium text-sm">{application.title}</div>
                          <div className="text-xs text-muted-foreground">{application.date}</div>
                        </div>
                        <Badge
                          variant={
                            application.status === "Accepted"
                              ? "success"
                              : application.status === "Rejected"
                                ? "destructive"
                                : "outline"
                          }
                        >
                          {application.status}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Recommended Gigs</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        title: "WordPress Website Development",
                        budget: "₹400-600",
                        match: "95% Match",
                      },
                      {
                        title: "Social Media Management",
                        budget: "₹2500/hour",
                        match: "90% Match",
                      },
                      {
                        title: "Graphic Design for Flyers",
                        budget: "₹200",
                        match: "85% Match",
                      },
                    ].map((gig, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div>
                          <div className="font-medium text-sm">{gig.title}</div>
                          <div className="text-xs text-muted-foreground">{gig.budget}</div>
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          {gig.match}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Skills Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { name: "Web Development", level: 90 },
                      { name: "Graphic Design", level: 75 },
                      { name: "Content Writing", level: 60 },
                      { name: "Social Media", level: 85 },
                    ].map((skill, index) => (
                      <div key={index} className="space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">{skill.name}</span>
                          <span className="text-xs text-muted-foreground">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="applications" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>My Applications</CardTitle>
                <CardDescription>Track the status of your job applications</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Application content would go here */}
                  <div className="text-center py-8 text-muted-foreground">
                    This tab would display all your job applications
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="gigs" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>My Gigs</CardTitle>
                <CardDescription>Manage gigs you've posted or are working on</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Gigs content would go here */}
                  <div className="text-center py-8 text-muted-foreground">This tab would display all your gigs</div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="messages" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Messages</CardTitle>
                <CardDescription>Communicate with clients and employers</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Messages content would go here */}
                  <div className="text-center py-8 text-muted-foreground">This tab would display your messages</div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

