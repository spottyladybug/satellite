<template>
  <a-modal
    title="Title"
    :visible="visible"
    @ok="handleOk"
    :confirmLoading="confirmLoading"
    @cancel="handleCancel"
  >
    <p>{{ModalText}}</p>
  </a-modal>
</template>
<script>
export default {
  name: "AddSatelliteModal",
  props: [ 'visible' ],
  data() {
    return {
      ModalText: "Content of the modal",
      confirmLoading: false
    };
  },
  methods: {
    handleOk() {
      this.ModalText = "The modal will be closed after two seconds";
      this.confirmLoading = true;
      setTimeout(() => {
        this.visible = false;
        this.confirmLoading = false;
      }, 2000);
    },
    handleCancel() {
      this.visible = false;
    }
  }
};
</script>