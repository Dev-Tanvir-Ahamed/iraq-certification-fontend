/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState } from "react";

export default function Home() {
  const [certificateNumber, setCertificateNumber] = useState("");
  const [result, setResult] = useState<{
    message: string;
    certificate?: any;
  } | null>(null);
  const [loading, setLoading] = useState(false);

  const verifyCertificate = async () => {
    setLoading(true);
    setResult(null);

    try {
      const response = await fetch(
        "http://localhost:5000/api/certificate/verify",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ certificateNumber }),
        }
      );

      const data = await response.json();
      setResult(data);
    } catch (error) {
      setResult({ message: "Error verifying certificate" });
    }

    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h1 className="text-2xl font-bold text-center mb-4">
          Certificate Verification
        </h1>
        <div className="flex flex-col gap-4">
          <input
            type="text"
            value={certificateNumber}
            onChange={(e) => setCertificateNumber(e.target.value)}
            placeholder="Enter Certificate Number"
            className="border p-2 rounded w-full"
            required
          />
          <button
            onClick={verifyCertificate}
            className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            disabled={loading}
          >
            {loading ? "Verifying..." : "Verify"}
          </button>
        </div>

        {result && (
          <div className="mt-4 p-4 border rounded bg-gray-50">
            <p
              className={`font-semibold ${
                result.certificate ? "text-green-600" : "text-red-600"
              }`}
            >
              {result.message}
            </p>
            {result.certificate && (
              <div className="mt-2 text-sm text-gray-700">
                <p>
                  <strong>Certificate Number:</strong>{" "}
                  {result.certificate.certificateNumber}
                </p>
                <p>
                  <strong>Issued To:</strong> {result.certificate.issueDate}
                </p>
                <p>
                  <strong>Expire Date:</strong>{" "}
                  {new Date(result.certificate.expiryDate).toLocaleDateString()}
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
