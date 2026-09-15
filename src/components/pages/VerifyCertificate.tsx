import { useState, useEffect } from "react";

/* ---------------- TYPES ---------------- */
type Certificate = {
  name: string;
  role: string;
  duration: string;
  company: string;
  status: "Verified";
  description?: string;
};

/* ---------------- COMPONENT ---------------- */
function VerifyCertificate() {
  const [certificateId, setCertificateId] = useState<string>("");
  const [result, setResult] = useState<
    | { status: "verified"; data: Certificate }
    | { status: "invalid" }
    | null
  >(null);

  const [isLoading, setIsLoading] = useState(false);

  /* ---------------- CERTIFICATE DATABASE ---------------- */
  const certificates: Record<string, Certificate> = {
    "ZDX-INT-2025-001": {
      name: "Md. Shikeb Malik",
      role: "Backend Web Development Intern",
      duration: "May 2025 – January 2026",
      company: "Zuridox",
      status: "Verified",
    },

    "ZDX-FA-2026-0311": {
      name: "Md. Farhan Raza",
      role: "Data Analyst & Web Developer",
      duration: "March 2023 – March 2026",
      company: "Zuridox",
      status: "Verified",
      description:
        "This is to certify that Md Farhan Rza worked with Zuridox as an MIS Analyst in the Information Technology & MIS department from 15 August 2025 to 15 July 2026, completing a period of 11 months.",
    },

    "WCO-EXP-2026-1291": {
      name: "Md. Farhan Rza",
      role: "MIS Analyst",
      duration: "15 August 2025 – 15 July 2026",
      company: "Zuridox",
      status: "Verified",
      description:
        "To Whom It May Concern, This is to certify that Md Farhan Rza worked with Zuridox as an MIS Analyst in the Information Technology & MIS department from 15 August 2025 to 15 July 2026, completing a period of 11 months.",
    },

    "ZDX-AS-2026-0315": {
      name: "Ashhar Jamali",
      role: "Data Analyst & Web Developer",
      duration: "March 2023 – March 2026",
      company: "Zuridox",
      status: "Verified",
    },
  };

  /* ---------------- HIDE CALENDLY ---------------- */
  useEffect(() => {
    const calendly = document.querySelector(".calendly-badge-widget");

    if (calendly) {
      (calendly as HTMLElement).style.display = "none";
    }

    return () => {
      if (calendly) {
        (calendly as HTMLElement).style.display = "block";
      }
    };
  }, []);

  /* ---------------- VERIFY CERTIFICATE ---------------- */
  const handleVerify = () => {
    if (!certificateId.trim()) return;

    setIsLoading(true);

    setTimeout(() => {
      const cert =
        certificates[certificateId.trim().toUpperCase()];

      if (cert) {
        setResult({
          status: "verified",
          data: cert,
        });
      } else {
        setResult({
          status: "invalid",
        });
      }

      setIsLoading(false);
    }, 600);
  };

  /* ---------------- ENTER KEY ---------------- */
  const handleKeyPress = (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Enter") {
      handleVerify();
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 py-20 px-4 text-slate-200">
      <div className="max-w-xl mx-auto">

        {/* ================= MAIN CARD ================= */}
        <div className="bg-slate-900 rounded-2xl shadow-2xl border border-slate-800 p-8 md:p-10">

          {/* ================= HEADER ================= */}
          <div className="text-center mb-8">

            <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 01-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                />
              </svg>
            </div>

            <h1 className="text-2xl md:text-3xl font-bold text-slate-100 mb-2">
              Certificate Verification
            </h1>

            <p className="text-slate-400 text-sm md:text-base">
              Enter the Certificate ID to verify authenticity
            </p>
          </div>

          {/* ================= INPUT ================= */}
          <div className="space-y-4">

            <div className="relative">
              <input
                type="text"
                value={certificateId}
                onChange={(e) =>
                  setCertificateId(e.target.value.toUpperCase())
                }
                onKeyDown={handleKeyPress}
                placeholder="e.g. ZDX-INT-2025-098"
                autoFocus
                className="w-full px-4 py-3.5 text-slate-200 bg-slate-800 border-2 border-slate-700 rounded-xl focus:border-blue-400 focus:bg-slate-900 focus:outline-none transition-all duration-200 placeholder:text-slate-500 font-medium tracking-wide"
              />

              <div className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>

            <button
              onClick={handleVerify}
              disabled={isLoading || !certificateId.trim()}
              className={`w-full py-3.5 px-6 rounded-xl font-semibold text-white transition-all duration-200 flex items-center justify-center gap-2 ${
                isLoading || !certificateId.trim()
                  ? "bg-blue-800/50 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/30 active:scale-[0.98]"
              }`}
            >
              {isLoading ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />

                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>

                  Verifying...
                </>
              ) : (
                <>
                  Verify Certificate

                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </>
              )}
            </button>
          </div>

          {/* ================= SUCCESS RESULT ================= */}
          {result?.status === "verified" && (
            <div className="mt-6 animate-fade-in">

              <div className="bg-emerald-950/30 border border-emerald-800 rounded-xl p-6">

                {/* Verified Header */}
                <div className="flex items-center gap-3 mb-5 pb-4 border-b border-emerald-900">

                  <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>

                  <div>
                    <h3 className="text-emerald-300 font-bold text-lg">
                      Verified Certificate
                    </h3>

                    <p className="text-emerald-400 text-sm">
                      Authentic and valid
                    </p>
                  </div>
                </div>

                {/* Certificate Information */}
                <div className="space-y-3">

                  {[
                    {
                      label: "Name",
                      value: result.data.name,
                    },
                    {
                      label: "Role",
                      value: result.data.role,
                    },
                    {
                      label: "Duration",
                      value: result.data.duration,
                    },
                    {
                      label: "Company",
                      value: result.data.company,
                    },
                    {
                      label: "Status",
                      value: result.data.status,
                    },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex justify-between items-center py-2 border-b border-emerald-900 last:border-0 gap-4"
                    >
                      <span className="text-emerald-400 font-medium text-sm">
                        {item.label}
                      </span>

                      <span className="text-emerald-100 font-semibold text-sm text-right">
                        {item.value}
                      </span>
                    </div>
                  ))}

                </div>

                {/* Certificate Details */}
                {result.data.description && (
                  <div className="mt-5 pt-5 border-t border-emerald-900">

                    <p className="text-emerald-300 font-semibold text-sm mb-2">
                      Certificate Details
                    </p>

                    <p className="text-emerald-100 text-sm leading-6">
                      {result.data.description}
                    </p>

                  </div>
                )}

              </div>
            </div>
          )}

          {/* ================= ERROR RESULT ================= */}
          {result?.status === "invalid" && (
            <div className="mt-6 animate-fade-in">

              <div className="bg-red-950/30 border border-red-800 rounded-xl p-5 flex items-start gap-4">

                <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>

                <div>
                  <h3 className="text-red-300 font-bold text-lg mb-1">
                    Invalid Certificate ID
                  </h3>

                  <p className="text-red-400 text-sm">
                    Please check the ID and try again. Contact support if you
                    believe this is an error.
                  </p>
                </div>

              </div>
            </div>
          )}

        </div>

        {/* ================= HELP TEXT ================= */}
        <p className="text-center text-slate-500 text-sm mt-6">
          Need help?{" "}
          <a
            href="/Contact"
            className="text-blue-400 hover:text-blue-300 font-medium hover:underline"
          >
            Contact Support
          </a>
        </p>

      </div>

      {/* ================= ANIMATION ================= */}
      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}

export default VerifyCertificate;
