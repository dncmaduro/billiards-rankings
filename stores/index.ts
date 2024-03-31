import { defineStore } from "pinia";

export const useStore = defineStore("main", {
  state: () => ({
    admin: false,
  }),
  actions: {
    setAdminStatus(status: boolean) {
      this.admin = status;
    },
  },
});
