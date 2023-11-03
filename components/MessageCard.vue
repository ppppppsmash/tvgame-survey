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
        <p class="font-neon font-black mb-6 text-md sm:text-xl text-symbol">
          この度はゲーム会にご参加いただきありがとうございました！<br>
          楽しんでいただけましたでしょうか。
        </p>

        <p class="font-neon text-md sm:text-xl text-symbol font-black">
          皆さんからのフィードバックをもとに、今後のイベント開催の参考にさせていただきたいと思っております。<br>
          ご意見・ご感想をお聞かせくださいますようお願いします。
        </p>
      </div>
    </div>

    <div>
      <button
        class="w-[80px] h-[30px] sm:w-[100px] sm:h-[40px] bg-symbol text-white rounded-sm"
        :class="isClick ? 'focus:animate-flicker' : ''"
        type="button"
        @click="handleNext"
      >
        <span class="font-neon text-xs sm:text-sm font-black text-[#000000]">
          NEXT
        </span>
      </button>
    </div>
  </div>
</template>
