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
  <div>
    <div class="sm:py-6 mt-6 mb-10">
      <div>
        <p class="font-default font-black mb-6 text-h6 text-white">
          この度はゲーム会にご参加いただきありがとうございました！<br>
          楽しんでいただけましたでしょうか。
        </p>

        <q-separator
          inset
          class="mb-4 bg-white"
        />

        <p class="text-h6 text-white font-black">
          皆さんからのフィードバックをもとに、今後のイベント開催の参考にさせていただきたいと思っております。<br>
          ご意見・ご感想をお聞かせくださいますようお願いします。
        </p>
      </div>
    </div>

    <div>
      <button
        :loading="loading"
        @click="simulateProgress"
        class="w-[70px] h-[40px] bg-white text-white rounded-none"
      >
        <span class="font-black text-primary">
          NEXT
        </span>
      </button>
    </div>
  </div>
</template>