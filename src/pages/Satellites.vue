<template>
  <a-list
    id="satellites-list"
    itemLayout="horizontal"
    size="large"
    :pagination="pagination"
    :dataSource="listData"
  >
    <a-list-item slot="renderItem" slot-scope="item, index" key="item.title">
      <template slot="actions" v-for="{type, text} in actions">
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
  data() {
    return {
      listData,
      pagination: {
        pageSize: 5
      },
      actions: [{ type: "edit" }, { type: "delete" }]
    };
  }
};
</script>
<style>
div#satellites-list {
  height: 100%;
  width: 50%;
}
</style>