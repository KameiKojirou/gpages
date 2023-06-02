<script lang="ts">
    import MainMenu from './MainMenu.svelte';
    import { drawerStore } from '@skeletonlabs/skeleton';
</script>

<div class="bg-surface-200 text-surface-800 dark:bg-surface-800 dark:text-surface-200 flex flex-row justify-between text-center align-bottom">
    <div class="font-bold uppercase text-xl">
        <MainMenu />
    </div>
    <button class="btn variant-filled-surface rounded-none" on:click={()=>{drawerStore.open()}}>
        <svg xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke-width={1.5} 
            stroke="currentColor" 
            class="w-10 h-10">
            <path 
                stroke-linecap="round" 
                stroke-linejoin="round" 
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
      </button>
</div>
