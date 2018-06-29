<template>
  <div id="app">
    <div id="nav">
      <Header />
    </div>
    <div id="sidenav">
      <Sidebar />
    </div>
    <div id="content">
        <router-view/>
    </div>
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 5px;
  height: 10%;
  margin-left: 120px;
  text-align: right;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

/*#nav a.router-link-exact-active {
  color: #42b983;
}*/

#sidenav {
  width: 10%;
  position: fixed;
}

#content
 {
  padding-left: 100px;
  padding-top: 150px;

 }


</style>
<script>
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
export default {
  name: 'App',

  components: {
    Header,
    Sidebar
  }
};
</script>