<template>
    <div    @click="emits('click')"
            class="w-full flex flex-row justify-between items-center text-blue-400 p-4 hover:bg-gray-200 cursor-pointer"
            :class="
                {
                    'bg-gray-200': selected,
                    'rounded-lg': !rounded_t_only,
                    'rounded-t-lg': rounded_t_only
                }"
            >
        <div class="flex flex-row justify-start min-w-fit">
            <!-- icon -->
            <div v-if="iconPath" class="pl-4">
                <svg class="h-6 w-6 fill-current mr-2" viewBox="0 0 20 20">
                    <path :d="iconPath" />
                </svg>
            </div>
            
            <!-- text -->
            <span class="text-center text-gray-700">{{title}}</span>
        </div>
        <!-- actions -->
        <div v-for="action of actions" :key="action.title" class="px-2">
            <svg class="h-4 w-4 fill-current mr-2" viewBox="0 0 20 20" >
                <path :d="action.iconPath" />
            </svg>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { PropType } from "vue"
// TODO add icons

const props = defineProps({
    selected: {
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
        type: Array as PropType<{
            title: string,
            iconPath: string,
        }[]>,
        default: () => []
    }
})

const emits = defineEmits<{
    (e: 'click'): void,
}>();
</script>