import { Link } from "react-router-dom";

import Wrapper from "../../assets/wrappers/RegisterAndLoginPage";
import { Logo } from "../../components";
import FormRow from "../../components/FormRow";

const Login = () => {
	return (
		<Wrapper>
			<form className="form">
				<Logo />
				<h4>Login</h4>
				<FormRow
					type="email"
					name="email"
					labelText="Email"
					defaultValue="test@example.com"
				/>
				<FormRow
					type="password"
					name="password"
					labelText="Password"
					defaultValue="test@123"
				/>
				<button type="submit" className="btn btn-block">
					Submit
				</button>
				<button type="button" className="btn btn-block">
					Explore the App
				</button>

				<p>
					Not a member yet?{" "}
					<Link to="/register" className="member-btn">
						Register
					</Link>
				</p>
			</form>
		</Wrapper>
	);
};
export default Login;
