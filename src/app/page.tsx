import profile from './pic.jpeg'
import Image from "next/image";

import { AppWindowIcon, CodeIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20">
 <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
     
      <Tabs defaultValue="brief">
        <TabsList>
          <TabsTrigger value="brief">In Brief</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
        </TabsList>
        <TabsContent value="brief">
          <Card>
            <CardHeader>
              <CardTitle>Daniel Salinas Duron</CardTitle>
              <CardDescription>
              A short summary of me.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
             <p> Ph.D. in Computer Science from Montana State University (2018)</p>
             <p> Assistant Professor of Data Science at Mount St. Mary's University</p>
             <p> Research focus on interpreting biological data using quantitative methods</p>
            </CardContent>
            <CardFooter> 
           <p>Links:
            [<a href="https://scholar.google.com/citations?user=88ZExckAAAAJ">Google Scholar</a>]
            [<a href="https://www.linkedin.com/in/daniel-salinas-duron-060611162">LinkedIn</a>]
            </p>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="education">
          <Card>
            <CardHeader>
              <CardTitle>Education</CardTitle>
              <CardDescription>
             Degrees and Certifications 
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
            <p>Ph.D. in Computer Science from Montana State University (2018)</p>
            <p>M.S. in Computer Science from Montana State University (2013)</p>
            <p>B.S. in Computer Science from Montana State University (2011)</p>
            </CardContent>
            <CardFooter>
            Dissertation and theses both on flux balance analysis methods.
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
</main>
    </div>
  )
}
