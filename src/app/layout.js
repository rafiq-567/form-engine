import "./globals.css";

export const metadata = {
  title: "Form Builder",
  description: "Next.js Form Builder",
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}