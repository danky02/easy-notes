<template>
    <!-- give the sidebar z-50 class so its higher than the navbar if you want to see the logo -->
    <!-- you will need to add a little "X" button next to the logo in order to close it though -->
    <div class="w-1/2 md:w-1/3 lg:w-64 fixed md:top-0 md:left-0 h-screen lg:block bg-gray-100 border-r z-30"
        :class="sideBarOpen ? '' : 'hidden'" id="main-nav">

        <div class="w-full h-20 border-b flex px-4 items-center mb-8">
            <p class="font-semibold text-3xl text-blue-400 pl-4">LOGO</p>
        </div>

        <div class="mb-4 px-4">
            <p class="pl-4 text-sm font-semibold mb-1">MAIN</p>
            <Button :active="true" title="Dashboard" :iconPath="IconsPath.ICON_PATH_DASHBOARD" />
            <Button :active="false" title="Analytics" :iconPath="IconsPath.ICON_PATH_ANALYTICS" />
            <Button :active="false" title="Inventory" :iconPath="IconsPath.ICON_PATH_INVENTORY" />
            <Button :active="false" title="Enquiries" :iconPath="IconsPath.ICON_PATH_ENQUIRIES" />
            <Button :active="false" title="Calender" :iconPath="IconsPath.ICON_PATH_CALENDAR" />
        </div>

        <div class="mb-4 px-4">
            <p class="pl-4 text-sm font-semibold mb-1">PRODUCTS</p>
            <Button :active="false" title="Add Product" :iconPath="IconsPath.ICON_PATH_ADD_PRODUCT" />
            <Button :active="false" title="View Products" :iconPath="IconsPath.ICON_PATH_VIEW_PRODUCT" />

        </div>

        <div class="mb-4 px-4">
            <p class="pl-4 text-sm font-semibold mb-1">MISC</p>
            <Button :active="false" title="Notices" :iconPath="IconsPath.ICON_PATH_NOTICES" />
            <Button :active="false" title="Controls" :iconPath="IconsPath.ICON_PATH_CONTROLS" />
            <Button :active="false" title="Settings" :iconPath="IconsPath.ICON_PATH_SETTINGS" />
    </div>

</div></template>

<script setup lang="ts">
import { useLayoutStore } from '@/stores/LayoutStore';
import { storeToRefs } from 'pinia';
import Button from '../widgets/Button.vue';
import {IconsPath} from '@/assets/iconsPath'

const layoutStore = useLayoutStore();

const { sideBarOpen } = storeToRefs(layoutStore);
</script>