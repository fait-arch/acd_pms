import NavBar from '../../components/nav-bar';

export default function Layout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<main className="bg-white">
			{/* Barra de navegación fija */}
			<NavBar />

			{/* Agregamos un padding-top para evitar que el contenido sea tapado */}
			<div className="pt-[120px]">{children}</div>
		</main>
	);
}
