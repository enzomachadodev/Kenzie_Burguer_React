import Cart from "../components/Cart";
import { Container } from "../components/Container/style";
import Header from "../components/Header";
import ProductsList from "../components/ProductsList";
import { StyledHomePage } from "./style";

function HomePage() {
	return (
		<StyledHomePage>
			<Header />
			<Container>
				<ProductsList />
				<Cart />
			</Container>
		</StyledHomePage>
	);
}

export default HomePage;
