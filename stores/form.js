import { defineStore } from 'pinia'

export const useFormStore = defineStore('form', {
  state: () => ({
    rooms: [],
    atisfaction: '',
    feedback: '',
    event: '',
    name: ''
  })
})
