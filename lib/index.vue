<template>
  <div>
    <md-popup
      v-model="isPopupShow"
      position="right"
    >
      <div class="md-example-popup md-example-popup-right">
        <div class="dateModel" style="height: 130px" v-for="(index, key) in itemValueCopy" :key="key">
          <div class="title">{{ index.title }}</div>
          <div class="option">
                        <span
                          class="optionList"
                          :class="index.activeName && index.activeName===index1.value?'redBackgound':''"
                          @click="dateClick(index1.value, key)"
                          v-for="(index1,key1) in index.options" :key="key1">
                            {{ index1.label }}
                        </span>
          </div>
        </div>
      </div>
      <div style="" class="btn-search">
        <md-button type="default" class="btn" style="color: #2A84F8" @click="onReset" round>重置</md-button>
        <md-button type="primary" class="btn" @click="submitList"  round>{{ btnTitle }}</md-button>
      </div>
    </md-popup>
  </div>
</template>
<script>
  import drawerMixin from './mixin/index'
  import { Dialog, Popup, RadioList, TabBar, PopupTitleBar, Toast, Button, ActivityIndicator, Icon, DatePicker, Field, FieldItem, Tabs, TabPane, Picker, ScrollView, ScrollViewRefresh, ActionBar, Check, Agree, ScrollViewMore } from 'mand-mobile'

  export default {
    name: 'screeningDrawer',
    mixins: [drawerMixin],
    components: {
      [Popup.name]: Popup,
      [Dialog.name]: Dialog,
      [PopupTitleBar.name]: PopupTitleBar,
      [Toast.name]: Toast,
      [Button.name]: Button,
      [Icon.name]: Icon,
      [DatePicker.name]: DatePicker,
      [Field.name]: Field,
      [FieldItem.name]: FieldItem,
      [Tabs.name]: Tabs,
      [TabBar.name]: TabBar,
      [TabPane.name]: TabPane,
      [Picker.name]: Picker,
      [ScrollView.name]: ScrollView,
      [ScrollViewRefresh.name]: ScrollViewRefresh,
      [ActionBar.name]: ActionBar,
      [Check.name]: Check,
      [Agree.name]: Agree,
      [ActivityIndicator.name]: ActivityIndicator,
      [ScrollViewMore.name]: ScrollViewMore,
      [RadioList.name]: RadioList
    },
    data () {
      return {
        dateList: [],
        itemValueCopy: []
      }
    },
    methods: {
      submitList () {
        let arr = []
        this.itemValueCopy.forEach(e => {
          let args = {}
          args[e.key] = e.activeName
          arr.push(args)
        })
        this.$emit('success', arr)
      },
      onReset () {

      },
      dateClick (acticeValue, key) {
        console.log(acticeValue, key)
        acticeValue !== this.itemValueCopy[key].activeName ? this.itemValueCopy[key].activeName = acticeValue : this.itemValueCopy[key].activeName = ''
      }
    },
    computed: {
    },
    mounted () {
      this.itemValueCopy = Object.assign(this.itemValue)
    }
  }
</script>
<style lang="stylus" scoped>
  .md-example-popup
    font-size 40px
    text-indent 40px
  /deep/ .md-button
    height 0.8rem
    line-height 0.8rem
    font-size 28px
  .dateModel
    width 100%
    padding 40px 0px
  .title
    font-size 26px
    color: #666
    padding-left 24px
    font-family PingFang-SC-Regular
    margin-bottom 20px
  .option
    padding 0 20px
    font-size 24px
    color: #4D4D4D
    font-family PingFang-SC-Regular
    display flex
    justify-content flex-start
    flex-wrap wrap
    margin-bottom 20px
  .optionList
    float left
    width 150px
    height 66px
    font-size 24px;
    font-family PingFang-SC-Regular;
    font-weight 400;
    text-align center
    line-height 66px
    color rgba(77,77,77,1);
    background #F6F6F6
    margin 0 20px 20px 0px
    border-radius 10px
    white-space nowrap
    overflow hidden
    text-overflow ellipsis
  .btn
    float left
    width 200px
    height 68px
    margin-left 60px
  .md-button.round:after
    border 2px solid #2A84F8
  /*弹框样式*/
  .pay-dialog
    /deep/.with-mask
      top -120px
  /deep/.md-slide-left
    background white
    padding-bottom 20px
  .btn-search
    position fixed
    bottom 0
    width 100%
    background #fff
    padding 20px 0px
    border-top: 2px solid #E5E5E1
  .redBackgound
    background #FFE4D5
    color: #FF8041
  /deep/ .md-example-popup-right{
    width: 576px;
    background: #fff;
    padding-bottom: 60px;
    text-indent: 0px;
    height 100%
  }

</style>
