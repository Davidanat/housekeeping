<template>
  <div>
    <h3 class="text-gray-700 text-3xl font-medium">Dashboard</h3>

    <div class="mt-4">
      <div class="flex flex-wrap -mx-6">
        <div class="w-full px-6 sm:w-1/2 xl:w-1/3">
          <div
            class="flex items-center px-5 py-6 shadow-sm rounded-md bg-white"
          >
            <div class="p-3 rounded-full bg-indigo-600 bg-opacity-75">
              <img
                class="h-10 w-10 rounded-full"
                src="../assets/social-group.svg"
                alt=""
              >
            </div>

            <div class="mx-5">
              <h4 class="text-2xl font-semibold text-gray-700">3</h4>
              <div class="text-gray-500">New Client</div>
            </div>
          </div>
        </div>

        <div class="w-full mt-6 px-6 sm:w-1/2 xl:w-1/3 sm:mt-0">
          <div
            class="flex items-center px-5 py-6 shadow-sm rounded-md bg-white"
          >
            <div class="p-3 rounded-full bg-orange-600 bg-opacity-75">
              <img
                class="h-10 w-10 rounded-full"
                src="../assets/setting.svg"
                alt=""
              >
            </div>

            <div class="mx-5">
              <h4 class="text-2xl font-semibold text-gray-700">8</h4>
              <div class="text-gray-500">New Orders</div>
            </div>
          </div>
        </div>

        <div class="w-full mt-6 px-6 sm:w-1/2 xl:w-1/3 xl:mt-0">
          <div
            class="flex items-center px-5 py-6 shadow-sm rounded-md bg-white"
          >
            <div class="p-3 rounded-full bg-pink-600 bg-opacity-75">
              <img
                class="h-10 w-10 rounded-full"
                src="../assets/list.svg"
                alt=""
              >
            </div>

            <div class="mx-5">
              <h4 class="text-2xl font-semibold text-gray-700">34</h4>
              <div class="text-gray-500">Total Project</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-4">
      <div class="flex flex-wrap -mx-6">
        <div class="w-full px-6 sm:w-1/2 xl:w-1/3">
          <div
            class="flex items-center px-5 py-6 shadow-sm rounded-md bg-white"
          >
            <div class="p-3 rounded-full bg-indigo-600 bg-opacity-75">
              <img
                class="h-10 w-10 rounded-full"
                src="../assets/pair-of-bills.svg"
                alt=""
              >
            </div>

            <div class="mx-5">
              <h4 class="text-2xl font-semibold text-gray-700">$2,550</h4>
              <div class="text-gray-500">Total Sales</div>
            </div>
          </div>
        </div>

        <div class="w-full mt-6 px-6 sm:w-1/2 xl:w-1/3 sm:mt-0">
          <div
            class="flex items-center px-5 py-6 shadow-sm rounded-md bg-white"
          >
            <div class="p-3 rounded-full bg-orange-600 bg-opacity-75">
              <img
                class="h-10 w-10 rounded-full"
                src="../assets/shopping-list.svg"
                alt=""
              >
            </div>

            <div class="mx-5">
              <h4 class="text-2xl font-semibold text-gray-700">$650</h4>
              <div class="text-gray-500">Total Month Sales</div>
            </div>
          </div>
        </div>

        <div class="w-full mt-6 px-6 sm:w-1/2 xl:w-1/3 xl:mt-0">
          <div
            class="flex items-center px-5 py-6 shadow-sm rounded-md bg-white"
          >
            <div class="p-3 rounded-full bg-pink-600 bg-opacity-75">
              <img
                class="h-10 w-10 rounded-full"
                src="../assets/chart.svg"
                alt=""
              >
            </div>

            <div class="mx-5">
              <h4 class="text-2xl font-semibold text-gray-700">53%</h4>
              <div class="text-gray-500">Sales Growth</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

interface User {
  name: string;
  email: string;
  title: string;
  title2: string;
  status: string;
  role: string;
}

export default defineComponent({
  setup() {
    const testUser: User = {
      name: "John Doe",
      email: "john@example.com",
      title: "Software Engineer",
      title2: "Web dev",
      status: "Active",
      role: "Owner",
    };

    const users = ref<User[]>([...Array(10).keys()].map(() => testUser));

    return {
      users,
    };
  },
});
</script>
