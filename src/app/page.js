import React from "react";
import FAQSection from "@/components/FAQSection/FAQSection";
import Process from "@/components/Process/Process";
import ContactUsSection from "@/components/ContactUs/ContactUsSection";
import HeroSection from "@/components/HeroSection/HeroSection";

export default function Home() {
  const faqData = [
   
        {
          question: "How long has Wareline Tech been in the business?",
          answer:
            "Wareline Tech has been empowering businesses with innovative technology solutions for over 5 years. Our experience spans working with startups, established brands, and enterprises across various industries, delivering impactful digital solutions.",
        },
        {
          question:
            "What types of development services does Wareline Tech offer?",
          answer:
            "While Wareline Tech started with app development, we have expanded our expertise to cover all forms of development, including mobile apps, web applications, enterprise software, custom APIs, and more. Whatever your digital needs, we provide end-to-end solutions tailored to your goals.",
        },
        {
          question: "How does Wareline Tech ensure project success?",
          answer:
            "We follow a meticulous 360° approach that involves understanding your business, designing user-centric solutions, leveraging the latest technologies, and maintaining transparent communication throughout the project lifecycle. This ensures timely delivery, high-quality outputs, and alignment with your vision.",
        },
        {
          question:
            "Does Wareline Tech provide support after project completion?",
          answer:
            "Yes, we offer comprehensive post-project support, including maintenance, updates, bug fixes, and performance optimizations. Our goal is to ensure your solution remains functional, secure, and up-to-date as your business grows.",
        },
        {
          question: "What industries does Wareline Tech specialize in?",
          answer:
            "Wareline Tech has worked across diverse industries, including healthcare, education, e-commerce, finance, logistics, entertainment, and more. Our team specializes in adapting to the unique needs and challenges of various sectors to deliver customized solutions.",
        },
        {
          question: "How can I start a project with Wareline Tech?",
          answer:
            "Starting a project with Wareline Tech is simple! Reach out to us via our contact page or email. We'll schedule a consultation to discuss your needs, goals, and project requirements. From there, we'll create a tailored proposal to kickstart your journey with us.",
        },
        {
          question:
            "What is Wareline Tech's approach to client communication during a project?",
          answer:
            "At Wareline Tech, we prioritize transparent and regular communication. We assign a dedicated project manager to keep you updated on progress, gather feedback, and address any concerns. Additionally, we use tools like Slack, Trello, or email for seamless collaboration throughout the project.",
        },
      ];
  
  return (
    <div className="min-h-screen">
     <HeroSection
        bgImage="https://cdn-ilajckf.nitrocdn.com/utLabjbGVjpaYDQkazoKnooguTzYeQRR/assets/images/optimized/rev-b8cf3a0/tamediacdn.techaheadcorp.com/wp-content/uploads/2024/10/15052418/bg@2x.png"
        buttonColor="bg-black"
        buttonText="Get Started"
        headingHighlight="We craft tomorrow’s"
        headingFirstPart=" digital experiences products, and ventures"
        headingLastPart="Tailored for You"
        subtext="The Success Stories of TechAhead, that brought light to many Startups and Global Brands."
        floatingImages={[
          "https://cdn-ilajckf.nitrocdn.com/utLabjbGVjpaYDQkazoKnooguTzYeQRR/assets/images/optimized/rev-b8cf3a0/tamediacdn.techaheadcorp.com/wp-content/uploads/2024/07/29054608/Group-16898@2x.png",
          "https://cdn-ilajckf.nitrocdn.com/utLabjbGVjpaYDQkazoKnooguTzYeQRR/assets/images/optimized/rev-b8cf3a0/tamediacdn.techaheadcorp.com/wp-content/uploads/2024/07/29054607/Group-16897@2x.png",
          "https://cdn-ilajckf.nitrocdn.com/utLabjbGVjpaYDQkazoKnooguTzYeQRR/assets/images/optimized/rev-b8cf3a0/tamediacdn.techaheadcorp.com/wp-content/uploads/2024/07/29054605/Group-16896@2x.png",
        ]}
      />

      <Process />
      <FAQSection data={faqData} />
      <ContactUsSection
        title="Contact Us"
        subtitle="We'd love to hear from you!"
        description="Reach out to us for more information about our services."
        buttonText="Get in Touch"
        highlightText="today!"
        highlightGradient={{ from: "#ff7eb3", to: "#ff758c" }}
        buttonGradientFrom="#8a2be2"
        buttonGradientTo="#ff6347"
      />
    </div>
  );
}
