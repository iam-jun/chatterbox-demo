<script>
	import { Router, Route } from "svelte-routing";
	import routes from "./routes.ts";
</script>

<Router>
	{#each Object.entries(routes) as [path, RouteComponent]}
		<Route {path} component={RouteComponent} />
	{/each}
</Router>
