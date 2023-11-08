import { Link } from "react-router-dom";

import main from "../../assets/images/jobster-main.svg";
import Wrapper from "../../assets/wrappers/LandingPage";
import Logo from "../../components/Logo";

const Landing = () => {
	return (
		<Wrapper>
			<nav>
				<Logo />
			</nav>
			<div className="container page">
				<div className="info">
					<h1>
						Jobs <span>Tracker</span>
					</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex in
						perferendis eaque odio laudantium, non autem? Ea quas
						repudiandae sapiente totam labore. Sint architecto aliquid
						corporis cupiditate placeat debitis ipsam commodi assumenda
						fugit dolor quibusdam, doloremque quia eligendi maiores non
						harum eos! Similique voluptatem voluptatibus veniam facere
						atque quis? At?
					</p>
					<Link to="/register" className="btn register-link">
						Register
					</Link>{" "}
					<Link to="/login" className="btn">
						Login / Demo User
					</Link>{" "}
				</div>
				<img src={main} alt="Job hunt" className="img main-img" />
			</div>
		</Wrapper>
	);
};

export default Landing;
