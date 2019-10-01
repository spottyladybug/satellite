<template>
  <a-list
    id="satellite-list"
    itemLayout="horizontal"
    size="large"
    :pagination="pagination"
    :dataSource="listData"
  >
    <a-button
      slot="header"
      class="add-satellite-button"
      type="primary"
      shape="circle"
      icon="plus"
      size="large"
      @click="addSatellite"
    />
    <AddSatelliteModal :visible="isModalVisible" />
    <a-list-item slot="renderItem" slot-scope="item" key="item.title">
      <template slot="actions" v-for="{type} in actions">
        <span :key="type">
          <a-icon :type="type" style="margin-right: 8px" />
        </span>
      </template>
      <a-list-item-meta :description="item.description">
        <a slot="title" :href="item.href">{{item.title}}</a>
        <a-avatar slot="avatar" :src="item.avatar" />
      </a-list-item-meta>
    </a-list-item>
  </a-list>
</template>

<script>
import AddSatelliteModal from "src/components/AddSatelliteModal.vue";

const listData = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    href: "/",
    title: `Satellite ${i}`,
    avatar: "favicon.ico",
    description: `This is satellite number ${i}`,
    content: "These are satellite parameters"
  });
}
export default {
  name: "Satellites",
  components: {
    AddSatelliteModal
  },
  data() {
    return {
      isModalVisible: false,
      listData,
      pagination: {
        pageSize: 5
      },
      actions: [{ type: "edit" }, { type: "delete" }]
    };
  },
  methods: {
    addSatellite() {
      this.isModalVisible = true;
    }
  }
};
</script>
<style>
.add-satellite-button {
  float: right;
}
.ant-list-item {
  width: 100%;
}
div#satellite-list {
  height: 100%;
  width: 50%;
}
</style>