<template>
  <div class="div-page">
    <ul v-show="prePage" @click="toPerPage" class="ul-page">上一页</ul>
    <li v-for="i in showPage" v-if="i" class="li-page" :class="aClass(i)" @click="changePage(i)">{{i}}</li>
    <li v-else class="li-page">...</li>
    <ul v-show="nextPage" @click="toNextPage" class="ul-page">下一页</ul>
  </div>
</template>
<script>
  export default {
    name: 'page',
    data() {
      return {
        page: 1
      }
    },
    props: {
      total: {
        required: true,
        type: Number,
        default: 0,
        validator: function (value) {
          return value > 0
        }
      },
      count: {
        required: true,
        type: Number,
        default: 15,
        validator: function (value) {
          return value > 0
        }
      }
    },
    computed: {
      prePage: function () {
        return this.page !== 1
      },
      nextPage: function () {
        return this.page !== this.totalPage
      },
      totalPage: function () {
        return Math.ceil(this.total / this.count)
      },
      showPage: function () {
        let totalPage = this.totalPage;
        let page = this.page;

        if (totalPage <= 5) {
          return [...Array(totalPage + 1).keys()].slice(1, totalPage + 1)
        }
        if (index <= 2) {
          return [1, 2, 3, 0, totalPage]
        }
        if (index === 3) {
          return [1, 2, 3, 4, 0, totalPage]
        }
        if (index > totalPage - 2) {
          return [1, 0, totalPage - 2, totalPage - 1, totalPage]
        }
        if (index === totalPage - 2) {
          return [1, 0, totalPage - 3, totalPage - 2, totalPage - 1, totalPage]
        }
        return [1, 0, index - 1, index, index + 1, 0, totalPage]
      }
    },
    methods: {
      toPerPage() {
        this.page--;
        this.$emit('page-change', this.page)
      },
      toNextPage() {
        this.page++;
        this.$emit('page-change', this.page)
      },
      aClass(i) {
        if (i === this.page) {
          return 'current'
        } else {
          return 'not-current'
        }
      },
      changePage(i) {
        this.page = i;
        this.$emit('page-change', this.page)
      }
    }
  }
</script>
<style lang="scss">
  .div-page {
    display: flex;
    width: auto;
    justify-content: center;
    align-items: center;
    ul, li {
      cursor: pointer;
    }
  }

  .ul-page {
    padding: 0;
    background-color: #f4f4f5;
  }

  .li-page {
    list-style: none;
    margin-right: 0.5%;
    margin-left: 0.5%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1%;
  }

  .current {
    background-color: #409eff;
  }

  .not-current {
    background-color: #f4f4f5;
  }
</style>
