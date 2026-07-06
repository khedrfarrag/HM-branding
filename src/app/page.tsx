import { redirect } from "next/navigation";

// Root page — always redirect to Arabic version
export default function RootPage() {
  redirect("/ar");
}
