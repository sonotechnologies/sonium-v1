import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

import { Send } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#020b3d] px-4 py-16 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_1fr_1fr_1.2fr]">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex size-11 items-center justify-center rounded-2xl bg-blue-600 font-bold">
                S
              </div>

              <span className="text-2xl font-bold">
                Sonium
              </span>
            </div>

            <p className="mt-6 max-w-xs leading-7 text-blue-100">
              Your personal internet wallet. Reserve.
              Buy. Stay connected.
            </p>

            <div className="mt-6 flex items-center gap-3">
              {[
                FaFacebookF,
                FaTwitter,
                FaInstagram,
                FaLinkedinIn,
              ].map((Icon, index) => (
                <button
                  key={index}
                  className="flex size-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20"
                >
                  <Icon className="size-4" />
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold">
              Product
            </h3>

            <ul className="mt-6 space-y-4 text-blue-100">
              <li>Features</li>
              <li>How It Works</li>
              <li>Buy Data</li>
              <li>Wallet</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold">
              Company
            </h3>

            <ul className="mt-6 space-y-4 text-blue-100">
              <li>About Us</li>
              <li>Blog</li>
              <li>Careers</li>
              <li>Contact Us</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold">
              Support
            </h3>

            <ul className="mt-6 space-y-4 text-blue-100">
              <li>Help Center</li>
              <li>FAQs</li>
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold">
              Stay updated
            </h3>

            <p className="mt-5 leading-7 text-blue-100">
              Get tips, offers and updates delivered to your
              inbox.
            </p>

            <div className="mt-6 flex overflow-hidden rounded-2xl border border-white/10 bg-white/10">
              <input
                type="email"
                placeholder="Enter your email"
                className="h-14 flex-1 bg-transparent px-5 text-white placeholder:text-blue-200 outline-none"
              />

              <button className="flex w-16 items-center justify-center bg-blue-600">
                <Send className="size-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 text-sm text-blue-200">
          © 2025 Sonium. All rights reserved.
        </div>
      </div>
    </footer>
  );
}