<template>
  <!-- <div></div> -->
  <RouterView></RouterView>
  <!-- <router-view/> -->
</template>


<script>
import RouterView from "@/components/RouterView";

export default {
  name: "app",
   components: {RouterView},
  data() {
    return {
      lightMode: false
    };
  },
  methods:{
    miseAJourMode(){
      if (this.$store.state.actualUser === null) {
        document.body.classList.add('dark');
        document.body.classList.remove('white');
      }
      else if (this.$store.state.actualUser.lightMode === true){
        document.body.classList.add('white');
        document.body.classList.remove('dark');
      }
      else {
        document.body.classList.add('dark');
        document.body.classList.remove('white');
      }
    }
  },
  mounted() {
    this.$nextTick(this.miseAJourMode)
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Fira+Sans");

html, body{
  font-family: "Fira Sans", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.white {
  background-color:  var(--whiteBackground);
}

.dark {
  background-color: var(--darkBackground);
}

:root
  {
  --whiteBackground: white;

  --darkBackground: black;
  }
</style>
