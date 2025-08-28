import type { Metadata } from 'next';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'LuminalQ - AI Learning Assistant',
  description: 'Transform any PDF into an intelligent learning experience with AI-powered insights, interactive conversations, and personalized study tools.',
  keywords: ['AI', 'learning', 'education', 'PDF', 'chat', 'study', 'assistant'],
  authors: [{ name: 'yal786' }],
  creator: 'yal786',
  publisher: 'LuminalQ',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://luminalq.com'),
  openGraph: {
    title: 'LuminalQ - AI Learning Assistant',
    description: 'Transform any PDF into an intelligent learning experience with AI-powered insights.',
    url: 'https://luminalq.com',
    siteName: 'LuminalQ',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'LuminalQ - AI Learning Assistant',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LuminalQ - AI Learning Assistant',
    description: 'Transform any PDF into an intelligent learning experience with AI-powered insights.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code',
    yandex: 'yandex-verification-code',
    yahoo: 'yahoo-site-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}