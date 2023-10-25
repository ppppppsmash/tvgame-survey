<script setup>
const loading = ref(false)

const isMessageShow = ref(true)
const handleNext = () => {
  isMessageShow.value = !isMessageShow
}

</script>

<template>
  <div v-if="isMessageShow">
    <div class="sm:py-6 mt-6 mb-10">
      <div>
        <p class="font-default font-black mb-6 text-h6 text-white">
          この度はゲーム会にご参加いただきありがとうございました！<br>
          楽しんでいただけましたでしょうか。
        </p>

        <p class="text-h6 text-white font-black">
          皆さんからのフィードバックをもとに、今後のイベント開催の参考にさせていただきたいと思っております。<br>
          ご意見・ご感想をお聞かせくださいますようお願いします。
        </p>
      </div>
    </div>

    <div>
      <NextButton
        @click="handleNext"
      />
    </div>
  </div>
</template>