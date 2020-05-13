<template>

  <div class="menu-container">

    <!-- root level itens -->
    <ul class="menu">

      <li class="menu__top">
        <!-- <router-link to="/" class="menu__logo"> -->
          <!-- <img src="/icon-32.png" alt="icon"> -->
        <!-- </router-link> -->
        <a
        href="#"
        @click.prevent="openProjectLink"
        class="menu__title"
        >
         <font-awesome-icon icon="user-circle" class="icon1" aria-hidden="true" />
          Welcome user
        </a>
      </li>
<hr>
      <li>
        <a
        href="#"
        @click.prevent="updateMenu('home')"
        :class="highlightSection('home')" align="left"
        >
            <!-- <i class="fa fa-home menu__icon" aria-hidden="true"></i> -->
            <font-awesome-icon icon="home" aria-hidden="true" />
            Home
        </a>
      </li>
      <li v-for="AllUsers in currentUser.menuitems" :key="AllUsers.id" @click="goComponent(AllUsers)" align="left">
        <a :class="highlightSection('products')">
          <!-- <i class="fa fa-tag menu__icon" aria-hidden="true"></i> -->
          <font-awesome-icon icon="newspaper" aria-hidden="true" />&nbsp;&nbsp;{{AllUsers}}
          <!-- <i class="fa fa-chevron-right menu__arrow-icon" aria-hidden="true"></i> -->
        </a>
      </li>
   <li align="left" >
     <a @click="show"
     :class="highlightSection('products')" >
           <font-awesome-icon icon="home" aria-hidden="true" /> what's new?
           </a>
   </li>
      <!-- <li>
        <a
        href="#"
        @click.prevent="updateMenu('customers')"
        :class="highlightSection('customers')"
        >
          <i class="fa fa-users menu__icon" aria-hidden="true"></i>
          Customers
          <i class="fa fa-chevron-right menu__arrow-icon" aria-hidden="true"></i>
        </a>
      </li> -->

      

    </ul>

    <!-- context menu: childs of root level itens -->
    <transition name="slide-fade">

      <div class="context-menu-container" v-show="showContextMenu">

        <ul class="context-menu">

          <li v-for="(item, index) in menuItens" :key="index">

            <h5 v-if="item.type === 'title'" class="context-menu__title">

              <i :class="item.icon" aria-hidden="true"></i>

              {{item.txt}}

              <a
              v-if="index === 0"
              @click.prevent="closeContextMenu"
              class="context-menu__btn-close"
              href="#"
              >
                 <font-awesome-icon icon="bars" aria-hidden="true" />
                <!-- <i class="fa fa-window-close" aria-hidden="true"></i> -->
              </a>

            </h5>

            <a
            v-else
            href="#"
            @click.prevent="openSection(item)"
            :class="subMenuClass(item.txt)"
            >
              {{item.txt}}
            </a>

          </li>

        </ul>

      </div>

    </transition>

  </div>

</template>

<script>
import menuData from './support/menu-data';
import kebabCase from 'lodash/kebabCase';
export default {
  name: 'Menu',
  data(){
    return {
      contextSection: '',
      menuItens: [],
      menuData: menuData,
      activeSubMenu: ''
    }
  },
  methods: {
     show(){
      this.$modal.show('hello-world');
    },
    goComponent(menu){
      this.$router.push('/'+menu);
    },
    openProjectLink() {
      alert('You could open the project frontend in another tab here, so the logged admin could see changes made to the project ;)');
    },
    updateMenu(context) {
      this.contextSection = context;
      this.menuItens = this.menuData[context];
      if (context === 'home') {
        this.$router.push('/');
        window.bus.$emit('menu/closeMobileMenu');
      }
    },
    highlightSection(section) {
      return {
        'menu__link': true,
        'menu__link--active': section === this.contextSection,
      };
    },
    subMenuClass(subMenuName) {
      return {
        'context-menu__link': true,
        'context-menu__link--active': this.activeSubMenu === subMenuName,
      };
    },
    closeContextMenu() {
      this.contextSection = '';
      this.menuItens = [];
    },
    openSection(item) {
      this.activeSubMenu = item.txt;
      this.$router.push(this.getUrl(item));
      window.bus.$emit('menu/closeMobileMenu');
    },
    getUrl(item) {
      let sectionSlug = kebabCase(item.txt);
      return `${item.link}/${sectionSlug}`;
    }
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
    showContextMenu() {
      return this.menuItens.length;
    },
  }
}
</script>
<style>
.icon1{
  background-color:none;
  color: white;
  padding: 5px;
  font-size: 50px;
  border: none;
}
.hr{
  border-top: 1px solid white;
  padding:10px 10px 5px 10px;
}
</style>