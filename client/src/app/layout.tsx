import './globals.css'
import type React from "react"
import ClientLayout from "./ClientLayout"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <ClientLayout>{children}</ClientLayout>
}



export const metadata = {
      generator: 'ayushkatre.tech'
    };
