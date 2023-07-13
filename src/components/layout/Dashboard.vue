<template>
    <div class="leading-normal tracking-normal" id="main-body">
        <div class="flex flex-col">

            <SideBar />

            <div class="w-full bg-gray-100 pl-0 lg:pl-64 min-h-screen" :class="sideBarOpen ? 'overlay' : ''"
                id="main-content">

                <Navbar />

                <div class="p-6 bg-gray-100 mb-20 h-full">
                    <router-view />
                </div>

                <!-- <Footer></Footer> -->

            </div>
        </div>
    </div>
</template>
  
<script setup lang="ts">
import { ref } from 'vue';
import SideBar from './Sidebar.vue';
import Navbar from './Navbar.vue';
import Footer from './Footer.vue';
import { useLayoutStore } from '@/stores/LayoutStore';
import { storeToRefs } from 'pinia';

const layoutStore = useLayoutStore();

const { sideBarOpen } = storeToRefs(layoutStore);


// TODO move dashboard into App.vue

</script>