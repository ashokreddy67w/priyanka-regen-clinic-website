export default function TrustBar() {
    const items = [
        { icon: '⭐', label: '4.9 / 5 Rating', sub: '870+ Google Reviews Verified' },
        { icon: '👥', label: 'MBBS, MD Dermatology', sub: 'Specialist Qualified · 13+ Years' },
        { icon: '🕐', label: 'Mon – Sat Open', sub: '9am–1pm & 4pm–8pm' },
        { icon: '📍', label: 'KPHB Phase 1, Kukatpally', sub: 'Hyderabad, Telangana' },
    ]

    return (
        <div className="trust-bar">
            {items.map((item, i) => (
                <div className="trust-item" key={i}>
                    <div className="ti-ico">{item.icon}</div>
                    <div>
                        <span className="ti-label">{item.label}</span>
                        <span className="ti-sub">{item.sub}</span>
                    </div>
                </div>
            ))}
        </div>
    )
}