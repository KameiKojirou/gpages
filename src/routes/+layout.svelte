<script lang="ts">
    import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
    import '@skeletonlabs/skeleton/styles/skeleton.css';
    import '../styles/app.scss';			
	import Navbar from '$lib/template/Navbar.svelte';
    import DrawerMenu from '$lib/template/DrawerMenu.svelte';
</script>

<DrawerMenu />
<Navbar />
<div>
	<slot />
</div>
