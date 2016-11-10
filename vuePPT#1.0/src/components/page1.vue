<template>
    <Row>
        <!-- part1 -->
        <i-col span="6">
          <Steps :current= "dataNum" direction="vertical">
            <a v-link="{name:'step1'}">
                <Step title="环境搭建" @click="resetNum(0)">
                </Step>
            </a>
            <a v-link="{name:'step2'}">
                <Step title="Vue-components" @click="resetNum(1)">
                </Step>
            </a>
            <a v-link="{name:'step3'}">
                <Step title="Vue-router" @click="resetNum(2)">
                </Step>
            </a>
            <a v-link="{name:'step4'}">
                <Step title="Vue-resouse" @click="resetNum(3)">
                </Step>
            </a>
            <a v-link="{name:'step5'}" class="end">
                <Step title="mock" @click="resetNum(4)">
                </Step>
            </a>
          </Steps>
        </i-col>
        <!-- part2 -->
        <i-col span="18">
            <div class="StepContent" :style="{ height: Height_ }">
                <router-view></router-view>
            </div>
        </i-col>
    </Row>
</template>
<script>
    import { Row, iCol,Steps, Step } from 'iview';
    export default {
        data () {
            return {
                dataNum: 0,
                Height_: '600px'
            }
        },
        components: { Row, iCol,Steps, Step },
        methods: {
          resetNum (num) {
            this.dataNum = num
          }
        },
        ready () {
          var getHeight = document.body.clientHeight;
          this.Height_ = getHeight + 'px';
        }
    }
</script>
<style>
  .ivu-steps .ivu-steps-head , .ivu-steps .ivu-steps-title{
    background-color: rgb(6, 217, 149);
  }
  .ivu-steps-item.ivu-steps-status-finish .ivu-steps-content, .ivu-steps-item.ivu-steps-status-finish .ivu-steps-title{
    color: #fff;
  }
  .ivu-steps-item.ivu-steps-status-process .ivu-steps-content, .ivu-steps-item.ivu-steps-status-process .ivu-steps-title{
    color: #ccc;
  }
  .ivu-steps-item.ivu-steps-status-process .ivu-steps-content, .ivu-steps-item.ivu-steps-status-process .ivu-steps-title{
    color: #fff;
  }
  .ivu-steps-item.ivu-steps-status-wait .ivu-steps-content, .ivu-steps-item.ivu-steps-status-wait .ivu-steps-title{
    color: #fff;
  }
  .ivu-steps{
    margin-left: 30%;
    margin-top: 40%;
  }
  .ivu-steps-item{
    height: 100px;
  }
  .ivu-steps .ivu-steps-head-inner{
    width: 50px;
    height: 50px;
    line-height: 50px;
  }
  .ivu-steps-vertical .ivu-steps-tail{
    left: 24px;
    height: 107%;
  }
  .ivu-steps-vertical .ivu-steps-main{
    line-height:60px;
  }
  .StepContent{
    border: 1px solid #fff;
    height: auto;
    margin-top: 5%;
    margin-right: 8%;
    background: #fff;
  }
  .ivu-steps a{
    display: block;
  }
  .ivu-steps-item:last-child .ivu-steps-tail{
    display: block;
  }
  .end .ivu-steps-tail{
    display: none !important;
  }
</style>
