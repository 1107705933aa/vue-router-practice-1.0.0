<template>
  <div class="hello">
    <div>{{w}}</div>
    <div class="block"></div>
    <p>
      <!-- <router-link to="/test">Go to Test</router-link> -->
      <router-link
        :to="{path:'/test', params:{name:'Lily'},query:{sex:'女',age:age},props:{age:18}}"
      >Go to Test</router-link>
      <router-link to="/test2">Go to Test2</router-link>
      <router-link to="/test3" class="test3" style="margin-top:15px;">Go to Test3</router-link>
    </p>
    <router-view></router-view>
    <div class="block"></div>
    <button @click="jump">跳到Test2</button>
    <button @click="jump2">跳到Test3</button>
    <button @click="jump3">跳到Test3</button>
    <button @click="refresh">刷新</button>
  </div>
</template>
<script>
import qs from "qs";
export default {
  name: "HelloWorld",
  data() {
    return {
      w: "我是HelloWorld",
      age: 24,
      name: "王艳秋"
    };
  },
  //   query类似 get, 跳转之后页面 url后面会拼接参数,类似?id=1, 非重要性的可以这样传;
  //   params类似 post, 跳转之后页面 url后面不会拼接参数 , 但是刷新页面id 会消失;
  methods: {
    jump() {
      this.$router.push({
        path: "/test2",
        query: {
          name: this.name,
          age: this.age
        }
      });
    },
    jump2() {
      this.$router.push({
        path: "/test3",
        params: {
          name: this.name,
          age: this.age
        }
      });
    },
    jump3() {
      this.$router.replace({
        path: "/test3",
        params: {
          name: this.name,
          age: this.age
        }
      });
    },
    refresh() {
      this.$router.go(0);
    }
  },
  beforeRouteEnter(to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
    next();
  },
  beforeRouteUpdate(to, from, next) {
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
    next();
  },
  beforeRouteLeave(to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
    next();
  },
  created() {
    console.log(this.name);
    console.log(this.age);
    // 组件中使用post方法
    this.axios
      .post("https://api.apiopen.top/musicBroadcasting", {
        a: this.name,
        b: this.age
      })
      .then(
        res => {
          // 成功回调
          // console.log(res.data);
          // console.log(res.data.result[0].channellist[0]);
          console.log("-----------------------------");
        },
        res => {
          // 错误回调
          console.log("请求失败！");
        }
      );
  },
  mounted() {
    this.axios({
      method: "post",
      url: "https://api.apiopen.top/musicBroadcasting",
      data: qs.stringify({
        //这里是发送给后台的数据
        name: this.name,
        age: this.age
      })
    })
      .then(response => {
        //这里使用了ES6的语法
        console.log(response); //请求成功返回的数据
      })
      .catch(error => {
        console.log(error); //请求失败返回的数据
      });

    // this.axios
    //   .post(
    //     "https://api.apiopen.top/musicBroadcasting",
    //     qs.stringify({ a: 1, b: 2 })
    //   )
    //   .then(
    //     res => {
    //       // 成功回调
    //       console.log(res);
    //     },
    //     res => {
    //       // 错误回调
    //       console.log(error);
    //     }
    //   );
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.block {
  width: 100%;
  height: 10px;
}

.test3 {
  display: block;
}

button {
  font-size: 16px;
}
</style>
