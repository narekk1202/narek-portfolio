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
