
import Image from "next/image";
export default function Hero() {
    return (
        <section className="hero">
            <div className="hero-content">
                <div className="hero-badge">
                    <span className="hero-badge-dot"></span>
                    KPHB&apos;s Trusted Dermatology Clinic
                </div>

                <h1 className="hero-title">
                    Your Skin Deserves<br />
                    <span className="hl">Expert Care.</span><br />
                    Not Guesswork.
                </h1>

                <p className="hero-desc">
                    Clinically precise dermatology, advanced hair restoration, and
                    results-driven cosmetology — all under one specialist roof in KPHB,
                    Hyderabad.
                </p>

                <div className="hero-rating-chip">
                    <span className="chip-stars">★★★★★</span>
                    <div>
                        <div className="chip-val">4.9 / 5.0</div>
                        <div className="chip-count">870+ Verified Patient Reviews</div>
                    </div>
                </div>

                <div className="hero-btns">
                    <a href="tel:+914066660000" className="btn-book">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
                        </svg>
                        Book Appointment
                    </a>
                    <a href="https://wa.me/919100000000" target="_blank" rel="noopener noreferrer" className="btn-wa">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.558 4.122 1.532 5.852L0 24l6.348-1.502A11.93 11.93 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.797 9.797 0 01-5.003-1.373l-.36-.213-3.767.891.924-3.668-.234-.376A9.795 9.795 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182S21.818 6.58 21.818 12 17.42 21.818 12 21.818z" />
                        </svg>
                        WhatsApp Us
                    </a>
                </div>
            </div>

            <div className="hero-visual">
                <div className="hero-img-wrap">

                    {/* ★ ADD PHOTO HERE ★
            Replace the div below with: */}
                    <div className="hero-img">
                        <Image
                            src="/dr-priyanka.png"
                            alt="Dr. Priyanka"
                            width={420}
                            height={480}
                            priority
                            style={{
                                objectFit: "cover",
                                objectPosition: "top",
                                borderRadius: "14px 14px 0 0",
                            }}
                        />
                    </div>

                    <div className="hero-float-top">
                        <div className="flt-icon">🏅</div>
                        Qualified Dermatologist
                    </div>

                    <div className="hero-float-bot">
                        <span className="flt-star">⭐</span>
                        <div>
                            <div className="flt-v">4.9★ Rated</div>
                            <div className="flt-s">870+ Google reviews</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="hero-scroll">
                <span>Scroll to explore</span>
                <div className="scroll-circle">↓</div>
            </div>
        </section>
    )
}