<template>
    <vue-feather
        :size="computed_size"
        :type="icon"
        @click="!static && emit('click')"

        class="rounded-md"
        :class="{'hover:bg-gray-300': !static}"
    />
</template>

<script setup lang="ts">
// https://fengyuanchen.github.io/vue-feather/

import { computed, type PropType } from 'vue';


const props = defineProps({
    size: {
        type: String as PropType<'big'|'medium'|'small'>,
        default: () => 'medium',
    },
    icon: {
        type: String,
        required: true,
    },
    static: {
        type: Boolean,
        default: () => false
    }
});

const emit = defineEmits<{
    (e:'click'): void
}>();

const computed_size = computed(() => {
    switch (props.size) {
        case 'big': return 32;
        case 'medium': return 24;
        case 'small': return 16;
    }
});

</script>