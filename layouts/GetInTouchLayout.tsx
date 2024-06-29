"use client";
import { useState, useRef } from "react";
// import { sendContactFrom } from "@/lib/sendContactForm";
import PageHeading from "@/components/PageHeading";
import { useForm } from "react-hook-form";
import { GetInTouchForm } from "@/components/GetInTouchForm";
import styles from "./layouts.module.css";

const GetInTouchLayout = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    setLoading(true);
    setError(null);

    // try {
    //   const response = await sendContactFrom(data);
    //   if (response.error) {
    //     setError(response.error);
    //   } else {
    //     setSuccess(true);
    //     reset();
    //   }
    // } catch (error) {
    //   setError("An error occurred. Please try again later.");
    // }

    setLoading(false);
  };

  return (
    <div className='pt-20 releative z-10'>
      <div className='flex flex-col items-center justify-center'>
        <PageHeading smallHeading='Join the community' longHeading='TO BECOME DIFFERENT FROM OTHERS' />
        <div className='w-full h-full z-10 relative flex flex-col items-center justify-center'>
          <div className={styles.formContainer}>
            <GetInTouchForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouchLayout;
