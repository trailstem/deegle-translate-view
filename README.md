# Deegle Translate View

## 今回のAtomic design設計ルール

#### Atoms
- Atomsには基本的なスタイルだけを指定し、色やpadding、widthなどは変更
#### Molecules
- 使っているAtomsの色やpadding、width、marginを指定。
  Moleculesは汎用的に使うことができるよう、Molecules自体のwidthやmarginなどは基本的にここでは指定しない。
#### Organisms
- 使っているMoleculesのmarginやwidthはここで指定。
  Organismsは汎用的に使うことができるよう、Organisms自体のwidthやmarginなどは基本的にここでは指定しない
#### templetes
- コンテンツの横幅（width）や、サイドバーがあった場合のコンテンツの横幅などを指定
#### pages
- 特有のOrganismsのmarginなどはここで指定
