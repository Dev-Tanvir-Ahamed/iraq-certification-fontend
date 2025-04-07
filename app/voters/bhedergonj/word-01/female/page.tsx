"use client";

import VoterCard from "@/components/VoterCard";
import { useEffect, useState } from "react";

interface Voter {
  voter_name: string;
  address: string;
  date_of_birth: string;
  voter_number: string;
}

const Bhedergonj01VoterDetailsFemale = () => {
  const [voters, setVoters] = useState<Voter[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVoters = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/voters");
        const data = await response.json();
        const allVoters = data.flatMap((voterInfo: any) => voterInfo.voters);
        setVoters(allVoters);
      } catch (error) {
        console.error("Error fetching voters:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchVoters();
  }, []);
  return (
    <div>
      {" "}
      <div className="mx-auto w-[200px] my-10">
        <input
          type="text"
          placeholder="Search by name or number"
          className="p-4 border border-2 border-green-700 rounded-md"
        />
      </div>
      {loading ? (
        <p className="text-center text-gray-600">Loading voters...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {voters.map((voter, index) => (
            <VoterCard key={index} voter={voter} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Bhedergonj01VoterDetailsFemale;
