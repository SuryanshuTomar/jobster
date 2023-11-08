import type { ErrorResponse } from "react-router-dom";
import { Link, useRouteError } from "react-router-dom";

import notFound from "../../assets/images/not-found2.svg";
import somethingWentWrong from "../../assets/images/something-went-wrong.svg";
import Wrapper from "../../assets/wrappers/ErrorPage";

const Error = () => {
	const error = useRouteError() as ErrorResponse;

	const errorContent =
		error.status === 404 ? (
			<Wrapper>
				<div>
					<img src={notFound} alt="page not found" />
					<h3>Ohh! Page not found.</h3>
					<p>We can't seem to find the page you are looking for!</p>
					<Link to="/dashboard">Back home</Link>
				</div>
			</Wrapper>
		) : (
			<Wrapper>
				<div>
					<img src={somethingWentWrong} alt="page not found" />
					<h3>Something went wrong!</h3>
					<p></p>
					<Link to="/dashboard">Back home</Link>
				</div>
			</Wrapper>
		);

	return errorContent;
};
export default Error;
