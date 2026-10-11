window.PROJECTS = [
  {
    "name": "REA — AI連携リバースエンジニアリングツール",
    "url": "https://github.com/morluto/rea",
    "stars": 62056,
    "starsCheckedAt": "2026-10-10",
    "summary": "AIエージェントと連携し、アプリや実行ファイルの内部構造・動作を解析できるリバースエンジニアリングツール。",
    "description": "REAは、AIエージェントと連携し、ソースコードが公開されていないアプリや実行ファイルの内部構造・処理の流れを調査するツール。解析結果をもとに、AIエージェントが類似機能を実装する用途にも使える。\nClaude CodeやCodexなどのAIエージェントとMCP経由で連携し、JavaScript・Electron製アプリ、Webサイト、ネイティブバイナリなどの内部構造や処理の流れを解析できる。\n公式事例にはNotionのコピー処理の追跡、Chromeの恐竜ゲーム由来のブラウザ版の加速処理の調査と速度調整機能付きの再現、Windows電卓の「%」ボタンの計算処理の調査と再現がある。\n対応環境：MCP対応AIエージェント、Node.js・npm\nREAはAIエージェントに解析手段を提供する仕組みで、ネイティブバイナリの詳細解析にはGhidra・Hopper・IDAのいずれかが必要。MITライセンスで公開。",
    "environment": [
      {
        "label": "連携",
        "value": "MCP対応のAIエージェント（Claude Code・Codexなど）"
      },
      {
        "label": "実行環境",
        "value": "Node.js・npm"
      }
    ],
    "category": "開発ツール",
    "tags": [
      "AIエージェント",
      "リバースエンジニアリング",
      "MCP",
      "MIT"
    ],
    "addedAt": "2026-10-10",
    "checkedAt": "2026-10-10",
    "sources": [
      {
        "label": "公式README",
        "url": "https://github.com/morluto/rea/blob/main/README.md"
      },
      {
        "label": "公式サイト",
        "url": "https://rea.tools/"
      },
      {
        "label": "公式事例集",
        "url": "https://rea.tools/showcase/"
      },
      {
        "label": "MITライセンス",
        "url": "https://github.com/morluto/rea/blob/main/LICENSE"
      }
    ]
  },
  {
    "name": "mcopt — Apple Silicon向けMinecraft最適化MOD",
    "url": "https://github.com/noahdunnagan/mcopt",
    "stars": 431,
    "starsCheckedAt": "2026-10-10",
    "summary": "Apple Silicon搭載Macで、Minecraftの描画処理をMetalに置き換え、動作の高速化を目指す最適化MOD。",
    "description": "mcoptは、Apple Silicon搭載Mac向けのMinecraft Java Edition最適化MOD。OpenGLベースのワールド描画を独自のMetalレンダラーに置き換え、より滑らかな動作を目指す。\n対応環境：macOS 26以降、Apple Silicon、Java 25、Minecraft 26.3、Fabric Loader 0.19.5以降。描画APIはMetal 3\n公式READMEの測定では、Mac mini M4（10コアGPU・16 GB）、1920×1080、描画距離16、VSync無効の同一ワールドで、旋回時の通常版156 FPSに対しmcopt 0.3.0-alpha.1は1209〜1211 FPSだったが、すべての環境で同等の向上を保証する数値ではない。\n最新リリースは0.3.0-alpha.2のAlpha版で、バグに備えて導入前のワールドのバックアップが推奨される。Sodiumは不要かつ併用不可で、Sodium依存のMODやOpenGLを直接呼ぶMODにも互換性の制約がある。Apache License 2.0で公開。",
    "environment": [
      {
        "label": "Mac",
        "value": "macOS 26以降／Apple Silicon"
      },
      {
        "label": "ゲーム・実行環境",
        "value": "Minecraft 26.3／Java 25／Fabric Loader 0.19.5以降"
      },
      {
        "label": "描画API",
        "value": "Metal 3"
      }
    ],
    "category": "ゲーム",
    "tags": [
      "パフォーマンス最適化",
      "macOS",
      "Apple Silicon",
      "Minecraft",
      "Metal",
      "Fabric",
      "Alpha",
      "Apache-2.0"
    ],
    "addedAt": "2026-10-10",
    "checkedAt": "2026-10-10",
    "sources": [
      {
        "label": "公式README",
        "url": "https://github.com/noahdunnagan/mcopt/blob/main/README.md"
      },
      {
        "label": "公式リリース v0.3.0-alpha.2",
        "url": "https://github.com/noahdunnagan/mcopt/releases/tag/v0.3.0-alpha.2"
      }
    ]
  },
  {
    "name": "PluginKits — macOS拡張機能管理ツール",
    "url": "https://github.com/Oil3/PluginKits",
    "stars": 10,
    "starsCheckedAt": "2026-10-10",
    "summary": "macOSにインストールされた拡張機能を一覧表示・管理し、Quick Lookの競合や動作不良の解消を支援するツール。",
    "description": "PluginKitsは、macOSに登録された.appex形式の拡張機能を一覧表示・管理するツール。Quick Lookの競合を検出し、同じファイル形式に使う拡張機能を選択できる。\n拡張機能の識別子・保存場所を確認し、個別に有効化・無効化や登録・解除を行えるため、プレビュー不良の原因調査や不要な拡張機能の整理に使える。\n対応環境：macOS 13 Ventura以降、Apple Silicon・Intel Mac。macOS 14未満はGitHub ReleasesのVentura用配布版を選択\nSwift製で、公式説明ではシステム権限を要求せず、アプリの外向きネットワーク通信を無効化している。公式READMEはオープンソースと説明しているが、具体的なライセンス名は未確認。",
    "environment": [
      {
        "label": "OS",
        "value": "macOS 13 Ventura以降"
      },
      {
        "label": "CPU",
        "value": "Apple Silicon・Intel"
      },
      {
        "label": "配布版",
        "value": "macOS 14未満はGitHub ReleasesのVentura用配布版を選択"
      }
    ],
    "category": "macOS",
    "tags": [
      "システム管理",
      "ユーティリティ",
      "Quick Look",
      "拡張機能",
      "Swift"
    ],
    "addedAt": "2026-10-10",
    "checkedAt": "2026-10-10",
    "sources": [
      {
        "label": "公式README",
        "url": "https://github.com/Oil3/PluginKits/blob/oil3/README.md"
      },
      {
        "label": "公式リリース",
        "url": "https://github.com/Oil3/PluginKits/releases/tag/pluginkit-v1.0"
      }
    ]
  },
  {
    "name": "Insomnia — Macの長時間処理・省電力管理ツール",
    "url": "https://github.com/krishhgg/Insomnia",
    "stars": 143,
    "starsCheckedAt": "2026-10-10",
    "summary": "AIエージェントの長時間実行に向けて、不要なアプリの一時停止や省電力制御を行い、Macのバックグラウンド処理環境を整えるツール。",
    "description": "Insomniaは、AIエージェントなどの長時間処理に向けて、終了時刻を決めたスリープ防止と省電力制御を行うmacOSのメニューバーアプリ。蓋を閉じた状態での処理継続にも対応。\nセッション中にMacBookの蓋を閉じると、設定に応じてSlack・Discordなどのアプリを一時停止し、画面・キーボードのバックライト消灯、音声ミュート、低電力モードへの切り替えを行う。ほかのDockアプリを広く停止する設定は初期状態では無効で、設定済みのAIエージェントや保護対象のアプリは除外される。常時アプリを停止する最適化機能ではない。\nバッテリー残量や本体の温度状態に応じて、低電力モードへの移行やセッション終了を制御する。蓋を開くと一時停止したアプリや設定の復元を試み、異常終了後は保存された終了時刻を過ぎると復旧エージェントが回復を試みる。\n配布アプリはAppleの公証未取得で、初回起動はmacOSにブロックされる。Swift製でMITライセンス。蓋を閉じてもMacが動作するため、排熱できる安定した場所で使い、バッグに入れたまま使用しない。",
    "environment": [
      {
        "label": "OS・CPU",
        "value": "macOS 26以降／Apple Silicon（配布版はarm64専用）"
      },
      {
        "label": "導入条件",
        "value": "インストール時に管理者権限が必要。ソースビルドはXcode・Swift 6.2以降"
      }
    ],
    "category": "macOS",
    "tags": [
      "ユーティリティ",
      "開発支援",
      "AIエージェント",
      "省電力",
      "Swift",
      "MIT",
      "Experimental"
    ],
    "addedAt": "2026-10-10",
    "checkedAt": "2026-10-10",
    "sources": [
      {
        "label": "公式README",
        "url": "https://github.com/krishhgg/Insomnia/blob/main/README.md"
      },
      {
        "label": "公式セキュリティ資料",
        "url": "https://github.com/krishhgg/Insomnia/blob/main/SECURITY.md"
      },
      {
        "label": "MITライセンス",
        "url": "https://github.com/krishhgg/Insomnia/blob/main/LICENSE"
      }
    ]
  },
  {
    "name": "ローカルモデル診断書 — ローカルLLMの性能・回答傾向評価ツール",
    "url": "https://github.com/isichan-ai/local-model-diagnosis",
    "stars": 1,
    "starsCheckedAt": "2026-10-10",
    "summary": "ローカルLLMの性能や回答傾向を10の評価軸で測定し、モデルごとの特徴を診断書として可視化するツール。",
    "description": "ローカルモデル診断書は、手元で動かすLLMの性能と回答傾向を10の軸で評価するPython製のベンチマークツール。\nコーディング、長文読解、文章・プロンプト、画像認識などの能力に加え、正直さ、率直さ、自制心、拒否傾向、規則に従った正答率を測る。結果は漢字5文字と数字5桁の「十文字」、総合点、評価ランクにまとめられる。Ollama・llama.cpp・LM StudioなどのOpenAI互換APIへ接続し、HTMLとJSONを保存する。\n評価には大量のトークンを使い、処理時間はモデルの速度に依存する。開発者はローカルモデル専用とし、従量課金APIでの実行を避けるよう案内している。一部の採点には別の小型モデル2本を用いるため、点数はこの診断の問題・採点方法に基づく結果として扱う。リポジトリにライセンスの明示は確認できなかった。",
    "environment": [
      {
        "label": "実行環境",
        "value": "Python 3.10以降／requests・Pillow・matplotlib。採点用サーバーの自動取得先はWindows x64用で、他OSでの動作は未確認"
      },
      {
        "label": "接続・文脈長",
        "value": "OpenAI互換APIのローカルLLM環境。コンテキスト長32,768トークン以上が必要"
      },
      {
        "label": "出力・追加取得",
        "value": "HTML・JSON、ブラウザからPDF印刷。初回に採点用モデル約5.6GBとサーバーを取得"
      }
    ],
    "category": "開発ツール",
    "tags": [
      "AI",
      "ローカルLLM",
      "ベンチマーク",
      "性能評価",
      "Python",
      "Ollama",
      "LM Studio"
    ],
    "addedAt": "2026-10-10",
    "checkedAt": "2026-10-10",
    "sources": [
      {
        "label": "公式README",
        "url": "https://github.com/isichan-ai/local-model-diagnosis/blob/main/README.md"
      },
      {
        "label": "公式採点処理（対応環境・ダウンロード）",
        "url": "https://github.com/isichan-ai/local-model-diagnosis/blob/main/judges.py"
      },
      {
        "label": "公式診断処理（HTML・JSON出力）",
        "url": "https://github.com/isichan-ai/local-model-diagnosis/blob/main/%E8%A8%BA%E6%96%AD.py"
      }
    ]
  },
  {
    "name": "rirekisho — LaTeX製の履歴書作成テンプレート",
    "url": "https://github.com/jugesuke/rirekisho",
    "stars": 49,
    "starsCheckedAt": "2026-10-10",
    "summary": "厚生労働省の履歴書様式例をもとにPDFを生成し、Claude Codeとの対話で記入・修正できるLaTeXテンプレート。",
    "description": "rirekishoは、氏名・住所・学歴・職歴・資格・志望動機などをテキストで記入し、2ページの履歴書PDFを作成するLaTeXテンプレート。開発者は厚生労働省「履歴書様式例（令和3年4月）」に準拠すると説明している。\nClaude Code用の専用スキルを同梱し、対話で不足する情報を確認して、記入・修正、textlintによる文章校閲、PDF生成と出力確認を支援する。記入データはmain.tex、レイアウトはrirekisho.styで管理し、作成日を基準とした満年齢の自動計算や学歴・職歴の2ページ目への送りに対応する。\n既定の記入枠は学歴・職歴が合計22行、免許・資格が6行で、見出しや空行も行数に含まれる。超過した項目は警告なく省略され、志望動機などの長文も欄外にはみ出す場合があるため、PDFに全内容が収まっているか確認する必要がある。MITライセンスで公開。",
    "environment": [
      {
        "label": "必要ソフト",
        "value": "Docker／Node.js・npmが利用できる環境。初回に依存パッケージとDockerイメージを取得"
      },
      {
        "label": "AI連携",
        "value": "Claude Code用スキルを同梱。対話支援にはClaude Code本体と利用環境が必要"
      }
    ],
    "category": "開発ツール",
    "tags": [
      "文書作成",
      "LaTeX",
      "就職活動",
      "AIエージェント",
      "Claude Code",
      "TeX",
      "MIT"
    ],
    "addedAt": "2026-10-10",
    "checkedAt": "2026-10-10",
    "sources": [
      {
        "label": "公式README",
        "url": "https://github.com/jugesuke/rirekisho/blob/main/README.md"
      },
      {
        "label": "公式記入例",
        "url": "https://github.com/jugesuke/rirekisho/blob/main/example.tex"
      },
      {
        "label": "Claude Code専用スキル",
        "url": "https://github.com/jugesuke/rirekisho/blob/main/.claude/skills/rirekisho/SKILL.md"
      },
      {
        "label": "MITライセンス",
        "url": "https://github.com/jugesuke/rirekisho/blob/main/LICENSE"
      }
    ]
  },
  {
    "name": "Oh-my-mermaid — AI生成コードの構造可視化ツール",
    "url": "https://github.com/oh-my-mermaid/oh-my-mermaid",
    "summary": "AIエージェントでコードベースを解析し、システム構成やデータフローを階層化された図として可視化するツール。",
    "description": "Oh-my-mermaidは、既存のソースコードをAIエージェントで解析し、ソフトウェアの内部構造を図・説明文にまとめる開発支援ツール。AIが生成したコードの理解や、初めて触れるプロジェクトの構成・依存関係の把握に使える。\nClaude CodeやCodexなどでスキャン用スキルを実行し、全体のアーキテクチャ、データフロー、外部サービスとの連携などをMermaid形式の図として生成する。複雑な要素は子要素へ再帰的に分けられ、専用のインタラクティブビューアで全体構成から個別のモジュールへ展開して確認できる。\n生成物はローカルの.ommディレクトリに保存され、図・説明に加えて背景、制約、懸念、TODO、メモを持てる。設計資料の作成や共有にも利用でき、日本語READMEと生成言語の設定を備える。TypeScript製でMITライセンス。\nクラウドサービスohmymermaid.comへの保存は任意。ログインしてプロジェクトを紐付け、生成した資料をアップロードできる。公式READMEでは保存時は非公開で、チームへの共有や一般公開も可能と説明されている。\nコードの解析には対応するAIコーディングツールが必要で、Oh-my-mermaid単独で解析するわけではない。図や説明の正確性は利用者が確認する。",
    "environment": [
      {
        "label": "実行環境",
        "value": "Node.js 18以降／npm"
      },
      {
        "label": "対応AIツール",
        "value": "Claude Code／Codex／Cursor／OpenClaw／Antigravity"
      },
      {
        "label": "保存・共有",
        "value": "ローカルの.omm／任意のクラウド保存。公式READMEでは初期状態は非公開"
      }
    ],
    "category": "開発ツール",
    "tags": [
      "開発支援",
      "AIエージェント",
      "コード解析",
      "可視化",
      "Mermaid",
      "TypeScript",
      "MIT"
    ],
    "addedAt": "2026-10-11",
    "checkedAt": "2026-10-11",
    "sources": [
      {
        "label": "公式README",
        "url": "https://github.com/oh-my-mermaid/oh-my-mermaid/blob/main/README.md"
      },
      {
        "label": "日本語README",
        "url": "https://github.com/oh-my-mermaid/oh-my-mermaid/blob/main/README.ja.md"
      },
      {
        "label": "開発ロードマップ",
        "url": "https://github.com/oh-my-mermaid/oh-my-mermaid/blob/main/docs/ROADMAP.md"
      },
      {
        "label": "実行条件・パッケージ情報",
        "url": "https://github.com/oh-my-mermaid/oh-my-mermaid/blob/main/package.json"
      },
      {
        "label": "MITライセンス",
        "url": "https://github.com/oh-my-mermaid/oh-my-mermaid/blob/main/LICENSE"
      }
    ]
  },
  {
    "name": "hayamimi（早耳）— CPUで動く多言語文字起こしツール",
    "url": "https://github.com/oboroge0/hayamimi",
    "summary": "GPUやクラウドAPIを使わず、CPUで多言語音声をリアルタイムに文字起こしし、字幕表示・話者ラベル・日本語からの翻訳に対応するツール。",
    "description": "hayamimi（早耳）は、CPUだけで多言語音声をリアルタイムに文字起こしする、Python製のローカル音声認識ツール。発話ごとに言語を判定し、日本語・英語・中国語・韓国語・広東語などに応じて専用モデルを使い分ける。\n話している途中から字幕を更新し、ブラウザのダッシュボードやOBSの字幕として表示できる。話者ラベルの付与、発話の再処理による清書、日本語からの翻訳も備え、配信字幕や会議の記録に使える。WebSocket音声入力やPython APIによる外部アプリへの組み込みにも対応。\n公式READMEは日本語の発話終了後の字幕確定を約100msと説明している。性能評価資料ではテレビ放送由来の日本語音声15クリップで文字誤り率（CER）3.8%を報告しているが、開発者による特定条件の測定であり、すべての音声やPCで同じ遅延・精度を保証するものではない。\n本体コードはMITライセンス。初回にモデルダウンロードが必要で、取得するモデルには個別のライセンスが適用される。日英翻訳用のFuguMTモデルはCC BY-SA 4.0で、モデルの重みを再配布する場合の条件を公式の第三者ライセンス資料で確認する必要がある。",
    "environment": [
      {
        "label": "OS",
        "value": "Windows 11で開発・検証。macOS／Linuxは動作想定・実機確認は未実施"
      },
      {
        "label": "必要ソフト",
        "value": "Python 3.10以降／PATHに登録したffmpeg。GPU・クラウドAPIは不要"
      },
      {
        "label": "追加取得",
        "value": "モデル約3.1GB。日本語・英語の最小構成は約1.1GB。追加オプションは別途取得"
      },
      {
        "label": "メモリ",
        "value": "公式READMEは通常構成で2GB未満と説明。モデル退避による常駐数制御あり"
      }
    ],
    "category": "音声認識",
    "tags": [
      "AI",
      "リアルタイム字幕",
      "文字起こし",
      "翻訳",
      "話者識別",
      "Python",
      "CPU",
      "OBS",
      "MIT"
    ],
    "addedAt": "2026-10-11",
    "checkedAt": "2026-10-11",
    "stars": 352,
    "starsCheckedAt": "2026-10-11",
    "sources": [
      {
        "label": "公式README",
        "url": "https://github.com/oboroge0/hayamimi/blob/main/README.md"
      },
      {
        "label": "日本語README",
        "url": "https://github.com/oboroge0/hayamimi/blob/main/README.ja.md"
      },
      {
        "label": "性能評価資料",
        "url": "https://github.com/oboroge0/hayamimi/blob/main/docs/results/scorecard.md"
      },
      {
        "label": "他モデルとの比較（評価条件・更新日に注意）",
        "url": "https://github.com/oboroge0/hayamimi/blob/main/docs/results/comparison.md"
      },
      {
        "label": "本体のMITライセンス",
        "url": "https://github.com/oboroge0/hayamimi/blob/main/LICENSE"
      },
      {
        "label": "モデル別ライセンス",
        "url": "https://github.com/oboroge0/hayamimi/blob/main/THIRD_PARTY_NOTICES.md"
      }
    ]
  }
];
