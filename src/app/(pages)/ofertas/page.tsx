import ProductsPage from '@/modules/productos/products';

function App() {
	return (
		<div>
			{/* Para mostrar solo las ofertas */}
			<ProductsPage showOffersOnly={true} />
		</div>
	);
}

export default App;
