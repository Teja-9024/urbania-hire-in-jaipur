import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="container flex min-h-[60vh] flex-col items-center justify-center gap-4 py-20 text-center">
      <p className="text-sm font-medium text-primary">404</p>
      <h1 className="text-3xl font-bold sm:text-4xl">Page not found</h1>
      <p className="max-w-md text-muted-foreground">
        The page you&apos;re looking for doesn&apos;t exist or may have moved. Try one of the links below.
      </p>
      <div className="mt-2 flex flex-wrap justify-center gap-3">
        <Button asChild>
          <Link href="/">Go Home</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/urbania-hire">Browse Cities</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/contact">Contact Us</Link>
        </Button>
      </div>
    </div>
  );
}
