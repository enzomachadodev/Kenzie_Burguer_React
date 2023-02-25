import Search from "../Search/Search";
import { StyledHeader } from "./style";

const Header = () => {
	return (
		<StyledHeader>
			<div className="header-container">
				<h1>
					Burguer<span>Kenzie</span>
				</h1>
				<Search />
			</div>
		</StyledHeader>
	);
};

export default Header;
