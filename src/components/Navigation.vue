<template>
  <div class="nav_component">
    <div class="nav_box">
      <ul class="d-flex justify-space-between">
        <li
          v-for="(item, index) in navItems"
          :key="index"
          @click="$router.push(item.url)"
          :class="$route.path == item.url ? 'active' : ''"
        >
          <img
            v-if="item.title == 'Profile'"
            src="/images/user.png"
            style="aspect-ratio: 1 / 1"
            class="rounded-full nav_icon ml-0.5"
            width="29"
          />
          <v-icon v-else class="nav_icon">{{ item.icon }}</v-icon>
          <span class="nav_title">{{ item.title }}</span>
        </li>
        <div class="indicator_box" v-if="navItems.some((x) => x.url == $route.path)">
          <div class="white_box">&nbsp;</div>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SnsgramNavigation',

  data() {
    return {
      navItems: [
        {
          title: 'Home',
          icon: '$home',
          url: '/home',
        },
        {
          title: 'Search',
          icon: '$magnify',
          url: '/search',
        },
        {
          title: 'New',
          icon: '$add',
          url: '/newPost',
        },
        {
          title: 'Notifs',
          icon: '$heart',
          url: '/notifs',
        },
        {
          title: 'Profile',
          icon: '',
          url: '/profile',
        },
      ],
    };
  },

  mounted() {},

  methods: {},

  watch: {
    '$route.path': function () {
      // To find step size between nav items
      let container = document.querySelector('.nav_box');
      document.documentElement.style.setProperty(
        '--step-size',
        (container.getBoundingClientRect().width - 40 - this.navItems.length * 57) /
          (this.navItems.length - 1) +
          57 +
          'px'
      );
    },
  },
};
</script>

<style lang="scss">
.nav_component {
  .nav_box {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: #fff;
    box-shadow: 0 -5px 5px -5px rgba(0, 0, 0, 0.15);
    ul {
      position: relative;
      padding: 10px 20px;
      li {
        width: 57px;
        height: 30px;
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        position: relative;

        &:nth-child(1).active ~ .indicator_box {
          transform: translateX(calc(var(--step-size) * 0));
        }
        &:nth-child(2).active ~ .indicator_box {
          transform: translateX(calc(var(--step-size) * 1));
        }
        &:nth-child(3).active ~ .indicator_box {
          transform: translateX(calc(var(--step-size) * 2));
        }
        &:nth-child(4).active ~ .indicator_box {
          transform: translateX(calc(var(--step-size) * 3));
        }
        &:nth-child(5).active ~ .indicator_box {
          transform: translateX(calc(var(--step-size) * 4));
        }

        .nav_title {
          opacity: 0;
          z-index: 10;
          color: #fff;
          padding: 2px 7px;
          margin-top: 17px;
          transition: 0.5s;
          font-size: 0.7rem;
          position: absolute;
          border-radius: 12px;
          background: #1976d2;
        }

        .nav_icon {
          z-index: 10;
          font-size: 30px;
          transition: 0.5s;
          position: absolute;
        }

        &.active {
          .nav_title {
            opacity: 1;
            transform: translateY(-10px);
          }
          .nav_icon {
            font-size: 27px;
            transform: translateY(-35px);

            path {
              stroke: #1976d2;
            }
          }
        }
      }
    }
  }

  .indicator_box {
    position: absolute;
    top: -65%;
    width: 57px;
    height: 57px;
    background: #fff;
    border-radius: 50%;
    transition: 0.25s;
    box-shadow: 0 3px 5px 3px rgba(0, 0, 0, 0.15);

    .white_box {
      background: #fff;
      margin-top: 45px;
      padding: 5px;
    }

    &::before {
      content: '';
      width: 30px;
      height: 30px;
      position: absolute;
      border-radius: 50%;
      top: 0.15rem;
      left: -29px;
      background: transparent;
      box-shadow: 15px 18px #fff;
    }
    &::after {
      content: '';
      width: 30px;
      height: 30px;
      position: absolute;
      border-radius: 50%;
      top: 0.15rem;
      right: -28px;
      background: transparent;
      box-shadow: -15px 18px #fff;
    }
  }
}
</style>
