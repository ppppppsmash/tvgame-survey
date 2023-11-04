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
      <div class="mb-8">
        <p
          class="glitch relative font-neon mb-6 text-md sm:text-2xl text-symbol"
          data-text="この度はゲーム会にご参加いただきありがとうございました！"
        >
          この度はゲーム会にご参加いただきありがとうございました！
        </p>

        <p
          class="glitch relative font-neon mb-6 text-md sm:text-2xl text-symbol"
          data-text="楽しんでいただけましたでしょうか。"
        >
          楽しんでいただけましたでしょうか。
        </p>
      </div>
      <div>
        <p
          class="glitch relative font-neon text-md sm:text-2xl text-symbol"
          data-text="皆さんからのフィードバックをもとに、今後のイベント開催の参考にさせていただきたいと思っております。"
        >
          皆さんからのフィードバックをもとに、今後のイベント開催の参考にさせていただきたいと思っております。
        </p>
        <p
          class="glitch relative font-neon text-md sm:text-2xl text-symbol"
          data-text="ご意見・ご感想をお聞かせくださいますようお願いします。"
        >
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
