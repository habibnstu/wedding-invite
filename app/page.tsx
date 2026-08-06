import { getGuestName } from "@/lib/guest";
import HomeClient from "@/components/home/HomeClient";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const guestName = getGuestName(params);

  return <HomeClient guestName={guestName} />;
}
