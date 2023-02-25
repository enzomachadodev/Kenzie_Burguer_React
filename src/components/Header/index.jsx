import Search from "../Search/Search";
import { StyledHeader, StyledForm } from "./style";

const Header = ({ setPesquisa }) => {
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
