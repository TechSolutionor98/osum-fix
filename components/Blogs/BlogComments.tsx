"use client";

import { useState, useEffect } from "react";
import { User, Calendar, Loader2, MessageSquare, Send, CheckCircle2 } from "lucide-react";

interface Comment {
  _id: string;
  authorName: string;
  comment: string;
  createdAt: string;
}

export default function BlogComments({ slug }: { slug: string }) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loadingComments, setLoadingComments] = useState(true);

  // Form State
  const [authorName, setAuthorName] = useState("");
  const [authorEmail, setAuthorEmail] = useState("");
  const [commentText, setCommentText] = useState("");
  const [otp, setOtp] = useState("");
  
  // UI State
  const [step, setStep] = useState<"form" | "otp" | "success">("form");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Fetch approved comments on mount
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await fetch(`/api/blogs/comments?blogId=${slug}&all=false`);
        if (res.ok) {
          const data = await res.json();
          setComments(data);
        }
      } catch (err) {
        console.error("Failed to fetch comments", err);
      } finally {
        setLoadingComments(false);
      }
    };
    fetchComments();
  }, [slug]);

  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!authorName.trim() || !authorEmail.trim() || !commentText.trim()) {
      setError("Please fill in all fields.");
      return;
    }
    
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: authorEmail }),
      });

      const data = await res.json();

      if (res.ok) {
        setStep("otp");
      } else {
        setError(data.error || "Failed to send verification code. Please try again.");
      }
    } catch (err) {
      setError("An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmitComment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!otp.trim()) {
      setError("Please enter the 6-digit code sent to your email.");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/blogs/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          blogId: slug,
          authorName,
          authorEmail,
          comment: commentText,
          otp,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setStep("success");
      } else {
        setError(data.error || "Failed to submit comment. Invalid or expired OTP.");
      }
    } catch (err) {
      setError("An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateStr: string) => {
    if (!dateStr) return "";
    return new Date(dateStr).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric"
    });
  };

  return (
    <div className="mt-16 pt-12 border-t border-slate-200">
      
      {/* Existing Comments Section */}
      <div className="mb-16">
        <h3 className="text-2xl font-extrabold text-[var(--dark)] tracking-tight flex items-center gap-2 mb-8">
          <MessageSquare className="text-[var(--primary)]" size={24} />
          Comments {comments.length > 0 && <span className="text-sm bg-slate-100 text-slate-500 px-3 py-1 rounded-full">{comments.length}</span>}
        </h3>

        {loadingComments ? (
          <div className="flex justify-center py-8">
            <Loader2 className="animate-spin text-slate-300" size={32} />
          </div>
        ) : comments.length === 0 ? (
          <div className="bg-slate-50 border border-slate-100 rounded-2xl p-8 text-center text-slate-500">
            No comments yet. Be the first to share your thoughts!
          </div>
        ) : (
          <div className="space-y-6">
            {comments.map((c) => (
              <div key={c._id} className="bg-white border border-slate-150 rounded-2xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] flex items-center justify-center font-bold text-lg">
                    {c.authorName.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <h4 className="font-bold text-[var(--dark)] text-sm">{c.authorName}</h4>
                    <span className="text-xs text-slate-400 flex items-center gap-1 mt-0.5">
                      <Calendar size={12} /> {formatDate(c.createdAt)}
                    </span>
                  </div>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">{c.comment}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Leave a Comment Form */}
      <div className="bg-slate-50 rounded-3xl p-8 sm:p-10 border border-slate-200">
        <h3 className="text-xl sm:text-2xl font-extrabold text-[var(--dark)] tracking-tight mb-2">Leave a Comment</h3>
        <p className="text-slate-500 text-sm mb-8">Your email address will not be published. Required fields are marked.</p>

        {step === "success" ? (
          <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center space-y-4">
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-2">
              <CheckCircle2 size={32} />
            </div>
            <h4 className="text-xl font-bold text-green-800">Comment Submitted!</h4>
            <p className="text-green-600 text-sm max-w-md mx-auto">
              Thank you! Your comment has been sent to our moderators for approval. It will appear here shortly.
            </p>
            <button 
              onClick={() => {
                setAuthorName(""); setAuthorEmail(""); setCommentText(""); setOtp(""); setStep("form");
              }}
              className="mt-6 inline-block text-sm font-bold text-green-700 hover:text-green-800 underline"
            >
              Write another comment
            </button>
          </div>
        ) : (
          <form onSubmit={step === "form" ? handleSendOtp : handleSubmitComment} className="space-y-6">
            
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-600 text-sm px-4 py-3 rounded-lg">
                {error}
              </div>
            )}

            {step === "form" && (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-[var(--dark)] uppercase tracking-wider">Name *</label>
                    <input 
                      type="text" 
                      required
                      value={authorName}
                      onChange={(e) => setAuthorName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/20 focus:border-[var(--primary)] bg-white text-sm"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-[var(--dark)] uppercase tracking-wider">Email *</label>
                    <input 
                      type="email" 
                      required
                      value={authorEmail}
                      onChange={(e) => setAuthorEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/20 focus:border-[var(--primary)] bg-white text-sm"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-[var(--dark)] uppercase tracking-wider">Comment *</label>
                  <textarea 
                    required
                    rows={4}
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/20 focus:border-[var(--primary)] bg-white text-sm resize-none"
                    placeholder="Write your thoughts here..."
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={loading}
                  className="bg-[var(--primary)] hover:bg-[var(--secondary)] text-white px-8 py-3.5 rounded-xl font-bold transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed text-sm"
                >
                  {loading ? <Loader2 className="animate-spin" size={18} /> : "Send Verification Code"}
                </button>
              </>
            )}

            {step === "otp" && (
              <div className="space-y-6">
                <div className="bg-white border border-slate-200 p-6 rounded-2xl text-center space-y-4">
                  <h4 className="font-bold text-[var(--dark)] text-lg">Verify Your Email</h4>
                  <p className="text-sm text-slate-500">
                    We just sent a 6-digit code to <strong className="text-[var(--dark)]">{authorEmail}</strong>.<br/>Please enter it below to post your comment.
                  </p>
                  
                  <div className="max-w-xs mx-auto space-y-2 mt-4">
                    <input 
                      type="text" 
                      required
                      maxLength={6}
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      className="w-full px-4 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/20 focus:border-[var(--primary)] bg-slate-50 text-center text-2xl tracking-[0.5em] font-bold text-[var(--dark)]"
                      placeholder="------"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <button 
                    type="button"
                    onClick={() => setStep("form")}
                    disabled={loading}
                    className="text-slate-500 hover:text-slate-700 font-semibold text-sm px-4 py-3 disabled:opacity-50"
                  >
                    Go Back
                  </button>
                  <button 
                    type="submit" 
                    disabled={loading}
                    className="flex-1 bg-[var(--primary)] hover:bg-[var(--secondary)] text-white px-8 py-3.5 rounded-xl font-bold transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed text-sm"
                  >
                    {loading ? <Loader2 className="animate-spin" size={18} /> : <><Send size={16} /> Submit Comment</>}
                  </button>
                </div>
              </div>
            )}

          </form>
        )}
      </div>

    </div>
  );
}
