<script setup>
const loading = ref(false)
const progress = ref(false)

const simulateProgress = () => {
  loading.value = true

  setTimeout(() => {
    loading.value = false
  }, 3000)
}
</script>

<template>
  <div class="mx-10">
    <div class="text-black sm:p-6 mt-6 mb-10">
      <div class="font-murecho text-lg">
        <p class="mb-6 text-body1 font-bold">
          この度はゲーム会にご参加いただきありがとうございました！<br>
          楽しんでいただけましたでしょうか。
        </p>

        <q-separator
          inset
          class="mb-4"
        />

        <p class="text-body2">
          皆さんからのフィードバックをもとに、今後のイベント開催の参考にさせていただきたいと思っております。<br>
          ご意見・ご感想をお聞かせくださいますようお願いします。
        </p>
      </div>
    </div>

    <div class="sm:mx-6">
      <q-btn
        :loading="loading"
        @click="simulateProgress"
        class="w-[140px] bg-primary text-white"
      >
        <template v-slot:loading>
          <q-spinner-hourglass class="on-left" />
          Loading...
        </template>
        次へ
      </q-btn>
    </div>
  </div>
</template>