<script setup>
import { useNaiveForm, ref } from "#imports"

const model = ref({
    // email: "bcem.sd@gls.cp",
    // password: "qsd",
})

const { formRef, rules, pending, apiErrors, edited, reset, onSubmit } = useNaiveForm(model)

apiErrors.value = {
  wrongCredentials: false,
  invalidProvider: false,
  accountNotVerified: false,
  accountSuspended: false
}

rules.value = {
  email: [
    {
      required: true,
      message: "Please input your email",
      trigger: "blur",
    },
    {
      message: "Wrong credentials",
      validator: () => !apiErrors.value.wrongCredentials
    },
    {
      message: "Your account is not verified",
      validator: () => !apiErrors.value.accountNotVerified
    },
    {
      message: "Your account is suspended",
      validator: () => !apiErrors.value.accountSuspended
    }
  ],
  password: [
    {
      required: true,
      message: "Please input your password",
      trigger: "blur",
    },
  ],
}

async function handleSubmit() {
  await $fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: {
        title: 'foo',
        body: 'bar',
        userId: 1,
    }
  })
}
</script>

<template>
  <n-form
    ref="formRef"
    :rules="rules"
    :model="model"
    @submit.prevent="() => onSubmit(handleSubmit)"
  >
    <n-gradient-text
      class="sm:text-2xl text-primary mb-4"
    >
      どの部屋で遊びましたか。（複数回答可）
    </n-gradient-text>

    <n-checkbox-group>
      <n-grid :y-gap="8" :cols="1">
        <n-gi>
          <n-checkbox
            value="マリオカート部屋"
            label="マリオカート部屋"
          />
        </n-gi>
        <n-gi>
          <n-checkbox
            value="スマブラ（ガチ部屋）"
            label="スマブラ（ガチ部屋）"
          />
        </n-gi>
        <n-gi>
          <n-checkbox
            value="スマブラ（エンジョイ部屋）"
            label="スマブラ（エンジョイ部屋）"
          />
        </n-gi>
        <n-gi>
          <n-checkbox
            value="マリオパーティー部屋"
            label="マリオパーティー部屋"
          />
        </n-gi>
      </n-grid>
    </n-checkbox-group>
  </n-form>
</template>