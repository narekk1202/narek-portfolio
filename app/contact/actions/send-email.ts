'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export type SendEmailData = {
	name: string;
	email: string;
	subject: string;
	message: string;
};

export type EmailFormState = {
	success?: boolean;
	error?: string | null;
	message?: string;
};

export const sendEmail = async (
	prevState: EmailFormState,
	formData: FormData
) => {
	const data: SendEmailData = {
		name: formData.get('name') as string,
		email: formData.get('email') as string,
		subject: formData.get('subject') as string,
		message: formData.get('message') as string,
	};

	try {
		const response = await resend.emails.send({
			from: process.env.FROM_EMAIL!,
			to: [process.env.TO_EMAIL!],
			subject: data.subject,
			html: `<div>
				<h1 class="text-2xl font-bold mb-4">New Contact Form Submission</h1>
				<p><strong>Name:</strong> ${data.name}</p>
				<p><strong>Email:</strong> ${data.email}</p>
				<p><strong>Subject:</strong> ${data.subject}</p>
				<p><strong>Message:</strong></p>
				<p>${data.message}</p>
			</div>`,
		});

		if (!response.error) {
			return { success: true, error: null };
		} else {
			return { success: false, error: 'Failed to send email' };
		}
	} catch (error) {
		console.error('Error sending email:', error);
		return {
			success: false,
			error: error instanceof Error ? error.message : 'Unknown error',
		};
	}
};
