const checks = [
    'TSMC Registered (2011)',
    'Dedicated Procedure Room',
    'Paediatric to Geriatric',
    'Appointments Recommended',
]

const cards = [
    {
        icon: '🔬',
        title: 'Clinical Precision',
        desc: 'Evidence-based dermatology with accurate diagnosis. Every skin condition is assessed clinically — not cosmetically.',
    },
    {
        icon: '🏆',
        title: 'Femina Featured — July 2024',
        desc: 'Recognised for expertise in clinical dermatology. A credibility milestone, not a marketing claim.',
    },
    {
        icon: '✨',
        title: 'Aesthetic Expertise',
        desc: 'Advanced cosmetology with a patient-first approach — medically appropriate, never over-promised.',
    },
    {
        icon: '🤖',
        title: 'Medical AI Workshop — 2025',
        desc: 'Active participation in AI-aided diagnostics to advance dermatological practice.',
    },
]

export default function About() {
    return (
        <section className="about" id="about">
            <div>
                <div className="section-label">About the Clinic</div>
                <h2 className="section-title">
                    Your Trusted Specialist<br />Dermatology Clinic
                </h2>

                <p className="about-body">
                    Dr. Priyanka&apos;s Dermatology &amp; Cosmetology Clinic is a dedicated
                    specialist practice serving KPHB and across Hyderabad since 2011. Every
                    consultation is personally conducted by{' '}
                    <strong>Dr. Priyanka</strong> — MBBS, MD Dermatology — registered with
                    the Telangana State Medical Council.
                </p>
                <p className="about-body">
                    With <strong>13+ years of clinical experience</strong> and a{' '}
                    <strong>4.9★ rating from 870+ patients</strong>, the clinic delivers
                    clinical dermatology, cosmetology, dermatosurgery, and hair restoration
                    under one roof — not delegated to technicians.
                </p>
                <p className="about-body">
                    Featured in <strong>Femina (July 2024)</strong> and an active participant
                    in Medical AI workshops (2025), Dr. Priyanka combines clinical rigour with
                    a commitment to evolving best practice.
                </p>

                <div className="about-checks">
                    {checks.map((text, i) => (
                        <div className="chk-row" key={i}>
                            <div className="chk-ico">✓</div>
                            {text}
                        </div>
                    ))}
                </div>
            </div>

            <div className="about-right">
                {cards.map((card, i) => (
                    <div className="about-card" key={i}>
                        <div className="ac-ico">{card.icon}</div>
                        <div>
                            <div className="ac-title">{card.title}</div>
                            <div className="ac-desc">{card.desc}</div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}