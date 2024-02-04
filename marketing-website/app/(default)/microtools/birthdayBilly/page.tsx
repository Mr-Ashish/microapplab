"use client";

import { useSearchParams } from "next/navigation";

import Head from "next/head";
import { useState, useEffect } from "react";

//localhost:3000/microtools/birthdayBilly?code=5139101796599.6577065227541.79cfc15062c0d9984f58afd93578728c21a8f0dea2f9f0c37a3d73b26471df23&state=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbnN0YWxsT3B0aW9ucyI6eyJzY29wZXMiOlsiYXBwX21lbnRpb25zOnJlYWQiLCJjaGFubmVsczpoaXN0b3J5IiwiY2hhbm5lbHM6cmVhZCIsImNoYXQ6d3JpdGUiLCJjb21tYW5kcyIsImZpbGVzOnJlYWQiLCJmaWxlczp3cml0ZSIsImdyb3VwczpoaXN0b3J5IiwiZ3JvdXBzOnJlYWQiLCJpbTpoaXN0b3J5IiwiaW5jb21pbmctd2ViaG9vayIsIm1waW06aGlzdG9yeSIsIm1waW06cmVhZCIsInVzZXJzOnJlYWQiLCJjaGFubmVsczpqb2luIl19LCJub3ciOiIyMDI0LTAyLTAzVDExOjE3OjI2LjY4NloiLCJyYW5kb20iOjI3NTU4LCJpYXQiOjE3MDY5NTkwNDZ9.omtylrtpHF6UIpw55PMJa4NJw5-vbz_Kba1zR-fN_dA

const BirthdayBilly = () => {
  const searchParams = useSearchParams();
  const code = searchParams.get("code");
  const state = searchParams.get("state");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Define the API URL with query parameters
    const apiUrl = `http://apiv2.microapplab.com/slack/oauth_redirect?code=${code}&state=${state}`;

    // Fetch data from the API
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Call the fetchData function
    fetchData();
  }, [code, state]);
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div>
        <title>Success page</title>
      </div>
    </div>
  );
};

export default BirthdayBilly;
