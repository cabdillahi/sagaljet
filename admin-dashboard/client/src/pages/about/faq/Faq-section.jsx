'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { Link } from 'react-router-dom'

const FAQItem = ({ question, answer, isOpen, onClick }) => (
  <div
    className={`border-b border-gray-200 py-4 ${
      isOpen ? 'shadow-lg rounded-lg mb-4' : ''
    } transition-all duration-300 ease-in-out`}
  >
    <button
      className="flex justify-between items-center w-full text-left px-4"
      onClick={onClick}
    >
      <span className="text-lg font-medium text-gray-900">{question}</span>
      {isOpen ? (
        <Minus className="w-5 h-5 text-red-500 transition-transform duration-300 ease-in-out rotate-180" />
      ) : (
        <Plus className="w-5 h-5 text-red-500 transition-transform duration-300 ease-in-out" />
      )}
    </button>
    <div
      className={`overflow-hidden transition-all duration-300 ease-in-out ${
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}
    >
      <p className="mt-2 text-gray-600 px-4 pb-2">{answer}</p>
    </div>
  </div>
)

export default function FaqSection() {
  const [openItem, setOpenItem] = useState(0)

  const faqItems = [
    {
      question: 'What is skillup?',
      answer: `SkillUp is a premier technology service provider based in Jijiga, Somali Region, Ethiopia, founded in September 2022. We specialize
      in offering a comprehensive range of digital solutions, including web development, software development, UI/UX design, social media
      management, marketing strategies, and cybersecurity services. Our mission is to empower businesses and individuals by delivering
      innovative and affordable technology solutions that drive growth and enhance operational effectiveness`,
    },
    {
      question: 'What Services Does SkillUp Offer?',
      answer: `SkillUp offers a variety of technology services, including:
● Web Development: Custom websites tailored to your needs.
● Software Development: Innovative solutions to streamline operations.
● UI/UX Design: User-centric digital experiences.
● Social Media Management: Enhance your online presence.
● Marketing Strategy: Customized plans to grow your brand.
● Cybersecurity Services: Advanced protection for your assets.
● Business Development Solutions: Helping businesses scale effectively.
`,
    },
    {
      question: 'What Sets SkillUp Apart?',
      answer: `SkillUp differentiates itself by providing comprehensive, end-to-end solutions that blend local market expertise with a focus on
innovation and quality. Our success with 65 brands and 180 customers in just two years showcases our ability to deliver high-quality,
customized services at competitive prices.
`,
    },
    {
      question: `Who Can Benefit from SkillUp's Services?`,
      answer: `SkillUp serves businesses in all industries, startups, educational institutions, and government agencies. Whether you need to
establish a digital presence, secure your online infrastructure, or enhance your business with strategic technology solutions, we
provide tailored services to meet your needs.
`,
    },
    {
      question: 'How Can I Contact SkillUp?',
      answer: `Getting started with SkillUp is effortless. Simply visit our website to fill out the contact form, or connect with us directly via phone or
email. Our team will arrange a consultation to discuss your needs, understand your goals, and outline the best solutions to help you
succeed.`,
    },
  ]

  return (
    <div className="container mx-auto  px-10 py-8 flex flex-col md:flex-row gap-8 overflow-hidden">
      <div className="md:w-1/3">
        <h2 className="text-red-500 text-sm font-bold mb-2">FAQ</h2>
        <h3 className="text-4xl font-bold mb-4">Got Questions?</h3>
        <p className="text-gray-600 mb-4">
          If you have any other questions, feel free to get in touch at
          support@skillup.so
        </p>
        <Link to={'/contact'}>
        <button className="bg-gray-800 duration-500 text-white px-6 py-2 rounded-md hover:bg-gray-600 transition-colors">
          Contact Us
        </button>
        </Link>
      </div>
      <div className="md:w-2/3">
        {faqItems.map((item, index) => (
          <FAQItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={index === openItem}
            onClick={() => setOpenItem(index === openItem ? -1 : index)}
          />
        ))}
      </div>
      <style jsx>{`
        .rotate-180 {
          transform: rotate(180deg);
        }
      `}</style>
    </div>
  )
}
