<template>
  <div id="app">
    <Header></Header>
    <router-view/>
  </div>
</template>

<script>
  import '../public/style.scss';
  import Header from './components/header';
export default {
  name: 'app',
  components: {
    Header
  }
}
</script>
