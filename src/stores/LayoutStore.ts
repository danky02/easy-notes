import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useLayoutStore = defineStore('layout', () => {
  // todo save last settings
  const sideBarOpen = ref(true)

  function toggleSidebar (){
    sideBarOpen.value = !sideBarOpen.value
  }
  
  return { sideBarOpen, toggleSidebar }
})
