<template>
  <div class="body" :style="{'height': appHeight + 'px'}">
    <div class="side-nav" :class="navExpandedAni ?'-side-nav-expand' :'-side-nav-expand-reverse'" :[navExpandedAttr]="''">
      <div class="logo" v-on:click="toggleNavExpand">
        <img alt="Vue logo" src="@/assets/logo.svg" width="100" height="100" />
      </div>
      <nav>
        <RouterLink to="/">Index</RouterLink>
        <div v-for="item in accounts">
          <span class='nav-account'>{{item.email}}</span>
          <RouterLink :to="`/${item.email}/`">All</RouterLink>
          <RouterLink v-for="box in item.boxes" :to="`/${item.email}/${box}`">{{box}}</RouterLink>
        </div>
      </nav>
    </div>
    <div class="content">
      <RouterView class="content" />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

const isMobile = window.innerHeight > window.innerWidth

const navExpanded = ref(!isMobile)
const navExpandedAni = ref(!isMobile)

const accounts = ref([
  {'email': 'user@example.com', 'boxes': ['Inbox', 'Sent', 'Junk', 'Trash']},
])

const appHeight = computed(()=>window.innerHeight)
const navExpandedAttr = computed(()=>navExpanded.value ?'expanded-nav' :null)

var toggleNavExpanding = false;
function toggleNavExpand(){
  if(toggleNavExpanding){
    return;
  }
  toggleNavExpanding = true;
  navExpandedAni.value = !navExpandedAni.value;
  setTimeout(()=>{
    navExpanded.value = navExpandedAni.value;
    toggleNavExpanding = false;
  }, 350);
}

</script>

<style scoped>
.body {
  display: flex;
  flex-direction: row;
}

.side-nav {
  width: 3.8rem;
  padding: 0.5rem 0;
  margin-right: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow: hidden;
  border-right: 1px solid var(--color-border);
}

.side-nav[expanded-nav] {
  width: 15rem;
}

.-side-nav-expand {
  animation: -side-nav-expand 0.5s ease-out;
}

.-side-nav-expand-reverse {
  animation: -side-nav-expand-reverse 0.4s;
}

@keyframes -side-nav-expand {
  from {
    width: 3.8rem;
  }
  to {
    width: 15rem;
  }
}

@keyframes -side-nav-expand-reverse {
  from {
    width: 15rem;
  }
  to {
    width: 3.8rem;
  }
}


.side-nav .logo {
  box-sizing: content-box;
  display: block;
  width: 2rem;
  height: 2rem;
  padding: 0.5rem 0.7rem 0.5rem calc(100% - 3rem);
  margin-right: 0.2rem;
  border: 1px solid var(--color-border);
  border-left: none;
  border-radius: 0 1.5rem 1.5rem 0;
}

.logo img {
  display: block;
  width: 100%;
  height: 100%;
  user-select: none;
}

.side-nav nav {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.nav-account {
  display: block;
  height: 1.7rem;
  padding: 0 0.6rem;
  font-size: 1rem;
  font-weight: 300;
  overflow-x: hidden;
  text-overflow: ellipsis;
}

.side-nav nav a {
  display: block;
  height: 1.7rem;
  padding: 0 0.5rem;
  margin-left: 0.5rem;
  border-left: 1px solid var(--color-border);
  display: block;
  font-size: 1rem;
  font-weight: 450;
  overflow-x: hidden;
  text-overflow: ellipsis;
  text-decoration: none;
  color: var(--color-text);
  transition: 0.4s;
}

.side-nav nav a.router-link-exact-active {
  padding-left: 0.7rem;
  color: hsla(160, 100%, 37%, 1);
  font-weight: 600;
}

.side-nav nav a.router-link-exact-active:hover {
  background-color: transparent;
}

.content {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 1rem;
}

</style>
