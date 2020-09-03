<template>
  <div>
    <h1>Dashboard</h1>
    <NavDashboard />
    <router-view>
      
    </router-view>
  </div>
</template>

<script>
import NavDashboard from "@/components/dashboard/NavDashboard";
export default {
  components: {
    NavDashboard
  }
};
</script>

<style>
</style>