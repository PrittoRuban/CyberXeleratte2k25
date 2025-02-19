import { useSectionObserver } from "@/hooks/intersection-observer";
import { motion } from "framer-motion";

const guidelines = [
  "Students must bring their respective college ID card.",
  "Usage of mobile phones and other electronic gadgets inside the campus should be avoided.",
  "Confirmation mail for selection will be sent to your registered mail id.",
  "Participants must only use the college bus which will be available on March 17th.",
  "Boys must come in formal with clean shave.",
  "Girls should wear formal dress.",
  "No onspot Registration Allowed.",
];

const timeline = [
  { time: "8:30 - 9:00", description: "Registration starts at Main Block" },
  { time: "9:00 - 10:00", description: "Inauguration ceremony at Seminar Hall - Main block" },
  { time: "10:00 - 12:00", description: "Events (Time and venue will be informed shortly)" },
  { time: "12:00 - 1:30", description: "Lunch - Both Veg and Non-Veg" },
  { time: "1:30 - 2:00", description: "Valedictory ceremony" },
];

export default function GeneralRules() {
  useSectionObserver("rules", "General Rules");

  return (
    <section id="rules" className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 drop-shadow-lg">
            General Rules
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Please read all rules carefully before proceeding
          </p>
        </header>

        {/* Guidelines Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-white dark:bg-gray-900 rounded-3xl p-8 md:p-12 shadow-lg border border-gray-200 dark:border-gray-700 mb-12"
        >
          <ul className="list-disc pl-6 space-y-2 text-gray-900 dark:text-gray-100 text-lg">
            {guidelines.map((rule, i) => (
              <li key={i}>{rule}</li>
            ))}
          </ul>
        </motion.div>

        {/* Timeline */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Timeline
          </h2>
        </div>
        <div className="relative pl-8 border-l-2 border-gray-300 dark:border-gray-600">
          {timeline.map((item, i) => (
            <div key={i} className="mb-8 relative">
              <div className="flex items-center mb-1">
                <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 bg-gray-500 dark:bg-gray-400 w-3 h-3 rounded-full" />
                <h3 className="text-xl font-semibold ml-8 text-gray-900 dark:text-white">
                  {item.time}
                </h3>
              </div>
              <p className="text-lg text-gray-700 dark:text-gray-300 ml-8 pl-4 border-l-2 border-gray-200 dark:border-gray-500">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
