import ProductsPage from '@/modules/productos/products';

function App() {
	return (
		<div>
			{/* Para mostrar todos los productos */}
			<ProductsPage showOffersOnly={false} />
		</div>
	);
}

export default App;
