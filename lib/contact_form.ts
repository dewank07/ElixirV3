export default async function sendContactForm({
  name,
  email,
  message,
}: {
  name: string;
  email: string;
  message: string;
}) {
  const response: any = await fetch("/api/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from_name: name,
      reply_to: email,
      message: message,
    }),
  })
    .then((res) => {
      return res.status;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
  return response;
}
