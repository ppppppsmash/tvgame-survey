export const formConfig = [
  {
    type: 'checkbox',
    label: 'どの部屋で遊びましたか？',
    name: '',
    buttonText: 'NEXT',
    options: {
      choices: [
        'マリオカート部屋',
        'スマブラ（ガチ部屋）',
        'スマブラ（エンジョイ部屋）',
        'マリオパーティー部屋'
      ]
    }
  },
  {
    type: 'radio',
    label: 'イベントはどのくらい満足しましたか。',
    name: '',
    buttonText: 'NEXT',
    options: {
      choices: [
        '1',
        '2',
        '3',
        '4',
        '5'
      ]
    }
  },
  {
    type: 'text',
    label: 'イベント全体についてのフィードバックがありましたら、記入お願いします。',
    name: '',
    buttonText: 'NEXT',
    options: {
      attrs: {
        placeholder: '入力...'
      }
    }
  },
  {
    type: 'text',
    label: 'その他開催してほしいイベントはありますでしょうか。',
    name: '',
    buttonText: 'NEXT',
    options: {
      attrs: {
        placeholder: '入力...'
      }
    }
  },
  {
    type: 'text',
    label: '名前（省略可）',
    name: '',
    buttonText: 'NEXT',
    options: {
      attrs: {
        placeholder: '入力...'
      }
    }
  }
]
