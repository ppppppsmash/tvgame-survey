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
    type: 'checkbox',
    label: '*どのゲームをプレイしたいですか？（複数可）',
    name: 'entry.1747016377',
    buttonText: 'NEXT',
    options: {
      choices: [
        'スプラトゥーン3',
        'Dead by Daylight',
        'モンスターハンターライズ',
        'マリオカート',
        'あつまれどうぶつの森',
        'ポケットモンスター(スカーレット／バイオレット)',
        'Minecraft',
        'Eggy Party'
      ]
    }
  },
  {
    type: 'text',
    label: 'ほかにプレイしたいゲームがありましたら、記入してください.',
    name: 'entry.879050699',
    buttonText: 'NEXT',
    options: {
      attrs: {
        placeholder: '入力...'
      }
    }
  },
  // {
  //   type: 'text',
  //   label: 'その他開催してほしいイベントはありますでしょうか。',
  //   name: 'entry.284512661',
  //   buttonText: 'NEXT',
  //   options: {
  //     attrs: {
  //       placeholder: '入力...'
  //     }
  //   }
  // },
  {
    type: 'text',
    label: 'お名前',
    name: 'entry.1223500353',
    buttonText: 'SEND',
    options: {
      attrs: {
        placeholder: '入力...'
      }
    }
  }
]
