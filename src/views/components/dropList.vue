<template>
  <div class="dropList page">
    <div class="main-wrap">
      <div class="drag-introdece">
        <span
          >Vue.Draggable：基于 Sortable.js 的 Vue 拖拽组件。 访问地址：</span
        >
        <a href="https://github.com/SortableJS/Vue.Draggable">Vue.Draggable</a>
      </div>
      <div class="drag-box">
        <div class="todo drag-box-item">
          <div class="drag-title">doing</div>
          <div class="drag-ul">
            <draggable
              v-model="todoList"
              group="item"
              animation="300"
              @add="onAdd"
            >
              <transition-group>
                <div
                  v-for="item in todoList"
                  v-bind:key="item.title"
                  class="drag-item"
                >
                  {{ item.title }}
                </div>
              </transition-group>
            </draggable>
          </div>
        </div>
        <div class="doing drag-box-item">
          <div class="drag-title">todo</div>
          <div class="drag-ul">
            <draggable
              v-model="doingList"
              group="item"
              animation="300"
              @add="onAdd"
            >
              <transition-group>
                <div
                  v-for="item in doingList"
                  v-bind:key="item.title"
                  class="drag-item"
                >
                  {{ item.title }}
                </div>
              </transition-group>
            </draggable>
          </div>
        </div>
        <div class="done drag-box-item">
          <div class="drag-title">doing</div>
          <div class="drag-ul">
            <draggable
              v-model="doneList"
              group="item"
              animation="300"
              @add="onAdd"
            >
              <transition-group>
                <div
                  v-for="item in doneList"
                  v-bind:key="item.title"
                  class="drag-item"
                >
                  {{ item.title }}
                </div>
              </transition-group>
            </draggable>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";
export default {
  name: "dropList",
  components: {
    draggable
  },
  data: function() {
    return {
      doneList: [
        {
          id: 1,
          title: "钟鼓馔玉不足贵，但愿长醉不愿醒。"
        },
        {
          id: 2,
          title: "古来圣贤皆寂寞，惟有饮者留其名。"
        },
        {
          id: 3,
          title: "陈王昔时宴平乐，斗酒十千恣欢谑。"
        },
        {
          id: 4,
          title: "主人何为言少钱，径须沽取对君酌。"
        },
        {
          id: 5,
          title: "五花马，千金裘，呼儿将出换美酒，与尔同销万古愁。"
        }
      ],
      doingList: [
        {
          id: 1,
          title: "天生我材必有用，千金散尽还复来。"
        },
        {
          id: 2,
          title: "烹羊宰牛且为乐，会须一饮三百杯。"
        },
        {
          id: 3,
          title: "岑夫子，丹丘生，将进酒，杯莫停。"
        },
        {
          id: 4,
          title: "与君歌一曲，请君为我倾耳听。"
        }
      ],
      todoList: [
        {
          id: 1,
          title: "君不见，黄河之水天上来，奔流到海不复回。"
        },
        {
          id: 2,
          title: "君不见，高堂明镜悲白发，朝如青丝暮成雪。"
        },
        {
          id: 3,
          title: "人生得意须尽欢，莫使金樽空对月。"
        }
      ]
    };
  },
  methods: {
    onAdd(ev) {
      // console.log(ev)
      ev.from.removeChild(ev.item);
    }
  }
};
</script>

<style lang="scss">
.dropList {
  padding: 10px;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
}
.main-wrap {
  padding: 30px;
  background: #fff;
  border-radius: 5px;
  border: 1px solid #ddd;
  box-sizing: border-box;

  .drag-box {
    display: flex;
    user-select: none;
    box-sizing: border-box;
    width: 100%;
    .drag-box-item {
      flex: 1;
      width: 30%;
      background-color: #eff1f5;
      margin-right: 16px;
      border-radius: 6px;
      border: 1px #e1e4e8 solid;
      height: 100%;
      .drag-ul {
        min-height: 400px;
        div span {
          display: block;
          min-height: 400px;
        }
      }
      .drag-title {
        padding: 8px 8px 8px 12px;
        font-size: 14px;
        line-height: 1.5;
        color: #24292e;
        font-weight: 600;
      }
      .drag-item {
        border: 1px #e1e4e8 solid;
        font-size: 14px;
        padding: 10px;
        margin: 5px 0 10px;
        list-style: none;
        background-color: #fff;
        border-radius: 6px;
        cursor: pointer;
        -webkit-transition: border 0.3s ease-in;
        transition: border 0.3s ease-in;
        text-align: center;
      }
    }
  }
  .drag-introdece {
    border: 1px #e1e4e8 solid;
    font-size: 14px;
    padding: 10px;
    margin: 5px 0 10px;
    list-style: none;
    background-color: #eff1f5;
    border-radius: 6px;
    a {
      color: skyblue;
    }
  }
}
</style>
