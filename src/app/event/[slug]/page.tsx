import BackButton from "@/components/back-button";
import H1 from "@/components/h1";
import { getEvent } from "@/lib/server-utils";
import { btnStyles } from "@/lib/utils";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { Metadata } from "next";
import Image from "next/image";

type EventPageProps = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({
  params,
}: EventPageProps): Promise<Metadata> {
  const slug = params.slug;

  const event = await getEvent(slug);

  return {
    title: `Event: ${event.name}`,
    description: `Details of the event ${event.name}`,
  };
}

export async function generateStaticParams() {
  return [
    {
      slug: "comedy-extravaganza",
    },
    {
      slug: "dj-practice-session",
    },
  ];
}

export default async function EventPage({ params }: EventPageProps) {
  const slug = params.slug;

  const event = await getEvent(slug);

  return (
    <main>
      <section className="relative overflow-hidden flex justify-center items-center py-14 md:py-20">
        <Image
          className="object-cover z-0 blur-3xl"
          src={event.imageUrl}
          alt="Event background image"
          fill
          quality={50}
          sizes="(max-width: 1280px) 100vw,1280px"
          priority
        />

        <div className="z-1 gap-6 flex-col lg:flex-row lg:gap-16 flex relative">
          <Image
            className="rounded-xl border-2 border-white/50 object-cover"
            src={event.imageUrl}
            alt={event.name}
            width={300}
            height={201}
          />

          <div className="flex flex-col">
            <p className="text-white/75">
              {new Date(event.date).toLocaleDateString("en-US", {
                weekday: "long",
                month: "long",
                day: "numeric",
              })}
            </p>
            <H1 className="mb-2 mt-1 whitespace-nowrap">{event.name}</H1>
            <p className="whitespace-nowrap text-xl text-white/75">
              Organized by <span className="italic">{event.organizerName}</span>
            </p>

            <button className="capitalize mt-5 lg:mt-auto bg-blur bg-white/20 text-lg w-[95vw] sm:w-full py-2 rounded-md border-white/10 border-2 state-effect">
              Get tickets
            </button>
          </div>
        </div>
      </section>

      <div className="min-h-[75vh] text-center px-5 py-16">
        <Section>
          <SectionHeading>About this event</SectionHeading>
          <SectionContent>{event.description}</SectionContent>
        </Section>

        <Section>
          <SectionHeading>Location</SectionHeading>
          <SectionContent>{event.location}</SectionContent>
        </Section>
        <div className="max-w-4xl mx-auto">
          <BackButton className="mx-auto">Back to events</BackButton>
        </div>
      </div>
    </main>
  );
}

function Section({ children }: { children: React.ReactNode }) {
  return <section className="mb-12">{children}</section>;
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return <h2 className="text-2xl mb-8">{children}</h2>;
}

function SectionContent({ children }: { children: React.ReactNode }) {
  return (
    <p className="max-w-4xl mx-auto text-lg leading-8 text-white/75">
      {children}
    </p>
  );
}
