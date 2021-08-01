<template>
  <div id="app">
   <router-view></router-view>

  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'App',
  data(){
    return{
      title:'',
      content:'',
      list:[]
    }
  },
  created(){
    this.getNewsList()
    axios.get('/\/api\/get\/news/').then(res=>{
      console.log(res)
    })
    // axios.post('/api/post/news').then(res=>{
    //   console.log(res)
    // })
  },
  methods:{
   getNewsList(){
     axios.get('/\/api\/get\/news/').then(res=>{
       this.list = res.data.list

     })
   }
  }
};

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
