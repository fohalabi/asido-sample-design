import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import Image from 'next/image';

interface FooterLink {
  label: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const Footer: React.FC = () => {
  const quickLinks: FooterLink[] = [
    { label: 'Programs', href: '/programs' },
    { label: 'Blog', href: '/blog' },
    { label: 'Thursday Tribune', href: '/tribune' },
    { label: 'IMCE Sessions', href: '/imce-sessions' },
  ];

  const supportLinks: FooterLink[] = [
    { label: 'Donate', href: '/donate' },
    { label: 'Volunteer', href: '/volunteer' },
    { label: 'Book Campaign', href: '/book-campaign' },
    { label: 'Unashamed Pledge', href: '/unashamed-pledge' },
  ];

  const socialLinks = [
    { icon: 'twitter', href: 'https://twitter.com', ariaLabel: 'Twitter' },
    { icon: 'facebook', href: 'https://facebook.com', ariaLabel: 'Facebook' },
    { icon: 'linkedin', href: 'https://linkedin.com', ariaLabel: 'LinkedIn' },
    { icon: 'instagram', href: 'https://instagram.com', ariaLabel: 'Instagram' },
  ];

  return (
    <footer className="bg-blue-700 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 lg:px-8">
        {/* Brand Section - Centered on mobile */}
        <div className="text-center mb-12 lg:hidden">
           <div className="flex items-center justify-center gap-2 mb-6">
            {/* <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <div className="w-8 h-8 rounded-full border-4 border-blue-700 flex items-center justify-center">
                <div className="grid grid-cols-3 gap-0.5">
                  {[...Array(9)].map((_, i) => (
                    <div key={i} className="w-1 h-1 bg-blue-700 rounded-full" />
                  ))}
                </div>
              </div>
            </div> */}
      <Image
        src="/Logo+Word (1).png"
        width={160}
        height={64}
        alt="Asido Foundation Logo"
        className="w-40 h-16 object-contain"
      />
          </div>
          <p className="text-base leading-relaxed text-white max-w-md mx-auto">
            Making mental health support accessible through advocacy and action
          </p>
        </div>

        {/* Desktop Brand Section */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-4 gap-12">
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <Image
                  src="/Logo+Word (1).png"
                  width={160}
                  height={64}
                  alt="Asido Foundation Logo"
                  className="w-40 h-16 object-contain"
                />
              </div>
              <p className="text-sm leading-relaxed text-blue-50">
                Making mental health support accessible through advocacy and action
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-blue-50 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-3">
                {supportLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-blue-50 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Us */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-4">
                <li className="flex gap-3 text-sm text-blue-50">
                  <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>No 4, Awosika Street, Old Bodija, Ibadan.</span>
                </li>
                <li className="flex gap-3 text-sm text-blue-50">
                  <Mail className="w-5 h-5 flex-shrink-0" />
                  <a href="mailto:asidofoundation@gmail.com" className="hover:text-white transition-colors">
                    asidofoundation@gmail.com
                  </a>
                </li>
                <li className="flex gap-3 text-sm text-blue-50">
                  <Phone className="w-5 h-5 flex-shrink-0" />
                  <div className="flex flex-col gap-1">
                    <a href="tel:+2348188077458" className="hover:text-white transition-colors">
                      +234 818 077 7458
                    </a>
                    <a href="tel:+2349028080416" className="hover:text-white transition-colors">
                      +234 902 808 0416
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Mobile Layout - Links side by side */}
        <div className="lg:hidden">
          <div className="border-t border-white/20 pt-8 mb-8">
            <div className="grid grid-cols-2 gap-8 mb-12">
              {/* Quick Links */}
              <div>
                <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
                <ul className="space-y-4">
                  {quickLinks.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-base text-white hover:text-blue-100 transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Support */}
              <div>
                <h3 className="text-lg font-semibold mb-6">Support</h3>
                <ul className="space-y-4">
                  {supportLinks.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-base text-white hover:text-blue-100 transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Us - Full width on mobile */}
          <div className="border-t border-white/20 pt-8">
            <h3 className="text-lg font-semibold mb-6 text-center">Contact Us</h3>
            <ul className="space-y-5">
              <li className="flex gap-3 text-base text-white justify-center">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-1" />
                <span>No 4, Awosika Street, Old Bodija, Ibadan.</span>
              </li>
              <li className="flex gap-3 text-base text-white justify-center">
                <Mail className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <a href="mailto:asidofoundation@gmail.com" className="hover:text-blue-100 transition-colors">
                  asidofoundation@gmail.com
                </a>
              </li>
              <li className="flex gap-3 text-base text-white justify-center">
                <Phone className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <div className="flex gap-4">
                  <a href="tel:+2348188077458" className="hover:text-blue-100 transition-colors">
                    +234 818 077 7458
                  </a>
                  <a href="tel:+2349028080416" className="hover:text-blue-100 transition-colors">
                    +234 902 808 0416
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <p className="text-sm text-white text-center mb-6">
            © 2025 Asido Foundation. All Rights Reserved.
          </p>
          {/* Social Links - Bottom on mobile */}
          <div className="flex gap-6 justify-center lg:hidden">
            {socialLinks.map((social) => (
              <a
                key={social.icon}
                href={social.href}
                aria-label={social.ariaLabel}
                className="w-10 h-10 flex items-center justify-center hover:bg-blue-600 rounded transition-colors"
              >
                {social.icon === 'twitter' && (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                )}
                {social.icon === 'facebook' && (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                )}
                {social.icon === 'linkedin' && (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                )}
                {social.icon === 'instagram' && (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                  </svg>
                )}
              </a>
            ))}
          </div>
        </div>
        </div>
    </footer>
  );
};

export default Footer;