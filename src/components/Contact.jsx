import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import { motion } from 'framer-motion'
import toast from 'react-hot-toast'

export const Contact = () => {
 const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [errors, setError] = useState({});
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

const validate = () => {
    let errors = {}
    if (!formData.name) {
      errors.name = 'Name is required'
    }
    if (!formData.email) {
      errors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email address is invalid'
    }
    if (!formData.message) {
      errors.message = 'Message is required'
    }
    return errors
  }

const handleSubmit = (e) => {
  e.preventDefault();
  const validateErrors = validate()
  if (Object.keys(validateErrors).length > 0) {
    setError(validateErrors)
  } else {
    setError({})
    setIsSending(true)
    emailjs
      .send(
        'service_2hqelgu',
        'template_71cc1jg',
        formData,
        'V1ya85jw9Y_GVBFbh'
      )
      .then(() => {
         toast.success('Message sent successfully!')
          setFormData({
            name: '',
            email: '',
            message: ''
          })
        })
        .catch((error) => {
          toast.error('Error sending message. Please try again later.')
          console.error('Error sending message:', error)
        })
        .finally(() => {
          setIsSending(false)
        })
  }
}


return (
  <div
    id="contact"
    className="flex min-h-screen w-full items-center justify-center px-6 py-24 "
  >
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center text-center max-w-xl w-full gap-10"
    >
      <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-violet-500 to-sky-400 bg-clip-text text-transparent drop-shadow-lg">
        Contact Me
      </h1>

      <p className="text-lg text-gray-300">
        Have a project or collaboration in mind? Fill out the form below and I’ll get back to you soon!
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col w-full gap-6">
        <div className="flex flex-col text-left">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="rounded-xl bg-white/10 p-4 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          {errors.name && (
            <span className="text-sm text-red-400 mt-1">{errors.name}</span>
          )}
        </div>

        <div className="flex flex-col text-left">
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="rounded-xl bg-white/10 p-4 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          {errors.email && (
            <span className="text-sm text-red-400 mt-1">{errors.email}</span>
          )}
        </div>

        <div className="flex flex-col text-left">
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className="rounded-xl bg-white/10 p-4 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
          ></textarea>
          {errors.message && (
            <span className="text-sm text-red-400 mt-1">{errors.message}</span>
          )}
        </div>

        <button
          type="submit"
          disabled={isSending}
          className={`mt-2 rounded-lg px-6 py-3 text-white font-semibold shadow-lg transition hover:scale-105 ${
            isSending
              ? 'bg-gray-600 cursor-not-allowed'
              : 'bg-indigo-600 hover:bg-indigo-700'
          }`}
        >
          {isSending ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </motion.div>
  </div>
)
}