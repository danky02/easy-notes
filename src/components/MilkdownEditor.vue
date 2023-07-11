<!-- MilkdownEditor.vue -->
<template>
    <Milkdown class="fix_milkdown_style" />
</template>
  
<script setup lang="ts">
import { Editor, rootCtx, defaultValueCtx } from "@milkdown/core";
// @ts-ignore
import { nord } from "@milkdown/theme-nord";
import { Milkdown, useEditor } from "@milkdown/vue";
import { commonmark } from "@milkdown/preset-commonmark";

import '@milkdown/theme-nord/style.css'

// todo FIREBASE
const markdown =
`# Milkdown Vue Commonmark

> You're scared of a world where you're needed.

This is a demo for using Milkdown with **Vue**.`
  
useEditor((root) =>
  Editor.make()
    .config((ctx) => {
      ctx.set(rootCtx, root)
      ctx.set(defaultValueCtx, markdown)
    })
    .config(nord)
    .use(commonmark)
);
</script>

<style>

.fix_milkdown_style .ProseMirror:focus {
    outline: none;
}

.fix_milkdown_style h1 { 
    display: block;
    font-size: 2em;
    margin-top: 0.67em;
    margin-bottom: 0.67em;
    margin-left: 0;
    margin-right: 0;
    font-weight: bold;
}
.fix_milkdown_style h2 {
    display: block;
    font-size: 1.5em;
    margin-top: 0.83em;
    margin-bottom: 0.83em;
    margin-left: 0;
    margin-right: 0;
    font-weight: bold;
}
.fix_milkdown_style h3 { 
    display: block;
    font-size: 1.17em;
    margin-top: 1em;
    margin-bottom: 1em;
    margin-left: 0;
    margin-right: 0;
    font-weight: bold;
}
.fix_milkdown_style h4 { 
    display: block;
    margin-top: 1.33em;
    margin-bottom: 1.33em;
    margin-left: 0;
    margin-right: 0;
    font-weight: bold;
}
.fix_milkdown_style h5 { 
    display: block;
    font-size: .83em;
    margin-top: 1.67em;
    margin-bottom: 1.67em;
    margin-left: 0;
    margin-right: 0;
    font-weight: bold;
}
.fix_milkdown_style h6 { 
    display: block;
    font-size: .67em;
    margin-top: 2.33em;
    margin-bottom: 2.33em;
    margin-left: 0;
    margin-right: 0;
    font-weight: bold;
}
</style>