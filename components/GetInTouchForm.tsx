"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import sendContactForm from "@/lib/contact_form";
import { useToast } from "@/components/ui/use-toast";

export function GetInTouchForm() {
  const { toast } = useToast();
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmitBtn = async (data: any) => {
    console.log("hrlo");
    try {
      const response = await sendContactForm(data);
      if (response.error) {
        toast({
          title: "Uh oh! Something went wrong.",
          description: "There was a problem with your request.",
        });
        // Handle error
      } else {
        // Handle success
        toast({
          title: "Hooraayy! Your message has been sent.",
          description: "Soon we'll get back to you.",
        });
        setData({
          name: "",
          email: "",
          message: "",
        });
      }
    } catch (error) {
      toast({
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
      });
      // Handle error
    }
  };
  return (
    <Card className='w-full'>
      <CardHeader className='flex flex-col items-center justify-between'>
        <CardTitle></CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className='grid w-full items-center gap-6'>
            <div className='flex flex-col space-y-1.5'>
              <Label htmlFor='name'>Name</Label>
              <Input
                id='name'
                name='name'
                placeholder='Enter your good name '
                className='bg-black-300'
                value={data.name}
                onChange={handleInputChange}
              />
            </div>
            <div className='flex flex-col space-y-1.5'>
              <Label htmlFor='email'>Email</Label>
              <Input
                id='email'
                name='email'
                placeholder="Let's connect over your email"
                className='bg-black-300'
                value={data.email}
                onChange={handleInputChange}
              />
            </div>
            <div className='flex flex-col space-y-1.5'>
              <Label htmlFor='message'>What you want to ask from us?</Label>
              <Textarea
                id='message'
                name='message'
                placeholder='Let us know your doubts..'
                className='bg-black-300'
                value={data.message}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className='flex justify-center'>
        <Button onClick={() => onSubmitBtn(data)} className='w-56'>
          Send
        </Button>
      </CardFooter>
    </Card>
  );
}
