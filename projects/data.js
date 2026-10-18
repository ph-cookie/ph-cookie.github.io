window.PROJECTS = [
  {
    "name": "REA — AI連携リバースエンジニアリングツール",
    "url": "https://github.com/morluto/rea",
    "stars": 62056,
    "starsCheckedAt": "2026-10-10",
    "summary": "AIエージェントと連携し、アプリや実行ファイルの内部構造・動作を解析できるリバースエンジニアリングツール。",
    "description": "REAは、AIエージェントと連携し、ソースコードが公開されていないアプリや実行ファイルの内部構造・処理の流れを調査するツール。解析結果をもとに、AIエージェントが類似機能を実装する用途にも使える。\nClaude CodeやCodexなどのAIエージェントとMCP経由で連携し、JavaScript・Electron製アプリ、Webサイト、ネイティブバイナリなどの内部構造や処理の流れを解析できる。\n公式事例にはNotionのコピー処理の追跡、Chromeの恐竜ゲーム由来のブラウザ版の加速処理の調査と速度調整機能付きの再現、Windows電卓の「%」ボタンの計算処理の調査と再現がある。\n対応環境：MCP対応AIエージェント、Node.js・npm\nREAはAIエージェントに解析手段を提供する仕組みで、ネイティブバイナリの詳細解析にはGhidra・Hopper・IDAのいずれかが必要。MITライセンスで公開。\n※Claude CodeやCodexでREAを利用したユーザが、利用規約違反としてアカウント削除される事案が確認されています。利用には注意しましょう。",
    "environment": [
      {
        "label": "AIツール",
        "value": "MCP対応のAIエージェント（Claude Code・Codexなど）",
        "key": "agent",
        "scope": "basic",
        "level": "required",
        "status": "documented",
        "brief": "MCP対応AIエージェント",
        "group": "requirements",
        "order": 5,
        "stateLabel": "",
        "scopeLabel": "",
        "levelLabel": "必須"
      },
      {
        "label": "実行環境",
        "value": "Node.js・npm",
        "key": "runtime",
        "scope": "basic",
        "level": "required",
        "status": "documented",
        "brief": "Node.js・npm",
        "group": "requirements",
        "order": 6,
        "stateLabel": "",
        "scopeLabel": "",
        "levelLabel": "必須"
      },
      {
        "key": "license",
        "label": "ライセンス",
        "scope": "basic",
        "level": "info",
        "status": "documented",
        "value": "MIT",
        "group": "licenses",
        "order": 22,
        "stateLabel": "",
        "scopeLabel": "",
        "levelLabel": ""
      }
    ],
    "category": "コード解析",
    "tags": [
      "AIエージェント",
      "リバースエンジニアリング",
      "MCP",
      "MIT"
    ],
    "addedAt": "2026-10-10",
    "checkedAt": "2026-10-14",
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
    ],
    "related": [
      {
        "label": "ソースコードのあるプロジェクトを図で把握したい",
        "url": "https://github.com/oh-my-mermaid/oh-my-mermaid"
      }
    ],
    "environmentVersion": 1,
    "requirementsStatus": "documented",
    "presentation": {
      "groups": [
        {
          "key": "requirements",
          "label": "利用条件",
          "rows": [
            {
              "label": "AIツール",
              "value": "MCP対応のAIエージェント（Claude Code・Codexなど）",
              "key": "agent",
              "scope": "basic",
              "level": "required",
              "status": "documented",
              "brief": "MCP対応AIエージェント",
              "group": "requirements",
              "order": 5,
              "stateLabel": "",
              "scopeLabel": "",
              "levelLabel": "必須"
            },
            {
              "label": "実行環境",
              "value": "Node.js・npm",
              "key": "runtime",
              "scope": "basic",
              "level": "required",
              "status": "documented",
              "brief": "Node.js・npm",
              "group": "requirements",
              "order": 6,
              "stateLabel": "",
              "scopeLabel": "",
              "levelLabel": "必須"
            }
          ]
        },
        {
          "key": "licenses",
          "label": "ライセンス",
          "rows": [
            {
              "key": "license",
              "label": "ライセンス",
              "scope": "basic",
              "level": "info",
              "status": "documented",
              "value": "MIT",
              "group": "licenses",
              "order": 22,
              "stateLabel": "",
              "scopeLabel": "",
              "levelLabel": ""
            }
          ]
        }
      ],
      "overview": {
        "label": "利用条件",
        "value": "AIツール：MCP対応AIエージェント ／ 実行環境：Node.js・npm",
        "lines": [
          "AIツール：MCP対応AIエージェント",
          "実行環境：Node.js・npm"
        ],
        "remaining": 0
      }
    }
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
        "label": "OS・CPU",
        "value": "macOS 26以降／Apple Silicon",
        "key": "platform",
        "scope": "basic",
        "level": "required",
        "status": "documented",
        "group": "requirements",
        "order": 0,
        "stateLabel": "",
        "scopeLabel": "",
        "levelLabel": "必須"
      },
      {
        "label": "実行環境",
        "value": "Minecraft 26.3／Java 25／Fabric Loader 0.19.5以降",
        "key": "runtime",
        "scope": "basic",
        "level": "required",
        "status": "documented",
        "brief": "Minecraft 26.3／Java 25／Fabric Loader 0.19.5以降",
        "group": "requirements",
        "order": 6,
        "stateLabel": "",
        "scopeLabel": "",
        "levelLabel": "必須"
      },
      {
        "label": "描画API",
        "value": "Metal 3",
        "key": "graphics",
        "scope": "basic",
        "level": "required",
        "status": "documented",
        "group": "requirements",
        "order": 12,
        "stateLabel": "",
        "scopeLabel": "",
        "levelLabel": "必須"
      },
      {
        "key": "license",
        "label": "ライセンス",
        "scope": "basic",
        "level": "info",
        "status": "documented",
        "value": "Apache License 2.0",
        "group": "licenses",
        "order": 22,
        "stateLabel": "",
        "scopeLabel": "",
        "levelLabel": ""
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
    ],
    "environmentVersion": 1,
    "requirementsStatus": "documented",
    "presentation": {
      "groups": [
        {
          "key": "requirements",
          "label": "利用条件",
          "rows": [
            {
              "label": "OS・CPU",
              "value": "macOS 26以降／Apple Silicon",
              "key": "platform",
              "scope": "basic",
              "level": "required",
              "status": "documented",
              "group": "requirements",
              "order": 0,
              "stateLabel": "",
              "scopeLabel": "",
              "levelLabel": "必須"
            },
            {
              "label": "実行環境",
              "value": "Minecraft 26.3／Java 25／Fabric Loader 0.19.5以降",
              "key": "runtime",
              "scope": "basic",
              "level": "required",
              "status": "documented",
              "brief": "Minecraft 26.3／Java 25／Fabric Loader 0.19.5以降",
              "group": "requirements",
              "order": 6,
              "stateLabel": "",
              "scopeLabel": "",
              "levelLabel": "必須"
            },
            {
              "label": "描画API",
              "value": "Metal 3",
              "key": "graphics",
              "scope": "basic",
              "level": "required",
              "status": "documented",
              "group": "requirements",
              "order": 12,
              "stateLabel": "",
              "scopeLabel": "",
              "levelLabel": "必須"
            }
          ]
        },
        {
          "key": "licenses",
          "label": "ライセンス",
          "rows": [
            {
              "key": "license",
              "label": "ライセンス",
              "scope": "basic",
              "level": "info",
              "status": "documented",
              "value": "Apache License 2.0",
              "group": "licenses",
              "order": 22,
              "stateLabel": "",
              "scopeLabel": "",
              "levelLabel": ""
            }
          ]
        }
      ],
      "overview": {
        "label": "利用条件",
        "value": "OS・CPU：macOS 26以降／Apple Silicon ／ 実行環境：Minecraft 26.3／Java 25／Fabric Loader 0.19.5以降",
        "lines": [
          "OS・CPU：macOS 26以降／Apple Silicon",
          "実行環境：Minecraft 26.3／Java 25／Fabric Loader 0.19.5以降"
        ],
        "remaining": 1
      }
    }
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
        "value": "macOS 13 Ventura以降",
        "key": "os",
        "scope": "basic",
        "level": "required",
        "status": "documented",
        "group": "requirements",
        "order": 1,
        "stateLabel": "",
        "scopeLabel": "",
        "levelLabel": "必須"
      },
      {
        "label": "CPU",
        "value": "Apple Silicon・Intel",
        "key": "cpu",
        "scope": "basic",
        "level": "required",
        "status": "documented",
        "group": "requirements",
        "order": 2,
        "stateLabel": "",
        "scopeLabel": "",
        "levelLabel": "必須"
      },
      {
        "label": "配布版の条件",
        "value": "macOS 14未満はGitHub ReleasesのVentura用配布版を選択",
        "key": "distribution",
        "scope": "basic",
        "level": "info",
        "status": "documented",
        "group": "requirements",
        "order": 11,
        "stateLabel": "",
        "scopeLabel": "",
        "levelLabel": ""
      },
      {
        "key": "license",
        "label": "ライセンス",
        "scope": "basic",
        "level": "info",
        "status": "unverified",
        "value": "具体的なライセンス名は未確認",
        "group": "licenses",
        "order": 22,
        "stateLabel": "未確認",
        "scopeLabel": "",
        "levelLabel": ""
      }
    ],
    "category": "PC環境管理",
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
    ],
    "environmentVersion": 1,
    "requirementsStatus": "documented",
    "presentation": {
      "groups": [
        {
          "key": "requirements",
          "label": "利用条件",
          "rows": [
            {
              "label": "OS",
              "value": "macOS 13 Ventura以降",
              "key": "os",
              "scope": "basic",
              "level": "required",
              "status": "documented",
              "group": "requirements",
              "order": 1,
              "stateLabel": "",
              "scopeLabel": "",
              "levelLabel": "必須"
            },
            {
              "label": "CPU",
              "value": "Apple Silicon・Intel",
              "key": "cpu",
              "scope": "basic",
              "level": "required",
              "status": "documented",
              "group": "requirements",
              "order": 2,
              "stateLabel": "",
              "scopeLabel": "",
              "levelLabel": "必須"
            },
            {
              "label": "配布版の条件",
              "value": "macOS 14未満はGitHub ReleasesのVentura用配布版を選択",
              "key": "distribution",
              "scope": "basic",
              "level": "info",
              "status": "documented",
              "group": "requirements",
              "order": 11,
              "stateLabel": "",
              "scopeLabel": "",
              "levelLabel": ""
            }
          ]
        },
        {
          "key": "licenses",
          "label": "ライセンス",
          "rows": [
            {
              "key": "license",
              "label": "ライセンス",
              "scope": "basic",
              "level": "info",
              "status": "unverified",
              "value": "具体的なライセンス名は未確認",
              "group": "licenses",
              "order": 22,
              "stateLabel": "未確認",
              "scopeLabel": "",
              "levelLabel": ""
            }
          ]
        }
      ],
      "overview": {
        "label": "利用条件",
        "value": "OS：macOS 13 Ventura以降 ／ CPU：Apple Silicon・Intel",
        "lines": [
          "OS：macOS 13 Ventura以降",
          "CPU：Apple Silicon・Intel"
        ],
        "remaining": 1
      }
    }
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
        "value": "macOS 26以降／Apple Silicon（配布版はarm64専用）",
        "key": "platform",
        "scope": "basic",
        "level": "required",
        "status": "documented",
        "group": "requirements",
        "order": 0,
        "stateLabel": "",
        "scopeLabel": "",
        "levelLabel": "必須"
      },
      {
        "label": "導入条件",
        "value": "インストール時に管理者権限が必要。",
        "key": "installation",
        "scope": "basic",
        "level": "required",
        "status": "documented",
        "brief": "インストール時に管理者権限が必要",
        "group": "requirements",
        "order": 10,
        "stateLabel": "",
        "scopeLabel": "",
        "levelLabel": "必須"
      },
      {
        "key": "runtime",
        "label": "実行環境",
        "scope": "ソースビルド",
        "level": "required",
        "status": "documented",
        "value": "ソースビルドはXcode・Swift 6.2以降",
        "group": "requirements",
        "order": 6,
        "stateLabel": "",
        "scopeLabel": "ソースビルド",
        "levelLabel": "必須"
      },
      {
        "key": "license",
        "label": "ライセンス",
        "scope": "basic",
        "level": "info",
        "status": "documented",
        "value": "MIT",
        "group": "licenses",
        "order": 22,
        "stateLabel": "",
        "scopeLabel": "",
        "levelLabel": ""
      }
    ],
    "category": "PC環境管理",
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
    ],
    "environmentVersion": 1,
    "requirementsStatus": "documented",
    "presentation": {
      "groups": [
        {
          "key": "requirements",
          "label": "利用条件",
          "rows": [
            {
              "label": "OS・CPU",
              "value": "macOS 26以降／Apple Silicon（配布版はarm64専用）",
              "key": "platform",
              "scope": "basic",
              "level": "required",
              "status": "documented",
              "group": "requirements",
              "order": 0,
              "stateLabel": "",
              "scopeLabel": "",
              "levelLabel": "必須"
            },
            {
              "label": "導入条件",
              "value": "インストール時に管理者権限が必要。",
              "key": "installation",
              "scope": "basic",
              "level": "required",
              "status": "documented",
              "brief": "インストール時に管理者権限が必要",
              "group": "requirements",
              "order": 10,
              "stateLabel": "",
              "scopeLabel": "",
              "levelLabel": "必須"
            },
            {
              "key": "runtime",
              "label": "実行環境",
              "scope": "ソースビルド",
              "level": "required",
              "status": "documented",
              "value": "ソースビルドはXcode・Swift 6.2以降",
              "group": "requirements",
              "order": 6,
              "stateLabel": "",
              "scopeLabel": "ソースビルド",
              "levelLabel": "必須"
            }
          ]
        },
        {
          "key": "licenses",
          "label": "ライセンス",
          "rows": [
            {
              "key": "license",
              "label": "ライセンス",
              "scope": "basic",
              "level": "info",
              "status": "documented",
              "value": "MIT",
              "group": "licenses",
              "order": 22,
              "stateLabel": "",
              "scopeLabel": "",
              "levelLabel": ""
            }
          ]
        }
      ],
      "overview": {
        "label": "利用条件",
        "value": "OS・CPU：macOS 26以降／Apple Silicon（配布版はarm64専用） ／ 導入条件：インストール時に管理者権限が必要",
        "lines": [
          "OS・CPU：macOS 26以降／Apple Silicon（配布版はarm64専用）",
          "導入条件：インストール時に管理者権限が必要"
        ],
        "remaining": 1
      }
    }
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
        "value": "Python 3.10以降／requests・Pillow・matplotlib。採点用サーバーの自動取得先はWindows x64用で、他OSでの動作は未確認",
        "key": "runtime",
        "scope": "basic",
        "level": "required",
        "status": "documented",
        "brief": "Python 3.10以降（採点サーバーの自動取得先はWindows x64用、他OS未確認）",
        "group": "requirements",
        "order": 6,
        "stateLabel": "",
        "scopeLabel": "",
        "levelLabel": "必須"
      },
      {
        "label": "接続条件",
        "value": "OpenAI互換APIのローカルLLM環境。コンテキスト長32,768トークン以上が必要",
        "key": "api",
        "scope": "basic",
        "level": "required",
        "status": "documented",
        "brief": "OpenAI互換APIのローカルLLM／32,768トークン以上",
        "group": "requirements",
        "order": 8,
        "stateLabel": "",
        "scopeLabel": "",
        "levelLabel": "必須"
      },
      {
        "key": "download",
        "label": "追加ダウンロード",
        "scope": "初回利用",
        "level": "required",
        "status": "documented",
        "value": "初回に採点用モデル約5.6GBとサーバーを取得",
        "group": "requirements",
        "order": 13,
        "stateLabel": "",
        "scopeLabel": "初回利用",
        "levelLabel": "必須"
      },
      {
        "label": "形式・出力",
        "value": "HTML・JSON、ブラウザからPDF印刷。",
        "key": "format",
        "scope": "basic",
        "level": "info",
        "status": "documented",
        "group": "specifications",
        "order": 17,
        "stateLabel": "",
        "scopeLabel": "",
        "levelLabel": ""
      },
      {
        "key": "license",
        "label": "ライセンス",
        "scope": "basic",
        "level": "info",
        "status": "notSpecified",
        "value": "リポジトリ全体のライセンス明示を確認できず",
        "group": "licenses",
        "order": 22,
        "stateLabel": "記載なし",
        "scopeLabel": "",
        "levelLabel": ""
      }
    ],
    "category": "AIモデル活用",
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
    ],
    "related": [
      {
        "label": "APIで使うモデルを選びたい",
        "url": "https://github.com/OpenRouterTeam/skills"
      }
    ],
    "environmentVersion": 1,
    "requirementsStatus": "documented",
    "presentation": {
      "groups": [
        {
          "key": "requirements",
          "label": "利用条件",
          "rows": [
            {
              "label": "実行環境",
              "value": "Python 3.10以降／requests・Pillow・matplotlib。採点用サーバーの自動取得先はWindows x64用で、他OSでの動作は未確認",
              "key": "runtime",
              "scope": "basic",
              "level": "required",
              "status": "documented",
              "brief": "Python 3.10以降（採点サーバーの自動取得先はWindows x64用、他OS未確認）",
              "group": "requirements",
              "order": 6,
              "stateLabel": "",
              "scopeLabel": "",
              "levelLabel": "必須"
            },
            {
              "label": "接続条件",
              "value": "OpenAI互換APIのローカルLLM環境。コンテキスト長32,768トークン以上が必要",
              "key": "api",
              "scope": "basic",
              "level": "required",
              "status": "documented",
              "brief": "OpenAI互換APIのローカルLLM／32,768トークン以上",
              "group": "requirements",
              "order": 8,
              "stateLabel": "",
              "scopeLabel": "",
              "levelLabel": "必須"
            },
            {
              "key": "download",
              "label": "追加ダウンロード",
              "scope": "初回利用",
              "level": "required",
              "status": "documented",
              "value": "初回に採点用モデル約5.6GBとサーバーを取得",
              "group": "requirements",
              "order": 13,
              "stateLabel": "",
              "scopeLabel": "初回利用",
              "levelLabel": "必須"
            }
          ]
        },
        {
          "key": "specifications",
          "label": "仕様・出力",
          "rows": [
            {
              "label": "形式・出力",
              "value": "HTML・JSON、ブラウザからPDF印刷。",
              "key": "format",
              "scope": "basic",
              "level": "info",
              "status": "documented",
              "group": "specifications",
              "order": 17,
              "stateLabel": "",
              "scopeLabel": "",
              "levelLabel": ""
            }
          ]
        },
        {
          "key": "licenses",
          "label": "ライセンス",
          "rows": [
            {
              "key": "license",
              "label": "ライセンス",
              "scope": "basic",
              "level": "info",
              "status": "notSpecified",
              "value": "リポジトリ全体のライセンス明示を確認できず",
              "group": "licenses",
              "order": 22,
              "stateLabel": "記載なし",
              "scopeLabel": "",
              "levelLabel": ""
            }
          ]
        }
      ],
      "overview": {
        "label": "利用条件",
        "value": "実行環境：Python 3.10以降（採点サーバーの自動取得先はWindows x64用、他OS未確認） ／ 接続条件：OpenAI互換APIのローカルLLM／32,768トークン以上",
        "lines": [
          "実行環境：Python 3.10以降（採点サーバーの自動取得先はWindows x64用、他OS未確認）",
          "接続条件：OpenAI互換APIのローカルLLM／32,768トークン以上"
        ],
        "remaining": 1
      }
    }
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
        "value": "Docker／Node.js・npmが利用できる環境。初回に依存パッケージとDockerイメージを取得",
        "key": "dependencies",
        "scope": "basic",
        "level": "required",
        "status": "documented",
        "brief": "Docker／Node.js・npm",
        "group": "requirements",
        "order": 7,
        "stateLabel": "",
        "scopeLabel": "",
        "levelLabel": "必須"
      },
      {
        "label": "AIツール",
        "value": "Claude Code用スキルを同梱。対話支援にはClaude Code本体と利用環境が必要",
        "key": "agent",
        "scope": "対話支援",
        "level": "required",
        "status": "documented",
        "group": "requirements",
        "order": 5,
        "stateLabel": "",
        "scopeLabel": "対話支援",
        "levelLabel": "必須"
      },
      {
        "key": "license",
        "label": "ライセンス",
        "scope": "basic",
        "level": "info",
        "status": "documented",
        "value": "MIT",
        "group": "licenses",
        "order": 22,
        "stateLabel": "",
        "scopeLabel": "",
        "levelLabel": ""
      }
    ],
    "category": "文書作成・推敲",
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
    ],
    "environmentVersion": 1,
    "requirementsStatus": "documented",
    "presentation": {
      "groups": [
        {
          "key": "requirements",
          "label": "利用条件",
          "rows": [
            {
              "label": "必要ソフト",
              "value": "Docker／Node.js・npmが利用できる環境。初回に依存パッケージとDockerイメージを取得",
              "key": "dependencies",
              "scope": "basic",
              "level": "required",
              "status": "documented",
              "brief": "Docker／Node.js・npm",
              "group": "requirements",
              "order": 7,
              "stateLabel": "",
              "scopeLabel": "",
              "levelLabel": "必須"
            },
            {
              "label": "AIツール",
              "value": "Claude Code用スキルを同梱。対話支援にはClaude Code本体と利用環境が必要",
              "key": "agent",
              "scope": "対話支援",
              "level": "required",
              "status": "documented",
              "group": "requirements",
              "order": 5,
              "stateLabel": "",
              "scopeLabel": "対話支援",
              "levelLabel": "必須"
            }
          ]
        },
        {
          "key": "licenses",
          "label": "ライセンス",
          "rows": [
            {
              "key": "license",
              "label": "ライセンス",
              "scope": "basic",
              "level": "info",
              "status": "documented",
              "value": "MIT",
              "group": "licenses",
              "order": 22,
              "stateLabel": "",
              "scopeLabel": "",
              "levelLabel": ""
            }
          ]
        }
      ],
      "overview": {
        "label": "利用条件",
        "value": "必要ソフト：Docker／Node.js・npm",
        "lines": [
          "必要ソフト：Docker／Node.js・npm"
        ],
        "remaining": 1
      }
    }
  },
  {
    "name": "Oh-my-mermaid — AI生成コードの構造可視化ツール",
    "url": "https://github.com/oh-my-mermaid/oh-my-mermaid",
    "summary": "AIエージェントでコードベースを解析し、システム構成やデータフローを階層化された図として可視化するツール。",
    "description": "Oh-my-mermaidは、既存のソースコードをAIエージェントで解析し、ソフトウェアの内部構造を図・説明文にまとめる開発支援ツール。AIが生成したコードの理解や、初めて触れるプロジェクトの構成・依存関係の把握に使える。\nClaude CodeやCodexなどでスキャン用スキルを実行し、全体のアーキテクチャ、データフロー、外部サービスとの連携などをMermaid形式の図として生成する。複雑な要素は子要素へ再帰的に分けられ、専用のインタラクティブビューアで全体構成から個別のモジュールへ展開して確認できる。\n生成物はローカルの.ommディレクトリに保存され、図・説明に加えて背景、制約、懸念、TODO、メモを持てる。設計資料の作成や共有にも利用でき、日本語READMEと生成言語の設定を備える。TypeScript製でMITライセンス。\nクラウドサービスohmymermaid.comへの保存は任意。ログインしてプロジェクトを紐付け、生成した資料をアップロードできる。公式READMEでは保存時は非公開で、チームへの共有や一般公開も可能と説明されている。\nコードの解析には対応するAIコーディングツールが必要で、Oh-my-mermaid単独で解析するわけではない。図や説明の正確性は利用者が確認する。",
    "environment": [
      {
        "label": "AIツール",
        "value": "Claude Code／Codex／Cursor／OpenClaw／Antigravity",
        "key": "agent",
        "scope": "basic",
        "level": "required",
        "status": "documented",
        "group": "requirements",
        "order": 5,
        "stateLabel": "",
        "scopeLabel": "",
        "levelLabel": "必須"
      },
      {
        "label": "実行環境",
        "value": "Node.js 18以降／npm",
        "key": "runtime",
        "scope": "basic",
        "level": "required",
        "status": "documented",
        "group": "requirements",
        "order": 6,
        "stateLabel": "",
        "scopeLabel": "",
        "levelLabel": "必須"
      },
      {
        "label": "保存・共有",
        "value": "ローカルの.omm／任意のクラウド保存。公式READMEでは初期状態は非公開",
        "key": "storage",
        "scope": "basic",
        "level": "info",
        "status": "documented",
        "group": "specifications",
        "order": 19,
        "stateLabel": "",
        "scopeLabel": "",
        "levelLabel": ""
      },
      {
        "key": "license",
        "label": "ライセンス",
        "scope": "basic",
        "level": "info",
        "status": "documented",
        "value": "MIT",
        "group": "licenses",
        "order": 22,
        "stateLabel": "",
        "scopeLabel": "",
        "levelLabel": ""
      }
    ],
    "category": "コード解析",
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
    ],
    "related": [
      {
        "label": "ソース非公開のアプリを調べたい",
        "url": "https://github.com/morluto/rea"
      }
    ],
    "environmentVersion": 1,
    "requirementsStatus": "documented",
    "presentation": {
      "groups": [
        {
          "key": "requirements",
          "label": "利用条件",
          "rows": [
            {
              "label": "AIツール",
              "value": "Claude Code／Codex／Cursor／OpenClaw／Antigravity",
              "key": "agent",
              "scope": "basic",
              "level": "required",
              "status": "documented",
              "group": "requirements",
              "order": 5,
              "stateLabel": "",
              "scopeLabel": "",
              "levelLabel": "必須"
            },
            {
              "label": "実行環境",
              "value": "Node.js 18以降／npm",
              "key": "runtime",
              "scope": "basic",
              "level": "required",
              "status": "documented",
              "group": "requirements",
              "order": 6,
              "stateLabel": "",
              "scopeLabel": "",
              "levelLabel": "必須"
            }
          ]
        },
        {
          "key": "specifications",
          "label": "仕様・出力",
          "rows": [
            {
              "label": "保存・共有",
              "value": "ローカルの.omm／任意のクラウド保存。公式READMEでは初期状態は非公開",
              "key": "storage",
              "scope": "basic",
              "level": "info",
              "status": "documented",
              "group": "specifications",
              "order": 19,
              "stateLabel": "",
              "scopeLabel": "",
              "levelLabel": ""
            }
          ]
        },
        {
          "key": "licenses",
          "label": "ライセンス",
          "rows": [
            {
              "key": "license",
              "label": "ライセンス",
              "scope": "basic",
              "level": "info",
              "status": "documented",
              "value": "MIT",
              "group": "licenses",
              "order": 22,
              "stateLabel": "",
              "scopeLabel": "",
              "levelLabel": ""
            }
          ]
        }
      ],
      "overview": {
        "label": "利用条件",
        "value": "AIツール：Claude Code／Codex／Cursor／OpenClaw／Antigravity ／ 実行環境：Node.js 18以降／npm",
        "lines": [
          "AIツール：Claude Code／Codex／Cursor／OpenClaw／Antigravity",
          "実行環境：Node.js 18以降／npm"
        ],
        "remaining": 0
      }
    }
  },
  {
    "name": "hayamimi（早耳）— CPUで動く多言語文字起こしツール",
    "url": "https://github.com/oboroge0/hayamimi",
    "summary": "GPUやクラウドAPIを使わず、CPUで多言語音声をリアルタイムに文字起こしし、字幕表示・話者ラベル・日本語からの翻訳に対応するツール。",
    "description": "hayamimi（早耳）は、CPUだけで多言語音声をリアルタイムに文字起こしする、Python製のローカル音声認識ツール。発話ごとに言語を判定し、日本語・英語・中国語・韓国語・広東語などに応じて専用モデルを使い分ける。\n話している途中から字幕を更新し、ブラウザのダッシュボードやOBSの字幕として表示できる。話者ラベルの付与、発話の再処理による清書、日本語からの翻訳も備え、配信字幕や会議の記録に使える。WebSocket音声入力やPython APIによる外部アプリへの組み込みにも対応。\n公式READMEは日本語の発話終了後の字幕確定を約100msと説明している。性能評価資料ではテレビ放送由来の日本語音声15クリップで文字誤り率（CER）3.8%を報告しているが、開発者による特定条件の測定であり、すべての音声やPCで同じ遅延・精度を保証するものではない。\n本体コードはMITライセンス。初回にモデルダウンロードが必要で、取得するモデルには個別のライセンスが適用される。日英翻訳用のFuguMTモデルはCC BY-SA 4.0で、モデルの重みを再配布する場合の条件を公式の第三者ライセンス資料で確認する必要がある。",
    "environment": [
      {
        "label": "OS",
        "value": "Windows 11で開発・検証。macOS／Linuxは動作想定・実機確認は未実施",
        "key": "os",
        "scope": "basic",
        "level": "info",
        "status": "documented",
        "group": "requirements",
        "order": 1,
        "stateLabel": "",
        "scopeLabel": "",
        "levelLabel": ""
      },
      {
        "label": "必要ソフト",
        "value": "Python 3.10以降／PATHに登録したffmpeg。",
        "key": "dependencies",
        "scope": "basic",
        "level": "required",
        "status": "documented",
        "brief": "Python 3.10以降／ffmpeg",
        "group": "requirements",
        "order": 7,
        "stateLabel": "",
        "scopeLabel": "",
        "levelLabel": "必須"
      },
      {
        "key": "gpuCloud",
        "label": "GPU・クラウドAPI",
        "value": "GPU・クラウドAPIは不要",
        "scope": "basic",
        "level": "unnecessary",
        "status": "documented",
        "group": "requirements",
        "order": 15,
        "stateLabel": "",
        "scopeLabel": "",
        "levelLabel": "不要"
      },
      {
        "label": "追加ダウンロード",
        "value": "モデル約3.1GB。日本語・英語の最小構成は約1.1GB。追加オプションは別途取得",
        "key": "download",
        "scope": "初回利用",
        "level": "required",
        "status": "documented",
        "group": "requirements",
        "order": 13,
        "stateLabel": "",
        "scopeLabel": "初回利用",
        "levelLabel": "必須"
      },
      {
        "label": "メモリ使用量",
        "value": "公式READMEは通常構成で2GB未満と説明。モデル退避による常駐数制御あり",
        "key": "memoryUsage",
        "scope": "basic",
        "level": "info",
        "status": "documented",
        "group": "specifications",
        "order": 18,
        "stateLabel": "",
        "scopeLabel": "",
        "levelLabel": ""
      },
      {
        "key": "license",
        "label": "ライセンス",
        "scope": "取得するAIモデル",
        "level": "info",
        "status": "documented",
        "value": "個別のライセンスが適用される",
        "group": "licenses",
        "order": 22,
        "stateLabel": "",
        "scopeLabel": "取得するAIモデル",
        "levelLabel": ""
      },
      {
        "key": "license",
        "label": "ライセンス",
        "scope": "日英翻訳用FuguMTモデル",
        "level": "info",
        "status": "documented",
        "value": "CC BY-SA 4.0",
        "group": "licenses",
        "order": 22,
        "stateLabel": "",
        "scopeLabel": "日英翻訳用FuguMTモデル",
        "levelLabel": ""
      },
      {
        "key": "license",
        "label": "ライセンス",
        "scope": "本体コード",
        "level": "info",
        "status": "documented",
        "value": "MIT",
        "group": "licenses",
        "order": 22,
        "stateLabel": "",
        "scopeLabel": "本体コード",
        "levelLabel": ""
      }
    ],
    "category": "音声・文字起こし",
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
    ],
    "environmentVersion": 1,
    "requirementsStatus": "documented",
    "presentation": {
      "groups": [
        {
          "key": "requirements",
          "label": "利用条件",
          "rows": [
            {
              "label": "OS",
              "value": "Windows 11で開発・検証。macOS／Linuxは動作想定・実機確認は未実施",
              "key": "os",
              "scope": "basic",
              "level": "info",
              "status": "documented",
              "group": "requirements",
              "order": 1,
              "stateLabel": "",
              "scopeLabel": "",
              "levelLabel": ""
            },
            {
              "label": "必要ソフト",
              "value": "Python 3.10以降／PATHに登録したffmpeg。",
              "key": "dependencies",
              "scope": "basic",
              "level": "required",
              "status": "documented",
              "brief": "Python 3.10以降／ffmpeg",
              "group": "requirements",
              "order": 7,
              "stateLabel": "",
              "scopeLabel": "",
              "levelLabel": "必須"
            },
            {
              "key": "gpuCloud",
              "label": "GPU・クラウドAPI",
              "value": "GPU・クラウドAPIは不要",
              "scope": "basic",
              "level": "unnecessary",
              "status": "documented",
              "group": "requirements",
              "order": 15,
              "stateLabel": "",
              "scopeLabel": "",
              "levelLabel": "不要"
            },
            {
              "label": "追加ダウンロード",
              "value": "モデル約3.1GB。日本語・英語の最小構成は約1.1GB。追加オプションは別途取得",
              "key": "download",
              "scope": "初回利用",
              "level": "required",
              "status": "documented",
              "group": "requirements",
              "order": 13,
              "stateLabel": "",
              "scopeLabel": "初回利用",
              "levelLabel": "必須"
            }
          ]
        },
        {
          "key": "specifications",
          "label": "仕様・出力",
          "rows": [
            {
              "label": "メモリ使用量",
              "value": "公式READMEは通常構成で2GB未満と説明。モデル退避による常駐数制御あり",
              "key": "memoryUsage",
              "scope": "basic",
              "level": "info",
              "status": "documented",
              "group": "specifications",
              "order": 18,
              "stateLabel": "",
              "scopeLabel": "",
              "levelLabel": ""
            }
          ]
        },
        {
          "key": "licenses",
          "label": "ライセンス",
          "rows": [
            {
              "key": "license",
              "label": "ライセンス",
              "scope": "取得するAIモデル",
              "level": "info",
              "status": "documented",
              "value": "個別のライセンスが適用される",
              "group": "licenses",
              "order": 22,
              "stateLabel": "",
              "scopeLabel": "取得するAIモデル",
              "levelLabel": ""
            },
            {
              "key": "license",
              "label": "ライセンス",
              "scope": "日英翻訳用FuguMTモデル",
              "level": "info",
              "status": "documented",
              "value": "CC BY-SA 4.0",
              "group": "licenses",
              "order": 22,
              "stateLabel": "",
              "scopeLabel": "日英翻訳用FuguMTモデル",
              "levelLabel": ""
            },
            {
              "key": "license",
              "label": "ライセンス",
              "scope": "本体コード",
              "level": "info",
              "status": "documented",
              "value": "MIT",
              "group": "licenses",
              "order": 22,
              "stateLabel": "",
              "scopeLabel": "本体コード",
              "levelLabel": ""
            }
          ]
        }
      ],
      "overview": {
        "label": "利用条件",
        "value": "必要ソフト：Python 3.10以降／ffmpeg",
        "lines": [
          "必要ソフト：Python 3.10以降／ffmpeg"
        ],
        "remaining": 3
      }
    }
  },
  {
    "name": "Answer me with HTML — AIの回答を図解付きHTMLに変換するツール",
    "url": "https://github.com/QingYunA/answer-me-with-html",
    "summary": "AIエージェントの複雑な回答を、図解・比較表・フローチャートなどを備えた見やすいHTMLページに変換するスキル。",
    "description": "Answer me with HTMLは、AIエージェントの回答を、文章と図表を組み合わせた見やすいHTMLページにするスキル。複雑な技術解説や比較資料を、フローチャート・シーケンス図・比較表などで整理できる。\nコードベースの構成把握や学習資料の作成に使え、ページ上のコメントや選択肢への回答をまとめてAIへ返信できる。図の段階的な表示とナレーションを組み合わせた解説動画も作成が可能。\nAIがMarkdownの原稿を作り、同梱のCLIがHTMLのレイアウトや図の描画を担当し、AIがCSSやSVGを一から書く量を減らせる。標準の出力は単一HTMLでオフライン閲覧・共有が可能だが、外部画像を使う場合は接続が必要。MITライセンス。",
    "environment": [
      {
        "label": "AIツール",
        "value": "Claude Code／Codex／Cursor／OpenCode／Piなど",
        "key": "agent",
        "scope": "basic",
        "level": "required",
        "status": "documented",
        "group": "requirements",
        "order": 5,
        "stateLabel": "",
        "scopeLabel": "",
        "levelLabel": "必須"
      },
      {
        "label": "実行環境",
        "value": "Node.js 20以降",
        "key": "runtime",
        "scope": "basic",
        "level": "required",
        "status": "documented",
        "group": "requirements",
        "order": 6,
        "stateLabel": "",
        "scopeLabel": "",
        "levelLabel": "必須"
      },
      {
        "label": "必要ソフト",
        "value": "Chrome・Node.js 22以降。MP4出力には追加でffmpegが必要",
        "key": "dependencies",
        "scope": "動画書き出し",
        "level": "required",
        "status": "documented",
        "group": "requirements",
        "order": 7,
        "stateLabel": "",
        "scopeLabel": "動画書き出し",
        "levelLabel": "必須"
      },
      {
        "key": "license",
        "label": "ライセンス",
        "scope": "basic",
        "level": "info",
        "status": "documented",
        "value": "MIT",
        "group": "licenses",
        "order": 22,
        "stateLabel": "",
        "scopeLabel": "",
        "levelLabel": ""
      }
    ],
    "category": "図解・可視化",
    "tags": [
      "AIエージェント",
      "情報可視化",
      "ドキュメント生成",
      "開発支援",
      "HTML",
      "JavaScript",
      "MIT"
    ],
    "addedAt": "2026-10-11",
    "checkedAt": "2026-10-12",
    "sources": [
      {
        "label": "公式README",
        "url": "https://github.com/QingYunA/answer-me-with-html/blob/main/README.md"
      },
      {
        "label": "機能リファレンス",
        "url": "https://github.com/QingYunA/answer-me-with-html/blob/main/docs/reference.md"
      },
      {
        "label": "性能比較資料",
        "url": "https://github.com/QingYunA/answer-me-with-html/blob/main/bench/README.md"
      },
      {
        "label": "動画生成・書き出し条件",
        "url": "https://github.com/QingYunA/answer-me-with-html/blob/main/docs/video.md"
      },
      {
        "label": "実行条件・パッケージ情報",
        "url": "https://github.com/QingYunA/answer-me-with-html/blob/main/package.json"
      },
      {
        "label": "MITライセンス",
        "url": "https://github.com/QingYunA/answer-me-with-html/blob/main/LICENSE"
      }
    ],
    "related": [
      {
        "label": "図を独立した資料として作りたい",
        "url": "https://github.com/cathrynlavery/diagram-design"
      },
      {
        "label": "説明文の表現を整えたい",
        "url": "https://github.com/nanaism/yomiyasu"
      }
    ],
    "environmentVersion": 1,
    "requirementsStatus": "documented",
    "presentation": {
      "groups": [
        {
          "key": "requirements",
          "label": "利用条件",
          "rows": [
            {
              "label": "AIツール",
              "value": "Claude Code／Codex／Cursor／OpenCode／Piなど",
              "key": "agent",
              "scope": "basic",
              "level": "required",
              "status": "documented",
              "group": "requirements",
              "order": 5,
              "stateLabel": "",
              "scopeLabel": "",
              "levelLabel": "必須"
            },
            {
              "label": "実行環境",
              "value": "Node.js 20以降",
              "key": "runtime",
              "scope": "basic",
              "level": "required",
              "status": "documented",
              "group": "requirements",
              "order": 6,
              "stateLabel": "",
              "scopeLabel": "",
              "levelLabel": "必須"
            },
            {
              "label": "必要ソフト",
              "value": "Chrome・Node.js 22以降。MP4出力には追加でffmpegが必要",
              "key": "dependencies",
              "scope": "動画書き出し",
              "level": "required",
              "status": "documented",
              "group": "requirements",
              "order": 7,
              "stateLabel": "",
              "scopeLabel": "動画書き出し",
              "levelLabel": "必須"
            }
          ]
        },
        {
          "key": "licenses",
          "label": "ライセンス",
          "rows": [
            {
              "key": "license",
              "label": "ライセンス",
              "scope": "basic",
              "level": "info",
              "status": "documented",
              "value": "MIT",
              "group": "licenses",
              "order": 22,
              "stateLabel": "",
              "scopeLabel": "",
              "levelLabel": ""
            }
          ]
        }
      ],
      "overview": {
        "label": "利用条件",
        "value": "AIツール：Claude Code／Codex／Cursor／OpenCode／Piなど ／ 実行環境：Node.js 20以降",
        "lines": [
          "AIツール：Claude Code／Codex／Cursor／OpenCode／Piなど",
          "実行環境：Node.js 20以降"
        ],
        "remaining": 1
      }
    }
  },
  {
    "name": "Awesome DESIGN.md — AIのUI制作に使うWebデザイン資料集",
    "url": "https://github.com/VoltAgent/awesome-design-md",
    "summary": "AppleやSpotify、NotionなどのWebサイトを分析したデザインルールを収録し、AIエージェントによるUI制作の指針にできる資料集。",
    "description": "Awesome DESIGN.mdは、公開Webサイトの配色・フォント・余白・レイアウトなどを分析し、AIによるUI制作の指針としてまとめた資料集。Apple、Spotify、Notion、Linear、Stripeなど84件を収録している。\n使いたいサイトのDESIGN.mdをプロジェクトに配置し、CodexやClaude Codeなどに参照するよう指示して利用する。ボタンやカードの状態、レスポンシブ設計も記載されており、参考サイトに近いUIの制作や、複数ページの見た目を揃える際に使える。Markdownを直接編集して、自分のプロジェクト向けに調整することも可能。\n各企業の公式ガイドラインではなく、公開サイトの分析に基づく資料。元サイトの更新や使用するAI・指示によって生成結果は異なる。READMEに記載されたHTMLプレビューは、確認時点のリポジトリには見当たらなかった。資料はMITライセンスだが、元サイトの商標・ロゴ・独自フォントなどの利用条件は別途確認が必要。",
    "environment": [
      {
        "label": "形式・出力",
        "value": "Markdown（DESIGN.md）",
        "key": "format",
        "scope": "basic",
        "level": "info",
        "status": "documented",
        "group": "specifications",
        "order": 17,
        "stateLabel": "",
        "scopeLabel": "",
        "levelLabel": ""
      },
      {
        "label": "参照方法",
        "value": "プロジェクトに配置し、AIに参照を指示",
        "key": "usage",
        "scope": "basic",
        "level": "info",
        "status": "documented",
        "group": "usage",
        "order": 20,
        "stateLabel": "",
        "scopeLabel": "",
        "levelLabel": ""
      },
      {
        "label": "編集方法",
        "value": "テキストエディターで直接編集可能",
        "key": "editing",
        "scope": "basic",
        "level": "info",
        "status": "documented",
        "group": "usage",
        "order": 21,
        "stateLabel": "",
        "scopeLabel": "",
        "levelLabel": ""
      },
      {
        "key": "license",
        "label": "ライセンス",
        "scope": "basic",
        "level": "info",
        "status": "documented",
        "value": "MIT",
        "group": "licenses",
        "order": 22,
        "stateLabel": "",
        "scopeLabel": "",
        "levelLabel": ""
      }
    ],
    "category": "UI・Webデザイン",
    "tags": [
      "Webデザイン",
      "UI・UX",
      "AIエージェント",
      "開発支援",
      "Markdown",
      "MIT"
    ],
    "addedAt": "2026-10-13",
    "checkedAt": "2026-10-13",
    "stars": 120574,
    "starsCheckedAt": "2026-10-13",
    "sources": [
      {
        "label": "公式README",
        "url": "https://github.com/VoltAgent/awesome-design-md/blob/main/README.md"
      },
      {
        "label": "DESIGN.mdコレクション",
        "url": "https://github.com/VoltAgent/awesome-design-md/tree/main/design-md"
      },
      {
        "label": "Appleのデザイン分析資料",
        "url": "https://github.com/VoltAgent/awesome-design-md/blob/main/design-md/apple/DESIGN.md"
      },
      {
        "label": "MITライセンス",
        "url": "https://github.com/VoltAgent/awesome-design-md/blob/main/LICENSE"
      },
      {
        "label": "公式サイト",
        "url": "https://getdesign.md/"
      }
    ],
    "related": [
      {
        "label": "サイトと配色を揃えた図を作りたい",
        "url": "https://github.com/cathrynlavery/diagram-design"
      }
    ],
    "environmentVersion": 1,
    "requirementsStatus": "notApplicable",
    "presentation": {
      "groups": [
        {
          "key": "specifications",
          "label": "仕様・出力",
          "rows": [
            {
              "label": "形式・出力",
              "value": "Markdown（DESIGN.md）",
              "key": "format",
              "scope": "basic",
              "level": "info",
              "status": "documented",
              "group": "specifications",
              "order": 17,
              "stateLabel": "",
              "scopeLabel": "",
              "levelLabel": ""
            }
          ]
        },
        {
          "key": "usage",
          "label": "利用方法",
          "rows": [
            {
              "label": "参照方法",
              "value": "プロジェクトに配置し、AIに参照を指示",
              "key": "usage",
              "scope": "basic",
              "level": "info",
              "status": "documented",
              "group": "usage",
              "order": 20,
              "stateLabel": "",
              "scopeLabel": "",
              "levelLabel": ""
            },
            {
              "label": "編集方法",
              "value": "テキストエディターで直接編集可能",
              "key": "editing",
              "scope": "basic",
              "level": "info",
              "status": "documented",
              "group": "usage",
              "order": 21,
              "stateLabel": "",
              "scopeLabel": "",
              "levelLabel": ""
            }
          ]
        },
        {
          "key": "licenses",
          "label": "ライセンス",
          "rows": [
            {
              "key": "license",
              "label": "ライセンス",
              "scope": "basic",
              "level": "info",
              "status": "documented",
              "value": "MIT",
              "group": "licenses",
              "order": 22,
              "stateLabel": "",
              "scopeLabel": "",
              "levelLabel": ""
            }
          ]
        }
      ],
      "overview": {
        "label": "利用方法",
        "value": "参照方法：プロジェクトに配置し、AIに参照を指示 ／ 編集方法：テキストエディターで直接編集可能",
        "lines": [
          "参照方法：プロジェクトに配置し、AIに参照を指示",
          "編集方法：テキストエディターで直接編集可能"
        ],
        "remaining": 0
      }
    }
  },
  {
    "name": "Claude-BugHunter — AIによる脆弱性調査を支援するスキル集",
    "url": "https://github.com/elementalsouls/Claude-BugHunter",
    "summary": "Claude CodeなどのAIエージェントに調査手順と専門知識を追加し、情報収集から脆弱性の検証・報告書作成までを支援するスキル集。",
    "description": "Claude-BugHunterは、AIエージェントによるWebアプリ・API・外部公開システムの脆弱性調査を支援するスキル集。83種類のスキルと15種類のコマンドを収録し、XSS、SQLインジェクション、SSRF、認証・認可の不備などを扱う。開発者は、公開済みの脆弱性報告681件から抽出した調査パターンを収録していると説明している。\n調査したい内容を伝えると、AIが関連スキルを参照し、公開情報の収集、調査対象の整理、検証、証拠の整理、報告書作成を支援する。Burp SuiteとのMCP連携も利用できる。Claude CodeのほかCodex CLIやOpenCodeなどでも専門スキルを読み込めるが、専用コマンドと調査管理機能はClaude Code向け。\n自分が管理するシステム、CTF環境、明示的に診断許可を得た対象での利用を前提とする。内部Active Directoryへの攻撃や侵入後の横展開などは対象外。導入だけで脆弱性を自動発見できるものではなく、診断結果と影響度の確認は人間が行う必要がある。コードはMIT、スキル内容・ドキュメントなどはCC BY 4.0で提供される。",
    "environment": [
      {
        "label": "OS",
        "value": "macOS／Linux／Windows",
        "key": "os",
        "scope": "basic",
        "level": "required",
        "status": "documented",
        "group": "requirements",
        "order": 1,
        "stateLabel": "",
        "scopeLabel": "",
        "levelLabel": "必須"
      },
      {
        "label": "AIツール",
        "value": "Claude Code／Codex CLI／OpenCodeなど",
        "key": "agent",
        "scope": "basic",
        "level": "required",
        "status": "documented",
        "group": "requirements",
        "order": 5,
        "stateLabel": "",
        "scopeLabel": "",
        "levelLabel": "必須"
      },
      {
        "label": "必要ソフト",
        "value": "Burp連携にはBurp SuiteとMCP Server拡張。",
        "key": "dependencies",
        "scope": "Burp連携",
        "level": "required",
        "status": "documented",
        "group": "requirements",
        "order": 7,
        "stateLabel": "",
        "scopeLabel": "Burp連携",
        "levelLabel": "必須"
      },
      {
        "key": "runtime",
        "label": "実行環境",
        "value": "cbh CLIにはPython 3.9以降",
        "scope": "cbh CLI",
        "level": "required",
        "status": "documented",
        "group": "requirements",
        "order": 6,
        "stateLabel": "",
        "scopeLabel": "cbh CLI",
        "levelLabel": "必須"
      },
      {
        "key": "license",
        "label": "ライセンス",
        "scope": "コード",
        "level": "info",
        "status": "documented",
        "value": "MIT",
        "group": "licenses",
        "order": 22,
        "stateLabel": "",
        "scopeLabel": "コード",
        "levelLabel": ""
      },
      {
        "key": "license",
        "label": "ライセンス",
        "scope": "スキル内容・ドキュメント",
        "level": "info",
        "status": "documented",
        "value": "CC BY 4.0",
        "group": "licenses",
        "order": 22,
        "stateLabel": "",
        "scopeLabel": "スキル内容・ドキュメント",
        "levelLabel": ""
      }
    ],
    "category": "セキュリティ",
    "tags": [
      "AIエージェント",
      "脆弱性診断",
      "OSINT",
      "CTF",
      "Burp Suite",
      "MCP",
      "MIT",
      "CC BY 4.0"
    ],
    "addedAt": "2026-10-13",
    "checkedAt": "2026-10-13",
    "stars": 5067,
    "starsCheckedAt": "2026-10-13",
    "sources": [
      {
        "label": "公式README",
        "url": "https://github.com/elementalsouls/Claude-BugHunter/blob/main/README.md"
      },
      {
        "label": "利用ガイド",
        "url": "https://github.com/elementalsouls/Claude-BugHunter/blob/main/USAGE.md"
      },
      {
        "label": "スキル一覧",
        "url": "https://github.com/elementalsouls/Claude-BugHunter/blob/main/docs/skills.md"
      },
      {
        "label": "セキュリティ方針",
        "url": "https://github.com/elementalsouls/Claude-BugHunter/blob/main/SECURITY.md"
      },
      {
        "label": "コードのMITライセンス",
        "url": "https://github.com/elementalsouls/Claude-BugHunter/blob/main/LICENSE"
      },
      {
        "label": "コンテンツのCC BY 4.0ライセンス",
        "url": "https://github.com/elementalsouls/Claude-BugHunter/blob/main/LICENSE-CONTENT"
      },
      {
        "label": "cbh CLIの必要環境",
        "url": "https://github.com/elementalsouls/Claude-BugHunter/blob/main/pyproject.toml"
      },
      {
        "label": "公式サイト",
        "url": "https://elementalsouls.github.io/Claude-BugHunter/"
      }
    ],
    "environmentVersion": 1,
    "requirementsStatus": "documented",
    "presentation": {
      "groups": [
        {
          "key": "requirements",
          "label": "利用条件",
          "rows": [
            {
              "label": "OS",
              "value": "macOS／Linux／Windows",
              "key": "os",
              "scope": "basic",
              "level": "required",
              "status": "documented",
              "group": "requirements",
              "order": 1,
              "stateLabel": "",
              "scopeLabel": "",
              "levelLabel": "必須"
            },
            {
              "label": "AIツール",
              "value": "Claude Code／Codex CLI／OpenCodeなど",
              "key": "agent",
              "scope": "basic",
              "level": "required",
              "status": "documented",
              "group": "requirements",
              "order": 5,
              "stateLabel": "",
              "scopeLabel": "",
              "levelLabel": "必須"
            },
            {
              "label": "必要ソフト",
              "value": "Burp連携にはBurp SuiteとMCP Server拡張。",
              "key": "dependencies",
              "scope": "Burp連携",
              "level": "required",
              "status": "documented",
              "group": "requirements",
              "order": 7,
              "stateLabel": "",
              "scopeLabel": "Burp連携",
              "levelLabel": "必須"
            },
            {
              "key": "runtime",
              "label": "実行環境",
              "value": "cbh CLIにはPython 3.9以降",
              "scope": "cbh CLI",
              "level": "required",
              "status": "documented",
              "group": "requirements",
              "order": 6,
              "stateLabel": "",
              "scopeLabel": "cbh CLI",
              "levelLabel": "必須"
            }
          ]
        },
        {
          "key": "licenses",
          "label": "ライセンス",
          "rows": [
            {
              "key": "license",
              "label": "ライセンス",
              "scope": "コード",
              "level": "info",
              "status": "documented",
              "value": "MIT",
              "group": "licenses",
              "order": 22,
              "stateLabel": "",
              "scopeLabel": "コード",
              "levelLabel": ""
            },
            {
              "key": "license",
              "label": "ライセンス",
              "scope": "スキル内容・ドキュメント",
              "level": "info",
              "status": "documented",
              "value": "CC BY 4.0",
              "group": "licenses",
              "order": 22,
              "stateLabel": "",
              "scopeLabel": "スキル内容・ドキュメント",
              "levelLabel": ""
            }
          ]
        }
      ],
      "overview": {
        "label": "利用条件",
        "value": "OS：macOS／Linux／Windows ／ AIツール：Claude Code／Codex CLI／OpenCodeなど",
        "lines": [
          "OS：macOS／Linux／Windows",
          "AIツール：Claude Code／Codex CLI／OpenCodeなど"
        ],
        "remaining": 2
      }
    }
  },
  {
    "name": "Diagram Design — AIで図解を制作するスキル",
    "url": "https://github.com/cathrynlavery/diagram-design",
    "summary": "自然言語の指示から構成図やフローチャートなど45種類の図表をHTML・SVGで制作し、既存サイトの配色やフォントに合わせられるAIエージェント向けスキル。",
    "description": "Diagram Designは、Claude CodeやCodexなどのAIエージェントで図解を制作するスキル。システム構成図、フローチャート、ER図、シーケンス図、ガントチャート、散布図など45種類の図表形式を扱い、作りたい内容を自然言語で伝えるとHTMLとSVGで描画する。技術資料、研究発表、ブログ、プレゼンテーションの図に利用できる。\n既存サイトから配色やフォントを取得して図のデザインに反映できる。Mermaid・draw.io・Excalidrawの元データを読み込み、用途や詳細度に応じて描き直す機能も備える。ライト・ダークテーマや16:9のスライド向けサイズに対応し、ブラウザで閲覧できるHTMLのほか、SVG・PNGとして書き出せる。\n単独のGUI図表編集アプリではなく、修正はAIへの再指示やSVGの編集で行う。取り込み時には詳細度に応じて要素が統合・省略されるため、元データとの対応を確認する必要がある。初期設定のHTML・SVGはGoogle Fontsを取得するが、フォント参照を外してシステムフォントを使えば外部通信なしで閲覧できる。入力した内容は利用するAIの処理・データ管理方針に従う。MITライセンスで公開。",
    "environment": [
      {
        "label": "AIツール",
        "value": "Claude Code／Codex／Cursor／GitHub Copilotなど、Agent Skills対応環境",
        "key": "agent",
        "scope": "basic",
        "level": "required",
        "status": "documented",
        "group": "requirements",
        "order": 5,
        "stateLabel": "",
        "scopeLabel": "",
        "levelLabel": "必須"
      },
      {
        "label": "必要ソフト",
        "value": "Playwright・Chromiumの追加導入が必要",
        "key": "dependencies",
        "scope": "PNG書き出し",
        "level": "required",
        "status": "documented",
        "group": "requirements",
        "order": 7,
        "stateLabel": "",
        "scopeLabel": "PNG書き出し",
        "levelLabel": "必須"
      },
      {
        "label": "ブラウザ",
        "value": "HTML・SVGを表示できるブラウザ。オフライン時はシステムフォントで表示",
        "key": "browser",
        "scope": "図の閲覧",
        "level": "required",
        "status": "documented",
        "group": "requirements",
        "order": 3,
        "stateLabel": "",
        "scopeLabel": "図の閲覧",
        "levelLabel": "必須"
      },
      {
        "key": "license",
        "label": "ライセンス",
        "scope": "basic",
        "level": "info",
        "status": "documented",
        "value": "MIT",
        "group": "licenses",
        "order": 22,
        "stateLabel": "",
        "scopeLabel": "",
        "levelLabel": ""
      }
    ],
    "category": "図解・可視化",
    "tags": [
      "AIエージェント",
      "図解",
      "可視化",
      "デザイン",
      "HTML",
      "SVG",
      "Mermaid",
      "MIT"
    ],
    "addedAt": "2026-10-14",
    "checkedAt": "2026-10-14",
    "stars": 53696,
    "starsCheckedAt": "2026-10-14",
    "sources": [
      {
        "label": "公式README",
        "url": "https://github.com/cathrynlavery/diagram-design/blob/main/README.md"
      },
      {
        "label": "公式サイト",
        "url": "https://diagramdesign.dev/"
      },
      {
        "label": "図表ギャラリー",
        "url": "https://cathrynlavery.github.io/diagram-design/"
      },
      {
        "label": "プライバシー方針",
        "url": "https://github.com/cathrynlavery/diagram-design/blob/main/PRIVACY.md"
      },
      {
        "label": "MITライセンス",
        "url": "https://github.com/cathrynlavery/diagram-design/blob/main/LICENSE"
      }
    ],
    "related": [
      {
        "label": "図を含む説明全体をHTMLにしたい",
        "url": "https://github.com/QingYunA/answer-me-with-html"
      },
      {
        "label": "図に添える説明文を推敲したい",
        "url": "https://github.com/nanaism/yomiyasu"
      }
    ],
    "environmentVersion": 1,
    "requirementsStatus": "documented",
    "presentation": {
      "groups": [
        {
          "key": "requirements",
          "label": "利用条件",
          "rows": [
            {
              "label": "AIツール",
              "value": "Claude Code／Codex／Cursor／GitHub Copilotなど、Agent Skills対応環境",
              "key": "agent",
              "scope": "basic",
              "level": "required",
              "status": "documented",
              "group": "requirements",
              "order": 5,
              "stateLabel": "",
              "scopeLabel": "",
              "levelLabel": "必須"
            },
            {
              "label": "必要ソフト",
              "value": "Playwright・Chromiumの追加導入が必要",
              "key": "dependencies",
              "scope": "PNG書き出し",
              "level": "required",
              "status": "documented",
              "group": "requirements",
              "order": 7,
              "stateLabel": "",
              "scopeLabel": "PNG書き出し",
              "levelLabel": "必須"
            },
            {
              "label": "ブラウザ",
              "value": "HTML・SVGを表示できるブラウザ。オフライン時はシステムフォントで表示",
              "key": "browser",
              "scope": "図の閲覧",
              "level": "required",
              "status": "documented",
              "group": "requirements",
              "order": 3,
              "stateLabel": "",
              "scopeLabel": "図の閲覧",
              "levelLabel": "必須"
            }
          ]
        },
        {
          "key": "licenses",
          "label": "ライセンス",
          "rows": [
            {
              "key": "license",
              "label": "ライセンス",
              "scope": "basic",
              "level": "info",
              "status": "documented",
              "value": "MIT",
              "group": "licenses",
              "order": 22,
              "stateLabel": "",
              "scopeLabel": "",
              "levelLabel": ""
            }
          ]
        }
      ],
      "overview": {
        "label": "利用条件",
        "value": "AIツール：Claude Code／Codex／Cursor／GitHub Copilotなど、Agent Skills対応環境",
        "lines": [
          "AIツール：Claude Code／Codex／Cursor／GitHub Copilotなど、Agent Skills対応環境"
        ],
        "remaining": 2
      }
    }
  },
  {
    "name": "OpenRouter Skills — AIモデルの選定・API開発を支援するスキル集",
    "url": "https://github.com/OpenRouterTeam/skills",
    "summary": "OpenRouterを使ったモデル選定、API連携、画像・音声・動画生成、利用状況の分析を支援する公式エージェントスキル集。",
    "description": "OpenRouter Skillsは、複数のAIモデルを統一APIで利用できるOpenRouterの公式エージェントスキル集。18種類のスキルを収録し、モデルの料金・コンテキスト長・提供事業者の比較、公開ベンチマークの参照、APIを使った実装を支援する。Claude CodeやCodexなどに導入し、会話の内容に応じて必要な知識や手順を参照させる。\nテキスト生成やツール呼び出しに加え、画像生成・編集、文字起こし、音声合成、動画生成のAPI利用も扱う。TypeScriptによるターミナルUI付きエージェントや、APIサーバーなどに組み込むエージェントのひな形も生成できる。モデル別の費用、リクエスト数、トークン使用量、応答速度を調べるスキルもあり、モデル選定から実装、運用時の利用状況確認までに使える。\nスキル自体がAIモデルを提供するわけではなく、実際の呼び出しはOpenRouter経由で行う。モデルや機能によって料金・利用条件が異なり、価格や提供状況も変動する。付属スクリプトにはAPIキーの設定が必要で、利用状況の分析には通常のキーではなく管理用キーを使う。追加環境はスキルごとに異なる。リポジトリ全体のライセンス表記は確認できなかった。",
    "environment": [
      {
        "label": "AIツール",
        "value": "Claude Code／Codex／Cursor／OpenCode／Piなど",
        "key": "agent",
        "scope": "basic",
        "level": "required",
        "status": "documented",
        "group": "requirements",
        "order": 5,
        "stateLabel": "",
        "scopeLabel": "",
        "levelLabel": "必須"
      },
      {
        "label": "認証",
        "value": "OpenRouter APIキー。",
        "key": "auth",
        "scope": "basic",
        "level": "required",
        "status": "documented",
        "brief": "OpenRouter APIキー",
        "group": "requirements",
        "order": 9,
        "stateLabel": "",
        "scopeLabel": "",
        "levelLabel": "必須"
      },
      {
        "label": "実行環境",
        "value": "使用するスキルに応じてBunなどの実行環境が必要",
        "key": "runtime",
        "scope": "使用するスキルに応じた追加環境",
        "level": "required",
        "status": "documented",
        "group": "requirements",
        "order": 6,
        "stateLabel": "",
        "scopeLabel": "使用するスキルに応じた追加環境",
        "levelLabel": "必須"
      },
      {
        "key": "auth",
        "label": "認証",
        "scope": "利用状況の分析",
        "level": "required",
        "status": "documented",
        "value": "利用状況の分析には管理用キー",
        "group": "requirements",
        "order": 9,
        "stateLabel": "",
        "scopeLabel": "利用状況の分析",
        "levelLabel": "必須"
      },
      {
        "key": "license",
        "label": "ライセンス",
        "scope": "basic",
        "level": "info",
        "status": "notSpecified",
        "value": "リポジトリ全体のライセンス明示を確認できず",
        "group": "licenses",
        "order": 22,
        "stateLabel": "記載なし",
        "scopeLabel": "",
        "levelLabel": ""
      }
    ],
    "category": "AIモデル活用",
    "tags": [
      "AIエージェント",
      "LLM",
      "API開発",
      "OpenRouter",
      "TypeScript",
      "モデル選定",
      "画像生成",
      "音声",
      "動画生成"
    ],
    "addedAt": "2026-10-15",
    "checkedAt": "2026-10-15",
    "stars": 298,
    "starsCheckedAt": "2026-10-15",
    "sources": [
      {
        "label": "公式README",
        "url": "https://github.com/OpenRouterTeam/skills/blob/main/README.md"
      },
      {
        "label": "モデル選定スキル",
        "url": "https://github.com/OpenRouterTeam/skills/blob/main/skills/openrouter-models/SKILL.md"
      },
      {
        "label": "利用状況分析スキル",
        "url": "https://github.com/OpenRouterTeam/skills/blob/main/skills/openrouter-analytics/SKILL.md"
      },
      {
        "label": "エージェント生成スキル",
        "url": "https://github.com/OpenRouterTeam/skills/blob/main/skills/create-headless-agent/SKILL.md"
      },
      {
        "label": "動画生成スキル",
        "url": "https://github.com/OpenRouterTeam/skills/blob/main/skills/openrouter-video/SKILL.md"
      },
      {
        "label": "OpenRouter公式ドキュメント",
        "url": "https://openrouter.ai/docs/quickstart"
      },
      {
        "label": "モデル一覧",
        "url": "https://openrouter.ai/models"
      }
    ],
    "related": [
      {
        "label": "手元で動かすLLMを評価したい",
        "url": "https://github.com/isichan-ai/local-model-diagnosis"
      }
    ],
    "environmentVersion": 1,
    "requirementsStatus": "documented",
    "presentation": {
      "groups": [
        {
          "key": "requirements",
          "label": "利用条件",
          "rows": [
            {
              "label": "AIツール",
              "value": "Claude Code／Codex／Cursor／OpenCode／Piなど",
              "key": "agent",
              "scope": "basic",
              "level": "required",
              "status": "documented",
              "group": "requirements",
              "order": 5,
              "stateLabel": "",
              "scopeLabel": "",
              "levelLabel": "必須"
            },
            {
              "label": "認証",
              "value": "OpenRouter APIキー。",
              "key": "auth",
              "scope": "basic",
              "level": "required",
              "status": "documented",
              "brief": "OpenRouter APIキー",
              "group": "requirements",
              "order": 9,
              "stateLabel": "",
              "scopeLabel": "",
              "levelLabel": "必須"
            },
            {
              "label": "実行環境",
              "value": "使用するスキルに応じてBunなどの実行環境が必要",
              "key": "runtime",
              "scope": "使用するスキルに応じた追加環境",
              "level": "required",
              "status": "documented",
              "group": "requirements",
              "order": 6,
              "stateLabel": "",
              "scopeLabel": "使用するスキルに応じた追加環境",
              "levelLabel": "必須"
            },
            {
              "key": "auth",
              "label": "認証",
              "scope": "利用状況の分析",
              "level": "required",
              "status": "documented",
              "value": "利用状況の分析には管理用キー",
              "group": "requirements",
              "order": 9,
              "stateLabel": "",
              "scopeLabel": "利用状況の分析",
              "levelLabel": "必須"
            }
          ]
        },
        {
          "key": "licenses",
          "label": "ライセンス",
          "rows": [
            {
              "key": "license",
              "label": "ライセンス",
              "scope": "basic",
              "level": "info",
              "status": "notSpecified",
              "value": "リポジトリ全体のライセンス明示を確認できず",
              "group": "licenses",
              "order": 22,
              "stateLabel": "記載なし",
              "scopeLabel": "",
              "levelLabel": ""
            }
          ]
        }
      ],
      "overview": {
        "label": "利用条件",
        "value": "AIツール：Claude Code／Codex／Cursor／OpenCode／Piなど ／ 認証：OpenRouter APIキー",
        "lines": [
          "AIツール：Claude Code／Codex／Cursor／OpenCode／Piなど",
          "認証：OpenRouter APIキー"
        ],
        "remaining": 2
      }
    }
  },
  {
    "name": "yomiyasu（よみやす）— AI生成の日本語を推敲するスキル",
    "url": "https://github.com/nanaism/yomiyasu",
    "summary": "主述関係や不自然な比喩、過剰な装飾を見直し、元の意味や文体を尊重して日本語を推敲するエージェントスキル。",
    "description": "yomiyasu（よみやす）は、AIが生成した日本語を推敲するエージェントスキル。Claude CodeやCodex、Cursorなどに導入し、技術記事、仕様書、レポート、エッセイなどを整える。単語の置き換えにとどまらず、主語と述語、修飾語、条件や否定の関係まで確認する。\n元の主張・文体・言い切りの強さを尊重し、根拠のない情報を加えずに、不自然な比喩や不要な強調、文のつながりを見直す。技術記事・業務文書・エッセイに応じた指針があり、文章を渡して用途を指定できる。表現やMarkdownの書式を検査するyomiyasu_lint.pyと、推敲前後の語句・文末・構造の変化を確認するyomiyasu_diff.pyも付属する。\n検査ツールの指摘は見直し候補であり、文章の自然さや意味の保持を保証するものではない。AI製か人間製かを判定する機能もない。類似する校正スキルとの併用では指示が競合する場合がある。READMEで紹介された外部試験では、生成前にスキルを読ませる使い方で、情報の加筆が減った一方、文章が短くなり、読みやすさの評価も下がった。少数の文章をAIが採点した試験であり、すべての用途で改善するとは限らない。コードとドキュメントはMITライセンスで公開。",
    "environment": [
      {
        "label": "AIツール",
        "value": "Codex／Claude Code／Cursorなど",
        "key": "agent",
        "scope": "basic",
        "level": "required",
        "status": "documented",
        "group": "requirements",
        "order": 5,
        "stateLabel": "",
        "scopeLabel": "",
        "levelLabel": "必須"
      },
      {
        "label": "実行環境",
        "value": "Pythonで動作。標準ライブラリのみ使用",
        "key": "runtime",
        "scope": "付属検査ツール",
        "level": "required",
        "status": "documented",
        "group": "requirements",
        "order": 6,
        "stateLabel": "",
        "scopeLabel": "付属検査ツール",
        "levelLabel": "必須"
      },
      {
        "key": "license",
        "label": "ライセンス",
        "scope": "basic",
        "level": "info",
        "status": "documented",
        "value": "MIT",
        "group": "licenses",
        "order": 22,
        "stateLabel": "",
        "scopeLabel": "",
        "levelLabel": ""
      }
    ],
    "category": "文書作成・推敲",
    "tags": [
      "日本語",
      "文章校正",
      "執筆支援",
      "AIエージェント",
      "Python",
      "MIT"
    ],
    "addedAt": "2026-10-15",
    "checkedAt": "2026-10-15",
    "stars": 1974,
    "starsCheckedAt": "2026-10-15",
    "sources": [
      {
        "label": "公式README",
        "url": "https://github.com/nanaism/yomiyasu/blob/main/README.md"
      },
      {
        "label": "スキル本体",
        "url": "https://github.com/nanaism/yomiyasu/blob/main/skills/yomiyasu/SKILL.md"
      },
      {
        "label": "検査ツール",
        "url": "https://github.com/nanaism/yomiyasu/tree/main/scripts"
      },
      {
        "label": "MITライセンス",
        "url": "https://github.com/nanaism/yomiyasu/blob/main/LICENSE"
      },
      {
        "label": "開発者による解説記事",
        "url": "https://zenn.dev/algoartis/articles/0b1c731881b25c"
      }
    ],
    "related": [
      {
        "label": "文章を図解付きHTMLで説明したい",
        "url": "https://github.com/QingYunA/answer-me-with-html"
      },
      {
        "label": "内容を図表で説明したい",
        "url": "https://github.com/cathrynlavery/diagram-design"
      }
    ],
    "environmentVersion": 1,
    "requirementsStatus": "documented",
    "presentation": {
      "groups": [
        {
          "key": "requirements",
          "label": "利用条件",
          "rows": [
            {
              "label": "AIツール",
              "value": "Codex／Claude Code／Cursorなど",
              "key": "agent",
              "scope": "basic",
              "level": "required",
              "status": "documented",
              "group": "requirements",
              "order": 5,
              "stateLabel": "",
              "scopeLabel": "",
              "levelLabel": "必須"
            },
            {
              "label": "実行環境",
              "value": "Pythonで動作。標準ライブラリのみ使用",
              "key": "runtime",
              "scope": "付属検査ツール",
              "level": "required",
              "status": "documented",
              "group": "requirements",
              "order": 6,
              "stateLabel": "",
              "scopeLabel": "付属検査ツール",
              "levelLabel": "必須"
            }
          ]
        },
        {
          "key": "licenses",
          "label": "ライセンス",
          "rows": [
            {
              "key": "license",
              "label": "ライセンス",
              "scope": "basic",
              "level": "info",
              "status": "documented",
              "value": "MIT",
              "group": "licenses",
              "order": 22,
              "stateLabel": "",
              "scopeLabel": "",
              "levelLabel": ""
            }
          ]
        }
      ],
      "overview": {
        "label": "利用条件",
        "value": "AIツール：Codex／Claude Code／Cursorなど",
        "lines": [
          "AIツール：Codex／Claude Code／Cursorなど"
        ],
        "remaining": 1
      }
    }
  },
  {
    "name": "ImageOptim-CLI — Macの画像最適化を自動化するツール",
    "url": "https://github.com/JamieMason/ImageOptim-CLI",
    "summary": "ImageOptimなどのMac向け画像圧縮アプリをコマンドラインから操作し、大量の画像の最適化をスクリプトやビルド処理に組み込めるツール。",
    "description": "ImageOptim-CLIは、macOSの画像最適化アプリをコマンドラインから操作し、画像の一括圧縮を自動化するツール。ImageOptim、ImageAlpha、JPEGminiと連携し、Webサイトの画像素材の軽量化や、公開前のビルド処理への組み込みに使える。本体はRust製で、npmからMac向けのバイナリを配布している。\nフォルダやファイル名のパターンで処理対象を指定でき、ImageAlphaでは画質・色数・処理速度を調整できる。処理せずに対象だけを確認する--dry-run、削減量などの統計表示、改行区切りのJSON出力も備え、処理対象の確認や結果の記録に利用できる。\n圧縮エンジンを内蔵するツールではなく、使用する連携アプリを別途導入する必要がある。ImageOptimとImageAlphaは無料、JPEGminiは有料。JPEGminiのGUI操作を自動化する場合は、ターミナルなどにアクセシビリティ権限が必要になる。圧縮方式や設定によって画質やメタデータが変わるため、重要な原本は別に保存しておく。ImageOptim-CLIはMITライセンスで公開。",
    "environment": [
      {
        "label": "OS・CPU",
        "value": "macOS／Apple Silicon・Intel",
        "key": "platform",
        "scope": "basic",
        "level": "required",
        "status": "documented",
        "group": "requirements",
        "order": 0,
        "stateLabel": "",
        "scopeLabel": "",
        "levelLabel": "必須"
      },
      {
        "label": "必要ソフト",
        "value": "使用するImageOptim／ImageAlpha／JPEGminiを個別に導入",
        "key": "dependencies",
        "scope": "basic",
        "level": "required",
        "status": "documented",
        "brief": "使用するImageOptim／ImageAlpha／JPEGminiを個別に導入",
        "group": "requirements",
        "order": 7,
        "stateLabel": "",
        "scopeLabel": "",
        "levelLabel": "必須"
      },
      {
        "key": "distribution",
        "label": "配布版の条件",
        "scope": "basic",
        "level": "info",
        "status": "documented",
        "value": "Mac向けバイナリを配布",
        "group": "requirements",
        "order": 11,
        "stateLabel": "",
        "scopeLabel": "",
        "levelLabel": ""
      },
      {
        "label": "実行環境",
        "value": "Node.js・npm。",
        "key": "runtime",
        "scope": "npmでの導入",
        "level": "required",
        "status": "documented",
        "brief": "Node.js・npm",
        "group": "requirements",
        "order": 6,
        "stateLabel": "",
        "scopeLabel": "npmでの導入",
        "levelLabel": "必須"
      },
      {
        "key": "license",
        "label": "ライセンス",
        "scope": "basic",
        "level": "info",
        "status": "documented",
        "value": "MIT",
        "group": "licenses",
        "order": 22,
        "stateLabel": "",
        "scopeLabel": "",
        "levelLabel": ""
      }
    ],
    "category": "画像最適化",
    "tags": [
      "画像最適化",
      "画像圧縮",
      "自動化",
      "macOS",
      "Rust",
      "ImageOptim",
      "ImageAlpha",
      "JPEGmini",
      "MIT"
    ],
    "addedAt": "2026-10-15",
    "checkedAt": "2026-10-15",
    "stars": 3535,
    "starsCheckedAt": "2026-10-15",
    "sources": [
      {
        "label": "公式README",
        "url": "https://github.com/JamieMason/ImageOptim-CLI/blob/main/README.md"
      },
      {
        "label": "変更履歴",
        "url": "https://github.com/JamieMason/ImageOptim-CLI/blob/main/CHANGELOG.md"
      },
      {
        "label": "配布対象の設定",
        "url": "https://github.com/JamieMason/ImageOptim-CLI/blob/main/.github/workflows/matrix.json"
      },
      {
        "label": "MITライセンス",
        "url": "https://github.com/JamieMason/ImageOptim-CLI/blob/main/LICENSE"
      },
      {
        "label": "ImageOptim公式",
        "url": "https://imageoptim.com/mac"
      },
      {
        "label": "ImageAlpha公式",
        "url": "https://pngmini.com/"
      }
    ],
    "environmentVersion": 1,
    "requirementsStatus": "documented",
    "presentation": {
      "groups": [
        {
          "key": "requirements",
          "label": "利用条件",
          "rows": [
            {
              "label": "OS・CPU",
              "value": "macOS／Apple Silicon・Intel",
              "key": "platform",
              "scope": "basic",
              "level": "required",
              "status": "documented",
              "group": "requirements",
              "order": 0,
              "stateLabel": "",
              "scopeLabel": "",
              "levelLabel": "必須"
            },
            {
              "label": "必要ソフト",
              "value": "使用するImageOptim／ImageAlpha／JPEGminiを個別に導入",
              "key": "dependencies",
              "scope": "basic",
              "level": "required",
              "status": "documented",
              "brief": "使用するImageOptim／ImageAlpha／JPEGminiを個別に導入",
              "group": "requirements",
              "order": 7,
              "stateLabel": "",
              "scopeLabel": "",
              "levelLabel": "必須"
            },
            {
              "key": "distribution",
              "label": "配布版の条件",
              "scope": "basic",
              "level": "info",
              "status": "documented",
              "value": "Mac向けバイナリを配布",
              "group": "requirements",
              "order": 11,
              "stateLabel": "",
              "scopeLabel": "",
              "levelLabel": ""
            },
            {
              "label": "実行環境",
              "value": "Node.js・npm。",
              "key": "runtime",
              "scope": "npmでの導入",
              "level": "required",
              "status": "documented",
              "brief": "Node.js・npm",
              "group": "requirements",
              "order": 6,
              "stateLabel": "",
              "scopeLabel": "npmでの導入",
              "levelLabel": "必須"
            }
          ]
        },
        {
          "key": "licenses",
          "label": "ライセンス",
          "rows": [
            {
              "key": "license",
              "label": "ライセンス",
              "scope": "basic",
              "level": "info",
              "status": "documented",
              "value": "MIT",
              "group": "licenses",
              "order": 22,
              "stateLabel": "",
              "scopeLabel": "",
              "levelLabel": ""
            }
          ]
        }
      ],
      "overview": {
        "label": "利用条件",
        "value": "OS・CPU：macOS／Apple Silicon・Intel ／ 必要ソフト：使用するImageOptim／ImageAlpha／JPEGminiを個別に導入",
        "lines": [
          "OS・CPU：macOS／Apple Silicon・Intel",
          "必要ソフト：使用するImageOptim／ImageAlpha／JPEGminiを個別に導入"
        ],
        "remaining": 2
      }
    }
  },
  {
    "name": "imozuru（いもづる）— 原文と引用をたどるAIリサーチスキル",
    "url": "https://github.com/MaryCache/imozuru",
    "summary": "未知の分野の用語・人物・情報源を探し、引用やリンクをたどって原文を収集し、調査した主張と根拠の箇所を対応づけるClaude Code向けスキル。",
    "description": "imozuru（いもづる）は、Claude Codeで未知の分野を調査し、根拠となる原文を集めるリサーチスキル。最初に調査したい問いを整理し、専門用語、中心となる人物、情報が集まる場所を探す。そこから論文の参考文献・被引用文献、記事のリンク、著者の発信をたどる。論文だけでなく、ブログやYouTubeなどの個人の発信も対象にする。\n取得できたPDF・記事・動画字幕をローカルに保存し、主張ごとに原文のファイルと該当行を記録する。原文を要約せずに抜き書きを並べるHTMLレポートも作成でき、引用文が指定した原文の行と一致するかをスクリプトで照合する。調査記録と資料は既定で~/research/\u003c話題>/に保存する。見つけた情報源の新着をRSSで取得するモードも備える。\n原文との照合は、情報そのものの正しさを保証するものではなく、解釈や評価は利用者が行う。検索語は外部サービスへ送信されるため、機密情報や個人データを含む調査には使わない。有料・ログイン必須などで取得できない資料は、その旨とURLを記録する。収集資料は手元で読むための写しとして扱い、再配布しない。調査終了の基準には経験的な目安も含まれ、文献の網羅性は保証されない。スキル本体はMITライセンスで公開。",
    "environment": [
      {
        "key": "agent",
        "label": "AIツール",
        "scope": "basic",
        "level": "required",
        "status": "documented",
        "value": "Claude Code",
        "group": "requirements",
        "order": 5,
        "stateLabel": "",
        "scopeLabel": "",
        "levelLabel": "必須"
      },
      {
        "label": "実行環境",
        "value": "Python 3.10以降。Python外部ライブラリは不要",
        "key": "runtime",
        "scope": "basic",
        "level": "required",
        "status": "documented",
        "brief": "Python 3.10以降",
        "group": "requirements",
        "order": 6,
        "stateLabel": "",
        "scopeLabel": "",
        "levelLabel": "必須"
      },
      {
        "label": "必要ソフト",
        "value": "本文抽出にpdftotext。画像PDFのOCRにはpdftoppmとtesseract",
        "key": "dependencies",
        "scope": "PDF本文抽出・OCR",
        "level": "required",
        "status": "documented",
        "group": "requirements",
        "order": 7,
        "stateLabel": "",
        "scopeLabel": "PDF本文抽出・OCR",
        "levelLabel": "必須"
      },
      {
        "label": "必要ソフト",
        "value": "yt-dlpが必要",
        "key": "dependencies",
        "scope": "YouTube字幕取得",
        "level": "required",
        "status": "documented",
        "group": "requirements",
        "order": 7,
        "stateLabel": "",
        "scopeLabel": "YouTube字幕取得",
        "levelLabel": "必須"
      },
      {
        "key": "license",
        "label": "ライセンス",
        "scope": "basic",
        "level": "info",
        "status": "documented",
        "value": "MIT",
        "group": "licenses",
        "order": 22,
        "stateLabel": "",
        "scopeLabel": "",
        "levelLabel": ""
      }
    ],
    "category": "調査・情報収集",
    "tags": [
      "AIエージェント",
      "リサーチ",
      "文献調査",
      "情報収集",
      "原文",
      "引用",
      "Python",
      "RSS",
      "MIT"
    ],
    "addedAt": "2026-10-16",
    "checkedAt": "2026-10-16",
    "stars": 139,
    "starsCheckedAt": "2026-10-16",
    "sources": [
      {
        "label": "公式README",
        "url": "https://github.com/MaryCache/imozuru/blob/main/README.md"
      },
      {
        "label": "スキル本体",
        "url": "https://github.com/MaryCache/imozuru/blob/main/skills/imozuru/SKILL.md"
      },
      {
        "label": "設計資料",
        "url": "https://github.com/MaryCache/imozuru/blob/main/skills/imozuru/references/theory.md"
      },
      {
        "label": "レポート生成処理",
        "url": "https://github.com/MaryCache/imozuru/blob/main/skills/imozuru/scripts/report.py"
      },
      {
        "label": "MITライセンス",
        "url": "https://github.com/MaryCache/imozuru/blob/main/LICENSE"
      }
    ],
    "related": [
      {
        "label": "調査後に書いた日本語を推敲したい",
        "url": "https://github.com/nanaism/yomiyasu"
      },
      {
        "label": "調査内容を図で説明したい",
        "url": "https://github.com/cathrynlavery/diagram-design"
      }
    ],
    "environmentVersion": 1,
    "requirementsStatus": "documented",
    "presentation": {
      "groups": [
        {
          "key": "requirements",
          "label": "利用条件",
          "rows": [
            {
              "key": "agent",
              "label": "AIツール",
              "scope": "basic",
              "level": "required",
              "status": "documented",
              "value": "Claude Code",
              "group": "requirements",
              "order": 5,
              "stateLabel": "",
              "scopeLabel": "",
              "levelLabel": "必須"
            },
            {
              "label": "実行環境",
              "value": "Python 3.10以降。Python外部ライブラリは不要",
              "key": "runtime",
              "scope": "basic",
              "level": "required",
              "status": "documented",
              "brief": "Python 3.10以降",
              "group": "requirements",
              "order": 6,
              "stateLabel": "",
              "scopeLabel": "",
              "levelLabel": "必須"
            },
            {
              "label": "必要ソフト",
              "value": "本文抽出にpdftotext。画像PDFのOCRにはpdftoppmとtesseract",
              "key": "dependencies",
              "scope": "PDF本文抽出・OCR",
              "level": "required",
              "status": "documented",
              "group": "requirements",
              "order": 7,
              "stateLabel": "",
              "scopeLabel": "PDF本文抽出・OCR",
              "levelLabel": "必須"
            },
            {
              "label": "必要ソフト",
              "value": "yt-dlpが必要",
              "key": "dependencies",
              "scope": "YouTube字幕取得",
              "level": "required",
              "status": "documented",
              "group": "requirements",
              "order": 7,
              "stateLabel": "",
              "scopeLabel": "YouTube字幕取得",
              "levelLabel": "必須"
            }
          ]
        },
        {
          "key": "licenses",
          "label": "ライセンス",
          "rows": [
            {
              "key": "license",
              "label": "ライセンス",
              "scope": "basic",
              "level": "info",
              "status": "documented",
              "value": "MIT",
              "group": "licenses",
              "order": 22,
              "stateLabel": "",
              "scopeLabel": "",
              "levelLabel": ""
            }
          ]
        }
      ],
      "overview": {
        "label": "利用条件",
        "value": "AIツール：Claude Code ／ 実行環境：Python 3.10以降",
        "lines": [
          "AIツール：Claude Code",
          "実行環境：Python 3.10以降"
        ],
        "remaining": 2
      }
    }
  },
  {
    "name": "Ambient light for YouTube — 動画の周囲に光を広げるブラウザ拡張機能",
    "url": "https://github.com/WesselKroos/youtube-ambilight",
    "summary": "YouTube動画の色に合わせて周囲に光の効果を加え、映像が画面の外まで広がるように表示するブラウザ拡張機能。",
    "description": "Ambient light for YouTubeは、YouTube動画の周囲にアンビエントライト（間接照明のような光）を追加するブラウザ拡張機能。映像に合わせた光を動画プレーヤーの外側に表示し、視聴画面の演出を変えられる。\nChrome・Edge・Firefox・Opera向けに配布されており、各ブラウザの拡張機能ストアから導入できる。YouTubeの動画視聴時に、映像と周囲の背景がつながるような視覚効果を加えたい場合に使える。\n描画処理にはGPU性能が影響する。開発者はPassMark Video Card Benchmarkで1000点以上のGPUを推奨しており、それ未満でも動作するが、動画ページの動作が遅くなったり、映像が途切れたりする可能性がある。",
    "environment": [
      {
        "label": "ブラウザ",
        "value": "Chrome・Edge・Firefox・Opera",
        "key": "browser",
        "scope": "basic",
        "level": "required",
        "status": "documented",
        "group": "requirements",
        "order": 3,
        "stateLabel": "",
        "scopeLabel": "",
        "levelLabel": "必須"
      },
      {
        "label": "ブラウザの最低版",
        "value": "Chromium 80／Firefox 74",
        "key": "browserVersion",
        "scope": "basic",
        "level": "required",
        "status": "documented",
        "group": "requirements",
        "order": 4,
        "stateLabel": "",
        "scopeLabel": "",
        "levelLabel": "必須"
      },
      {
        "label": "GPU",
        "value": "PassMark 1000点以上",
        "key": "gpu",
        "scope": "basic",
        "level": "recommended",
        "status": "documented",
        "group": "requirements",
        "order": 14,
        "stateLabel": "",
        "scopeLabel": "",
        "levelLabel": "推奨"
      },
      {
        "label": "ライセンス",
        "value": "MIT",
        "key": "license",
        "scope": "basic",
        "level": "info",
        "status": "documented",
        "group": "licenses",
        "order": 22,
        "stateLabel": "",
        "scopeLabel": "",
        "levelLabel": ""
      }
    ],
    "category": "動画視聴",
    "tags": [
      "YouTube",
      "ブラウザ拡張",
      "アンビエントライト",
      "映像演出",
      "MIT"
    ],
    "addedAt": "2026-10-16",
    "checkedAt": "2026-10-16",
    "sources": [
      {
        "label": "公式README",
        "url": "https://github.com/WesselKroos/youtube-ambilight/blob/develop/README.md"
      },
      {
        "label": "公式リポジトリ",
        "url": "https://github.com/WesselKroos/youtube-ambilight"
      },
      {
        "label": "トラブルシューティング",
        "url": "https://github.com/WesselKroos/youtube-ambilight/blob/develop/TROUBLESHOOT.md"
      },
      {
        "label": "MITライセンス",
        "url": "https://github.com/WesselKroos/youtube-ambilight/blob/develop/LICENSE"
      }
    ],
    "environmentVersion": 1,
    "requirementsStatus": "documented",
    "presentation": {
      "groups": [
        {
          "key": "requirements",
          "label": "利用条件",
          "rows": [
            {
              "label": "ブラウザ",
              "value": "Chrome・Edge・Firefox・Opera",
              "key": "browser",
              "scope": "basic",
              "level": "required",
              "status": "documented",
              "group": "requirements",
              "order": 3,
              "stateLabel": "",
              "scopeLabel": "",
              "levelLabel": "必須"
            },
            {
              "label": "ブラウザの最低版",
              "value": "Chromium 80／Firefox 74",
              "key": "browserVersion",
              "scope": "basic",
              "level": "required",
              "status": "documented",
              "group": "requirements",
              "order": 4,
              "stateLabel": "",
              "scopeLabel": "",
              "levelLabel": "必須"
            },
            {
              "label": "GPU",
              "value": "PassMark 1000点以上",
              "key": "gpu",
              "scope": "basic",
              "level": "recommended",
              "status": "documented",
              "group": "requirements",
              "order": 14,
              "stateLabel": "",
              "scopeLabel": "",
              "levelLabel": "推奨"
            }
          ]
        },
        {
          "key": "licenses",
          "label": "ライセンス",
          "rows": [
            {
              "label": "ライセンス",
              "value": "MIT",
              "key": "license",
              "scope": "basic",
              "level": "info",
              "status": "documented",
              "group": "licenses",
              "order": 22,
              "stateLabel": "",
              "scopeLabel": "",
              "levelLabel": ""
            }
          ]
        }
      ],
      "overview": {
        "label": "利用条件",
        "value": "ブラウザ：Chrome・Edge・Firefox・Opera ／ ブラウザの最低版：Chromium 80／Firefox 74",
        "lines": [
          "ブラウザ：Chrome・Edge・Firefox・Opera",
          "ブラウザの最低版：Chromium 80／Firefox 74"
        ],
        "remaining": 1
      }
    }
  },
  {
    "name": "Meltype — 日本語と英語を自動判別する入力ツール",
    "url": "https://github.com/yksr-melt/Meltype",
    "summary": "日本語と英語を自動判別し、入力モードを手動で切り替えずにローマ字から日本語・英語を混在入力できるツール。",
    "description": "Meltypeは、ローマ字入力から日本語と英語を自動判別する日本語入力ツール。入力した文字列や前後の文脈をもとに、日本語部分をかな・漢字へ変換し、英単語はアルファベットのまま残す。「kyouhagoogledekensaku」を「今日はgoogleで検索」と入力するような使い方ができる。\nWindows版では、VS Codeやターミナルなどをコード入力向けに設定でき、プログラムの記述中は英字を優先し、コメントや文字列では日本語を判定する。予測変換、ユーザー辞書、絵文字変換、誤字の指摘にも対応。判定結果を手動で修正し、次回以降の変換に反映する学習機能も備える。\n日本語と英語の判定・変換はローカル環境で処理され、入力内容を外部サーバーへ送信しない設計。Windows 10・11に対応し、macOS・Linux向けにはプレビュー版を提供する。ただし、OSによって利用可能な機能は異なり、Mac版ではWindows版のアプリ種別による自動判定や設定画面などは未対応。GPL-3.0-or-laterライセンスで公開。",
    "category": "文字入力",
    "tags": [
      "日本語入力",
      "IME",
      "自動判別",
      "Windows",
      "macOS",
      "Linux",
      "GPL-3.0"
    ],
    "environmentVersion": 1,
    "requirementsStatus": "documented",
    "environment": [
      {
        "key": "platformOptions",
        "value": "Windows 10・11（64bit）／Microsoft IME\nMac・Linux版はプレビュー版（各OS別に利用条件あり）",
        "scope": "basic",
        "level": "required",
        "status": "documented",
        "label": "OS別の利用条件",
        "group": "requirements",
        "order": 23,
        "stateLabel": "",
        "scopeLabel": "",
        "levelLabel": "必須"
      },
      {
        "key": "dependencies",
        "value": "IBus／fcitx5",
        "scope": "Linux版・条件",
        "level": "info",
        "status": "documented",
        "label": "必要ソフト",
        "group": "requirements",
        "order": 7,
        "stateLabel": "",
        "scopeLabel": "Linux版・条件",
        "levelLabel": ""
      },
      {
        "key": "os",
        "value": "macOS 13以降",
        "scope": "Mac版",
        "level": "required",
        "status": "documented",
        "label": "OS",
        "group": "requirements",
        "order": 1,
        "stateLabel": "",
        "scopeLabel": "Mac版",
        "levelLabel": "必須"
      },
      {
        "key": "cpu",
        "value": "配布ZIPはApple Silicon向け。Intel Macはソースからビルド",
        "scope": "Mac版・条件",
        "level": "info",
        "status": "documented",
        "label": "CPU",
        "group": "requirements",
        "order": 2,
        "stateLabel": "",
        "scopeLabel": "Mac版・条件",
        "levelLabel": ""
      },
      {
        "key": "os",
        "value": "Windows 10・11（64bit）",
        "scope": "Windows版",
        "level": "required",
        "status": "documented",
        "label": "OS",
        "group": "requirements",
        "order": 1,
        "stateLabel": "",
        "scopeLabel": "Windows版",
        "levelLabel": "必須"
      },
      {
        "key": "dependencies",
        "value": "Microsoft IME（.NET同梱）",
        "scope": "Windows版",
        "level": "required",
        "status": "documented",
        "label": "必要ソフト",
        "group": "requirements",
        "order": 7,
        "stateLabel": "",
        "scopeLabel": "Windows版",
        "levelLabel": "必須"
      },
      {
        "key": "releaseStatus",
        "value": "Windows版は通常配布、Mac・Linux版はプレビュー版",
        "scope": "basic",
        "level": "info",
        "status": "documented",
        "label": "開発状況",
        "group": "specifications",
        "order": 24,
        "stateLabel": "",
        "scopeLabel": "",
        "levelLabel": ""
      },
      {
        "key": "processing",
        "value": "ローカル処理",
        "scope": "basic",
        "level": "info",
        "status": "documented",
        "label": "入力処理",
        "group": "specifications",
        "order": 25,
        "stateLabel": "",
        "scopeLabel": "",
        "levelLabel": ""
      },
      {
        "key": "license",
        "value": "GPL-3.0-or-later",
        "scope": "basic",
        "level": "info",
        "status": "documented",
        "label": "ライセンス",
        "group": "licenses",
        "order": 22,
        "stateLabel": "",
        "scopeLabel": "",
        "levelLabel": ""
      }
    ],
    "addedAt": "2026-10-19",
    "checkedAt": "2026-10-18",
    "sources": [
      {
        "label": "公式README",
        "url": "https://github.com/yksr-melt/Meltype"
      },
      {
        "label": "Windows版の導入方法",
        "url": "https://github.com/yksr-melt/Meltype/blob/main/docs/WINDOWS.md"
      },
      {
        "label": "macOS版の導入方法",
        "url": "https://github.com/yksr-melt/Meltype/blob/main/mac/README.md"
      },
      {
        "label": "Linux版の導入方法",
        "url": "https://github.com/yksr-melt/Meltype/blob/main/linux/README.md"
      },
      {
        "label": "詳しい使い方",
        "url": "https://github.com/yksr-melt/Meltype/blob/main/docs/USAGE.md"
      },
      {
        "label": "公式リリース",
        "url": "https://github.com/yksr-melt/Meltype/releases"
      }
    ],
    "presentation": {
      "groups": [
        {
          "key": "requirements",
          "label": "利用条件",
          "rows": [
            {
              "key": "platformOptions",
              "value": "Windows 10・11（64bit）／Microsoft IME\nMac・Linux版はプレビュー版（各OS別に利用条件あり）",
              "scope": "basic",
              "level": "required",
              "status": "documented",
              "label": "OS別の利用条件",
              "group": "requirements",
              "order": 23,
              "stateLabel": "",
              "scopeLabel": "",
              "levelLabel": "必須"
            },
            {
              "key": "dependencies",
              "value": "IBus／fcitx5",
              "scope": "Linux版・条件",
              "level": "info",
              "status": "documented",
              "label": "必要ソフト",
              "group": "requirements",
              "order": 7,
              "stateLabel": "",
              "scopeLabel": "Linux版・条件",
              "levelLabel": ""
            },
            {
              "key": "os",
              "value": "macOS 13以降",
              "scope": "Mac版",
              "level": "required",
              "status": "documented",
              "label": "OS",
              "group": "requirements",
              "order": 1,
              "stateLabel": "",
              "scopeLabel": "Mac版",
              "levelLabel": "必須"
            },
            {
              "key": "cpu",
              "value": "配布ZIPはApple Silicon向け。Intel Macはソースからビルド",
              "scope": "Mac版・条件",
              "level": "info",
              "status": "documented",
              "label": "CPU",
              "group": "requirements",
              "order": 2,
              "stateLabel": "",
              "scopeLabel": "Mac版・条件",
              "levelLabel": ""
            },
            {
              "key": "os",
              "value": "Windows 10・11（64bit）",
              "scope": "Windows版",
              "level": "required",
              "status": "documented",
              "label": "OS",
              "group": "requirements",
              "order": 1,
              "stateLabel": "",
              "scopeLabel": "Windows版",
              "levelLabel": "必須"
            },
            {
              "key": "dependencies",
              "value": "Microsoft IME（.NET同梱）",
              "scope": "Windows版",
              "level": "required",
              "status": "documented",
              "label": "必要ソフト",
              "group": "requirements",
              "order": 7,
              "stateLabel": "",
              "scopeLabel": "Windows版",
              "levelLabel": "必須"
            }
          ]
        },
        {
          "key": "specifications",
          "label": "仕様・出力",
          "rows": [
            {
              "key": "releaseStatus",
              "value": "Windows版は通常配布、Mac・Linux版はプレビュー版",
              "scope": "basic",
              "level": "info",
              "status": "documented",
              "label": "開発状況",
              "group": "specifications",
              "order": 24,
              "stateLabel": "",
              "scopeLabel": "",
              "levelLabel": ""
            },
            {
              "key": "processing",
              "value": "ローカル処理",
              "scope": "basic",
              "level": "info",
              "status": "documented",
              "label": "入力処理",
              "group": "specifications",
              "order": 25,
              "stateLabel": "",
              "scopeLabel": "",
              "levelLabel": ""
            }
          ]
        },
        {
          "key": "licenses",
          "label": "ライセンス",
          "rows": [
            {
              "key": "license",
              "value": "GPL-3.0-or-later",
              "scope": "basic",
              "level": "info",
              "status": "documented",
              "label": "ライセンス",
              "group": "licenses",
              "order": 22,
              "stateLabel": "",
              "scopeLabel": "",
              "levelLabel": ""
            }
          ]
        }
      ],
      "overview": {
        "label": "利用条件",
        "value": "OS別の利用条件：Windows 10・11（64bit）／Microsoft IME\nMac・Linux版はプレビュー版（各OS別に利用条件あり）",
        "lines": [
          "OS別の利用条件：Windows 10・11（64bit）／Microsoft IME\nMac・Linux版はプレビュー版（各OS別に利用条件あり）"
        ],
        "remaining": 5
      }
    }
  }
];
