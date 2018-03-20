<template>
  <div class="div-textbox">
    <textarea id="textbox"></textarea>
    <button @click="show">格式化</button>
  </div>
</template>
<script>
  import CodeMirror from 'codemirror'
  import 'codemirror/lib/codemirror.css'    // css，必要
  import 'codemirror/mode/javascript/javascript'
  import 'codemirror/addon/lint/lint.css'
  import 'codemirror/lib/codemirror.css'
  import 'codemirror/theme/rubyblue.css'
  require('script-loader!jsonlint');
  import 'codemirror/addon/lint/lint'
  import 'codemirror/addon/lint/json-lint'
  export default {
    data() {
      return {
        data: '',
        rows: 1,
        cols: 10,
        editor: ''
      }
    },
    mounted() {

      this.editor = CodeMirror.fromTextArea(document.getElementById('textbox'), {
        lineNumbers: true,
        mode: 'application/json',
        gutters: ['CodeMirror-lint-markers'],
        theme: 'rubyblue',
        lint: true
      });

    },
    watch: {
      data: function (newVal, oldVal) {
//        console.log(newVal.length / this.cols);
        this.rows = Math.ceil(newVal.length / this.cols);
      }
    },
    methods:{
        show(){
          console.log(this.editor.getValue());
          this.editor.setValue(JSON.stringify(JSON.parse(this.editor.getValue()), null, 2))
        }
    }

  }
</script>
<style lang="scss">
</style>
