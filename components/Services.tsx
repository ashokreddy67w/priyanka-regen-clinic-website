interface ServiceCard {
    icon: string
    iconClass: string
    title: string
    sub: string
    items: string[]
}

const services: ServiceCard[] = [
    {
        icon: '🔬',
        iconClass: 'ico-a',
        title: 'Clinical Dermatology',
        sub: 'Skin Care',
        items: [
            'Acne & Pimple Scar Treatment',
            'Hyperpigmentation & Skin Tone',
            'Stretch Mark Treatment',
            'Skin Tag Assessment & Removal',
            'General Skin Conditions',
            'Paediatric & Geriatric Dermatology',
        ],
    },
    {
        icon: '💆',
        iconClass: 'ico-b',
        title: 'Hair Treatments',
        sub: 'Hair & Trichology',
        items: [
            'Hair Loss Consultation & Treatment',
            'Trichology Assessment & Services',
            'Scalp Health Management',
            'Hair Transplantation',
            'Post-Transplant Care Protocols',
        ],
    },
    {
        icon: '✨',
        iconClass: 'ico-c',
        title: 'Cosmetology',
        sub: 'Aesthetic Treatments',
        items: [
            'Tattoo Removal',
            'Skin Rejuvenation Treatments',
            'Chemical Peels & Resurfacing',
            'Cosmetic Skin Procedures',
            'Personalised Treatment Plans',
        ],
    },
    {
        icon: '🏥',
        iconClass: 'ico-d',
        title: 'Dermatosurgery',
        sub: 'Clinical & Procedures',
        items: [
            'Minor Surgical Procedures',
            'Skin Lesion Removal & Biopsy',
            'Cyst & Lipoma Excision',
            'Wart & Molluscum Treatment',
            'Procedure Room-Based Care',
        ],
    },
]

export default function Services() {
    return (
        <section className="services" id="services">
            <div className="services-head">
                <div className="section-label">Our Services</div>
                <h2 className="section-title">
                    Comprehensive Skin, Hair<br />&amp; Cosmetology Care
                </h2>
                <p className="section-desc">
                    Organised specialty services to address your dermatological, hair, and
                    cosmetic needs <strong>under one roof.</strong>
                </p>
            </div>

            <div className="svc-grid">
                {services.map((svc, i) => (
                    <div className="svc-card" key={i}>
                        <div className={`svc-ico ${svc.iconClass}`}>{svc.icon}</div>
                        <div>
                            <div className="svc-title">{svc.title}</div>
                            <div className="svc-sub">{svc.sub}</div>
                        </div>
                        <div className="svc-hr"></div>
                        <ul className="svc-list">
                            {svc.items.map((item, j) => (
                                <li key={j}>{item}</li>
                            ))}
                        </ul>
                        <a href="#contact" className="svc-link">
                            Enquire Now →
                        </a>
                    </div>
                ))}
            </div>
        </section>
    )
}