<script>
	import { page } from '$app/stores';
</script>

<h1>{$page.status} {$page.error?.message}</h1>
<p>
	<span>
		Sorry, you got status: {$page.status ?? 500}. Try again later.
	</span>
</p>
<hr />
<a href="/"> Go home </a>
