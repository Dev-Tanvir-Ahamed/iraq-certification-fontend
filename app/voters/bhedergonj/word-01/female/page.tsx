"use client";

import VoterCard from "@/components/VoterCard";
import { useEffect, useState } from "react";

interface Voter {
  name: string;
  address: string;
  date_of_birth: string;
  voter_number: string;
  husband_name?: string;
  father_name?: string;
  mother_name?: string;
  occupation?: string;
}

const Bhedergonj01VoterDetailsFemale = () => {
  const [voters, setVoters] = useState<Voter[]>([]);
  const [filteredVoters, setFilteredVoters] = useState<Voter[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  // Fetch Voters
  useEffect(() => {
    const fetchVoters = async () => {
      try {
        const response = await fetch(
          "https://iraq-certification-backend.onrender.com/api/voters"
        );
        const data = await response.json();
        setVoters(data);
        setFilteredVoters(data);
      } catch (error) {
        console.error("Error fetching voters:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchVoters();
  }, []);

  // Debounce search
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!searchTerm) {
        setFilteredVoters(voters);
      } else {
        const lowercased = searchTerm.toLowerCase();
        const filtered = voters.filter(
          (voter) =>
            voter.name?.toLowerCase().includes(lowercased) ||
            voter.voter_number?.toLowerCase().includes(lowercased) ||
            voter.father_name?.toLowerCase().includes(lowercased) ||
            voter.mother_name?.toLowerCase().includes(lowercased) ||
            voter.husband_name?.toLowerCase().includes(lowercased) ||
            voter.date_of_birth?.toLowerCase().includes(lowercased)
        );
        setFilteredVoters(filtered);
      }
    }, 300);

    return () => clearTimeout(timeout);
  }, [searchTerm, voters]);

  return (
    <div>
      <div className="mx-auto w-full max-w-sm my-10">
        <input
          type="text"
          placeholder="Search by name or number"
          className="w-full p-3 border border-green-700 rounded-md"
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
        />
      </div>

      {loading ? (
        <p className="text-center text-gray-600">Loading voters...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredVoters.length > 0 ? (
            filteredVoters.map((voter, index) => (
              <VoterCard key={index} voter={voter} />
            ))
          ) : (
            <p className="text-center col-span-full text-red-500">
              No voters found.
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default Bhedergonj01VoterDetailsFemale;
