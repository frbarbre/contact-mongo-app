import { useLoaderData } from "react-router";
import type { Route } from "./+types/home";

export const loader = async () => {
  console.log(process.env.API_URL);
  const response = await fetch(process.env.API_URL + "/api/contacts");
  const data = await response.json();
  return { contacts: data };
};

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  const { contacts } = useLoaderData<typeof loader>();

  return (
    <div>
      <pre>{JSON.stringify(contacts, null, 2)}</pre>
    </div>
  );
}
