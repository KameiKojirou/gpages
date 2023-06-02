<script lang="ts">
    import { Drawer, drawerStore } from '@skeletonlabs/skeleton';
	import MainMenu from './MainMenu.svelte';
    import { LightSwitch } from '@skeletonlabs/skeleton';
</script>

<Drawer>
    <div class="flex flex-row justify-between p-2">
        <span class="text-4xl">Menu</span>
        <div class="flex flex-row gap-2">
            <LightSwitch height="h-12" width="w-24" />
            <button class="btn variant-filled-surface rounded-sm" on:click={()=>{drawerStore.close()}}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button>
        </div>
    </div>
    <div class="flex flex-row flex-wrap gap-2 p-2">
        <MainMenu />
    </div>
</Drawer>