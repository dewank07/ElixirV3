import * as React from "react";

interface EmailTemplateProps {
  firstName: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({ firstName, email, message }) => (
  <div>
    <h1>Welcome, {firstName}!</h1>
    <h3>{email}</h3>
    <p>{message}</p>
  </div>
);
