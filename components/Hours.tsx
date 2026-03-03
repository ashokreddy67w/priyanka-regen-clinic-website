export default function Hours() {
    return (
        <section className="hours-loc" id="hours">
            <div>
                <div className="section-label">Visit Us</div>
                <h2 className="section-title">Hours &amp; Location</h2>

                <div className="hours-h3">Monday – Saturday</div>

                <div className="hours-row">
                    <span className="hours-day">Morning Session</span>
                    <div className="hours-slots">
                        <span className="hslot">
                            <span className="tag-m">Morning</span>
                            9:00 AM – 1:00 PM
                        </span>
                    </div>
                </div>

                <div className="hours-row">
                    <span className="hours-day">Evening Session</span>
                    <div className="hours-slots">
                        <span className="hslot">
                            <span className="tag-e">Evening</span>
                            4:00 PM – 8:00 PM
                        </span>
                    </div>
                </div>

                <div className="hours-row">
                    <span className="hours-day">Sunday</span>
                    <div className="hours-slots">
                        <span className="tag-c">Closed</span>
                    </div>
                </div>

                <div className="addr-row">
                    <span className="addr-pin">📍</span>
                    <div>
                        <strong>Dr. Priyanka&apos;s Dermatology &amp; Cosmetology Clinic</strong>
                        KPHB Phase 1, Kukatpally<br />
                        Hyderabad, Telangana – 500072
                    </div>
                </div>

                <div className="appt-box">
                    <span>ℹ️</span>
                    <span>
                        Appointments are recommended for a smoother experience. Call or WhatsApp
                        to confirm availability before visiting.
                    </span>
                </div>
            </div>

            <div className="map-card" id="contact">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.4185!2d78.3972!3d17.4938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93dfffffff%3A0x1234567890abcdef!2sKPHB%20Phase%201%2C%20Kukatpally%2C%20Hyderabad%2C%20Telangana%20500072!5e0!3m2!1sen!2sin!4v1700000000000"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Clinic Location"
                />
                <div className="map-foot">
                    <div className="map-addr">
                        <strong>KPHB Phase 1, Kukatpally</strong>
                        Hyderabad, Telangana – 500072
                    </div>
                    <a
                        href="https://maps.google.com/?q=KPHB+Phase+1+Kukatpally+Hyderabad"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-dir"
                    >
                        ↗ Get Directions
                    </a>
                </div>
            </div>
        </section>
    )
}