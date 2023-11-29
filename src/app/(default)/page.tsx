"use client";
import { URLS } from "@/constants/url";
import { useRouter } from "next/navigation";

const HomePage = () => {
  const router = useRouter();
  router.push(URLS.TODAY);

  return <p>Redirecting...</p>;
};

export default HomePage;
