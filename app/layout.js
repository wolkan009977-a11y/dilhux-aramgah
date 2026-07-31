import "./globals.css";

export const metadata = {
  title: "DILHUX Aramgah",
  description: "DILHUX Aramgah Menu",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ug">
      <body>
        {children}
      </body>
    </html>
  );
}
