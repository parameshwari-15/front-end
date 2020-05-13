<template>
    <div>
        <h1>Test an api {{this.$route.params.link}}</h1>
        <hr>
        <div>
        <!-- <h1>{{ keys }}</h1> -->
        <!-- <li v-for="k in keys" :key="k"> -->
            <!-- {{ k }} -->
            <!-- <input type="text" class="form-control" v-model="c[k]" placeholder="enter body data"> -->
            <!-- {{count++ }} -->
            <!-- {{ data }} -->
        <!-- </li> -->
        <form @submit.prevent="test">
        <!-- <select id="request" name="request" v-model="post.request">  -->
            <!-- <option value="get" >GET</option> -->
            <!-- <option value="post">POST</option> -->
        <!-- </select> -->
        <label>LINK</label>
        {{ link }}
        <br>
        <p>Header</p>
        <input type="text" class="form-control" v-model="post.header">
        <br>
        <div class="form-group">
          <button class="btn btn-primary">Send Request</button>
        </div>
        </form>
        </div>
        <hr>
        <p>{{res}}</p>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data(){
        return{
            post:[],
            link:this.$route.params.link,
            res:''
            // data:JSON.parse(this.$route.params.data),
            // keys:Object.keys(JSON.parse(this.$route.params.data)),
            // length:Object.keys(JSON.parse(this.$route.params.data)).length,
            // c:[],
            // count:0
            }
    },
    methods:{
        test(){
            // var i;
            // var count = Object.keys(this.data).length;
            // console.log(count);
            // console.log("request "+this.post.request);
            // console.log("url "+this.post.url);
            // let test='{"title":"test","comment":"hi","uid":5,"archived":true}';
            // let test=null
            // var xmldata=['<?xml version="1.0"?>'];
            // xmldata.push("<form>");
            // if(this.post.request=="get")
            // { 
                console.log("request GET");
                let uri = this.link;
                
                // console.log(typeof(this.c));
                axios.get(uri).then(response => {
                console.log(response.data);
                this.res=response.data;
            });
            // }
        //     if(this.post.request=="post")
        //     {
        //     var jsonObj = {};
        //     for ( i = 0 ; i < this.keys.length; i++) {
        //      jsonObj[this.keys[i]] = this.c[this.keys[i]];
        //     }
        //         console.log(typeof(JSON.parse(JSON.stringify(jsonObj))))
        //         console.log(JSON.parse(JSON.stringify(jsonObj)))
        //         let uri = this.link;
        //         console.log("request POST");
        //         console.log(this.c);
        //         let jtest=JSON.parse(JSON.stringify(jsonObj));
        //         axios.post(uri,jsonObj).then((response) => {
        //        this.res=response.data;
        //   });
        //     }

        // let uri = 'http://localhost:4000/posts/add';
    //     this.axios.post(uri, JSON.parse(jsonObj)).then(() => {
    //    this.$router.push({name: 'posts'});
    // });
}
}
}
</script>
