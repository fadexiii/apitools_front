<template>
  <div class="div-item">
    <div v-for="(item, index) in itemData" class="row">
      <input v-for="(val, key, i) in item" v-model="item[key]" @focus="append(index)" v-if="i !== count"/>
      <select v-model="item[lastKey]" class="select">
        <option v-for="v in selectType" :value="v"> {{v}}</option>
      </select>
      <button @click="close(index)">X</button>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      let data = JSON.parse(this.jsonData);
      data = this.pushEmpty(data);
      let count = 0;
      let lastKey = '';
      for (let v in data[0]) {
        count++;
        lastKey = v;
      }
      return {
        itemData: data,
        count: --count,
        lastKey: lastKey
      }
    },
    props: {
      jsonData: {
        required: true,
        type: String,
        validator: function (value) {
          let obj = JSON.parse(value);
          if (typeof obj === 'object' && obj) {
            return true;
          } else {
            return false;
          }
        }
      },
      selectType: {
        required: true,
        type: Array
      }
    },
    watch: {
      itemData:{
        handler:function (newVal, oldVal) {
        newVal.forEach(function (value, index) {
          let log = false;
          for (let v in value) {
            if (String.trim(value[v]) !== '') {
              log = true;
            }
          }
          if (!log) {
            newVal.pop(index);
          }
        });
        this.$emit('item-data-change', newVal);
        },
        deep: true
      }
    },
    methods: {
      show() {
      },
      append(index) {
        if (index === this.itemData.length - 1) {
          this.itemData.push({name: '', value: '', type: ''});
        }
      },
      close(index) {
        if (index !== this.itemData.length - 1) {
          this.itemData.splice(index, 1)
        }
      },
      pushEmpty(data) {
        let emptyData = {};
        for (let key in data[0]) {
          emptyData[key] = '';
        }
        data.push(emptyData);
        return data;
      }
    }
  }
</script>
<style lang="scss">
  .div-item {
    display: flex;
    flex-wrap: wrap;
    width: 80%;
    justify-content: center;
    .row {
      width: 100%;
      display: flex;
      margin-top: 1%;
      input {
        border: none;
        outline: none;
        border-bottom: solid #f1f1f1 1px;
        height: 80%;
        box-sizing: content-box;
        margin-left: 1%;
        &:focus {
          border-bottom-color: #f47023;
        }
      }
      input:first-child {
        width: 35%;
      }
      input:nth-child(#{2}) {
        width: 45%;
      }
      input:nth-child(#{3}) {
        width: 10%;
      }
      .select {
        border: none;
        outline: none;
        border-radius: 10%;
        background-color: #f0f0f0;
        margin-left: 1%;
        cursor: pointer;
        &:hover {
          color: #f47023;
        }
      }
      button {
        margin-left: 1%;
        border: none;
        border-radius: 10%;
        background-color: #f0f0f0;
        cursor: pointer;
        &:hover {
          color: #f47023;
        }
      }
    }
  }
</style>
