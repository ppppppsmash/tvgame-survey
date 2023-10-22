<script setup>
const form = ref({
  rooms: [],
  like: '',
  feedback: '',
  event: '',
  name: ''
})
</script>

<template>
  <q-layout
    view="hHh lpR fFf"
  >
    <q-page-container>
      <div class="q-pa-md">
        <h4 class="text-h6 font-murecho flex items-end">
          どの部屋で遊びましたか？
          <p class="text-sm flex items-center"><span class="text-required block font-murecho text-lg">*</span>複数回答可</p>
        </h4>
        <div class="mt-4">
          <q-checkbox
            size="md"
            val="マリオカート部屋"
            label="マリオカート部屋"
            color="primary"
            v-model="form.rooms"
          />
          <q-checkbox
            size="md"
            val="スマブラ（ガチ部屋）"
            label="スマブラ（ガチ部屋）"
            color="primary"
            v-model="form.rooms"
          />
          <q-checkbox
            size="md"
            val="スマブラ（エンジョイ部屋）"
            label="スマブラ（エンジョイ部屋）"
            color="primary"
            v-model="form.rooms"
          />
          <q-checkbox
            size="md"
            val="マリオパーティー部屋"
            label="マリオパーティー部屋"
            color="primary"
            v-model="form.rooms"
          />
        </div>
      </div>

      <div class="q-pa-md">
        <h4 class="text-h6 font-murecho flex items-end">
          イベントはどのくらい満足しましたか？
          <p class="text-sm flex items-center"><span class="text-required block font-murecho text-lg">*</span>必須</p>
        </h4>

        <div class="mt-4">
          <q-radio
            val="1"
            label="1"
            v-model="form.like"
          />
          <q-radio
            val="2"
            label="2"
            v-model="form.like"
          />
          <q-radio
            val="3"
            label="3"
            v-model="form.like"
          />
          <q-radio
            val="4"
            label="4"
            v-model="form.like"
          />
          <q-radio
            val="5"
            label="5"
            v-model="form.like"
          />
        </div>
      </div>

      <div class="q-pa-md">
        <h4 class="text-h6 font-murecho flex items-end">
          イベント全体についてのフィードバックがありましたら、記入お願いします。
        </h4>

        <div class="mt-4">
          <q-input
            color="primary"
            filled
            label="こちらから入力してください."
            v-model="form.feedback"
          />
        </div>
      </div>

      <div class="q-pa-md">
        <h4 class="text-h6 font-murecho flex items-end">
          その他開催してほしいイベントはありますでしょうか？
        </h4>

        <div class="mt-4">
          <q-input
            color="primary"
            filled
            label="こちらから入力してください."
            v-model="form.event"
          />
        </div>
      </div>

      <div class="q-pa-md">
        <h4 class="text-h6 font-murecho flex items-end">
          名前
          <p class="text-sm flex items-center">（省略可）</p>
        </h4>

        <div class="mt-4">
          <q-input
            color="primary"
            filled
            label="こちらから入力してください."
            v-model="form.name"
          />
        </div>
      </div>
    </q-page-container>
  </q-layout>
</template>