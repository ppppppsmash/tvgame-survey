export const formConfig = [
  {
    type: 'checkbox',
    label: '*どんなのジャンルが好きですか？',
    name: 'entry.1666306676',
    buttonText: 'NEXT',
    options: {
      choices: [
        'シューティング',
        'アクション',
        'パズル',
        'シミュレーション',
        'カード',
        'ロールプレイング',
        'レース',
        'スポーツ',
        'その他'
      ]
    }
  },
  {
    type: 'radio',
    label: '*イベントはどのくらい満足しましたか。',
    name: 'entry.1747016377',
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
    name: 'entry.879050699',
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
    name: 'entry.284512661',
    buttonText: 'NEXT',
    options: {
      attrs: {
        placeholder: '入力...'
      }
    }
  },
  {
    type: 'text',
    label: '名前',
    name: 'entry.1223500353',
    buttonText: 'SEND',
    options: {
      attrs: {
        placeholder: '入力...'
      }
    }
  }
]
