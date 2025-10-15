"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Bell, Menu, Moon, Search, Sun, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useTheme } from "next-themes"

export default function Header() {
  const pathname = usePathname()
  const { setTheme, theme } = useTheme()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex gap-6 md:gap-10flex justify-center items-center h-full">
          <Link href="/" className="flex items-center space-x-2">
            <span className="sm:inline-block "><img src="/image.png" alt="" width={80} height={80} /></span>
          </Link>
          <nav className="hidden gap-6 md:flex">
            <Link
              href="/"
              className={`text-sm font-medium transition-colors hover:text-primary ₹{
                pathname === "/" ? "text-foreground" : "text-muted-foreground"
              }`}
            >
              Home
            </Link>
            <Link
              href="/gigs"
              className={`text-sm font-medium transition-colors hover:text-primary ₹{
                pathname === "/gigs" ? "text-foreground" : "text-muted-foreground"
              }`}
            >
              Find Gigs
            </Link>
            <Link
              href="/dashboard"
              className={`text-sm font-medium transition-colors hover:text-primary ₹{
                pathname === "/dashboard" ? "text-foreground" : "text-muted-foreground"
              }`}
            >
              Dashboard
            </Link>
          </nav>
        </div>
        <div className="hidden md:flex md:w-1/3 lg:w-1/4">
          <div className="relative w-full">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search gigs..."
              className="w-full bg-background pl-8 md:w-[300px] lg:w-full"
            />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle Theme"
            className="mr-2"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
          <Button variant="ghost" size="icon" aria-label="Notifications" className="mr-2">
            <Bell className="h-5 w-5" />
            <span className="sr-only">Notifications</span>
          </Button>
          <Link href="/login">
            <Button variant="ghost" size="icon" aria-label="User Account">
              <User className="h-5 w-5" />
              <span className="sr-only">User Account</span>
            </Button>
          </Link>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="grid gap-6 text-lg font-medium">
                <Link href="/" className="flex w-full items-center py-3 text-sm font-medium">
                  Home
                </Link>
                <Link href="/gigs" className="flex w-full items-center py-3 text-sm font-medium">
                  Find Gigs
                </Link>
                <Link href="/dashboard" className="flex w-full items-center py-3 text-sm font-medium">
                  Dashboard
                </Link>
                <Link href="/login" className="flex w-full items-center py-3 text-sm font-medium">
                  Login
                </Link>
                <Link href="/signup" className="flex w-full items-center py-3 text-sm font-medium">
                  Sign Up
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

