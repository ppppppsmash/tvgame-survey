import { defineStore } from 'pinia'

export const useFormStore = defineStore('form', {
  state: () => ({
    messageCheck: true,
    formCheck: false,
    rooms: [],
    roomsShow: true,
    roomsCheck: false,
    satisfaction: '',
    satisfactionCheck: false,
    feedback: '',
    feedbackCheck: false,
    event: '',
    eventCheck: false,
    name: '',
    nameCheck: false,
    progress: 1,
    hasIncremented: false
  }),
  persist: true,
  actions: {
    incrementProgress() {
      this.progress ++
    }
  }
})

export const useFormProgressStore = defineStore('progress', {
  state: () => ({
    checkboxProgress: false,
    satisfactionProgress: false,
    feedbackProgress: false,
    eventProgress: false,
    nameProgress: false
  })
})

export const useProgress = defineStore('progress', {
  state: () => ({
  })
})
