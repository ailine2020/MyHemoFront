<template>
  <main class="main">
    <h3>Edit User</h3>
    <form action="/users/{{user_id}}">
      <div>
        <label for="user-name">Name</label>
        <input
          id="user-name"
          type="text"
          name="name"
          placeholder="Name"
          value="{{user.name}}"
        />
      </div>
    </form>
  </main>
</template>

<script>
export default {};
</script>

<style>
</style>