<script setup>
import { useFormStore } from '~/stores/form'
const formStore = useFormStore()

const isClick = ref(false)

// const isMessageShow = ref(true)
const handleNext = () => {
  setTimeout(() => {
    formStore.messageCheck = false
    formStore.formCheck = true
  }, 1000)
  
  isClick.value = true
}

</script>

<template>
  <div
    v-if="formStore.messageCheck"
    :class="isClick ? 'animate-slide-out-top' : ''"
  >
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
      <!-- <NextButton
        :class="['block']"
        @click="handleNext"
        :name="NEXT"
      /> -->
      <button
        class="w-[100px] h-[40px] bg-symbol text-white rounded-sm"
        :class="isClick ? 'focus:animate-flicker' : ''"
        type="button"
        @click="handleNext"
      >
        <span class="font-black text-black">
          NEXT
        </span>
      </button>
    </div>
  </div>
</template>
