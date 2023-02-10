<template>
  <aside class="aside">
    <div class="avatar__wrapper">
      <img
        alt="Фото Вашего профиля"
        src="/img/userDefault.png"
        class="avatar"
      />
    </div>
    <div class="text__wrapper">
      <h1 class="user__name">User Name</h1>
      <p class="user__info">Bottom text...</p>
    </div>
  </aside>
</template>

<style lang="scss" scoped>
.aside {
  width: max(30%, 236px);
  border-radius: $borderRadius;
  margin-right: 10px;
  padding: 18px 14px;
  border: 1px solid $borderColor;
  background-color: $cardBackgroud;
}
.avatar {
  &__wrapper {
    border: 1px solid $borderColor;
    border-radius: $borderRadius;
    width: 208px;
    height: 240px;
  }
}
</style>

<script></script>
