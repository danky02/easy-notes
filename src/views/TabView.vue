<script setup lang="ts">
import { IconsPath } from '@/assets/iconsPath';
import Button from '@/components/widgets/Button.vue';
import { computed, onMounted, onUnmounted, ref, type VNodeRef } from 'vue';


import { useTabsStore } from '@/stores/TabsStore';
import { storeToRefs } from 'pinia';
import MilkdownEditorWrapper from '@/components/MilkdownEditorWrapper.vue';

const tabsStore = useTabsStore()
const tabs = storeToRefs(tabsStore).allTabs

function newTabSelected(tabId:string) {
    tabsStore.switchTab(tabId);
}

/* NEXT FEATURES
- close on ctrl+w, mouse wheel click
- drag and drop tabs order

*/

// TODO use 'tab button' instead Button
</script>

<template>
    <div class="grid grid-cols-1 justify-stretch h-full">
        <div class="scrollmenu flex flex-row snap-x snap-mandatory">
            <Button v-for="tab of tabs" :key="tab.id"
                :actions="['x']"
                :rounded_t_only="true"
                :title="tab.title"
                :active="tab.isActive"
                @click="newTabSelected(tab.id)"
                class="snap-start"
            />
        </div>

        <!-- editor -->
        <div class="bg-gray-200 justify-self-stretch p-2" style="height: auto;display:inline-block;">
            <MilkdownEditorWrapper />
        </div>
    </div>
</template>

<style>
div.scrollmenu {
  overflow: auto;
  white-space: nowrap;
  scroll-behavior: smooth;
}

div.scrollmenu::-webkit-scrollbar {
    /* width: 20px; */
    height: 5px;
}

div.scrollmenu::-webkit-scrollbar-track {
    border-radius: 100vh;
    
    background: rgb(229, 231, 235);
    /* background: #f7f4ed; */
}

div.scrollmenu::-webkit-scrollbar-thumb {
    background: rgb(202, 226, 255);
    border-radius: 100vh;
    /* border: 3px solid #f6f7ed; */
}

div.scrollmenu::-webkit-scrollbar-thumb:hover {
    background: rgb(96 165 250);
}

/* div.scrollmenu .tab {
    display: inline-block;
} */
</style>