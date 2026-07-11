"use client";

import { useEffect, useState } from "react";
import { Loader2, RefreshCw } from "lucide-react";

export default function QuotesClient() {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [refreshing, setRefreshing] = useState(false);
  const [expandedId, setExpandedId] = useState(null);

  const fetchQuotes = async () => {
    try {
      setRefreshing(true);
      const res = await fetch("/api/quote-submissions");
      if (!res.ok) throw new Error("Failed to fetch quotes");
      const data = await res.json();
      setQuotes(data);
      setError(null);
    } catch (err) {
      console.error(err);
      setError("Failed to load quote submissions.");
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchQuotes();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="w-8 h-8 animate-spin text-[var(--primary)]" />
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="p-6 border-b border-gray-200 flex justify-between items-center bg-gray-50 rounded-t-lg">
        <div>
          <h2 className="text-xl font-semibold text-gray-800">Quote Requests</h2>
          <p className="text-sm text-gray-500 mt-1">Manage all quote requests submitted from the website.</p>
        </div>
        <button
          onClick={fetchQuotes}
          disabled={refreshing}
          className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 transition"
        >
          <RefreshCw className={`w-4 h-4 ${refreshing ? "animate-spin" : ""}`} />
          Refresh
        </button>
      </div>

      {error ? (
        <div className="p-6 text-red-500 bg-red-50">{error}</div>
      ) : quotes.length === 0 ? (
        <div className="p-12 text-center text-gray-500">
          No quote requests found.
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-600">
            <thead className="bg-gray-50 text-gray-700 uppercase font-semibold border-b border-gray-200">
              <tr>
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4">Client Info</th>
                <th className="px-6 py-4">Service & Location</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {quotes.map((quote) => (
                <tr key={quote.id} className="hover:bg-gray-50/50 transition">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-gray-900 font-medium">
                      {new Date(quote.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </span>
                    <br />
                    <span className="text-gray-500 text-xs">
                      {new Date(quote.createdAt).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="font-medium text-gray-900">{quote.firstName} {quote.lastName}</div>
                    <div className="text-gray-500">{quote.email}</div>
                    <div className="text-gray-500">{quote.phone}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mb-1">
                      {quote.service}
                    </div>
                    <div className="text-gray-600"><strong>Loc:</strong> {quote.location}</div>
                    <div className="text-gray-500 text-xs"><strong>Type:</strong> {quote.propertyType}</div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button
                      onClick={() => setExpandedId(expandedId === quote.id ? null : quote.id)}
                      className="text-[var(--primary)] hover:text-[#20507C] font-medium text-sm transition"
                    >
                      {expandedId === quote.id ? "Hide Details" : "View Details"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          
          {/* Expanded Detail Modal/Row (Using a simple conditional rendering for now) */}
          {expandedId && (
            <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
              <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                {quotes.filter(q => q.id === expandedId).map(q => (
                  <div key={`modal-${q.id}`} className="p-6">
                    <div className="flex justify-between items-center mb-6 border-b pb-4">
                      <h3 className="text-xl font-bold text-gray-900">Quote Request Details</h3>
                      <button onClick={() => setExpandedId(null)} className="text-gray-400 hover:text-gray-700">
                        ✕
                      </button>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-6 mb-6">
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Customer</p>
                        <p className="font-semibold">{q.firstName} {q.lastName}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Date Submitted</p>
                        <p className="font-semibold">
                          {new Date(q.createdAt).toLocaleString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: '2-digit' })}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Contact</p>
                        <p>{q.email}</p>
                        <p>{q.phone}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Location & Property</p>
                        <p>{q.location}</p>
                        <p className="capitalize text-gray-600">{q.propertyType}</p>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg mb-6">
                      <p className="text-sm text-gray-500 mb-2">Service Required</p>
                      <p className="font-bold text-[var(--primary)]">{q.service}</p>
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-gray-700 mb-2">Message / Details:</p>
                      <p className="bg-white border border-gray-200 rounded-lg p-4 text-gray-700 whitespace-pre-wrap">
                        {q.details || "No additional details provided."}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
