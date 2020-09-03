<template>
  <div>
      <form action="/users/{{user_id}}">
      <h3>Edit User</h3>
      <div>
          <label for="user-name">Name</label>
          <input id="user-name" type="text" name="name" placeholder="Name" value="{{user.name}}">
      </div>
      
      </form>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>