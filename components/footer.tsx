import Link from "next/link"
import { Mail, Phone, Facebook, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary-foreground rounded-full flex items-center justify-center text-primary font-bold">
                W
              </div>
              <span className="font-semibold">The Wellness Club</span>
            </div>
            <p className="text-sm opacity-90">A vibrant community hub dedicated to holistic wellness.</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:underline">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <a href="tel:+923090692995" className="flex items-center gap-2 hover:underline">
                <Phone size={16} /> +92 309 069 2995
              </a>
              <a href="mailto:info@thewellnessclub.pk" className="flex items-center gap-2 hover:underline">
                <Mail size={16} /> info@thewellnessclub.pk
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com/the_wellnessclub_arture"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <p className="text-sm text-center opacity-75">© 2025 The Wellness Club. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
