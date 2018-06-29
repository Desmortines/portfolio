<template>
	<div id='sidebar'>
		<aside :class="{ active: active}">
			<nav>
        
				<a>  <router-link to="/" id="home">Home</router-link></a>
        <a><div id="spacer"></div></a>
    			<a><router-link to="/projet">Projet</router-link></a>
          <a><div id="spacer"></div></a> 
    			<a><router-link to="/terme"> © </router-link></a>
          <a><div id="spacer"></div></a>
    			<a><img id="league" src="../assets/league.png"></a>
    		</nav>
    	</aside>
	</div>
</template>

<style>
	#sidebar{
		width: 100%;
	}	

	aside {
  display :block;
  width :100%;
  background :#2c2c54;
  height: 100vh;
  }
  &.active{
    display :block;
}
  a{
    display :block;
    padding: 10px 5px;
    color: white;
    font-weight: bold;
}

  #home {
    margin-top: 12.5px;
  }

	#league{
		width: 35%;
	}

  #spacer {
    height: 175px;
  }
</style>


<script>

export default {
  name: 'Sidebar'
};


</script>