import { useState } from "react";
import { Shield, AlertTriangle, CheckCircle, Zap, Lock, Eye } from "lucide-react";

export default function Index() {
  const [message, setMessage] = useState("");
  const [url, setUrl] = useState("");
  const [result, setResult] = useState<{
    risk: string;
    score: number;
    message: string;
  } | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const analyzeMessage = async () => {
    if (!message.trim() && !url.trim()) {
      return;
    }

    setIsAnalyzing(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    const mockResult = {
      risk: Math.random() > 0.5 ? "High" : "Safe",
      score: Math.floor(Math.random() * 100),
      message: "Analysis complete",
    };

    setResult(mockResult);
    setIsAnalyzing(false);
  };

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-gradient-to-br from-primary to-purple-600 rounded-lg">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-foreground">Kavach</h1>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-foreground/70 hover:text-foreground transition">
              Home
            </a>
            <a href="#scanner" className="text-foreground/70 hover:text-foreground transition">
              Scanner
            </a>
            <a href="#features" className="text-foreground/70 hover:text-foreground transition">
              Features
            </a>
            <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/30 transition">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative py-20 md:py-32 px-6 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
        </div>

        <div className="max-w-5xl mx-auto text-center space-y-8 animate-slide-up">
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">AI-Powered Protection</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Stop Scams <span className="gradient-text">Before You Tap</span>
          </h1>

          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Advanced AI detection for suspicious messages, phishing links, and UPI fraud. Protect yourself in real-time.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-primary/40 transition transform hover:scale-105">
              Start Scanning
            </button>
            <button className="px-8 py-4 border-2 border-primary text-primary rounded-lg font-semibold text-lg hover:bg-primary/5 transition">
              Learn More
            </button>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12">
            {[
              { number: "297", label: "UPI Frauds Blocked" },
              { number: "807", label: "Threats Detected" },
              { number: "15,000+", label: "Users Protected" },
            ].map((stat, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-2xl border border-border/50 hover:border-primary/30 transition shadow-sm hover:shadow-lg hover:shadow-primary/10 transform hover:-translate-y-1"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <p className="text-foreground/70 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scanner Section */}
      <section id="scanner" className="py-20 md:py-32 px-6 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-3">
            <h2 className="text-4xl md:text-5xl font-bold">Scan & Analyze</h2>
            <p className="text-lg text-foreground/70">
              Paste your suspicious message or link below for instant analysis
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-border/50 p-8 shadow-lg">
            {/* Input Fields */}
            <div className="space-y-6 mb-8">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-3">
                  Suspicious Message
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Paste your suspicious message here..."
                  className="w-full min-h-[120px] p-4 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary resize-none"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-3">
                  Suspicious Link (Optional)
                </label>
                <input
                  type="text"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="https://example.com"
                  className="w-full p-4 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                />
              </div>
            </div>

            {/* Analyze Button */}
            <button
              onClick={analyzeMessage}
              disabled={isAnalyzing || (!message.trim() && !url.trim())}
              className="w-full py-4 bg-gradient-to-r from-primary to-purple-600 text-white rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-primary/40 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isAnalyzing ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-2 border-white/30 border-t-white"></div>
                  Analyzing...
                </>
              ) : (
                <>
                  <Eye className="w-5 h-5" />
                  Analyze Message
                </>
              )}
            </button>

            {/* Results */}
            {result && (
              <div className="mt-8 pt-8 border-t border-border">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    {result.risk === "High" ? (
                      <>
                        <AlertTriangle className="w-6 h-6 text-red-500" />
                        <span className="text-lg font-bold text-red-500">
                          ⚠️ High Risk - Likely Scam
                        </span>
                      </>
                    ) : (
                      <>
                        <CheckCircle className="w-6 h-6 text-green-500" />
                        <span className="text-lg font-bold text-green-500">
                          ✓ Message Looks Safe
                        </span>
                      </>
                    )}
                  </div>

                  <div className="mt-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold text-foreground">
                        Trust Score
                      </span>
                      <span className="text-sm font-bold text-primary">
                        {result.score}%
                      </span>
                    </div>
                    <div className="w-full h-3 bg-border rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-500 ${
                          result.score > 70
                            ? "bg-green-500"
                            : result.score > 40
                            ? "bg-yellow-500"
                            : "bg-red-500"
                        }`}
                        style={{ width: `${result.score}%` }}
                      ></div>
                    </div>
                  </div>

                  {result.risk === "High" && (
                    <p className="text-sm text-foreground/70 pt-2">
                      ⚠️ ಇದು ಮೋಸದ ಸಂದೇಶವಾಗಿರಬಹುದು (This might be a scam message)
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 md:py-32 px-6">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-3">
            <h2 className="text-4xl md:text-5xl font-bold">Comprehensive Protection</h2>
            <p className="text-lg text-foreground/70">
              Detect all types of scams with our advanced AI technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: <Lock className="w-8 h-8" />,
                title: "UPI Fraud Detection",
                description:
                  "Detect fake payment requests and malicious QR codes targeting your bank account",
              },
              {
                icon: <AlertTriangle className="w-8 h-8" />,
                title: "KYC Scam Detection",
                description:
                  "Identify fraudulent bank update messages impersonating legitimate services",
              },
              {
                icon: <Eye className="w-8 h-8" />,
                title: "Phishing Link Detection",
                description:
                  "Recognize suspicious URLs and fake domains before you click",
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Digital Arrest Detection",
                description:
                  "Stay safe from police impersonation and cyber intimidation scams",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group p-8 bg-white rounded-2xl border border-border/50 hover:border-primary/30 transition shadow-sm hover:shadow-xl hover:shadow-primary/10 transform hover:-translate-y-1"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="p-3 w-fit bg-primary/10 rounded-xl group-hover:bg-primary/20 transition mb-4">
                  <div className="text-primary">{feature.icon}</div>
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-foreground/70 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 md:py-24 px-6 bg-gradient-to-r from-primary/10 to-purple-600/10 border-t border-border">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold">Stay Protected Today</h2>
          <p className="text-lg text-foreground/70">
            Join thousands of users protecting themselves against scams
          </p>
          <button className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-primary/40 transition transform hover:scale-105 inline-block">
            Download Kavach
          </button>
        </div>
      </section>
    </div>
  );
}
