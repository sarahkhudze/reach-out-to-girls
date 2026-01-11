
import { Link } from "react-router-dom";

const Donate = () => {
  return (
    <div className="w-full bg-white py-12 md:py-16 px-4">
      <div className="max-w-4xl mx-auto">
    
        <div className="text-center mb-12">
          <h1
            className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-wide mb-6"
            style={{
              fontWeight: 700,
              color: "#292496",
              letterSpacing: "0.02em",
            }}
          >
            Support Her Future
          </h1>
          <div className="w-24 h-1 bg-[#65a7b2] mx-auto rounded-full mb-6"></div>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Your generosity directly empowers girls in Malawi.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#292496] text-center mb-8">
            Your Gift in Action
          </h2>

          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              When you give to Reach Out to Girls, you’re not just sending money
              — you’re lighting a path for a girl in Malawi to step into
              her future with confidence.
            </p>

            <div className="relative pl-6 border-l-4 border-[#65a7b2] bg-[#f8fbfd] p-5 rounded-r-lg italic">
              <p>
                “Because of your support, Trinity now has notebooks, pens, and
                hope. She walks to school smiling — no longer ashamed to raise
                her hand.”
              </p>
            </div>

            <p>
              Whether it’s covering school fees, providing sanitary pads, funding
              a laptop session, or supporting a mentorship circle — your
              contribution becomes <strong>real, tangible change</strong> in a
              girl’s life.
            </p>

            <p className="font-medium text-[#da1b2b]">
              There is no amount too small. Every kwacha carries a dream.
            </p>
          </div>
        </div>

        <div className="bg-[#f8f9fa] border border-[#292496]/10 rounded-2xl p-6 md:p-8 mb-10">
          <h2 className="text-2xl font-bold text-[#292496] mb-6 text-center">
            How to Donate
          </h2>

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
              <span className="w-6 h-6 rounded-full bg-[#292496] text-white flex items-center justify-center text-xs mr-2">
                1
              </span>
              Bank Transfer
            </h3>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <p>
                <span className="font-medium">Account Name:</span> Reach Out to
                Girls
              </p>
              <p>
                <span className="font-medium">Bank:</span> National Bank of
                Malawi
              </p>
              <p>
                <span className="font-medium">Branch:</span> Chichiri
              </p>
              <p>
                <span className="font-medium">Account Number:</span>{" "}
                <strong>1005269942</strong>
              </p>
              <p>
                <span className="font-medium">Swift Code:</span> NBMAMWMW003
              </p>
              <p className="text-sm text-gray-600 mt-2">
                Please email your deposit slip to{" "}
                <a
                  href="mailto:reachouttogirls@gmail.com"
                  className="text-[#292496]"
                >
                  reachouttogirls@gmail.com
                </a>{" "}
                for acknowledgment.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
              <span className="w-6 h-6 rounded-full bg-[#292496] text-white flex items-center justify-center text-xs mr-2">
                2
              </span>
              Mobile Money (Malawi)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <p className="font-medium text-green-700">Airtel Money</p>
                <p className="text-lg font-bold">+265 996 623 227</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <p className="font-medium text-blue-700">TNM Mpamba</p>
                <p className="text-lg font-bold">+265 887 251 062</p>
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-3">
              Use reference: <strong>ROG-DONATE</strong>. Send screenshot to our
              email for receipt.
            </p>
          </div>
        </div>
       
        <div className="text-center text-gray-600 space-y-3 mb-10">
          <p>🔒 All donor information is kept strictly confidential.</p>
          <p>📊 We publish annual impact reports — ask us for the latest!</p>
          <p>
            📧 Questions? Contact us at{" "}
            <a
              href="mailto:reachouttogirls@gmail.com"
              className="text-[#292496] font-medium"
            >
              reachouttogirls@gmail.com
            </a>
          </p>
        </div>
     
        <div className="text-center">
          <Link
            to="/"
            className="inline-block text-[#292496] font-medium hover:underline"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Donate;
