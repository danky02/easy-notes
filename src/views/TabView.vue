<script setup lang="ts">
import { IconsPath } from '@/assets/iconsPath';
import Button from '@/components/widgets/Button.vue';

const tabs:string[] = ["nota 1", "nota 2", "nota 3", "nota 1", "nota 2", "nota 3", "nota 1", "nota 2", "nota 3", "nota 1", "nota 2", "nota 3", "nota 1", "nota 2", "nota 3", "nota 1", "nota 2", "nota 3", "nota 1", "nota 2", "nota 3"]

// TODO
</script>

<template>
    <!-- wrapper for tab -->
    <div class="scrollmenu flex flex-row">
        <Button v-for="tab of tabs" :key="tab"
            :actions="[
                {iconPath: IconsPath.ICON_PATH_ADD_PRODUCT, title: 'close'}
            ]"
            :rounded_t_only="true"
            :title="tab" 
            class="tab"
        />

    </div>

</template>

<style>
/* div.scrollmenu {
  overflow: auto;
  white-space: nowrap;
}

div.scrollmenu .tab {
    display: inline-block;
} */
</style>