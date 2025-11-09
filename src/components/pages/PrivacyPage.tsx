import { Shield, Mail, Phone } from "lucide-react";
import { useTheme } from "../../ThemeContext";

export default function PrivacyPolicyPage() {
  const { theme } = useTheme();

  return (
    <div
      className={`pt-20 ${
        theme === "light" ? "bg-white text-gray-900" : "bg-gray-900 text-white"
      }`}
    >
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-7">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-xl text-blue-100">
            Protecting your privacy is our priority. Learn how we handle your
            information.
          </p>
        </div>
      </div>

      {/* Policy Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div
          className={`rounded-2xl shadow-sm p-8 ${
            theme === "light" ? "bg-white" : "bg-gray-800"
          }`}
        >
          <p className="mb-8 text-lg leading-relaxed">
            At Zuridox, we prioritize your privacy and are committed to
            protecting your data and information. This Privacy Policy explains
            how we collect, use, disclose, and safeguard your data when you use
            our services, website, or engage with our business. By using our
            services, you agree to the practices outlined in this policy.
          </p>

          <div className="space-y-8">
            {/* Information Collection */}
            <section>
              <h2 className="text-2xl font-bold mb-4">
                SECTION 1 – INFORMATION
              </h2>
              <p className="mb-4">
                What do we do with your information?
                <br />
                <br />
                When you purchase something from our store, as part of the
                buying and selling process, we collect the personal information
                you give us such as your name, address and email address.
                <br />
                <br />
                When you browse our store, we also automatically receive your
                computer’s internet protocol (IP) address in order to provide us
                with information that helps us learn about your browser and
                operating system.
                <br />
                <br />
                Email marketing (if applicable): With your permission, we may
                send you emails about our store, new products and other updates.
              </p>
            </section>

            {/* Use of Information */}
            <section>
              <h2 className="text-2xl font-bold mb-4">SECTION 2 – CONSENT</h2>
              <p className="mb-4">
                How do you get my consent?
                <br />
                <br />
                When you provide us with personal information to complete a
                transaction, verify your credit card, place an order, arrange
                for a delivery or return a purchase, we imply that you consent
                to our collecting it and using it for that specific reason only.
                <br />
                <br />
                If we ask for your personal information for a secondary reason,
                like marketing, we will either ask you directly for your
                expressed consent, or provide you with an opportunity to say no.
                <br />
                <br />
                How do I withdraw my consent?
                <br />
                <br />
                If after you opt-in, you change your mind, you may withdraw your
                consent for us to contact you, for the continued collection, use
                or disclosure of your information, at anytime, by contacting us
                at contact@zuridox.com
              </p>
            </section>

            {/* Data Protection */}
            <section>
              <h2 className="text-2xl font-bold mb-4">
                SECTION 3 – DISCLOSURE
              </h2>
              <p>
                We may disclose your personal information if we are required by
                law to do so or if you violate our Terms of Service.
              </p>
            </section>
            {/* Security */}
            <section>
              <h2 className="text-2xl font-bold mb-4">SECTION 4 – PAYMENT</h2>
              <p className="mb-4">
                We use Razorpay for processing payments. We/Razorpay do not
                store your card data on their servers. The data is encrypted
                through the Payment Card Industry Data Security Standard
                (PCI-DSS) when processing payment. Your purchase transaction
                data is only used as long as is necessary to complete your
                purchase transaction. After that is complete, your purchase
                transaction information is not saved.
                <br />
                <br />
                Our payment gateway adheres to the standards set by PCI-DSS as
                managed by the PCI Security Standards Council, which is a joint
                effort of brands like Visa, MasterCard, American Express and
                Discover.
                <br />
                <br />
                PCI-DSS requirements help ensure the secure handling of credit
                card information by our store and its service providers.
                <br />
                <br />
                How do I withdraw my consentFor more insight, you may also want
                to read terms and conditions of razorpay on https://razorpay.com
              </p>
            </section>

            {/* Third-Party Services */}
            <section>
              <h2 className="text-2xl font-bold mb-4">
                SECTION 5 – THIRD-PARTY SERVICES
              </h2>
              <p className="mb-4">
                In general, the third-party providers used by us will only
                collect, use and disclose your information to the extent
                necessary to allow them to perform the services they provide to
                us.
                <br />
                <br />
                However, certain third-party service providers, such as payment
                gateways and other payment transaction processors, have their
                own privacy policies in respect to the information we are
                required to provide to them for your purchase-related
                transactions.
                <br />
                <br />
                For these providers, we recommend that you read their privacy
                policies so you can understand the manner in which your personal
                information will be handled by these providers.
                <br />
                <br />
                In particular, remember that certain providers may be located in
                or have facilities that are located in a different jurisdiction
                than either you or us. So if you elect to proceed with a
                transaction that involves the services of a third-party service
                provider, then your information may become subject to the laws
                of the jurisdiction(s) in which that service provider or its
                facilities are located.
                <br />
                <br />
                Once you leave our store’s website or are redirected to a
                third-party website or application, you are no longer governed
                by this Privacy Policy or our website’s Terms of Service.
              </p>
            </section>

            {/* Sharing and Retention */}
            <section>
              <h2 className="text-2xl font-bold mb-4">SECTION 6 – LINKS</h2>
              <p>
                When you click on links on our store, they may direct you away
                from our site. We are not responsible for the privacy practices
                of other sites and encourage you to read their privacy
                statements.
              </p>
            </section>

            {/* Your Rights */}
            <section>
              <h2 className="text-2xl font-bold mb-4">SECTION 7- SECURITY</h2>
              <p className="mt-4">
                To protect your personal information, we take reasonable
                precautions and follow industry best practices to make sure it
                is not inappropriately lost, misused, accessed, disclosed,
                altered or destroyed.
              </p>
            </section>

            {/* Your Rights */}
            <section>
              <h2 className="text-2xl font-bold mb-4">SECTION 8 – COOKIES</h2>
              <p className="mt-4">
                We use cookies to maintain the session of the user. It is not
                used to personally identify you on other websites.
              </p>
            </section>

            {/* Your Rights */}
            <section>
              <h2 className="text-2xl font-bold mb-4">
                SECTION 9- AGE OF CONSENT
              </h2>
              <p className="mt-4">
                By using this site, you represent that you are at least the age
                of majority in your state or province of residence, or that you
                are the age of majority in your state or province of residence
                and you have given us your consent to allow any of your minor
                dependents to use this site.
              </p>
            </section>

            {/* Your Rights */}
            <section>
              <h2 className="text-2xl font-bold mb-4">
                SECTION 10 – CHANGES TO THIS PRIVACY POLICY
              </h2>
              <p className="mt-4">
                We reserve the right to modify this privacy policy at any time,
                so please review it frequently. Changes and clarifications will
                take effect immediately upon their posting on the website. If we
                make material changes to this policy, we will notify you here
                that it has been updated, so that you are aware of what
                information we collect, how we use it, and under what
                circumstances, if any, we use and/or disclose it.
                <br />
                <br />
                If our store is acquired or merged with another company, your
                information may be transferred to the new owners so that we may
                continue to sell products to you.
              </p>
            </section>

            {/* Your Rights */}
            <section>
              <h2 className="text-2xl font-bold mb-4">
                QUESTIONS AND CONTACT INFORMATION
              </h2>
              <p className="mt-4">
                If you would like to: access, correct, amend or delete any
                personal information we have about you, register a complaint, or
                simply want more information contact our Privacy Compliance
                Officer at contact@zuridox.com or
              </p>
            </section>

            {/* Contact Section */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <Mail className="w-10 h-10 text-blue-600 mb-4" />
                  <h3 className="font-bold">Email</h3>
                  <p>contact@zuridox.com</p>
                </div>
                <div>
                  <Phone className="w-10 h-10 text-blue-600 mb-4" />
                  <h3 className="font-bold">Phone</h3>
                  <p>+1 7602740909</p>
                </div>
                {/* <div>
                  <Shield className="w-10 h-10 text-blue-600 mb-4" />
                  <h3 className="font-bold">Address</h3>
                  <p>Jasola Vihar , Delhi , india 110025</p>
                </div> */}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
