<template>
    <div 
        class="flex flex-row justify-between items-center text-blue-400 p-2 pl-4 hover:bg-gray-200 cursor-pointer"
        :class="{ 'bg-gray-200': active, 'rounded-lg': !rounded_t_only, 'rounded-t-lg': rounded_t_only }"
        @click="emits('click')" >
        <div class="flex flex-row justify-start min-w-fit">
            <!-- icon -->
            <div v-if="iconPath" class="pl-4">
                <svg class="h-6 w-6 fill-current mr-2" viewBox="0 0 20 20">
                    <path :d="iconPath" />
                </svg>
            </div>
            
            <!-- text -->
            <span class="text-center text-gray-700 whitespace-nowrap">{{title}}</span>
        </div>
        <!-- actions -->
        <div v-if="actions" class="flex items-stretch pl-2">
            <Icon
                v-for="action of actions" :key="action"
                :icon="action"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import type { PropType } from "vue"
import Icon from "./Icon.vue";
// TODO add icons

const props = defineProps({
    active: {
        type: Boolean,
        default: () => false,
    },
    title: {
        type: String,
        default: () => ""
    },
    rounded_t_only: {
        type: Boolean,
        default: () => false
    },
    iconPath: {
        type: String,
    },
    actions: {
        type: Array<string>,
        default: () => []
    }
})

const emits = defineEmits<{
    (e: 'click'): void,
}>();
</script>