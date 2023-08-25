import "./globals.css";

export const metadata = {
  title: "Shipmate.",
  description: "Shipmate. Task Project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
