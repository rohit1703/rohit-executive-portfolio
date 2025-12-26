import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MagneticButton from './MagneticButton';

const featuredPosts = [
  {
    title: "Named Among Top 25 Emerging Leaders",
    category: "Recognition",
    description: "Honoured to be named among the top 25 emerging leaders by the Indian Startup Times. Recognition for innovation and visionary leadership.",
    link: "https://www.linkedin.com/posts/rohitmallavarapu17_the-new-wave-meet-the-25-emerging-community-activity-7185479454809305088-uJcV",
    isFeatured: true
  },
  {
    title: "AI Marketing Team in 4 Weeks",
    category: "Rapid Transformation",
    description: "I built an AI marketing team under 4 weeks while everyone else was still debating AI. A masterclass in strategic execution.",
    link: "https://www.linkedin.com/posts/rohitmallavarapu17_aimarketing-marketinginnovation-digitaltransformation-activity-7318241480840486914-mMLC",
    isFeatured: false // Changed to false so it fits the 3-column layout evenly if needed, or keep true for emphasis
  },
  {
    title: "The AI Co-creator Era",
    category: "Flagship Event",
    description: "An incredible day hosting 'The AI Co-creator Era' at Grid Dynamics. Redefining how we co-create with intelligence.",
    link: "https://www.linkedin.com/posts/rohitmallavarapu17_dynamictalks-aicocreator-griddynamics-activity-7373312194433921024-l4-b",
    isFeatured: false
  },
  // The rest of the posts are hidden and accessed via the "Follow" button
  {
    title: "One Year at Grid Dynamics",
    category: "Milestone",
    description: "Reflecting on one journey and countless lessons learned. Scaling marketing leadership on the NASDAQ stage.",
    link: "https://www.linkedin.com/posts/rohitmallavarapu17_griddynamics-preparetogrow-marketingleadership-activity-7351868351813505025-rrLn"
  },
  {
    title: "Two Events. One Simple Signal.",
    category: "Strategy",
    description: "Managing two different audiences at Grid Dynamics with one simple brand signal. Precision marketing in action.",
    link: "https://www.linkedin.com/posts/rohitmallavarapu17_griddynamics-dynamictalks-agenticai-activity-7402651704946843648-qVwg"
  },
  {
    title: "Is Failure the Shortcut to Success?",
    category: "Mindset",
    description: "Growth, resilience, and the strategic importance of reframing failure as a catalyst for high-performance marketing.",
    link: "https://www.linkedin.com/posts/rohitmallavarapu17_failure-growth-resilience-activity-7282697546458701824-i0xZ"
  },
  {
    title: "Organizing AI Innovation",
    category: "Events",
    description: "Grateful to have organized an incredible day of innovation and insights centered around AI and Digital Transformation.",
    link: "https://www.linkedin.com/posts/rohitmallavarapu17_griddynamics-aiinnovation-digitaltransformation-activity-7252996171978190848-DPJ9"
  },
  {
    title: "Digital Empowerment: AI for Good",
    category: "Initiative",
    description: "Proud to support this incredible initiative focused on digital empowerment and future-ready AI capabilities.",
    link: "https://www.linkedin.com/posts/rohitmallavarapu17_digitalempowerment-aiforgood-futureready-activity-7354100901751517184-QvaT"
  },
  {
    title: "From Bosses to Coaches",
    category: "Leadership",
    description: "The future of leadership is shifting from top-down management to high-impact coaching and empowerment.",
    link: "https://www.linkedin.com/posts/rohitmallavarapu17_aimarketing-marketinginnovation-digitaltransformation-activity-7318241480840486914-mMLC"
  },
  {
    title: "The Plum Chapter: Farewell",
    category: "Gratitude",
    description: "Embarking on a new chapter after two enriching years at Plum. A journey filled with growth and collaboration.",
    link: "https://www.linkedin.com/posts/rohitmallavarapu17_newbeginnings-gratitude-plumbenefits-activity-7219966266780831744-IfsD"
  }
];

const LinkedInFeed: React.FC = () => {
  // Slice to exactly 3 posts. 
  // The logic: Show the "Teaser" content here, drive traffic to LinkedIn for the rest.
  const visiblePosts = featuredPosts.slice(0, 3);

  return (
    <div className="py-24 md:py-48 px-6 bg-[#081526] dark:bg-[#081526] text-white transition-colors">
      <div className="max-w-7xl mx-auto mb-16 md:mb-32">
        <div className="flex items-center gap-6 md:gap-8 mb-8 md:mb-10">
          <div className="w-10 md:w-20 h-px bg-[#FF6B35]" />
          <span className="text-[#FF6B35] font-black text-sm md:text-xl uppercase tracking-[0.4em] md:tracking-[0.8em]">The Narrative Feed</span>
        </div>
        <h3 className="text-5xl md:text-[11rem] font-display text-white uppercase italic font-black leading-[0.9] tracking-tighter">
          INSIGHTS <br />
          <span className="text-[#FF6B35]">UNFILTERED.</span>
        </h3>
        <p className="mt-8 md:mt-12 text-xl md:text-4xl text-slate-300 font-light max-w-4xl leading-relaxed">
          Deep dives into <span className="text-white font-medium">AI strategy, leadership philosophy, and institutional growth</span>.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
        <AnimatePresence mode="popLayout">
          {visiblePosts.map((post, idx) => (
            <motion.div
              key={post.title}
              layout
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className={`premium-card rounded-[32px] md:rounded-[56px] p-8 md:p-14 flex flex-col justify-between min-h-[450px] md:min-h-[500px] group border-white/5 hover:border-[#FF6B35]/30 transition-all duration-500 shadow-3xl relative overflow-hidden bg-[#182A45]/40`}
            >
              <div className="relative z-10">
                <div className="flex flex-col gap-6 md:gap-8 mb-10 md:mb-14">
                  <div className="flex justify-between items-center w-full">
                    <span className="text-[10px] md:text-sm font-black text-[#FF6B35] uppercase tracking-[0.3em]">{post.category}</span>
                    <div className="flex items-center gap-3">
                      {/* Icon container */}
                      <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/30 group-hover:text-[#0077B5] group-hover:bg-[#0077B5]/10 transition-all duration-300">
                        <svg className="w-4 h-4 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                      </div>
                    </div>
                  </div>
                </div>

                <h4 className="font-display text-white mb-6 md:mb-8 leading-[0.9] italic tracking-tight text-3xl md:text-4xl">
                  {post.title}
                </h4>
                <p className="text-slate-300 font-light leading-relaxed mb-8 text-base md:text-lg">
                  "{post.description}"
                </p>
              </div>

              <div className="relative z-10 pt-8 border-t border-white/5 mt-auto">
                <MagneticButton
                  href={post.link}
                  target="_blank"
                  className="w-full bg-white/5 hover:bg-[#FF6B35] text-white px-6 py-4 rounded-[20px] font-bold text-xs md:text-sm transition-all border border-white/10 uppercase tracking-[0.2em] inline-flex items-center justify-center gap-3 decoration-0 shadow-lg group/btn"
                >
                  Read Post
                  <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                </MagneticButton>
              </div>
              <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-[#FF6B35]/5 rounded-full blur-[80px] group-hover:bg-[#FF6B35]/15 transition-all duration-1000 pointer-events-none" />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="max-w-7xl mx-auto mt-24 md:mt-32 text-center">
        <MagneticButton href="https://www.linkedin.com/in/rohitmallavarapu17/" target="_blank" className="text-[#FF6B35] font-black uppercase tracking-[0.3em] md:tracking-[0.5em] text-sm md:text-xl hover:text-white transition-colors decoration-0 group flex flex-col items-center gap-4">
          <span>Follow the Journey on LinkedIn</span>
          <svg className="w-6 h-6 animate-bounce mt-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/></svg>
        </MagneticButton>
      </div>
    </div>
  );
};

export default LinkedInFeed;