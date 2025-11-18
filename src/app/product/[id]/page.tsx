import ProductDetail from "../../../components/ProductDetail";

// Simple mock product lookup by id (replace with real DB fetch)
const mockProducts = [
	{ _id: "1", name: "T-Shirt White", price: 299, image: "/placeholder.png" },
	{ _id: "2", name: "Hoodie Black", price: 499, image: "/placeholder.png" },
	{ _id: "3", name: "Cap Red", price: 199, image: "/placeholder.png" },
	{ _id: "4", name: "Jeans Blue", price: 699, image: "/placeholder.png" },
];

export default function Page({ params }: { params: { id: string } }) {
	const product = mockProducts.find(p => p._id === params.id) || mockProducts[0];

	return <ProductDetail product={product} />;
}
