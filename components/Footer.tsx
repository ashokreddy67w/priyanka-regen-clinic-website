const quickLinks = [
    { href: '#about', label: 'About Dr. Priyanka' },
    { href: '#services', label: 'Services' },
    { href: '#why', label: 'Why Choose Us' },
    { href: '#hours', label: 'Hours & Location' },
    { href: '#contact', label: 'Contact' },
]

export default function Footer() {
    return (
        <>
            <footer>
                <div className="footer-top">
                    <div>
                        <div className="f-brand-name">
                            <span>Dr. Priyanka&apos;s</span> Dermatology &amp;<br />
                            Cosmetology Clinic
                        </div>
                        <p className="f-brand-desc">
                            Specialist Dermatology, Hair Treatment &amp; Cosmetology clinic in
                            KPHB Phase 1, Kukatpally, Hyderabad. MBBS, MD Dermatology. TSMC
                            Registered since 2011.
                        </p>
                        <div className="f-reg">
                            TSMC REG. 2011 · MBBS MD DERMATOLOGY · 13+ YRS EXPERIENCE
                        </div>
                    </div>

                    <div className="f-col">
                        <h4>Quick Links</h4>
                        <ul>
                            {quickLinks.map((link, i) => (
                                <li key={i}>
                                    <a href={link.href}>{link.label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="f-col">
                        <h4>Contact</h4>
                        <address>
                            KPHB Phase 1, Kukatpally<br />
                            Hyderabad, Telangana – 500072<br />
                            <br />
                            Mon–Sat: 9am–1pm &amp; 4pm–8pm<br />
                            Sunday: Closed
                        </address>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>
                        © {new Date().getFullYear()} Dr. Priyanka&apos;s Dermatology &amp;
                        Cosmetology Clinic. All rights reserved.
                    </p>
                    <p>Hyderabad, Telangana</p>
                </div>
            </footer>

            {/* WhatsApp FAB */}
            <a
                href="https://wa.me/919652085328"
                target="_blank"
                rel="noopener noreferrer"
                className="wa-fab"
                title="WhatsApp Us"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="white"
                    width="26"
                    height="26"
                >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.558 4.122 1.532 5.852L0 24l6.348-1.502A11.93 11.93 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.797 9.797 0 01-5.003-1.373l-.36-.213-3.767.891.924-3.668-.234-.376A9.795 9.795 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182S21.818 6.58 21.818 12 17.42 21.818 12 21.818z" />
                </svg>
            </a>
        </>
    )
}