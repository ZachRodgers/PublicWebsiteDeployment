import React from 'react';
import './Legal.css';

const PrivacyPolicy_App: React.FC = () => {
    return (
        <div className="legal-page-container">
            <div className="legal-header">
                <h1 className="legal-title">Privacy Policy: App</h1>
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
                    <a href="/legal/app/terms-of-service" className="legal-nav-link prev">
                        <span className="legal-nav-arrow">←</span>
                        App Terms of Service
                    </a>
                    <div></div>
                </div>
            </div>

            <div className="legal-content">
                <section className="legal-section" id="introduction">
                    <h2 className="legal-section-title">Introduction</h2>
                    <div className="legal-section-content">
                        <p>
                            This Privacy Policy describes how Parallel Parking Solutions Inc. ("Parallel", "we", "us", or "our") collects, uses, discloses, and protects your information when you use the Parallel mobile application ("App") or visit our website at <a href="https://parkwithparallel.com" className="legal-link" target="_blank" rel="noopener noreferrer">https://parkwithparallel.com</a>. By using our App or services, you agree to the practices outlined below. If you do not agree, do not use the App.
                        </p>
                    </div>
                </section>

                <section className="legal-section" id="information-collection">
                    <h2 className="legal-section-title">Information We Collect</h2>
                    <div className="legal-section-content">
                        <p>
                            We collect the following types of information to operate our parking services and improve user experience:
                        </p>

                        <div className="legal-subsection">
                            <h3 className="legal-subsection-title">License Plate Numbers</h3>
                            <div className="legal-subsection-content">
                                <p>
                                    Automatically collected by Automatic License Plate Recognition (ALPR) cameras when a vehicle enters or exits a participating parking lot. These scans may occur even if a user has not yet created an account. Plate data is used to identify sessions, calculate billing, and associate violations with specific vehicles. Users may later link these scans to their account by registering with a matching plate.
                                </p>
                            </div>
                        </div>

                        <div className="legal-subsection">
                            <h3 className="legal-subsection-title">Vehicle Entry and Exit Times</h3>
                            <div className="legal-subsection-content">
                                <p>
                                    Recorded using ALPR scans or manually submitted by users through the App. Users may start or end sessions by manually entering a Lot ID or scanning an on-site QR code. These timestamps are used to calculate parking duration, determine applicable charges, and identify overstays or violations.
                                </p>
                            </div>
                        </div>

                        <div className="legal-subsection">
                            <h3 className="legal-subsection-title">Location Data</h3>
                            <div className="legal-subsection-content">
                                <p>
                                    If the user grants permission, the App may access real-time device location to verify proximity to participating lots. This helps prevent incorrect session starts in unrelated locations. Location data is used temporarily to validate actions and is not stored unless a parking session is started.
                                </p>
                            </div>
                        </div>

                        <div className="legal-subsection">
                            <h3 className="legal-subsection-title">Phone Number</h3>
                            <div className="legal-subsection-content">
                                <p>
                                    Required for account creation. Used for account verification, SMS authentication, support communication, and important service updates, including violation notices and session alerts.
                                </p>
                            </div>
                        </div>

                        <div className="legal-subsection">
                            <h3 className="legal-subsection-title">Name and Email Address</h3>
                            <div className="legal-subsection-content">
                                <p>
                                    Optional fields provided at registration or within account settings. Used for customer support, billing communication, or personalized notifications. Users may use the App without providing these optional details.
                                </p>
                            </div>
                        </div>

                        <div className="legal-subsection">
                            <h3 className="legal-subsection-title">Payment Information</h3>
                            <div className="legal-subsection-content">
                                <p>
                                    All payments, including manual payments and wallet top-ups, are processed through Stripe. Parallel does not store your full credit card number, billing address, or any sensitive financial data on its own servers.
                                </p>
                            </div>
                        </div>

                        <div className="legal-subsection">
                            <h3 className="legal-subsection-title">Push Notification Tokens</h3>
                            <div className="legal-subsection-content">
                                <p>
                                    Automatically generated by your device and stored to enable delivery of time-sensitive notifications related to session activity, wallet usage, or violations.
                                </p>
                            </div>
                        </div>

                        <div className="legal-subsection">
                            <h3 className="legal-subsection-title">QR Code Scans</h3>
                            <div className="legal-subsection-content">
                                <p>
                                    Used to start or end sessions by scanning authorized codes displayed in participating parking lots. Scans may also be used to validate location, identify lots, or recover parked sessions.
                                </p>
                            </div>
                        </div>

                        <div className="legal-subsection">
                            <h3 className="legal-subsection-title">Crash and Error Logs</h3>
                            <div className="legal-subsection-content">
                                <p>
                                    Collected automatically when technical issues occur. These logs may include anonymous device metadata, software error traces, and session state, but never include user identity, license plates, or payment details.
                                </p>
                            </div>
                        </div>

                        <div className="legal-highlight">
                            <p>
                                <strong>We do not collect or store:</strong> Video or photographic content from any camera feeds, IP addresses, operating system version details, or device identifiers, behavioral analytics or tracking unrelated to crash and bug resolution.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="legal-section" id="information-use">
                    <h2 className="legal-section-title">How We Use Your Information</h2>
                    <div className="legal-section-content">
                        <p>We use the information collected to:</p>
                        <ul className="legal-list">
                            <li className="legal-list-item">Start, manage, and end parking sessions based on your license plate or QR scan.</li>
                            <li className="legal-list-item">Notify you about active sessions, expiring time limits, violations, unpaid charges, or dispute outcomes.</li>
                            <li className="legal-list-item">Process and track wallet balances, payment transactions, and refund requests.</li>
                            <li className="legal-list-item">Improve application stability and performance by addressing reported crashes or errors.</li>
                            <li className="legal-list-item">Enforce the Terms of Service and validate proper use of the App.</li>
                            <li className="legal-list-item">Respond to legal obligations such as requests from law enforcement or regulatory authorities.</li>
                        </ul>
                    </div>
                </section>

                <section className="legal-section" id="legal-basis">
                    <h2 className="legal-section-title">Legal Basis for Processing</h2>
                    <div className="legal-section-content">
                        <p>Your data is processed under the following legal bases:</p>
                        <ul className="legal-list">
                            <li className="legal-list-item"><strong>Consent:</strong> Provided when you register, grant location access, save a payment method, or link your license plate to your account.</li>
                            <li className="legal-list-item"><strong>Legitimate Interest:</strong> We process ALPR data to allow parking enforcement, maintain billing records, and protect the integrity of our systems.</li>
                            <li className="legal-list-item"><strong>Contractual Necessity:</strong> When using our services to pay for parking or resolve a violation, data is processed to fulfill the service agreement between you and Parallel.</li>
                        </ul>
                    </div>
                </section>

                <section className="legal-section" id="license-plate-data">
                    <h2 className="legal-section-title">License Plate Data and Anonymous Scans</h2>
                    <div className="legal-section-content">
                        <p>
                            License plate scans may occur before you create an account. This is clearly disclosed on signage at all participating lots, including QR code links to the app and our full privacy policy. Until linked to an account, plate scans are stored anonymously. If you create an account and link your plate, the scan history becomes associated with your profile. If you delete your account, all personal data is erased, but plate scans and session history may be retained as they are linked to the plate itself and not the deleted account.
                        </p>
                        <p>
                            Creating a new account with the same license plate will automatically retrieve any unpaid sessions or violations associated with that plate.
                        </p>
                    </div>
                </section>

                <section className="legal-section" id="wallet-payments">
                    <h2 className="legal-section-title">Wallet, Payments, and Refunds</h2>
                    <div className="legal-section-content">
                        <p>
                            All financial transactions are securely handled by Stripe. We never access or store your credit card number. You may choose to add funds to a wallet to enable automatic session payments. Wallet top-ups are completely optional but non-refundable. Refunds resulting from billing errors or ALPR mistakes are returned to your wallet and not to the original payment method.
                        </p>
                        <p>
                            Stripe may retain your payment information as required by their policies. If you delete your account, your payment history remains on Stripe's platform, but will no longer be linked to your Parallel account.
                        </p>
                    </div>
                </section>

                <section className="legal-section" id="data-sharing">
                    <h2 className="legal-section-title">Data Sharing and Third Parties</h2>
                    <div className="legal-section-content">
                        <p>We share limited information with third parties as necessary to deliver core app functions:</p>
                        <ul className="legal-list">
                            <li className="legal-list-item"><strong>Stripe:</strong> To process payments and refunds.</li>
                            <li className="legal-list-item"><strong>Firebase:</strong> To enable push notifications.</li>
                            <li className="legal-list-item"><strong>AWS Simple Notification Service (SNS):</strong> To send verification and session-related text messages.</li>
                            <li className="legal-list-item"><strong>Amazon Web Services (AWS):</strong> To host our secure cloud database infrastructure.</li>
                        </ul>
                        <p>
                            We also share session-level data with parking lot operators. This includes license plates scanned in their lot, timestamps, and violation status. Operators do not receive any user-identifying information such as name, phone number, or email address.
                        </p>
                        <p>
                            We do not sell, rent, or trade your personal information to any third parties for marketing or advertising purposes.
                        </p>
                    </div>
                </section>

                <section className="legal-section" id="data-retention">
                    <h2 className="legal-section-title">Data Retention</h2>
                    <div className="legal-section-content">
                        <ul className="legal-list">
                            <li className="legal-list-item">License plate scans are retained for a minimum of 30 days. If a session is unpaid or disputed, retention may be extended.</li>
                            <li className="legal-list-item">Account and contact information is deleted upon user request or in-app deletion.</li>
                            <li className="legal-list-item">Wallet data is retained until your balance reaches zero or you request deletion.</li>
                            <li className="legal-list-item">Violation and billing data related to unpaid sessions may be retained until the issue is resolved.</li>
                        </ul>
                    </div>
                </section>

                <section className="legal-section" id="user-rights">
                    <h2 className="legal-section-title">Your Rights</h2>
                    <div className="legal-section-content">
                        <p>You have the following rights under this policy:</p>
                        <ul className="legal-list">
                            <li className="legal-list-item">You may access, update, or correct your data by contacting <a href="mailto:info@parkwithparallel.com" className="legal-email">info@parkwithparallel.com</a>.</li>
                            <li className="legal-list-item">You may delete your account directly in the app or by contacting us via email.</li>
                            <li className="legal-list-item">You may disable notifications through your device settings.</li>
                            <li className="legal-list-item">You may choose not to provide optional details such as your name or email. A phone number remains mandatory to use the App.</li>
                        </ul>
                        <p>
                            Please note that if you delete your account, we can no longer link any unpaid violations to you directly, but they may still exist under the license plate number.
                        </p>
                    </div>
                </section>

                <section className="legal-section" id="security">
                    <h2 className="legal-section-title">Security Practices</h2>
                    <div className="legal-section-content">
                        <p>
                            We protect your information using encryption during data transmission (HTTPS). Sensitive data such as authentication codes and passwords are stored securely and never transmitted in plain text. Access to your information is limited to authorized staff and subject to internal access controls.
                        </p>
                        <p>
                            Our infrastructure is hosted securely and monitored for unauthorized access. We conduct regular reviews and audits of our systems to maintain security standards.
                        </p>
                    </div>
                </section>

                <section className="legal-section" id="qr-fraud">
                    <h2 className="legal-section-title">QR Code Fraud Risk</h2>
                    <div className="legal-section-content">
                        <p>
                            Parallel supports in-app QR code scanning to securely start or end parking sessions. When you scan a QR code inside the Parallel app, no external websites are opened, and all payments are processed safely through Parallel's secure systems. In-app scanning also helps confirm that the correct parking lot is selected.
                        </p>
                        <div className="legal-highlight">
                            <p>
                                Parallel's only authorized web payment platform is: <a href="https://pay.parkwithparallel.com" className="legal-link" target="_blank" rel="noopener noreferrer">https://pay.parkwithparallel.com</a>
                            </p>
                        </div>
                        <p>
                            Parallel does not process payments, manage sessions, or operate any services through any other domains or third-party apps. If you are redirected to any other website or application, do not provide personal information or make a payment.
                        </p>
                        <p>
                            Users are responsible for verifying the Lot ID, Lot Name, and Lot Address displayed in the app before completing any session or payment, as posted QR codes may be altered in rare cases. Parallel is not responsible for any losses, fraud, or incorrect payments made using modified QR codes or on unauthorized websites.
                        </p>
                    </div>
                </section>

                <section className="legal-section" id="children-privacy">
                    <h2 className="legal-section-title">Children's Privacy</h2>
                    <div className="legal-section-content">
                        <p>
                            The App is not directed to children under the age of 13. We do not knowingly collect or store personal data from individuals under 13 years of age. We do not ask for age or birthdate to avoid collecting unnecessary personal information.
                        </p>
                    </div>
                </section>

                <section className="legal-section" id="updates">
                    <h2 className="legal-section-title">Updates to This Privacy Policy</h2>
                    <div className="legal-section-content">
                        <p>
                            We may update this Privacy Policy at any time. Changes will be posted within the app and on our website at <a href="https://parkwithparallel.com/legal/app/privacy-policy" className="legal-link" target="_blank" rel="noopener noreferrer">https://parkwithparallel.com/legal/app/privacy-policy</a>. Continued use of the App after such updates constitutes your agreement to the updated terms. If you do not agree, you must delete your account and discontinue use.
                        </p>
                    </div>
                </section>

                <section className="legal-section" id="contact">
                    <h2 className="legal-section-title">Contact Us</h2>
                    <div className="legal-section-content">
                        <p>
                            If you have any questions, concerns, or requests related to your privacy or data, contact us at:
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

export default PrivacyPolicy_App;
