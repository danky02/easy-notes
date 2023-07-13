import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useTabsStore = defineStore('tabs', {
    state: () => {
        const availableTabs:Array<{
            id:string,
            title:string,
        }> = [
            {id: '1', title: "nome lungo di una nota inesistente numero 1"},
            {id: '2', title: "nome lungo di una nota inesistente numero 2"},
            {id: '3', title: "nome lungo di una nota inesistente numero 3"},
            // {id: '4', title: "nome lungo di una nota inesistente numero 4"},
            // {id: '5', title: "nome lungo di una nota inesistente numero 5"},
            // {id: '6', title: "nome lungo di una nota inesistente numero 6"},
            // {id: '7', title: "nome lungo di una nota inesistente numero 7"},
            // {id: '8', title: "nome lungo di una nota inesistente numero 8"},
            // {id: '9', title: "nome lungo di una nota inesistente numero 9"},
        ]
        let activeTabId:string|undefined;
        
        return { availableTabs, activeTabId }
    },
    getters: {
        allTabs: (state) => state.availableTabs.map(t => ({...t, isActive: t.id === state.activeTabId})),
        activeTab: (state) => state.availableTabs.find(x => x.id === state.activeTabId)
    },
    actions: {
        checkTabAvailability(tabId:string) {
            return this.availableTabs.findIndex(x => x.id === tabId) != -1
        },

        switchTab(tabId:string) {
            // check if tab is available
            if (!this.checkTabAvailability(tabId)) throw 'invalid tab id'
            this.activeTabId = tabId;
        },
    },
});