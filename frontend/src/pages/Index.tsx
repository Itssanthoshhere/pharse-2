import Header from "../components/LandingPage/Header";
import HeroSection from "../components/LandingPage/HeroSection";
import Features from "../components/LandingPage/Features";
import Pricing from "../components/LandingPage/Pricing";
import Footer from "../components/LandingPage/Footer";
// import DashboardPreview from "../components/LandingPage/DashboardPreview";
import DifferentiatorSection from "../components/LandingPage/DifferentiatorSection";
import WorkflowSection, {
  type WorkflowStep,
} from "../components/LandingPage/WorkflowSection";
import SecuritySection, {
  type Feature,
} from "../components/LandingPage/SecuritySection";
import ProblemStatement from "../components/LandingPage/ProblemStatement";
import ContactUs from "../components/LandingPage/ContactUs";

// Define local type for Differentiator
type DifferentiatorItem = {
  icon: "Zap" | "Layers" | "Target" | "Shield" | "TrendingUp";
  title: string;
  description: string;
};

// Differentiator Data
const differentiatorData = [
  {
    icon: "Layers",
    title: "Unified Platform",
    description:
      "CRM, AI analytics & transactions — all in one seamless experience.",
  },
  {
    icon: "Zap",
    title: "AI-Powered Insights",
    description:
      "Turns live data into actionable recommendations — fast, accurate & efficient.",
  },
  {
    icon: "Target",
    title: "Smart Client Management",
    description:
      "Purpose-built CRM for MFDs — track AUM, SIPs & client engagement effortlessly.",
  },
  {
    icon: "TrendingUp",
    title: "Scalable & Future-Ready",
    description:
      "From solo IFAs to large distributors — easy onboarding, modular architecture & automation-ready growth.",
  },
  {
    icon: "Shield",
    title: "Compliance & Security First",
    description:
      "Bank-grade encryption, data masking & secure infrastructure ensure complete data protection.",
  },
] as const satisfies DifferentiatorItem[];

// Workflow Data
const workflowData = [
  {
    step: 1,
    icon: "UserPlus",
    title: "Sign Up",
    description:
      "Create your MF360 account and get started within minutes — no complex setup required.",
  },
  {
    step: 2,
    icon: "Database",
    title: "Integration",
    description:
      "Connect seamlessly with CAMS, KFintech, BSE Star MF, and NSE NMF II for unified data access.",
  },
  {
    step: 3,
    icon: "Lightbulb",
    title: "AI Analysis",
    description:
      "Leverage AI to analyze portfolios, detect overlaps, assess risk, and recommend actionable insights.",
  },
  {
    step: 4,
    icon: "MousePointer",
    title: "CRM Dashboard",
    description:
      "Manage clients, leads, and AUM — track engagement, performance, and transactions in one place.",
  },
  {
    step: 5,
    icon: "Database",
    title: "Transaction",
    description:
      "Execute SIPs, lumpsum investments, switches, and redemptions securely and instantly.",
  },
  {
    step: 6,
    icon: "Lightbulb",
    title: "Reports",
    description:
      "Generate professional, client-ready reports with visual analytics and personalized insights.",
  },
  {
    step: 7,
    icon: "TrendingUp",
    title: "Growth & Scale",
    description:
      "Expand effortlessly with automation-ready tools, AI recommendations, and modular scaling.",
  },
] as const satisfies WorkflowStep[];

// Security Features
const securityFeatures: Feature[] = [
  {
    icon: "Lock",
    title: "Bank-Grade Security",
    description:
      "We protect your data with AES-256 encryption, HTTPS/TLS secure channels, and multi-layer authentication — ensuring all portfolios and transactions remain protected from unauthorized access.",
    iconBg: "#f0fdf4",
    iconColor: "#16a34a",
  },
  {
    icon: "Shield",
    title: "Data Privacy & Protection",
    description:
      "Sensitive information such as PAN and account numbers is masked. Access is restricted to authorized users, and all processes comply with Indian data protection regulations and best practices.",
    iconBg: "#f0fdf4",
    iconColor: "#16a34a",
  },
  {
    icon: "FileCheck",
    title: "Regulatory Compliance",
    description:
      "Integrated with CAMS, KFintech, BSE Star MF, and NSE NMF II — ensuring all activities are audit-ready, traceable, and compliant with SEBI and AMFI standards for mutual fund distributors.",
    iconBg: "#f0fdf4",
    iconColor: "#16a34a",
  },
  {
    icon: "Eye",
    title: "Continuous Monitoring",
    description:
      "Real-time alerts, regular audits, system health checks, and redundant backups ensure uptime and prevent data loss.",
    iconBg: "#f0fdf4",
    iconColor: "#16a34a",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main>
        {/* Hero Section */}
        <section id="home" className="scroll-mt-20 lg:scroll-mt-16">
          <HeroSection />
        </section>

        {/* Problem Statement */}
        <section className="scroll-mt-20 lg:scroll-mt-16">
          <ProblemStatement />
        </section>

        {/* Features */}
        <section id="solutions" className="scroll-mt-24 lg:scroll-mt-20">
          <Features />
        </section>

        {/* Differentiator */}
        <section
          id="features"
          className="relative scroll-mt-20 lg:scroll-mt-16"
        >
          <DifferentiatorSection data={differentiatorData} />

          {/* Visual Separator */}
          <div className="relative py-16 bg-background">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full max-w-4xl mx-auto px-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-border"></div>
                  </div>
                  <div className="relative flex justify-center">
                    <div className="bg-background px-6">
                      <div className="flex items-center gap-3">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                        <div className="h-2 w-2 rounded-full bg-accent"></div>
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Workflow Section */}
        <section id="how-it-works" className="scroll-mt-20 lg:scroll-mt-16">
          <WorkflowSection data={workflowData} />
        </section>

        {/* Security Section */}
        <section>
          <SecuritySection data={securityFeatures} />
        </section>

        {/* Pricing */}
        <section id="pricing" className="scroll-mt-20 lg:scroll-mt-16">
          <Pricing />
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-20 lg:scroll-mt-16">
          <ContactUs />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
