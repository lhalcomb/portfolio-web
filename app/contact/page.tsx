import ContactForm from "@/components/contactForm";
import Image from "next/image";
import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[--web-gray] px-4">
      <div className="flex flex-col items-center space-y-6 w-full max-w-md">
        {/* Profile Image */}
        <div className="bg-gradient-to-r from-[var(--spidey-red)] via-[var(--web-blue)] to-[var(--spidey-red)] p-1 rounded-full shadow-xl">
          <div className="bg-white rounded-full px-10 py-6 flex items-center space-x-6">
            <Image
              src="/layden1.jpeg"
              alt="Layden's Profile"
              width={96}
              height={96}
              className="w-35 h-35 rounded-full object-cover border-4 border-[var(--spidey-red)]"
            />
            <div className="text-[var(--web-blue)]">
              <h2 className="text-xl font-bold">Layden Halcomb</h2>
              <p className="text-sm">Springfield, MO</p>
              <p className="text-sm">
                <Link href="mailto:layden.halcom@gmail.com">layden.halcom@gmail.com</Link>
              </p>
              <p className="text-sm">+1 (573)707-1874 </p>      
            </div>
          </div>
        </div>
        {/* Contact Info */}
        

        {/* Contact Form */}
        <ContactForm />
      </div>
    </main>
  );
}