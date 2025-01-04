'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import { useRouter } from 'next/navigation';

const CareerForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        company: '',
        email: '',
        phone: '',
        message: '',
    });
    const router = useRouter();
    const [formStatus, setFormStatus] = useState(""); // Feedback message

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const onSubmit = async (data) => {
        try {
            await emailjs.send(
                'myth', // Replace with your EmailJS Service ID
                'template_yq9t9a2', // Replace with your EmailJS Template ID
                {
                    ...data,
                },
                'tZxQ2uZY_Jj2DYBWm' // Replace with your EmailJS User ID
            );

            setFormStatus("Your application has been submitted successfully!");
            router.push('/thankyou'); // Redirect to the thank you page
        } catch (error) {
            console.error(error);
            setFormStatus("Failed to submit the application. Please try again.");
        }
    };

    return (
        <div className="w-full max-w-7xl mx-auto py-24">
            <div className="flex flex-col items-center">
                <div className="w-full md:w-2/3 flex flex-col space-y-6 text-center">
                    <h1 className="text-black font-sans text-3xl md:text-5xl font-normal mb-10 leading-[1.2] tracking-[-1.2px]">
                        Submit Your Resume
                    </h1>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[{
                                name: "firstName", label: "First Name", type: "text", validation: { required: "First Name is required" }
                            },
                            {
                                name: "lastName", label: "Last Name", type: "text", validation: { required: "Last Name is required" }
                            },
                            {
                                name: "company", label: "Company", type: "text"
                            },
                            {
                                name: "email", label: "Email", type: "email", validation: {
                                    required: "Email is required", pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "Invalid email address" }
                                }
                            },
                            {
                                name: "phone", label: "Phone Number", type: "tel", validation: { required: "Phone Number is required" }
                            }
                            ].map(({ name, label, type, validation }) => (
                                <div className="relative" key={name}>
                                    <input
                                        {...register(name, validation)}
                                        name={name}
                                        type={type}
                                        value={formData[name]}
                                        onChange={handleInputChange}
                                        className="peer h-16 border-gray-300 p-2 rounded-md w-full"
                                        placeholder=" " // Use a blank space as the placeholder
                                    />
                                    <label
                                        className={`absolute left-2 top-4 text-gray-400 transition-all text-base ${formData[name] ? "opacity-0 -top-2 text-sm" : "opacity-100"
                                            }`}
                                    >
                                        {label}
                                    </label>
                                    <div className="w-3/4 border-b border-gray-300 mt-1"></div>
                                    {errors[name] && <span className="text-red-500 text-sm">{errors[name].message}</span>}
                                </div>
                            ))}
                        </div>

                        {/* Minimal Resume Section */}
                        <div className="relative space-y-2">
                            <input
                                {...register("resume", { required: "Resume is required" })}
                                type="file"
                                name="resume"
                                accept=".pdf,.doc,.docx"
                                id="resume" // Add an id to the file input
                                className="hidden" // Hide the default file input
                            />
                            <label
                                htmlFor="resume" // This links the label to the file input by matching the id
                                className="peer h-16 border-gray-300 p-2 rounded-md w-full cursor-pointer bg-gray-100 text-gray-600 text-center flex items-center justify-center"
                            >
                                {formData.resume ? formData.resume.name : "Upload Resume"} {/* Show file name or placeholder text */}
                            </label>
                            <div className="w-full border-b border-gray-300 mt-1"></div>
                            {errors.resume && <span className="text-red-500 text-sm">{errors.resume.message}</span>}
                        </div>



                        <div className="relative space-y-2">
                            <textarea
                                {...register("message", { required: "Message is required" })}
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                className="peer min-h-[150px] border-gray-300 p-2 rounded-md w-full"
                                placeholder=" " // Use a blank space as the placeholder
                            />
                            <label
                                className={`absolute left-2 top-4 text-gray-400 transition-all text-base ${formData.message ? "opacity-0 -top-2 text-sm" : "opacity-100"
                                    }`}
                            >
                                How can we help you?
                            </label>
                            <div className="w-4/5 border-b border-gray-300 mt-1"></div>
                            {errors.message && <span className="text-red-500 text-sm">{errors.message.message}</span>}
                        </div>

                        <button type="submit" className="bg-black text-white px-8 py-3 rounded hover:bg-gray-800 transition-colors">
                            SUBMIT
                        </button>
                    </form>

                    {formStatus && (
                        <p className="mt-6 text-sm text-gray-600">{formStatus}</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CareerForm;
