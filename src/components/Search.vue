<script></script>

<template>
 <form class="form"> 
  <input class="input" type="text">
  <input class="submit" type="submit" name="submit" value=" ">
</form>
</template>

<style lang="scss" scoped> 
.form {
  display: flex;
  gap: 26px;
  width: 100%;
  padding: 17px;
  border: 1px solid;
  border-color: $borderColor;
  border-radius: $borderRadius;
  overflow: hidden;
  background-color: $cardBackgroud;
  position: relative;
  &::before {
    content: '';
    width: 12px;
    height: 2px;
    position: absolute;
    top: 19px;
    right: 11px;
    transform: rotate(45deg);
    background-color: $lightest;
    z-index: 1;
  }
  &::after {
    content: '';
    width: 12px;
    height: 2px;
    position: absolute;
    top: 19px;
    right: 11px;
    transform: rotate(-45deg);
    background-color: $lightest;
    z-index: 1;
  }
}
.input {
  width: 100%;
  height: 36px;
  border: none;
  border-radius: $borderRadius;
  padding-left: 15px;
}
.submit {
  width: 24px;
  height: 24px;
  background-color: transparent;
  border: none;
  position: relative;
  top: -9px;
  right: -9px;
  z-index: 2;
}
</style>