<template>
    <el-container>
      <el-header class="Header" height="8vh"><div class="title">欢迎使用XXX系统</div><div class="control">相关操作</div><div class="el-icon-more" @click="phoneMenu = !phoneMenu"></div></el-header>
    <el-container>
      
      <el-aside class="Aside" width="20vw">
        <h3 style="text-align: center;color: #aaaaaa;font-size: 1.2vw">导航栏</h3>
        <el-menu
        router
      default-active="1"
      class="el-menu-vertical-demo"
      >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>组件</span>
        </template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="/progressPrc">进度条样式</el-menu-item>
          <el-menu-item index="/JSArr">JS数组操作</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="/checkBox">复选框的应用</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">模块2</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-menu"></i>
        <span slot="title">模块3</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-menu"></i>
        <span slot="title">模块4</span>
      </el-menu-item>
    </el-menu>
      </el-aside>
      <el-main class="mainContent" width="85vw">
        <el-collapse-transition>
        <div class="phoneNav" v-show="phoneMenu">
        <h3 style="text-align: center;color: #aaaaaa;font-size: 1.2vw">导航栏</h3>
        <el-menu
        router
      default-active="1"
      class="el-menu-vertical-demo"
      >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>组件</span>
        </template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="/progressPrc">进度条样式</el-menu-item>
          <el-menu-item index="/JSArr">JS数组操作</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">模块2</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-menu"></i>
        <span slot="title">模块3</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-menu"></i>
        <span slot="title">模块4</span>
      </el-menu-item>
    </el-menu>
      </div>
        </el-collapse-transition>
        <router-view></router-view>
      </el-main>
    </el-container>
    </el-container>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      phoneMenu: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
  .Header {
    display: flex;
    background-color: #414141;
    justify-content: space-between;
    .title {
      margin-left: 2vw;
      color: #dfdfdf;
      font-size: 2vw;
      line-height: 8vh;
      min-width: 200px;
    }
    .control {
      color: #dfdfdf;
      font-size: 1.2vw;
      line-height: 8vh;
      margin-right: 2vw;
    }
    .el-icon-more {
      display: none;
    }
  }

  .Aside {
    height: 92vh;
    border-right: 1px solid #e0e0e0;
    .el-menu {
      border: 0
    }
  }

  @media screen and (max-width: 375px) {
    .Aside {
      display: none;
    }
    .Header{
      .title {
      font-size: 20px;
      }
      .control {
        display: none;
      }
    }
    .el-icon-more {
      color: #dfdfdf;
      font-size: 15px;
      line-height: 8vh;
      margin-right: 2vw;
      display: block !important;
    }
    .el-container {
      .phoneNav {
        background-color: #ffffff;
        width: 326px;
        .el-menu {
          border: 0;
        }
      }
    }
  }

</style>