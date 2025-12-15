import "./globals.css";

export const metadata = {
  title: "Agita Rahel | Front End Developer",
  description: "Personal Portfolio of Agita Rahel Panjaitan",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
