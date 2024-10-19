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
          class="animate-analog relative font-neon mb-6 text-md sm:text-2xl text-symbol"
          data-text="開催予定であるゲーム会のためのアンケートとなります。"
        >
          開催予定であるゲーム会のためのアンケートとなります。
        </p>

        <p
          class="animate-analog relative font-neon mb-6 text-md sm:text-2xl text-symbol"
          data-text="日程の決定と参加意向アンケートにつきましては、"
        >
          日程の決定と参加意向アンケートにつきましては、
        </p>
      </div>
      <div>
        <p
          class="animate-analog relative font-neon text-md sm:text-2xl text-symbol"
          data-text="また後日ご用意いたします。"
        >
        また後日ご用意いたします。
        </p>
        <p
          class="animate-analog relative font-neon text-md sm:text-2xl text-symbol"
          data-text="ご意見をお聞かせくださいますようお願いします。"
        >
          ご意見をお聞かせくださいますようお願いします。
        </p>
      </div>
    </div>

    <div>
      <button
        class="w-[80px] h-[30px] sm:w-[100px] sm:h-[40px] bg-symbol text-white rounded-sm focus:scale-[0.95]"
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
