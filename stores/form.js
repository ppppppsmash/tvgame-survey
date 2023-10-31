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
    nameCheck: false
  }),
  persist: true
})
