<template>
  <!--<div id="head">
   <router-link to="/">Home</router-link> | 
   <router-link to="/about">About</router-link> | 
   <router-link to="/contact">Contact</router-link>
  </div>-->
  <nav class="navbar navbar-expand-lg navbar-light style="background-color="#2c2c54""">
 
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <a><router-link to="/about" id="about">About</router-link></a>
      </li>
      <li class="nav-item">
        <a><router-link to="/competence" id="competence">Compétences</router-link></a>
      </li>
      <li class="nav-item">
        <a><router-link to="/contact" id="contact">Contact</router-link></a>
      </li>

    </ul>
  </div>
</nav>
</template>

<style>
  #nav{
    position: fixed;
    height: 10%;
    background-color: #2c2c54;
    width: 100%;
  }

  #nav a {
    color: white;
    font-weight: none;
  }

  #about {
    margin-left: 133px;
    padding-top: -20px;
    color: white!important;
  }

  #competence {
    margin-left: 266px;  
    color: white!important;
  } 

  #contact {
    margin-left: 266px;  
    color: white!important;
  }

</style>

<script>

export default {
  name: 'Header'
};


</script>