<script setup>
import { useFormStore } from '~/stores/form'
const formStore = useFormStore()

// const isMessageShow = ref(true)
const handleNext = () => {
  formStore.messageCheck = false
  formStore.formCheck = true
}

</script>

<template>
  <div v-if="formStore.messageCheck">
    <div class="sm:py-6 mt-6 mb-10">
      <div class="">
        <p class="font-serif font-black mb-6 text-h6 text-symbol">
          この度はゲーム会にご参加いただきありがとうございました！<br>
          楽しんでいただけましたでしょうか。
        </p>

        <p class="font-serif text-h6 text-symbol font-black">
          皆さんからのフィードバックをもとに、今後のイベント開催の参考にさせていただきたいと思っております。<br>
          ご意見・ご感想をお聞かせくださいますようお願いします。
        </p>
      </div>
    </div>

    <div>
      <NextButton
        :class="['block mx-auto']"
        @click="handleNext"
        :name="NEXT"
      />
    </div>
  </div>
</template>

<style>
.shadow-block {
  box-shadow: rgba(251, 151, 211, 0.2) 0px 12px 28px 0px, rgba(251, 151, 211, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
}

.shadow-text {
  /* text-shadow: rgba(251, 151, 211, 0.2) 0px 12px 28px 0px, rgba(251, 151, 211, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset; */
  text-shadow: 1px 1px 10px rgba(170, 51, 204, 0.7),
-1px 1px 10px rgba(170, 51, 204, 0.7),
1px -1px 10px rgba(170, 51, 204, 0.7),
-1px -1px 10px rgba(170, 51, 204, 0.7);
}
</style>