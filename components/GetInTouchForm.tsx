import * as React from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function GetInTouchForm() {
  return (
    <Card className='w-full'>
      <CardHeader className='flex flex-col items-center justify-between'>
        <CardTitle>Fill up this small </CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className='grid w-full items-center gap-6'>
            <div className='flex flex-col space-y-1.5'>
              <Label htmlFor='name'>Name</Label>
              <Input id='name' placeholder='Enter your good name ' className='bg-black-300' />
            </div>
            <div className='flex flex-col space-y-1.5'>
              <Label htmlFor='name'>Email</Label>
              <Input id='name' placeholder="Let's connect over your email" className='bg-black-300' />
            </div>
            <div className='flex flex-col space-y-1.5'>
              <Label htmlFor='framework'>What you want to ask from us?</Label>
              <Textarea placeholder='Let us know your doubts..' className='bg-black-300' />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className='flex justify-center'>
        <Button className='w-56'>Send</Button>
      </CardFooter>
    </Card>
  );
}
