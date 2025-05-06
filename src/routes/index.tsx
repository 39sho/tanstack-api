import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { hc } from "hono/client";
import type { AppType } from "../../worker/index";
import logo from "../logo.svg";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  const { status, data } = useQuery({
    queryKey: ["name"],
    queryFn: async () => {
      const client = hc<AppType>(document.location.origin);
      return await (await client.api.name.$get()).json();
    },
  });

  return (
    <div className="text-center">
      <header className="min-h-screen flex flex-col items-center justify-center bg-[#282c34] text-white text-[calc(10px+2vmin)]">
        <img
          src={logo}
          className="h-[40vmin] pointer-events-none animate-[spin_20s_linear_infinite]"
          alt="logo"
        />
        <p>
          Edit <code>src/routes/index.tsx</code> and save to reload.
        </p>
        <a
          className="text-[#61dafb] hover:underline"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <a
          className="text-[#61dafb] hover:underline"
          href="https://tanstack.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn TanStack
        </a>
        <div className="card">
          <div>
            Name from API is: {status === "success" ? data.name : "loading ..."}
          </div>
          <p>
            Edit <code>api/index.ts</code> to change the name
          </p>
        </div>
      </header>
    </div>
  );
}
