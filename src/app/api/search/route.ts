import { NextRequest, NextResponse } from "next/server";
import { FuseSearchProvider } from "@/integrations/search/fuse-provider";
import { buildSearchIndex } from "@/lib/search-index";

// Build index once per cold start (module-level singleton)
let provider: FuseSearchProvider | null = null;

async function getProvider(): Promise<FuseSearchProvider> {
  if (!provider) {
    provider = new FuseSearchProvider();
    const documents = await buildSearchIndex();
    await provider.buildIndex(documents);
  }
  return provider;
}

export async function GET(request: NextRequest): Promise<NextResponse> {
  const query = request.nextUrl.searchParams.get("q");
  const type = request.nextUrl.searchParams.get("type") as "article" | "experience" | "service" | "trade-intel" | "media" | "china" | undefined;
  const limit = parseInt(request.nextUrl.searchParams.get("limit") ?? "10", 10);

  if (!query || query.trim().length < 2) {
    return NextResponse.json({ results: [], error: "Query must be at least 2 characters." }, { status: 400 });
  }

  try {
    const searchProvider = await getProvider();
    const results = await searchProvider.search(query, { limit, type: type ?? undefined });
    return NextResponse.json({ results, total: results.length });
  } catch {
    return NextResponse.json({ results: [], error: "Search failed." }, { status: 500 });
  }
}
