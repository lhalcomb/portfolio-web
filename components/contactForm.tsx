'use client';

import React, { useState } from 'react';
import {db} from '@/lib/firebase.js';

import { collection, addDoc } from 'firebase/firestore';
import ReCAPTCHA from 'react-google-recaptcha';

//const SITE_KEY = process.env.PUBLIC_RECAPTCHA_SITE_KEY; // ReCAPTCHA site key from environment variables
const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY; // Use NEXT_PUBLIC_ prefix for client-side access
console.log('ReCAPTCHA Site Key:', SITE_KEY); // Log the site key for debugging



interface ContactFormProps { // Define the structure of the form data for contact form 
    firstName: string;
    lastName: string;
    email: string;
    message: string;
};


export default function ContactForm(){
    const [formData, setFormData] = useState<ContactFormProps>({ //form data useState to manage form data
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    });

    const [status, setStatus] = useState<string | null>(''); // status useState 'success', 'error', or null 
    const [captchaToken, setCaptchaToken] = useState<string | null>(null); // captcha token useState to manage reCAPTCHA token

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!captchaToken) {
            setStatus('Please verify that you are not a robot.');
            return;
        }
        try {
            const response = await fetch('/api/contact-submit', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ...formData, captchaToken }),
            });
             console.log('Response:', response); // Log the response for debugging

            if (!response.ok) throw new Error('Submission failed');
            const docRef = await addDoc(collection(db, 'contacts'), formData);
            console.log('Document written with ID: ', docRef.id);
            setStatus('success');
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                message: ''
            });
            setCaptchaToken(null); // Reset captcha token after successful submission
        } catch (error) {
            console.error('Error adding document: ', error);
            setStatus('error');
        }
    };

    return (
        
        <form
      onSubmit={handleSubmit}
      className="w-full p-6 shadow-md bg-[var(--venom-black)] rounded-lg"
    >
      <h2 className="text-2xl font-bold mb-4 text-center">Have Questions? Let's talk</h2>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <input
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          type="text"
          placeholder="First Name"
          className="border p-2 rounded w-full"
          required
        />
        <input
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          type="text"
          placeholder="Last Name"
          className="border p-2 rounded w-full"
          required
        />
      </div>
      <div className="mb-4">
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          type="email"
          placeholder="Email"
          className="border p-2 rounded w-full"
          required
        />
      </div>
      <div className="mb-4">
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          className="border p-2 rounded w-full"
          rows={4}
          required
        />
      </div>
      <ReCAPTCHA sitekey={SITE_KEY} onChange={token => setCaptchaToken(token)} />
      <button type="submit" className="w-full bg-[var(--web-blue)] text-white py-2 px-4 rounded hover:bg-blue-700">
        Send
      </button>
      {status && <p className="mt-2 text-sm text-center text-gray-600">{status}</p>}
    </form>
    
    )
}; 

