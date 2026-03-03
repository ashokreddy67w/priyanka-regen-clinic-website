interface WhyCard {
    num: string
    icon: string
    title: string
    desc: string
    link?: { href: string; text: string }
}

const cards: WhyCard[] = [
    {
        num: '01',
        icon: '⭐',
        title: '4.9 Patient Rating',
        desc: 'Consistently rated 4.9/5 across 870+ Google reviews — earned through genuine patient outcomes, not marketing.',
    },
    {
        num: '02',
        icon: '👩‍⚕️',
        title: 'Qualified Medical Team',
        desc: 'MBBS, MD Dermatology specialist. Every consultation personally conducted by Dr. Priyanka with 13+ years of clinical experience.',
    },
    {
        num: '03',
        icon: '🏥',
        title: 'Dedicated Clinic Setup',
        desc: 'Purpose-built facility with a procedure room for dermatosurgery and cosmetic treatments. Safe, sterile, and fully clinical.',
    },
    {
        num: '04',
        icon: '🕐',
        title: 'Consistent Hours',
        desc: 'Mon–Sat, morning and evening sessions. Reliable schedule.',
        link: { href: '#hours', text: 'View clinic hours →' },
    },
    {
        num: '05',
        icon: '📍',
        title: 'Accessible Location',
        desc: 'Centrally located in KPHB Phase 1, Kukatpally — easily reachable from across Hyderabad.',
    },
    {
        num: '06',
        icon: '💬',
        title: 'Easy Communication',
        desc: 'Reach us via phone or WhatsApp. Quick responses for appointment bookings and treatment queries.',
    },
]

export default function Why() {
    return (
        <section className="why" id="why">
            <div className="why-head">
                <div className="section-label">Why Dr. Priyanka&apos;s Clinic</div>
                <h2 className="section-title">Built on Trust. Driven by Care.</h2>
            </div>

            <div className="why-grid">
                {cards.map((card, i) => (
                    <div className="why-card" key={i}>
                        <div className="why-num">{card.num}</div>
                        <div className="why-ico">{card.icon}</div>
                        <div className="why-title">{card.title}</div>
                        <p className="why-desc">
                            {card.desc}
                            {card.link && (
                                <>
                                    {' '}
                                    <a href={card.link.href}>{card.link.text}</a>
                                </>
                            )}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    )
}