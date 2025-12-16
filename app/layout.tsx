import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Toaster } from "sonner";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"
  ),
  title: {
    default: "Walking Witness - Dashboard Management System",
    template: "%s | Walking Witness",
  },
  description:
    "Walking Witness - Modern dashboard management system for managing users, donations, projects, and leader requests. Streamline your workflow with our intuitive admin panel.",
  keywords: [
    "Walking Witness",
    "Dashboard",
    "Management System",
    "Admin Panel",
    "User Management",
    "Donation Management",
    "Project Management",
    "Admin Dashboard",
  ],
  authors: [{ name: "Walking Witness Team" }],
  creator: "Walking Witness",
  publisher: "Walking Witness",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Walking Witness",
    title: "Walking Witness - Dashboard Management System",
    description:
      "Modern dashboard management system for managing users, donations, projects, and leader requests.",
    images: [
      {
        url: "/icons/logo.svg",
        width: 1200,
        height: 630,
        alt: "Walking Witness Dashboard",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Walking Witness - Dashboard Management System",
    description:
      "Modern dashboard management system for managing users, donations, projects, and leader requests.",
    images: ["/icons/logo.svg"],
    creator: "@nrbnayon",
  },
  alternates: {
    canonical: "/",
  },
  category: "Software",
  classification: "Dashboard Management System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
        <meta name="theme-color" content="#FBECEB" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Walking Witness",
              applicationCategory: "Dashboard Management System",
              operatingSystem: "Web",
              description:
                "Modern dashboard management system for managing users, donations, projects, and leader requests.",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5",
                ratingCount: "1",
              },
            }),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
          forcedTheme="light"
        >
          {children}
          <Toaster richColors position="top-center" />
        </ThemeProvider>
      </body>
    </html>
  );
}
