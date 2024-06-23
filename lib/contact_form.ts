export default async function sendContactForm({
  name,
  fromEmail,
  issue,
}: {
  name: string;
  fromEmail: string;
  issue: string;
}) {
  const response: any = await fetch("/api/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from_name: name,
      reply_to: fromEmail,
      message: issue,
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
