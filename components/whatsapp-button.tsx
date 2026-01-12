"use client"

import { MessageCircle } from "lucide-react"
import Link from "next/link"

export default function WhatsAppButton() {
  const whatsappNumber = "+923090692995"
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/\D/g, "")}`

  return (
    <Link
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-[#25D366] hover:bg-[#20BA5F] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-40 flex items-center justify-center"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle size={24} />
    </Link>
  )
}
