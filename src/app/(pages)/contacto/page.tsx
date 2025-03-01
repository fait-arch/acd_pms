import Contacto from '@/modules/contacto/contacto';

const ContactoPage = () => {
	return (
		<div className="dark:bg-gray-900 min-h-screen bg-gray-100 flex flex-col items-center justify-start pt-8">
			<div className="w-full max-w-md">
				<Contacto />
			</div>
		</div>
	);
};

export default ContactoPage;
