<template>
  <div class="body" v-bind:style="{'height': appHeight + 'px'}">
    <div class="side-nav" v-bind:[navExpandedAttr]="''">
      <div class="logo" v-on:click="triggerNavExpand">
        <img alt="Vue logo" src="@/assets/logo.svg" width="100" height="100" />
      </div>
      <nav>
        <RouterLink to="/">
          <span class="nav-text">Index</span>
        </RouterLink>
        <RouterLink to="/about">
          <span class="nav-text">About</span>
        </RouterLink>
      </nav>
    </div>
    <div class="content">
      <RouterView class="content" />
    </div>
  </div>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
export default {
  data(){
    return {
      navExpanded: true,
    }
  },
  computed: {
    appHeight: {
      get(){
        return window.innerHeight;
      }
    },
    navExpandedAttr: {
      get(){
        return this.navExpanded ?'expanded-nav' :null;
      }
    }
  },
  methods: {
    triggerNavExpand(){
      this.navExpanded = !this.navExpanded;
    }
  },
  components: {
    RouterLink,
    RouterView
  }
}
</script>

<style scoped>
.body {
  display: flex;
  flex-direction: row;
}

.side-nav {
  width: 3rem;
  padding: 0.5rem 0;
  margin-right: 1rem;
  box-shadow: 1px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.side-nav[expanded-nav] {
  /*width: fit-content;*/
  width: 12rem;
  box-shadow: #000 0px 0px 20px 0px;
}

.logo {
  box-sizing: content-box;
  display: block;
  width: 2rem;
  height: 2rem;
  padding: 0.5rem 0.7rem 0.5rem 0.8rem;
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

.side-nav nav a {
  display: block;
  height: 1.7rem;
  padding: 0 0.5rem;
  margin-left: 0.75rem;
  border-left: 1px solid var(--color-border);
}

.side-nav nav .nav-text {
  font-size: 1.1rem;
  font-weight: 700;
}

.side-nav:not([expanded-nav]) nav .nav-text {
  display: none;
}

.side-nav nav a.router-link-exact-active {
  padding-left: 0.7rem;
}

.side-nav nav a.router-link-exact-active .nav-text {
  color: var(--color-text);
  font-weight: 900;
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
