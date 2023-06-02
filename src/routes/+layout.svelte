<script lang="ts">
    import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
    import '@skeletonlabs/skeleton/styles/skeleton.css';
    import '../styles/app.scss';			
	import Navigation from '$lib/template/Navigation.svelte';
</script>

<Navigation />
<div>
	<slot />
</div>
