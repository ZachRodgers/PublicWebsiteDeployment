import React from 'react';
import './Legal.css';

const TermsAndConditions: React.FC = () => {
  return (
    <div className="legal-page-container">
      <div className="legal-header">
        <h1 className="legal-title">Terms of Service</h1>
        <div className="legal-meta">
          <div className="legal-meta-item">
            <span className="legal-meta-label">Effective Date:</span>
            <span className="legal-meta-value">July 28, 2025</span>
          </div>
          <div className="legal-meta-item">
            <span className="legal-meta-label">Last Updated:</span>
            <span className="legal-meta-value">July 28, 2025</span>
          </div>
        </div>

        <div className="legal-navigation">
          <a href="/legal/app/privacy-policy" className="legal-nav-link">
            Privacy Policy
            <span className="legal-nav-arrow">→</span>
          </a>
          <div></div>
        </div>
      </div>

      <div className="legal-content">
        <section className="legal-section" id="agreement">
          <h2 className="legal-section-title">Agreement to Terms</h2>
          <div className="legal-section-content">
            <p>
              By downloading, registering for, or using the Parallel mobile application ("App") or accessing our website at <a href="https://parkwithparallel.com" className="legal-link" target="_blank" rel="noopener noreferrer">https://parkwithparallel.com</a>, you agree to be legally bound by these Terms of Service ("Terms") and our Privacy Policy. If you do not agree, you must not use the App or any related services.
            </p>
          </div>
        </section>

        <section className="legal-section" id="description">
          <h2 className="legal-section-title">Description of Services</h2>
          <div className="legal-section-content">
            <p>
              Parallel Parking Solutions Inc. ("Parallel", "we", "us") offers a mobile-based parking management system powered by Automatic License Plate Recognition (ALPR). The App allows users to register vehicles, start and end parking sessions, manage billing, receive notifications, and view or pay parking violations. ALPR cameras located at partner parking lots scan license plates to detect vehicle entry and exit automatically.
            </p>
          </div>
        </section>

        <section className="legal-section" id="eligibility">
          <h2 className="legal-section-title">User Eligibility</h2>
          <div className="legal-section-content">
            <p>
              The App is available to any individual who owns or operates a motor vehicle and accepts these Terms. There is no age restriction enforced through the App; however, users must have a valid license plate and access to a mobile phone for registration. Use of the App constitutes full legal responsibility for compliance with these Terms and with all local parking regulations.
            </p>
          </div>
        </section>

        <section className="legal-section" id="registration">
          <h2 className="legal-section-title">Account Registration</h2>
          <div className="legal-section-content">
            <p>
              To access most features, including parking session tracking and payments, you must register an account by providing a phone number and at least one valid license plate. Providing a name or email address is optional. You are responsible for maintaining the confidentiality of your account credentials and for all activity that occurs under your account.
            </p>
          </div>
        </section>

        <section className="legal-section" id="alpr-scanning">
          <h2 className="legal-section-title">ALPR Scanning Without Account</h2>
          <div className="legal-section-content">
            <p>
              Parallel-enabled parking lots may scan license plates using ALPR systems even before a user downloads the App or creates an account. Entry into such a lot constitutes consent to have your vehicle scanned for enforcement and billing purposes. This is disclosed via posted signage at each participating location. Unregistered plate data is stored anonymously for a limited time unless linked to a user account later.
            </p>
          </div>
        </section>

        <section className="legal-section" id="responsibilities">
          <h2 className="legal-section-title">User Responsibilities</h2>
          <div className="legal-section-content">
            <p>
              You agree to use the App only for lawful purposes and in accordance with these Terms. You must not use stolen license plates, impersonate other users, manipulate location data, reverse engineer the software, bypass ALPR detection, avoid valid fees, or interfere with any part of the system. You are responsible for ensuring that your license plate information is accurate and current. You are also responsible for payment of all sessions and violations tied to your account or license plate, even if the session was started automatically via ALPR without your interaction with the App.
            </p>
          </div>
        </section>

        <section className="legal-section" id="payments">
          <h2 className="legal-section-title">Payments</h2>
          <div className="legal-section-content">
            <p>
              All payments are processed through Stripe. The App allows you to manually pay for sessions and violations or optionally enable automatic payments using stored payment methods. Wallet top-ups are completely optional but once added, funds are non-refundable except in the case of billing errors or validated disputes. By using the App, you agree to pay any fees associated with your parking sessions or violations.
            </p>
          </div>
        </section>

        <section className="legal-section" id="wallet">
          <h2 className="legal-section-title">Wallet and Autopay</h2>
          <div className="legal-section-content">
            <p>
              You may choose to fund a wallet within the App and enable autopay for parking sessions. Wallet funds cannot be withdrawn or transferred and are not refunded upon account deletion. Wallet balance is used only for eligible sessions and not for violations. You must explicitly opt in to enable wallet-based autopay or auto-refill features. Refunds for sessions originally paid via wallet will be returned to your wallet balance.
            </p>
          </div>
        </section>

        <section className="legal-section" id="violations">
          <h2 className="legal-section-title">Violations</h2>
          <div className="legal-section-content">
            <p>
              A parking violation may occur if you fail to pay for a session within the posted grace period, which is at least 10 minutes by default. Grace periods and rules may vary by lot. If a violation is recorded, you will be notified via the App and, if enabled, via push notifications. Violations are never charged automatically. You are required to manually pay for violations through the App.
            </p>
          </div>
        </section>

        <section className="legal-section" id="enforcement">
          <h2 className="legal-section-title">Enforcement</h2>
          <div className="legal-section-content">
            <p>
              Unpaid violations may be subject to enforcement measures at the discretion of the lot operator. This may include boots, tickets, or towing, as posted at the lot. Parallel does not conduct enforcement actions but provides plate-level data to lot operators to support their internal policies. Parallel assumes no liability for enforcement actions taken by third parties or lot staff. You are responsible for resolving any unpaid violations tied to your license plate.
            </p>
          </div>
        </section>

        <section className="legal-section" id="refunds">
          <h2 className="legal-section-title">Refunds</h2>
          <div className="legal-section-content">
            <p>
              Refunds may be issued if a session was charged incorrectly due to ALPR error, user dispute, or system malfunction. If approved, the refund will be issued to your original payment method or returned to your wallet balance, depending on how the payment was made. All refund requests are subject to review. Refunds are not guaranteed and will not be provided in cases where parking charges were valid.
            </p>
          </div>
        </section>

        <section className="legal-section" id="availability">
          <h2 className="legal-section-title">Service Availability</h2>
          <div className="legal-section-content">
            <p>
              We aim to maintain continuous access to the App and backend systems, but availability is not guaranteed. The App may be interrupted for maintenance, upgrades, outages, or third-party service failures. We are not liable for any damages or consequences resulting from the App being unavailable, including but not limited to missed appointments, enforcement actions, or inability to pay for parking.
            </p>
          </div>
        </section>

        <section className="legal-section" id="data-use">
          <h2 className="legal-section-title">Data Use</h2>
          <div className="legal-section-content">
            <p>
              Your use of the App constitutes consent for us to collect, store, and process data as outlined in our Privacy Policy. This includes license plate scans, location data, account details, payment information, and session history. Parking lot operators may view license plates, timestamps, and violation status for vehicles in their lot, but will never have access to your personal contact information such as name, phone number, or email.
            </p>
          </div>
        </section>

        <section className="legal-section" id="modifications">
          <h2 className="legal-section-title">Modifications</h2>
          <div className="legal-section-content">
            <p>
              We reserve the right to modify these Terms at any time. Changes will be posted within the App and on our website at <a href="https://parkwithparallel.com/legal/app/terms-of-service" className="legal-link" target="_blank" rel="noopener noreferrer">https://parkwithparallel.com/legal/app/terms-of-service</a>. Your continued use of the App after changes have been made constitutes acceptance of the updated Terms. If you do not agree to the new Terms, you must stop using the App and may request account deletion.
            </p>
          </div>
        </section>

        <section className="legal-section" id="termination">
          <h2 className="legal-section-title">Termination</h2>
          <div className="legal-section-content">
            <p>
              We may suspend or terminate your access to the App or delete your account without notice if you violate these Terms, use the App fraudulently, or engage in unlawful behavior. You may delete your account at any time via the App or by emailing <a href="mailto:info@parkwithparallel.com" className="legal-email">info@parkwithparallel.com</a>. Termination does not eliminate your obligation to pay any outstanding sessions or violations linked to your license plate.
            </p>
          </div>
        </section>

        <section className="legal-section" id="governing-law">
          <h2 className="legal-section-title">Governing Law</h2>
          <div className="legal-section-content">
            <p>
              These Terms and your use of the App are governed by the laws of Ontario, Canada. Any disputes, claims, or legal actions arising from your use of the App shall be governed and interpreted in accordance with the laws of the Province of Ontario.
            </p>
          </div>
        </section>

        <section className="legal-section" id="dispute-resolution">
          <h2 className="legal-section-title">Dispute Resolution</h2>
          <div className="legal-section-content">
            <p>
              You agree to resolve any dispute with Parallel through confidential, binding arbitration in Ottawa, Ontario. You waive your right to participate in any class action lawsuit or class-wide arbitration. Any claim must be brought individually and within one year of the event giving rise to the dispute.
            </p>
          </div>
        </section>

        <section className="legal-section" id="qr-code">
          <h2 className="legal-section-title">QR Code and Website Integrity</h2>
          <div className="legal-section-content">
            <p>
              You are responsible for ensuring that you interact only with official Parallel properties. Parallel is not liable for any loss, fraud, or incorrect payment resulting from scanning a tampered or unofficial QR code or accessing a third-party website impersonating our services.
            </p>
            <div className="legal-highlight">
              <p>
                Parallel's only authorized web platform is located at: <a href="https://pay.parkwithparallel.com" className="legal-link" target="_blank" rel="noopener noreferrer">https://pay.parkwithparallel.com</a>
              </p>
            </div>
            <p>
              We do not process payments or provide parking services through any other domain or app. In-app QR code scanning is supported and provides an added layer of protection by preventing redirection to external pages. However, you must still verify that the Lot ID, Lot Name, and physical address match the signage and environment before completing any payment or session.
            </p>
            <p>
              Any interaction outside our authorized channels is done at your own risk. If you believe a QR code has been modified or is fraudulent, do not scan it and contact <a href="mailto:info@parkwithparallel.com" className="legal-email">info@parkwithparallel.com</a>
            </p>
          </div>
        </section>

        <section className="legal-section" id="contact">
          <h2 className="legal-section-title">Contact</h2>
          <div className="legal-section-content">
            <p>
              For questions, support, legal notices, or data deletion requests, contact:
            </p>
            <div className="legal-contact-info">
              <h3 className="legal-contact-title">Parallel Parking Solutions Inc.</h3>
              <div className="legal-contact-details">
                <p>A204, 770 Brookfield Rd</p>
                <p>Ottawa, ON K1V 2V4</p>
                <p>
                  <a href="mailto:info@parkwithparallel.com" className="legal-email">info@parkwithparallel.com</a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TermsAndConditions;
