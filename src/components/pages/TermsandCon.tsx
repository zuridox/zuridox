import { Shield, Mail, Phone } from "lucide-react";
import { useTheme } from "../../ThemeContext";

export default function TermsAndConditionsPage() {
  const { theme } = useTheme();

  return (
    <div
      className={`pt-20 ${
        theme === "light" ? "bg-white text-gray-900" : "bg-gray-900 text-white"
      }`}
    >
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Terms and Conditions</h1>
          <p className="text-xl text-blue-100">
            By using our services, you agree to comply with these terms to
            ensure mutual understanding and a smooth project completion.
          </p>
        </div>
      </div>

      {/* Terms and Conditions Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div
          className={`rounded-2xl shadow-sm p-8 ${
            theme === "light" ? "bg-white" : "bg-gray-800"
          }`}
        >
          <p className="mb-8 text-lg leading-relaxed">
            These Terms and Conditions ("Agreement") govern your use of the
            services provided by Zuridox. By entering into a service agreement
            with us, you ("Client") agree to comply with these terms to ensure
            mutual understanding and the successful completion of your project.
          </p>

          <div className="space-y-8">
            {/* 1. Project Scope and Deliverables */}
            <section>
              <h2 className="text-2xl font-bold mb-4">
                1. Project Scope and Deliverables
              </h2>
              <p className="mb-4">
                At the beginning of each project, Zuridox will provide a
                detailed scope of work, including all deliverables, timelines,
                and milestones. The project will be divided into key phases
                (milestones) for transparency and progress tracking, including:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>1.1 Initial Project Planning</li>
                <li>1.2 Prototype or Design Finalization</li>
                <li>1.3 Development Phase</li>
                <li>1.4 Final Testing and Deployment</li>
              </ul>
            </section>

            {/* 2. Payment Terms */}
            <section>
              <h2 className="text-2xl font-bold mb-4">2. Payment Terms</h2>
              <p className="mb-4">
                Zuridox operates on a milestone-based payment structure to
                ensure transparency and financial security for both parties.
                Payment terms are as follows:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>
                  2.1 20% of the total project cost will be payable upon the
                  completion and approval of the initial project planning phase.
                </li>
                <li>
                  2.2 20% of the total project cost will be payable upon design
                  or prototype finalization and client approval.
                </li>
                <li>
                  2.3 30% of the total project cost will be payable after the
                  completion of the development phase and delivery for client
                  review.
                </li>
                <li>
                  2.4 The remaining 30% balance will be payable after the final
                  testing and deployment of the project.
                </li>
              </ul>
            </section>

            {/* 3. Invoicing and Billing */}
            <section>
              <h2 className="text-2xl font-bold mb-4">
                3. Invoicing and Billing
              </h2>
              <p className="mb-4">
                All invoices will be sent to the client via our official email
                account, connect@zuridox.com. Clients are expected to make
                payments within seven days of receiving the invoice to avoid
                delays in the project timeline.
              </p>
            </section>

            {/* 4. Changes to Scope or Additional Work */}
            <section>
              <h2 className="text-2xl font-bold mb-4">
                4. Changes to Scope or Additional Work
              </h2>
              <p className="mb-4">
                If additional work is requested beyond the original project
                scope, it will be treated as a scope change. Such changes will
                require a revised project plan and may impact the timeline and
                pricing.
              </p>
            </section>

            {/* 5. Timeline and Delays */}
            <section>
              <h2 className="text-2xl font-bold mb-4">
                5. Timeline and Delays
              </h2>
              <p className="mb-4">
                Zuridox will make every effort to meet the agreed-upon project
                deadlines. However, the timeline is subject to client
                cooperation, timely feedback, and payments.
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>
                  5.1 Client Delays: If the client fails to provide necessary
                  approvals, materials, or information on time, Zuridox reserves
                  the right to adjust the project timeline accordingly.
                </li>
                <li>
                  5.2 Delays Due to Non-Payment: Any delay in payment may result
                  in the suspension of the project until the outstanding balance
                  is cleared.
                </li>
              </ul>
            </section>

            {/* 6. Client Responsibilities */}
            <section>
              <h2 className="text-2xl font-bold mb-4">
                6. Client Responsibilities
              </h2>
              <ul className="list-disc ml-6 space-y-2">
                <li>
                  6.1 Provide timely and accurate feedback for each milestone
                  and deliverable.
                </li>
                <li>
                  6.2 Supply any content, data, or materials necessary to
                  complete the project.
                </li>
                <li>
                  6.3 Respond promptly to communications regarding project
                  status, changes, or queries.
                </li>
                <li>
                  6.4 Failure to provide the necessary feedback or information
                  within five business days may delay the project timeline.
                </li>
              </ul>
            </section>

            {/* 7. Intellectual Property */}
            <section>
              <h2 className="text-2xl font-bold mb-4">
                7. Intellectual Property
              </h2>
              <p className="mb-4">
                All intellectual property rights to the deliverables will be
                transferred to the client upon full payment for the project.
                Until full payment is received, Zuridox retains ownership of all
                work produced, including designs, code, and content.
              </p>
            </section>

            {/* 8. Confidentiality */}
            <section>
              <h2 className="text-2xl font-bold mb-4">8. Confidentiality</h2>
              <p className="mb-4">
                Both Zuridox and the client agree to maintain the
                confidentiality of all proprietary and sensitive information
                shared during the project. All client information, business
                data, and project details will remain confidential.
              </p>
            </section>

            {/* 9. Warranty and Support */}
            <section>
              <h2 className="text-2xl font-bold mb-4">
                9. Warranty and Support
              </h2>
              <p className="mb-4">
                After project deployment, Zuridox will provide 30 days of
                complimentary support to address any performance issues, bugs,
                or errors.
              </p>
            </section>

            {/* 10. Complimentary Support */}
            <section>
              <h2 className="text-2xl font-bold mb-4">
                10. Complimentary Support
              </h2>
              <ul className="list-disc ml-6 space-y-2">
                <li>
                  10.1 Bug Fixes: Addressing any errors or issues in the
                  website's functionality post-launch.
                </li>
                <li>
                  10.2 Performance Optimization: Tweaks for improved loading
                  speed or site performance.
                </li>
                <li>
                  10.3 Minor Adjustments: Small content changes, layout
                  adjustments, or UI/UX fixes.
                </li>
                <li>
                  10.4 Training or Handover: Providing documentation or training
                  for the client’s team on website management.
                </li>
              </ul>
            </section>

            {/* 11. Complimentary Support Not Included */}
            <section>
              <h2 className="text-2xl font-bold mb-4">
                11. Complimentary Support Not Included
              </h2>
              <ul className="list-disc ml-6 space-y-2">
                <li>
                  11.1 Major Feature Changes: Adding new features or substantial
                  changes in design or functionality.
                </li>
                <li>
                  11.2 New Development: Any new functionality not part of the
                  original scope.
                </li>
                <li>
                  11.3 Ongoing Maintenance: Long-term maintenance services,
                  usually offered as a separate paid service.
                </li>
              </ul>
            </section>

            {/* 12. Termination */}
            <section>
              <h2 className="text-2xl font-bold mb-4">12. Termination</h2>
              <p className="mb-4">
                Either party may terminate the agreement if the other party
                breaches these terms. If the client terminates the project
                before completion, Zuridox reserves the right to retain all
                payments made to date.
              </p>
            </section>

            {/* 13. Limitation of Liability */}
            <section>
              <h2 className="text-2xl font-bold mb-4">
                13. Limitation of Liability
              </h2>
              <p className="mb-4">
                Zuridox will not be held liable for any indirect or
                consequential damages arising from delays, errors, or project
                failures caused by the client’s actions or omissions.
              </p>
            </section>

            {/* 14. Governing Law */}
            <section>
              <h2 className="text-2xl font-bold mb-4">14. Governing Law</h2>
              <p className="mb-4">
                This Agreement is governed by the laws of India, and any
                disputes arising from this contract will be resolved in the
                appropriate court in Gurgaon, Haryana.
              </p>
            </section>

            {/* 15. Communication */}
            <section>
              <h2 className="text-2xl font-bold mb-4">15. Communication</h2>
              <p className="mb-4">
                For any inquiries, billing questions, or payment issues, please
                contact us via our official email account: connect@zuridox.com.
              </p>
            </section>

            {/* 16. Changes to Terms */}
            <section>
              <h2 className="text-2xl font-bold mb-4">16. Changes to Terms</h2>
              <p className="mb-4">
                Zuridox reserves the right to update these Terms and Conditions
                at any time. Clients will be notified of any changes to ensure
                mutual understanding.
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
                  <p>+91-9389678954</p>
                </div>
                <div>
                  <Shield className="w-10 h-10 text-blue-600 mb-4" />
                  <h3 className="font-bold">Address</h3>
                  <p>Jasola Vihar , Delhi , india 110025</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
