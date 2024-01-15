<script>
	import { Router, Route, Link } from "svelte-routing";
	import routes from "./routes";
</script>

<Router>
	<!-- <nav>
		<Link to="/">Home</Link>
		<Link to="/login">Login</Link>
	</nav> -->
	{#each Object.entries(routes) as [path, RouteComponent]}
		<Route {path} component={RouteComponent} />
	{/each}
</Router>
