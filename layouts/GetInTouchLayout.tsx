"use client";
import React, { useState, useRef } from "react";
import sendContactFrom from "@/lib/contact_form";
import PageHeading from "@/components/PageHeading";

function GetInTouchLayout() {
  const [name, setName] = useState("");
  const [fromEmail, setFromEmail] = useState("");
  const [issue, setIssue] = useState(""); // refactor and use useRef
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const parallaxRef = useRef(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await sendContactFrom({ name, fromEmail, issue });
      if (response.error) {
        setError(response.error);
      } else {
        setSuccess(true);
        setName("");
        setFromEmail("");
        setIssue("");
      }
    } catch (error) {
      setError("An error occurred. Please try again later.");
    }

    setLoading(false);
  };

  return (
    <div className='pt-20 z-10'>
      <div className='flex flex-col items-center justify-center'>
        <PageHeading smallHeading='Join the community' longHeading='TO BECOME DIFFERENT FROM OTHERS' />
        <div className='h-[120vh] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased'>
          <div className='md:max-w-2xl mx-auto p-4' ref={parallaxRef}>
            <h1 className='relative z-10 mt-12 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold'>
              Join The Community
            </h1>
            <p></p>
            <p className='text-neutral-300 md:max-w-lg mx-auto my-2 text-sm text-center relative z-10'>
              Stay in the loop with our latest news and events. Sign up below to join our community.
            </p>
            <form onSubmit={handleSubmit} className='relative z-10 flex flex-col'>
              <input
                id='name'
                type='text'
                placeholder='Your Name'
                className='p-2 rounded-lg border border-gray-500 focus:ring-2 focus:ring-teal-500 w-full mt-4 bg-neutral-950 placeholder:text-neutral-700 text-white'
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={loading}
              />
              <input
                id='email'
                type='email'
                placeholder='Your Email'
                className='p-2 rounded-lg border border-gray-500 focus:ring-2 focus:ring-teal-500 w-full mt-4 bg-neutral-950 placeholder:text-neutral-700 text-white'
                value={fromEmail}
                onChange={(e) => setFromEmail(e.target.value)}
                disabled={loading}
              />
              <textarea
                placeholder='Describe your issue'
                className='p-2 rounded-lg border border-gray-500 focus:ring-2 focus:ring-teal-500 w-full mt-4 bg-neutral-950 placeholder:text-neutral-700 text-white h-32 resize-none'
                value={issue}
                onChange={(e) => setIssue(e.target.value)}
                disabled={loading}
              />

              <button
                type='submit'
                className=' bg-violet-800 text-white font-semibold uppercase px-4 py-2 rounded-md mt-4'
                disabled={loading}
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
              {error && <p className='text-red-500 mt-2'>{error}</p>}
              {success && <p className='text-green-500 mt-2'>Thank you for joining!</p>}
            </form>
            {/* <div className="z-[-1]">
          <BackgroundCircles parallaxRef={parallaxRef} />
          </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetInTouchLayout;
