<template>
  <section class="user">
    <div class="avatar__wrapper">
      <img
        alt="Фото Вашего профиля"
        src="/img/userDefault.png"
        class="avatar"
      />
    </div>
    <div class="text__wrapper">
      <h1 class="user__name">User Name</h1>
      <p class="user__info">
        There are tons of use cases from making a responsive file system all the
        way to allowing users to build their own dashboards.
      </p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.user {
  width: max(30%, 236px);
  border-radius: $borderRadius;
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
.user {
  &__name {
    font-size: 2em;
    text-align: center;
    margin: 0.75em 0;
  }
  &__info {
    text-align: center;
    font-size: 1em;
    margin: 0.5em 0;
    line-height: 1.25em;
  }
}
</style>

<script></script>
