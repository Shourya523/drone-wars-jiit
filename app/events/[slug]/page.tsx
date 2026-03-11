import { events } from "@/lib/events";
import { notFound } from "next/navigation";
import { EventClientPage } from "@/app/events/[slug]/EventClientPage";

export function generateStaticParams() {
  return events.map((event) => ({
    slug: event.slug,
  }));
}

export default async function EventPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const event = events.find((e) => e.slug === slug);

  if (!event) {
    notFound();
  }

  return <EventClientPage event={event} />;
}
