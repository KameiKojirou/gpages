<script lang="ts">
    import { Drawer, drawerStore } from '@skeletonlabs/skeleton';
    import type { DrawerSettings } from '@skeletonlabs/skeleton';
	import MainMenu from './MainMenu.svelte';
</script>

<Drawer>
    <div class="flex flex-row justify-between p-2">
        <span class="text-4xl">Main Menu</span>
        <button class="btn variant-filled-surface rounded-sm" on:click={()=>{drawerStore.close()}}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
    <div class="flex flex-row flex-wrap gap-2 p-2">
        <MainMenu />
    </div>
</Drawer>