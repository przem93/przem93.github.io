import "@/styles/globals.css";

export const metadata = {
  title: 'Przemysław Ratajczak - Software Developer',
  description: 'My name is Przemek. I am Software Engineer.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
